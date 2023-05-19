
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import UserCard from './UserCard'
import styles from './card.module.scss'

const Cards = observer(({ user, currUser }) => {

  let notUser = user.users.filter(u => u.id !== currUser.id)
  let masters = notUser.filter(u => u.userRoleId === 1)





  return (
    <>
      {masters.map(u =>
        <UserCard user={u} key={u.id} className={styles.card} />
      )}
    </>
  )
})

export default Cards