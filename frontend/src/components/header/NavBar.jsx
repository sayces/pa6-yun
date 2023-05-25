import React, { useContext, useEffect } from 'react'
import { Context } from '../../index'


import {
  Link,
  useNavigate
}
  from 'react-router-dom';
import styles from './_header.module.scss';
import { CALENDAR_ROUTE, GALLERY_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {

  const { user } = useContext(Context)

  const navigate = useNavigate()

  const logout = () => {
    try {

      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
      navigate(LOGIN_ROUTE)
    } catch (e) {
      console.log(e)
    }

  }


  return (
    <div className={styles.header_box}>

      <Link
        to={CALENDAR_ROUTE}
        className={styles.header_link_calendar}>
        Календарь
      </Link>

      <Link
        to={GALLERY_ROUTE}
        className={styles.header_link_gallery}>
        Галерея
      </Link>

      {user.isAuth === true
        ?
        <div className={styles.header_box}>
          <Link
            to={PROFILE_ROUTE}
            className={styles.header_link_auth}>
            Профиль
          </Link>

          <Link
            onClick={logout}
            to={LOGIN_ROUTE}
            className={styles.header_link_auth}>
            Выход
          </Link>
        </div>
        :
        <Link to={LOGIN_ROUTE} className={styles.header_link_auth}>
          Авторизоваться
        </Link>
      }
    </div>
  )
})

export default NavBar;