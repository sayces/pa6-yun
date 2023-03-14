import React, { useContext } from 'react'
import { Context } from '../../index'

import { Link, useNavigate } from 'react-router-dom'; 
import './header.css';
import { CALENDAR_ROUTE, GALLERY_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  
  const {user} = useContext(Context)
  const history = useNavigate();
  history = {PROFILE_ROUTE}

  return (
    
    <div className='header-box__main header-box'>
      <Link to={CALENDAR_ROUTE} className='header__link header-link__calendar'>Календарь</Link>    
      <Link to={GALLERY_ROUTE} className='header__link header-link__gallery'>Галерея</Link>
    {user.isAuth
    ? 
    <div>
    { user.users.map(i => 
      <div className='header-box'>
        <Link to={history.} className='header__link header-link__auth'>Профиль</Link>
        <Link to={'/'} className='header__link header-link__auth'>Выход</Link>
      </div>
    )}   
    </div>
    
      :
      <Link to={LOGIN_ROUTE} className='header__link header-link__auth'>Авторизоваться</Link> 
    }  
         
    </div>
    
    
    
        
    
      
    
  )
})

export default NavBar;