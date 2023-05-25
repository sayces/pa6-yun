
import React, { useEffect, useContext, useState, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import '../../pages/_pages.module.scss';
import { Context } from '../../index';
import { deleteAppoints, editAppoint, fetchAppoints, fetchStatuses } from '../../http/appointAPI';
import styles from './_appoint.module.scss'
import Select from '../ui/Select'

const Appoint = observer(({ currAppoint, fetchMemoAppoints, currUser }) => {

  console.log('render appoint')

  const { appoint, user } = useContext(Context)

  let clientEmail = user.users.filter(cn => currAppoint.client === cn.id)[0].email
  let masterEmail = user.users.filter(cn => currAppoint.master === cn.id)[0].email

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))
  }, [fetchMemoAppoints, currAppoint.appointStatusId])

  const deleteAppoint = async () => {

    try {
      deleteAppoints({ id: currAppoint.id })
    } catch (e) {
      console.log(e)
    }
  }

  const updateAppoint = async (statusId) => {

    try {

      editAppoint(
        {
          id: currAppoint.id,
          appointStatusId: statusId,
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  const degradeAppoint = () => {
    try {
      editAppoint(
        {
          id: currAppoint.id,
          appointStatusId: 3,

        }

      )

    } catch (e) {
      console.log(e)
    }

  }

  return (


    <div className={styles.appoint} >

      <p className={styles.name}>{currUser.id === 1 ? `${clientEmail} ~ваш клиент ` : `${masterEmail} ~ваш мастер`}</p>

      <>
        <input id={currAppoint.id} placeholder={currAppoint.date} value={currAppoint.date} type='date' readOnly={true} />

        <input id={currAppoint.id} placeholder={currAppoint.time} value={currAppoint.time} type='time' readOnly={true} />

        <Select object={appoint.statuses} currObject={currAppoint} currUser={currUser} onUpdate={updateAppoint} />
      </>

      <button className={styles.delete_btn}
        value={currAppoint.id} name='delete'
        onClick={currUser.userRoleId === 3 ? deleteAppoint : degradeAppoint}>
        x
      </button>

    </div >

  )
})

export default React.memo(Appoint)