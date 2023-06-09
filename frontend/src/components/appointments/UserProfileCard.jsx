
import React, { useContext, useEffect } from 'react'
import styles from './_appoint.module.scss'

import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import { fetchUsers } from '../../http/userAPI';

const UserProfileCard = observer(({ thatUser, upgradeUser, degradeUser, activeAddMasterBtn }) => {

  const { user } = useContext(Context);

  useEffect(() => {
    fetchUsers().then(data => user.setUsers(data))
  }, [activeAddMasterBtn])

  let userRole = user.roles.filter(r => r.id === thatUser.userRoleId)[0];

  return (

    <div className={styles.user_profile_card}>
      <div className={styles.user_profile_info}>

        <p >логин @{thatUser.email}<br />
          имя: {thatUser.name ? thatUser.name : 'не утверждено'}<br />
          роль: {userRole.role}</p>
      </div>

      {
        activeAddMasterBtn
          ?
          <div className={styles.user_profile_info}>
            <button
              onClick={() => upgradeUser(thatUser.id)}
              className={styles.upgrade_btn}
            >
              &uarr;
            </button>
            <button
              onClick={() => degradeUser(thatUser.id)}
              className={styles.degrade_btn}
            >
              &darr;
            </button>

          </div>
          :
          null
      }

    </div >

  )
})

export default React.memo(UserProfileCard)