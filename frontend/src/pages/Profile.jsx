
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

import { fetchAppoints, deleteAppoint } from '../http/appointAPI';
import { getAllUsers } from '../http/userAPI'



const Profile = observer(() => {
  
  const params = useParams()
  console.log(params)

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  // const [aState, setAState] = useState('')

  let currUser = user.user
  let clientAppoints = appoint.appoints.filter( a => a.client === currUser.id )

  useEffect((e) => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    getAllUsers().then(data => user.setUsers(data))

    console.log(appoint.appoints)
    console.log(e)
      }, [appoint, user])
      
  const deleteAppoints = (e) => {
    
    
    
    try {
      deleteAppoint( {id: e } )
    } catch (e) {
      alert(e.promise.data.message)
    }

  }

  

    return (
    <div className='page page__profile'>
      
  
      <form className="calendar-info__form"
      onSubmit={e => e.preventDefault()}>
      <h1>добро пожаловать, {currUser.email}</h1>
      <h1>мои записи:</h1>
      
      {
        
        clientAppoints.map( a => 
        <div key={a.id}>
          
          <h1 >{a.date}</h1>
          <button value={a.id}  name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>
          
        </div>
        )
        
      }
      
      
      </form>


      
    </div>
  )
})

export default Profile