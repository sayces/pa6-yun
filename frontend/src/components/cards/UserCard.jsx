
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './card.module.css';


const UserCard = observer(({ user }) => {

  const [master, setMaster] = useState('')
  console.log(master)

  return (

    <div className={styles.card} key={user.id}>
      <button className={styles.button}
        onClick={e => setMaster(e.target.value)}
        value={user.id} name='master'>{user.email}
      </button>
    </div>

  )
})

export default UserCard
