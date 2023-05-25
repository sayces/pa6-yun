
import React, { useCallback, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { observer } from 'mobx-react-lite';

import styles from '../_card.module.scss';
import '../calendar/_calendar.scss'

import { Link, useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../../utils/consts';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';

import CalendarAppoints from './CalendarAppoints';


const UserCard = observer(({ master, appoint, currUser }) => {

  // const navigate = useNavigate()

  const dayMilliseconds = 24 * 60 * 60 * 1000;

  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() - dayMilliseconds);

  const [cardOpened, setCardOpened] = useState(false)

  const [date, set_Date] = useState()
  console.log('render card', date)
  const [activeBtn, setActiveBtn] = useState(true)
  console.log(activeBtn)

  const thatDate = appoint.appoints.filter(d => d.date === date && d.appointStatusId === 1 && master.id === d.master)

  console.log(thatDate)

  useEffect(() => {

  }, [date])

  const formatter = (value) => {

    let DateA = new Date(value)

    DateA.setDate(DateA.getDate() + 1)
    DateA = DateA.toISOString().slice(0, -14)
    set_Date(DateA)


  }

  const setButton = () => {
    setActiveBtn(!activeBtn)
  }

  const tileClass = ({ view }) => {
    if (view == 'month') return 'day'
  }

  return (

    <div className={styles.card}>

      <button
        className={styles.button}
        onClick={setButton}
        style={activeBtn ? { translate: '10rem', transition: 'all 0.2s ease-out' } : { transition: 'all 0.2s ease-out' }}
      >
        @{master.email}
      </button>

      <div
        style={activeBtn ? { transform: 'scale(0)', transformOrigin: 'right top', display: 'flex', flexDirection: 'column', alignItems: 'end', transition: 'all 0.2s ease-out', height: '0' } : { transform: 'scale(1)', transformOrigin: 'top', display: 'flex', flexDirection: 'column', transition: 'all 0.2s ease-out', height: 'max-content' }}
      >


        <Calendar
          value={date}
          // onClickDay={}

          onChange={value => formatter(value)}
          minDate={currentDate}
          tileClassName={tileClass}
          minDetail='month'

        />


        <p>
          {
            thatDate.length > 0
              ?
              `окна на ${date.slice(8)}е число:`
              :
              `мастер тотали занят в этот день`
          }
        </p>

        {
          thatDate.map(a =>
            <CalendarAppoints index={thatDate.indexOf(a)} thatAppoint={a} key={a.id} currUser={currUser} />
          )
        }
      </div >
    </div>
  )
})

export default React.memo(UserCard)
