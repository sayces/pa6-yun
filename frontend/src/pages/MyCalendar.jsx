
import React, { useState, useContext, useEffect } from 'react';

import '../components/calendar.css';
import { PROFILE_ROUTE } from '../utils/consts';

import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, createAppoint } from '../http/appointAPI';
import { getAllUsers } from '../http/userAPI'

const MyCalendar = observer(() => {

  const navigate = useNavigate();

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [master, setMaster] = useState('')

  let client = user.user.id
  let masters = user.users.filter(u => u.userRoleId === 1)
  console.log(masters)

  
  

  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    getAllUsers().then(data => user.setUsers(data))

    console.log(appoint.appoints)

  }, [appoint, user, master, client])

  const click = async (e) => {

    e.preventDefault()
    if (master === '') {
      console.log('master was not choosen')
    }  else {
    try {

      createAppoint( { date: date, time: time, master: Number(master), client: client, appointStatusId: 1 })
      
    } catch (e) {

      alert(e.promise.data.message)
      
    }

    navigate(PROFILE_ROUTE)
  }
  }

  

  return (
    <div className='page calendar-info'>

      <form required={true} className="calendar-info__form"
        onSubmit={e => e.preventDefault()}
        name='get'
      >

        <label>запланируйте подходящее вам время</label>

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

      

        <div className='btn__radio--users'>
          <label>выберите любимого мастера</label>
          
          {masters.map(u =>

          <button className='btn__radio' form='get'
            onClick={e => setMaster(e.target.value)}
            key={u.id} value={u.id} name='master'> {u.email} </button>
          
            )  
          }
        </div>
        

        <button onClick={click}>записаться</button>

      </form>
      

    </div>

  );

})
export default MyCalendar