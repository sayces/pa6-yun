
import React from 'react'
import { observer } from 'mobx-react-lite'
import UserCard from './UserCard'

const Cards = observer(({ user, currUser }) => {

  let notUser = user.users.filter(u => u.id !== currUser.id)
  let masters = notUser.filter(u => u.userRoleId === 1)

  if (currUser.userRoleId === 1) {
    return notUser.map(u =>
      <UserCard user={u} key={u.id} />
    )
  } else {
    return masters.map(u =>
      <UserCard user={u} key={u.id} />
    )
  }
})

export default Cards