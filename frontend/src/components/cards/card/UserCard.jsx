
import React, { useCallback, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { observer } from 'mobx-react-lite';

import styles from '../_card.module.scss';
import '../calendar/_calendar.scss'

import { Link, useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../../utils/consts';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';

import CalendarAppoints from './CalendarAppoints';

import classNames from 'classnames'
import { createAppoint, fetchAppoints } from '../../../http/appointAPI';


const UserCard = observer(({ master, appoint, currUser }) => {

  // const navigate = useNavigate()

  const dayMilliseconds = 24 * 60 * 60 * 1000;

  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() - dayMilliseconds);

  const [date, set_Date] = useState()
  console.log(date)
  const [activeCardBtn, setActiveCardBtn] = useState(false)
  const [activeCreateBtn, setActiveCreateBtn] = useState(false)
  const [time, setTime] = useState('00:00')
  const thatDate = appoint.appoints.filter(d => d.date === date && master.id === d.master)

  let datesLabel;
  if (thatDate.length > 0) {
    datesLabel = 'свободные окна: '
  } else {
    datesLabel = 'мастер отдыхает в этот день..'
  }

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))
  }, [activeCreateBtn])

  const formatter = (value) => {

    let DateA = new Date(value)

    DateA.setDate(DateA.getDate() + 1)
    DateA = DateA.toISOString().slice(0, -14)
    set_Date(DateA)


  }

  const Appoint = () => {
    try {

      if (activeCreateBtn && time !== "00:00") {
        createAppoint({
          date: date,
          time: time,
          client: currUser.id,
          master: master.id,
          appointStatusId: 1,
          serviceId: 1
        })

      }

      setActiveCreateBtn(!activeCreateBtn)
      setTime('00:00')

    } catch (e) {
      console.log(e)
    }

  }



  const tileClass = ({ view }) => {
    if (view == 'month') return 'day'
  }

  return (

    <div className={styles.card}>

      <button
        className={styles.button}
        onClick={() => setActiveCardBtn(!activeCardBtn)}
        style={activeCardBtn ? {} : {}}
      >
        @{master.email}
      </button>

      <div
        className={classNames(styles.card_active, activeCardBtn ? styles.card_opened : styles.card_closed)}
      >


        <Calendar
          value={date}
          onClickDay={value => formatter(value)}

          // onChange={}
          minDate={currentDate}
          tileClassName={tileClass}
          minDetail='month'

        />



        <p>
          {datesLabel}
        </p>
        {
          (currUser.userRoleId === 3)
            ?
            <div className={styles.create_form_container}>

              <div className={classNames(styles.create_form, activeCreateBtn ? styles.create_active : styles.create_form_inactive)}>

                <p>[ * ]</p>

                <input className={styles.create_input} type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)} />
              </div>

              <button className={classNames(styles.button,
                activeCreateBtn
                  ?
                  styles.create_button_active
                  :
                  styles.create_button
              )}
                onClick={Appoint}>
                добавить окно
              </button>

            </div>
            :
            null
        }
        {
          thatDate.map(a =>
            <CalendarAppoints index={thatDate.indexOf(a)} thatAppoint={a} key={a.id} currUser={currUser} />
          )
        }

      </div >
    </div >
  )
})

export default React.memo(UserCard)
