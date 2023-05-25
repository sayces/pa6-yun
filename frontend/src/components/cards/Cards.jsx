
import React, { useState, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import UserCard from './card/UserCard'
import { Context } from '../../index';
import '../../http/appointAPI'

import styles from './_card.module.scss'
import { fetchAppoints } from '../../http/appointAPI';
import { fetchUsers } from '../../http/userAPI';


const Cards = observer(({ user, currUser }) => {

  const { appoint } = useContext(Context)

  let notUser = user.users.filter(u => u.id !== currUser.id)
  let masters = notUser.filter(u => u.userRoleId === 1)
  console.log('render cards')

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))

  }, [appoint])


  return (
    <>
      {masters.map(u =>
        <UserCard master={u} key={u.id} appoint={appoint} currUser={currUser} />
      )}
    </>
  )
})

export default React.memo(Cards)