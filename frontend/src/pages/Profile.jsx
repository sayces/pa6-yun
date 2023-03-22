
import React, { 
  useContext, 
  useEffect, 
  // useState 
} from 'react';

import { useParams } from 'react-router-dom';

import './pages.css';
// import { PROFILE_ROUTE } from '../utils/consts';

// import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, deleteAppoint, updateAppointStatus } from '../http/appointAPI';
import { getAllUsers } from '../http/userAPI'



const Profile = observer(() => {
  
  const params = useParams()
  console.log(params)

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  // const [aState, setAState] = useState('')

  let currUser = user.user
  let clientAppoints = appoint.appoints.filter( ca => ca.client === currUser.id )
  // let masterAppoints = appoint.appoints.filter( ma => ma.master === currUser.id )

  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    getAllUsers().then(data => user.setUsers(data))

    console.log(appoint.appoints)
    }, [appoint, user])
      
  const deleteAppoints = (e) => {
      
    try {
      deleteAppoint( {id: e } )
      e.preventDefault()
    } catch (e) {
      console.log(e.promise.data.message)
    }
  } 

  const oneClick = (e) => {
    e.preventDefault()
    try {
      updateAppointStatus( {
        id: e, 
        appointStatusId: 2 
      } )
      
      
    } catch (e) {
      console.log(e.promise.data.message)
    }
    
  }

  

  

    return (
    <div className='page page__profile'>
      
  
      <form className="calendar-info__form"
      // onSubmit={}
      >
      <p>добро пожаловать, {currUser.email}</p>
      <p>{user.userRoleId === 2 ? 'назначенные сеансы' : 'мои записи'}</p>
      <div className='appoint__list'>
      {
        
        clientAppoints.map( a => 
        <div className='appoint__flex' key={a.id}>
          
          <input id={a.id} placeholder={a.date}/>
          <button className='appoint__delete-btn' value={a.id}  name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>
          <button className='appoint__update-btn' value={a.id}  name='update' 
          // onDoubleClick={e => doubleClick(e=2)} 
          onClick={(e) => oneClick(e.taget.value)}
          > 
          upd 
          </button>
        </div>
        )
        
      }
      </div>
      
      </form>


      
    </div>
  )
})

export default Profile