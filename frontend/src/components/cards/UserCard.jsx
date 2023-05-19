
import React, { useCallback, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { observer } from 'mobx-react-lite';
import styles from './card.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../utils/consts';
import UserCardOpened from './UserCardOpened';



const UserCard = observer(({ user }) => {

  // const navigate = useNavigate()

  useEffect(() => {

  }, [])


  const [cardOpened, setCardOpened] = useState(false)






  return (
    <>
      <div className={styles.card}>{user.email}</div>

    </>
  )
})

export default React.memo(UserCard)
