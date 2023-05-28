
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
import { editUser, fetchUsers } from '../http/userAPI'
import Appoints from '../components/appointments/Appoints';
import { observer } from 'mobx-react-lite';


const Profile = () => {

  const { user, appoint } = useContext(Context)

  const currUser = user.users.filter(u => user.user.id === u.id)[0]

  const [_name, setName] = useState(currUser.name)

  const fetchMemoStatuses = useMemo(() => {
    try {
      fetchStatuses().then(data => appoint.setStatuses(data))
      fetchUsers().then(data => user.setUsers(data))
    } catch (e) {
      console.log(e)
    }

  }, [])

  const changeName = () => {
    if (_name !== currUser.name) {
      editUser({
        id: currUser.id,
        name: _name
      })
    } else return



  }

  console.log('profile')

  return (

    <div className={styles.page}>

      <div></div>
      <p >
        добро пожаловать,
        @{currUser.email}
      </p>
      <input className={styles.name_input} type="text" value={_name} placeholder='ваше имя' readOnly={false} onBlur={changeName} onChange={(e) => setName(e.target.value)} />


      <div className={styles.page_info}>


        <Appoints currUser={currUser} fetchMemoStatuses={fetchMemoStatuses} />

      </div>
    </div>

  )
};

export default Profile