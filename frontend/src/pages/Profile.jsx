
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import styles from './_pages.module.scss';

import { Context } from '../index';


import { fetchAppoints, fetchStatuses } from '../http/appointAPI';
import { fetchUsers } from '../http/userAPI'
import Appoints from '../components/appointments/Appoints';
import { observer } from 'mobx-react-lite';


const Profile = () => {

  const { user, appoint } = useContext(Context)

  const currUser = user.users.filter(u => user.user.id === u.id)[0]

  const fetchMemoStatuses = useMemo(() => {
    try {
      fetchStatuses().then(data => appoint.setStatuses(data))

    } catch (e) {
      console.log(e)
    }

  }, [appoint, currUser])

  console.log('profile')

  return (
    <div className={styles.page}>


      <div className={styles.page_info}>
        <p>
          добро пожаловать, {currUser.email}
        </p>

        <Appoints currUser={currUser} fetchMemoStatuses={fetchMemoStatuses} />

      </div>
    </div>
  )
};

export default Profile