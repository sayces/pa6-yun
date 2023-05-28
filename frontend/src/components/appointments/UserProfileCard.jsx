import React from 'react'
import styles from './_appoint.module.scss'
import { editUser } from '../../http/userAPI'
const UserProfileCard = ({ user, upgradeUser, degradeUser, activeAddMasterBtn }) => {



  return (

    <div className={styles.user_profile_card}>
      <div className={styles.user_profile_info}>

        <p >логин @{user.email}<br />
          имя: {user.name ? user.name : 'не утверждено'}<br />
          роль: {user.userRoleId}</p>
      </div>

      {
        activeAddMasterBtn
          ?
          <div className={styles.user_profile_info}>
            <button
              onClick={(userId) => upgradeUser(user.id)}
              className={styles.upgrade_btn}
            >
              &uarr;
            </button>
            <button
              onClick={(userId) => degradeUser(user.id)}
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
}

export default UserProfileCard