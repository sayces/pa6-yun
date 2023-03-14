import React from 'react'
import './pages.css';
import {Link, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';


const Auth = function () {
const location = useLocation()
const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <container className='page page__auth'>
      <form className="form__auth" action="" method="post">
        <div>
          <label for="name">прошу, ваш логин</label>
          <input placeholder='email' type="text" name="name" id="email"/>
        </div>
        <div>
          <label for="name">прошу, придумайте пароль</label>
          <input type="text" name="name" id="password"/>
        </div>
        
        <button>войти</button>
        {isLogin ?
        <div>
          <label>новенький?</label>
          <Link className='form__auth-link' to={SIGNUP_ROUTE}>создай аккаунт</Link>
        </div> 
        :
        <div>  
          <label>старенький?</label>
          <Link className='form__auth-link' to={LOGIN_ROUTE}>авторизуйся</Link>
        </div>
        }
        
        
      </form>
    </container>
  )
}

export default Auth
