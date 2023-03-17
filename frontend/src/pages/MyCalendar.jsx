
import React, {useState, useContext , useEffect} from 'react';


import '../components/calendar.css';
// import { CALENDAR_ROUTE } from '../utils/consts';

// import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { getAllAppoints } from '../http/appointAPI';
// import { } from '../http/userAPI';



const MyCalendar = observer(() => {

  // const navigate = useNavigate();

  
  const {appoint} = useContext(Context)
  const {user} = useContext(Context)

  console.log(user)
  console.log(appoint)

  const [date, setDate] = useState(Date())
  
  // const [userId, setUserId] = useState()
    
    

  
  
  useEffect(() => {

    getAllAppoints().then(data => appoint.setAppoints(data))

  }, [appoint])


const click = async (e) => {
   e.preventDefault()

    // createAppoint({date: date, 
    //   userId: user.users.id
    // }).then(data => setDate(data))
    // console.log(date)
    
}

  return (
        <div className='page calendar-info'>

          <form className="calendar-info__form" action="POST" >

            <label>запланируйте дату</label>
            <input 
              onChange={e => setDate(e.target.value)}
              type="datetime-local" value={date} 
              />
              
            <button onClick={click}>записться</button>
            
          </form>

        </div>
    
  ); 
  
})
export default MyCalendar