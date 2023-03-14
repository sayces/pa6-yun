import React, { useContext} from 'react'
import './pages.css';
import {Link, useLocation, } from 'react-router-dom'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';
import 'react-bootstrap'
import '../store/RoleStore'
import {Context} from '../index';
import {observer} from 'mobx-react-lite';



const Auth = observer(() => {

const location = useLocation()
const {user} = useContext(Context);
const {role} = useContext(Context);
const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <div className='page page__auth'>
      <form className="form__auth" action="submit" onSubmit={(e) => e.preventDefault()}>
        {isLogin ?
        <div>
          <label >прошу, ваш логин</label>
          <input placeholder='email' type="text" name="login" id="email"/>
          
          <label >прошу, ваш пароль</label>
          <input type="text" name="password" id="password"/>
        </div>
        :
        <div>
          <label >прошу, задайте логин</label>
          <input placeholder='email' type="text" name="login" id="email"/>
        
          <label >прошу, придумайте пароль</label>
          <input type="text" name="password" id="password"/>
          
          <label >роль:</label>
          
          <div className='form__auth__radio'>
            <button onClick={() => role.setSelectedRole(role.id)} key={role.id} className='btn-1'>клиент</button>
            <button onClick={() => role.setSelectedRole(role.id)} key={role.id} className='btn-2'>мастер</button>
          </div>
        </div>
        }
      
        <button onClick={() => user.setIsAuth(true)}>{isLogin ? 'войти' : 'создать'}</button>
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
    </div>
  )
})

export default Auth
