import React, { useContext } from 'react'
import { Context } from '../index'


import { 
  Link, 
  useNavigate 
} 
  from 'react-router-dom'; 
import './header.css';
import { CALENDAR_ROUTE, GALLERY_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer( () => {
  
  const { user } = useContext( Context )
  
  const navigate = useNavigate()

  const logout = () => {
    
    try {

      user.setUser( {} )
      user.setIsAuth( false )
      
      localStorage.removeItem('token') 
      
      console.log(user)
      
      navigate( LOGIN_ROUTE )

    } catch (e) {
      return e.response.data.message 
    }

  }


  return (  
    <div className='header-box__main header-box'>
        
        <Link to={CALENDAR_ROUTE} className='header__link header-link__calendar'>Календарь</Link>    
        <Link to={GALLERY_ROUTE} className='header__link header-link__gallery'>Галерея</Link>
      {user.isAuth === true
      ? 
      <div>
        <div  className='header-box'>
          <Link to={PROFILE_ROUTE} className='header__link header-link__auth'>Профиль</Link>
          <Link onClick={() => logout()} to={LOGIN_ROUTE} className='header__link header-link__auth'>Выход</Link>
        </div>
      </div> 
        :
        <Link to={LOGIN_ROUTE} className='header__link header-link__auth'>Авторизоваться</Link> 
      }        
      
    </div>
  )
  })

export default NavBar;