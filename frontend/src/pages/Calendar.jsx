
import React, { useState, useContext, useEffect, useMemo } from 'react';

import { PROFILE_ROUTE } from '../utils/consts';

import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, createAppoint } from '../http/appointAPI';
import { fetchUsers } from '../http/userAPI'

import styles from './_pages.module.scss'

import Cards from '../components/cards/Cards'


const Calendar = observer(() => {

  console.log('render calendar')

  const navigate = useNavigate();

  const { appoint, user } = useContext(Context)

  let currUser

  useEffect(() => {
    fetchUsers().then(data => user.setUsers(data))
  }, [])



  if (user.isAuth) {
    currUser = user.users.filter(u => u.id === user.user.id)[0]
  } else {

    currUser = { id: 0, email: null }
  }

  const click = async (e) => {


    if (master !== '' && date !== '' && time !== '') {

      try {

        createAppoint({ date: date, time: time, master: Number(master), client: currUser.id, appointStatusId: 1 })
        navigate(PROFILE_ROUTE)

      } catch (e) {
        alert(e.promise.data.message)
      }

    } else {

      console.log("no data : calendar")

    }


  }


  return (

    <div className={styles.page}>
      <div className={styles.page_info}>
        <Cards user={user} currUser={currUser} className={styles.cards} />
      </div>
    </div>

  );

})
export default React.memo(Calendar)