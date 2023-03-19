
import React, { useState, useContext, useEffect } from 'react';
import promise from "promise"

import '../components/calendar.css';
// import { CALENDAR_ROUTE } from '../utils/consts';

// import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, createAppoint } from '../http/appointAPI';
// import { } from '../http/userAPI';



const MyCalendar = observer(() => {

  // const navigate = useNavigate();


  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  

  useEffect(() => {
    
    
    fetchAppoints().then(data => appoint.setAppoints(data))

    console.log( appoint )
    console.log( user )

  }, [appoint, user])


  const click = async (e) => {
    e.preventDefault()
    
    
    const userId = user.user.id
    
    try {
      
      createAppoint({date: date, time: time, userId: userId, appointStatusId: 1})
    } catch (e) {
      
      alert ( e.promise.data.message )
    }
    

  }

  return (
    <div className='page calendar-info'>

      <form className="calendar-info__form" action="POST" >

        <label>запланируйте подходящее время</label>

        <input
          required='true'
          onChange={e => setDate(e.target.value)}
          type="date" value={date}
        />

        <input
          required='true'
          onChange={e => setTime(e.target.value)}
          type="time" value={time}
        />

        <button onClick={click}>записться</button>

      </form>

    </div>

  );

})
export default MyCalendar