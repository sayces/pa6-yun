import Calendar from 'react-calendar';
import React, {useState, useContext , useEffect} from 'react';
import '../components/ui/calendar.css';
import { useNavigate} from 'react-router-dom';
import { CALENDAR_ROUTE } from '../utils/consts';
import { createAppoint, fetchAppoint } from '../http/appointAPI';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import { fetchUser } from '../http/userAPI';



const MyCalendar = observer(() => {

  const navigate = useNavigate();

  
  const {appoint} = useContext(Context)
  const {user} = useContext(Context)
  console.log(user)
  const [date, setDate] = useState('')
  
  // const [userId, setUserId] = useState()
    
    

  
  
  useEffect(() => {
    fetchUser().then(data => fetchUser(data))

      }, [])

  


const click = async (e) => {
   e.preventDefault()

    createAppoint({date: date, 
      // userId: userId
    }).then(data => setDate())
    console.log(date)
    
    
    

}

  return (
        <div className='page calendar-info'>
          <form className="calendar-info__form" action="POST" >
            <label>запланируйте дату</label>
            <input 
            onChange={e => setDate(e.target.value)}
            type="datetime-local" value={date} />
            
            <button onClick={click}>записться</button>
          </form>
        </div>
    
  ); 
  
})
export default MyCalendar