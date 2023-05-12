
import React from 'react'
import { observer } from 'mobx-react-lite'

import { getAllUsers } from '../../http/userAPI'
import UserCard from './UserCard'

const Cards = observer(({ user }) => {

  return user.users.map(user =>
    <UserCard user={user} key={user.id} />
  )
})

export default Cards