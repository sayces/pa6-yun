
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

import './pages.css';

import { CALENDAR_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

import { Context } from '../index';
import { login, signup } from '../http/userAPI'



const Auth = observer(() => {

  const { user } = useContext(Context);

  const navigate = useNavigate()

  const location = useLocation()
  let isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(2)

  const auth = async (email, password, userRoleId) => {

    let data;
    try {

      if (isLogin && email !== '' && password !== '') {

        data = await login(email, password);
        user.setUser(data)
        user.setIsAuth(true)
        navigate(CALENDAR_ROUTE)
      } else if (!isLogin && email !== '' && password !== '' && userRoleId !== '') {

        data = await signup(email, password, userRoleId)
        navigate(LOGIN_ROUTE)
      } else {
        console.log('no data')
      }
    } catch (e) { console.log(e) }
  }

  return (
    <div className='page page__auth'>
      <div className="form__auth">

        <div>
          <label>
            {isLogin ? 'прошу, ваш логин' : 'прошу, задайте логин'}
          </label>
          <input required={true} placeholder='email' type="text" value={email} name="email" id="email"
            onChange={e => setEmail(e.target.value)}
          />

          <label>
            {isLogin ? 'прошу, ваш пароль' : 'прошу, придумайте пароль'}
          </label>
          <input required={true} type="text" name="password" value={password} id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className='form__auth--links'>

          <label>
            {isLogin ? 'новенький?' : 'старенький?'}
          </label>

          <Link className='form__auth-link'
            to={isLogin ? SIGNUP_ROUTE : LOGIN_ROUTE}>
            {isLogin ? 'создай аккаунт' : 'авторизуйся'}
          </Link>

        </div>

        <button className='form__auth--submit-btn'
          onClick={() => auth(email, password, userRole)}>
          {isLogin ? 'войти' : 'создать профиль'}
        </button>

        <p style={{ color: 'grey' }}>[роль по-умолчанию: клиент]</p>

      </div>
    </div>
  )
})

export default Auth
