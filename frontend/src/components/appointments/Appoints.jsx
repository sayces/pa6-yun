

import React, { useContext, useEffect, useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import Appoint from './Appoint'
import { Context } from '../../index'
import styles from './_appoint.module.scss'
import { fetchAppoints, fetchAppointStatus, fetchStatuses } from '../../http/appointAPI'
import { editUser } from '../../http/userAPI'
import UserProfileCard from './UserProfileCard'


const Appoints = observer(({ currUser, fetchMemoStatuses, date }) => {

  const { appoint, user } = useContext(Context)

  const [activeAppointBtn, setActiveAppointBtn] = useState(true)
  const [activeMasterBtn, setActiveMasterBtn] = useState(true)
  const [activeAddMasterBtn, setActiveAddMasterBtn] = useState(false)
  const [deleteAppointBtn, setDeleteAppointBtn] = useState(false)

  const [_search, setSearch] = useState('')


  console.log(deleteAppointBtn)

  const clientAppoints = appoint.appoints.filter(ca => ca.client === currUser.id)
  const masterAppoints = appoint.appoints.filter(ma => ma.master === currUser.id)

  const masters = user.users.filter(u => u.userRoleId === 1)

  const fetchMemoAppoints = useMemo(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))
  }, [fetchMemoStatuses, currUser])

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))
  }, [])

  const addMaster = (userId) => {

    try {
      editUser({
        id: userId
        ,
        userRoleId: 1
      })
      setActiveAddMasterBtn(!activeAddMasterBtn)
    } catch (e) { console.log(e) }
  }

  const removeMaster = (userId) => {

    try {
      editUser({
        id: userId,
        userRoleId: 2
      })
      setActiveAddMasterBtn(!activeAddMasterBtn)
    } catch (e) { console.log(e) }
  }



  return (
    <div className={styles.appoint_group}>

      {currUser.userRoleId === 3
        ?
        <div className={styles.admin_panel} >
          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <button className={styles.admin_btn} onClick={() => { setActiveAppointBtn(!activeAppointBtn) }} >
              записи
            </button>

            <button className={styles.admin_btn} onClick={() => { setActiveMasterBtn(!activeMasterBtn) }} >
              мастера
            </button>

            < input type="search" placeholder='поиск.. ' className={styles.admin_search} value={_search} onChange={e => setSearch(e.target.value)} />
          </div>


          <div className={activeAppointBtn ? styles.group_active : styles.group_inactive}>
            {appoint.appoints.filter(a => {
              if (_search == '') {
                return a
              } else if (a.date.toLowerCase().includes(_search.toLowerCase()) || a.time.toLowerCase().includes(_search.toLowerCase())) {
                return a
              }
            }).map((a) =>

              <Appoint className={styles.appoint}
                currAppoint={a}
                currUser={currUser}
                fetchMemoAppoints={fetchMemoAppoints}
                appoint={appoint}
                key={a.id}
                onUpdate={console.log('delete')}
              />
            )

            }
          </div>

          <div className={activeMasterBtn ? styles.group_active : styles.group_inactive}>
            <button
              className={activeAddMasterBtn ? styles.option_btn_active : styles.option_btn}
              onClick={() => setActiveAddMasterBtn(!activeAddMasterBtn)}>
              завербовать
            </button>

            {user.users.filter(u => {
              if (_search == '')
                return u
              else if (u.email.toLowerCase().includes(_search.toLowerCase()) || u.name.toLowerCase().includes(_search.toLowerCase()))
                return u
            }).map(u =>
              <UserProfileCard
                user={u}

                upgradeUser={addMaster}
                degradeUser={removeMaster}
                key={u.id}
                activeAddMasterBtn={activeAddMasterBtn}
              />
            )}
          </div>

        </div>

        :
        null

      }
      {
        currUser.userRoleId !== 3
          ?
          <>
            <p className={styles.label}>
              {masterAppoints.length > 0 ? 'мои записи' : null}
            </p>
            {
              masterAppoints.map(a => <Appoint className={styles.appoint}
                currAppoint={a}
                currUser={currUser}
                fetchMemoAppoints={fetchMemoAppoints}
                appoint={appoint}
                key={a.id}
                onUpdate={console.log('delete')}
              />)
            }
            <p className={styles.label}>
              {clientAppoints.length > 0 ? 'назначенные сеансы' : null}
            </p>
            {
              clientAppoints.map(a => <Appoint className={styles.appoint}
                currAppoint={a}
                currUser={currUser}
                fetchMemoAppoints={fetchMemoAppoints}
                appoint={appoint}
                key={a.id}
                onUpdate={console.log('delete')}
              />)
            }
          </>

          :
          null}

    </div >
  )
}
)


export default React.memo(Appoints)