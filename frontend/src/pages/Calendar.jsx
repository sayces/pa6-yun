
import React, { useState, useContext, useEffect } from 'react';

import '../components/calendar.css';
import { PROFILE_ROUTE } from '../utils/consts';

import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, createAppoint } from '../http/appointAPI';
import { fetchUsers } from '../http/userAPI'

import Cards from '../components/cards/Cards'

import styles from '../components/common-styles.module.css'

const Calendar = observer(() => {

  const navigate = useNavigate();

  const { appoint, user } = useContext(Context)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  let currUser
  let masters

  if (user.isAuth) {
    currUser = user.users.filter(u => u.id === user.user.id)[0]
  } else {
    currUser = { id: 0, email: null }
  }

  console.log()
  console.log("currUser: [" + currUser.id + "] " + currUser.email)

  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    fetchUsers().then(data => user.setUsers(data))

  }, [appoint, user])

  const click = async (e) => {


    if (master !== '' && date !== '' && time !== '') {

      try {

        e.preventDefault()
        createAppoint({ date: date, time: time, master: Number(master), client: currUser.id, appointStatusId: 1 })
        navigate(PROFILE_ROUTE)

      } catch (e) {
        alert(e.promise.data.message)
      }

    } else {

      console.log("no data : calendar")

    }


  }


  return (
    <div className={styles.page}>


      <Cards user={user} currUser={currUser} />



      {/* 
      <form required={true} className="calendar-info__form"
        onSubmit={e => e.preventDefault()}
        name='get'
      >

        <p>запланируйте подходящее вам время</p>

        <input
          required={true}
          onChange={e => setDate(e.target.value)}
          type="date" value={date}
        />

        <input
          required={true}
          onChange={e => setTime(e.target.value)}
          type="time" value={time}
        />






        <button onClick={click}>записаться</button>

      </form> */}


    </div>

  );

})
export default Calendar