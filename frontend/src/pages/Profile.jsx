
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
    } catch (e) {
      console.log(e.promise.data.message)
    }

  }

  

    return (
    <div className='page page__profile'>
      
  
      <form className="calendar-info__form"
      onSubmit={e => e.preventDefault()}>
      <p>добро пожаловать, {currUser.email}</p>
      <p>мои записи:</p>
      <div className='appoint__list'>
      {
        
        clientAppoints.map( a => 
        <div className='appoint__flex' key={a.id}>
          
          <input placeholder={a.date}/>
          <button value={a.id}  name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>
          
        </div>
        )
        
      }
      </div>
      
      </form>


      
    </div>
  )
})

export default Profile