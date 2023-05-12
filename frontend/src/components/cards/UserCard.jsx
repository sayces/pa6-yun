import React, { useState, useContext, useEffect } from 'react';

import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import styles from './card.module.css';

import { getAllUsers } from '../../http/userAPI'

const UserCard = observer(({ user }) => {

  const [master, setMaster] = useState('')

  return (

    <div className={styles.card} key={user.id}>
      <p className={styles.name}>{user.email}</p>
      <button className={styles.button}
        onClick={e => setMaster(e.target.value)}
        value={user.id} name='master'>{user.email}
      </button>
    </div>

  )
})

export default UserCard
