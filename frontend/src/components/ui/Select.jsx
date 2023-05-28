
import React, { useContext, useEffect, useState } from 'react'
import styles from './_select.module.scss'
import { fetchAppointStatus } from '../../http/appointAPI'
import { observer } from 'mobx-react-lite';



const Select = observer(({ object, currObject, onUpdate, currUser }) => {

  useEffect(() => {

  }, [currObject])

  return (

    <>
      <select className={styles.select}
        disabled={currUser.userRoleId === 3 ? false : true}
        name='update'
        onChange={(e) => onUpdate(e.target.value)}
        defaultValue={currObject.appointStatusId}
      >
        {
          object.map(s =>
            <option value={s.id} key={s.id}>
              {s.status}
            </option>
          )
        }
      </select >
    </>
  )
});

export default React.memo(Select)
