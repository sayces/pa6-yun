
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

import styles from './_pages.module.scss';

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
    <div className={styles.page}>
      <div className={styles.page_info}>


        <p className={styles.label}>
          {isLogin ? 'прошу, ваш логин' : 'прошу, задайте логин'}
        </p>

        <input className={styles.input} required={true} placeholder='email' type="text" value={email} name="email" id="email"
          onChange={e => setEmail(e.target.value)}
        />

        <p className={styles.label}>
          {isLogin ? 'прошу, ваш пароль' : 'прошу, придумайте пароль'}
        </p>

        <input className={styles.input} required={true} type="text" name="password" value={password} id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <p className={styles.label}>
          {isLogin ? 'новенький?' : 'старенький?'}
        </p>

        <Link
          to={isLogin ? SIGNUP_ROUTE : LOGIN_ROUTE}>
          {isLogin ? 'создай аккаунт' : 'авторизуйся'}
        </Link>

        <button className={styles.submit_btn}
          onClick={() => auth(email, password, userRole)}>
          {isLogin ? 'войти' : 'создать профиль'}
        </button>

        <p className={styles.label}>
          [роль по-умолчанию: клиент]
        </p>

      </div>
    </div >
  )
})

export default Auth
