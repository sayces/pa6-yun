import React from 'react'
import { Link} from 'react-router-dom'
import { CALENDAR_ROUTE } from '../utils/consts'

function Profile() {
  return (
    <div className='page page__profile'>
      <h1 className='wellcome'>добро пожаловать в профиль</h1>
      
      <h1>мои записи:</h1>
      
      <Link to={CALENDAR_ROUTE}>прошу к календарю</Link>
    </div>
  )
}
export default Profile