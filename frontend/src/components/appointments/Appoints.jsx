

import React, { useContext, useEffect, useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import Appoint from './Appoint'
import { Context } from '../../index'
import styles from './_appoint.module.scss'
import { fetchAppoints, fetchAppointStatus, fetchStatuses } from '../../http/appointAPI'


const Appoints = observer(({ currUser, fetchMemoStatuses, date }) => {

  const { appoint } = useContext(Context)

  let clientAppoints = appoint.appoints.filter(ca => ca.client === currUser.id)
  let masterAppoints = appoint.appoints.filter(ma => ma.master === currUser.id)


  const fetchMemoAppoints = useMemo(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))

  }, [fetchMemoStatuses, currUser])

  console.log('render appoints')

  return (
    <div className={styles.appoint_group}>
      <p className={styles.label}>
        {masterAppoints.length > 0 ? 'назначенные сеансы' : null}
      </p>
      {
        masterAppoints.map(a => <Appoint className={styles.appoint}
          currAppoint={a}
          currUser={currUser}
          fetchMemoAppoints={fetchMemoAppoints}
          appoint={appoint}
          key={a.id}
        />)
      }
      <p className={styles.label}>
        {clientAppoints.length > 0 ? 'мои записи' : null}
      </p>
      {
        clientAppoints.map(a => <Appoint className={styles.appoint}
          currAppoint={a}
          currUser={currUser}
          fetchMemoAppoints={fetchMemoAppoints}
          appoint={appoint}
          key={a.id}
        />)
      }

    </div>
  )
}
)


export default React.memo(Appoints)