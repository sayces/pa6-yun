
import React, { useState, useContext, useEffect } from 'react';

import '../components/calendar.css';
import { PROFILE_ROUTE } from '../utils/consts';

import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, createAppoint } from '../http/appointAPI';
import { getAllUsers } from '../http/userAPI'

import Cards from '../components/cards/Cards'


const Calendar = observer(() => {

  const navigate = useNavigate();

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  let currUser

  if (user.isAuth) {
    currUser = user.users.filter(u => u.id === user.user.id)[0]
    // const notUserRole = user.users.filter(u => u.userRoleId === currUser.userRoleId && currUser.id !== u.id)

  } else {
    currUser = undefined
  }

  console.log("currUser:")
  console.log(currUser)

  // console.log("notUserRole:")
  // console.log(notUserRole)



  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    getAllUsers().then(data => user.setUsers(data))

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
    <div className='page calendar-info'>


      <Cards user={user} />



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

      </form>


    </div>

  );

})
export default Calendar