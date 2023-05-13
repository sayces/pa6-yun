
import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import './pages.css';

import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints } from '../http/appointAPI';
import { fetchUsers } from '../http/userAPI'
import Appoints from '../components/appointments/Appoints';



const Profile = observer(() => {

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  const [currUser, setCurrUser] = useState(user.users.filter(u => user.user.id === u.id)[0])
  const masters = user.users.filter(u => u.userRoleId === 1)
  const clients = user.users.filter(u => u.userRoleId === 2)

  useEffect(() => {

    try {
      fetchAppoints().then(data => appoint.setAppoints(data))
      fetchUsers().then(data => user.setUsers(data))


    } catch (e) {
      console.log(e)
    }

  }, [])



  return (
    <div className='page page__profile'>


      <div className="calendar-info__form">
        <p> {'добро пожаловать, ' + currUser.email}</p>
        <p>{currUser.userRoleId === 1 ? 'назначенные сеансы' : 'мои записи'}</p>
        <div className='appoint__list'>

          <Appoints currUser={currUser} />

        </div>
      </div>
    </div>
  )
})

export default Profile