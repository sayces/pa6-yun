
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
  const [userRole, setUserRole] = useState('2')



  const click = async (e) => {

    let data;

    try {

      if (isLogin && email !== '' && password !== '') {

        data = await login(email, password);
        console.log(data)
        user.setUser(data)
        user.setIsAuth(true)

        navigate(CALENDAR_ROUTE)

      } else if (!isLogin && email !== '' && password !== '' && userRole !== '') {

        data = await signup(email, password, userRole)
        navigate(LOGIN_ROUTE)
        console.log(data)


      } else {

        console.log('no data : auth')

      }

    } catch (e) { alert(e.promise.data.message) }








  }

  return (
    <div className='page page__auth'>
      <form className="form__auth"
        onSubmit={e => e.preventDefault()}
      >


        {isLogin ?
          <div>
            <label >прошу, ваш логин</label>
            <input required={true} placeholder='email' type="text" value={email} name="email" id="email"
              onChange={e => setEmail(e.target.value)}
            />

            <label >прошу, ваш пароль</label>
            <input required={true} type="password" name="password" value={password} id="password"
              onChange={e => setPassword(e.target.value)}
            />

          </div>
          :
          <div>
            <label >прошу, задайте логин</label>
            <input required={true} placeholder='email' type="text" value={email} name="email" id="email"
              onChange={e => setEmail(e.target.value)} />

            <label >прошу, придумайте пароль</label>
            <input required={true} type="password" name="password" value={password} id="password"
              onChange={e => setPassword(e.target.value)} />

            <label>выберите свою роль</label>

            <div className='form__auth--radio'>
              {user.roles.map(role =>

                <button className='btn__radio'
                  onClick={e => setUserRole(e.target.value)}
                  key={role.id} value={role.id} name='role'>{role.role}</button>


              )}
              <p style={{ color: 'grey' }}>[по-умолчанию]</p>
            </div>
          </div>
        }
        <div className='form__auth--links'>
          <label>{isLogin ? 'новенький?' : 'старенький?'}</label>
          <Link className='form__auth-link'
            to={isLogin ? SIGNUP_ROUTE : LOGIN_ROUTE}>
            {isLogin ? 'создай аккаунт' : 'авторизуйся'}
          </Link>
        </div>


        <button className='form__auth--submit-btn' onClick={click}>{isLogin ? 'войти' : 'создать'}</button>
      </form>

    </div>
  )
})

export default Auth
