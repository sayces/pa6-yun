
import React, { useEffect, useContext, useState, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import '../../pages/_pages.module.scss';
import { Context } from '../../index';
import { deleteAppoints, editAppoint, fetchAppoints, fetchStatuses } from '../../http/appointAPI';
import styles from './_appoint.module.scss'
import Select from '../ui/Select'

const Appoint = observer(({ currAppoint, fetchMemoAppoints, currUser, onUpdate }) => {

  const { appoint, user } = useContext(Context)

  const dayMilliseconds = 24 * 60 * 60 * 1000;
  let goodDateCancel;
  let goodDateUpdate;
  const _currDate = new Date().getTime()
  const _thatDate = new Date(currAppoint.date + 'T' + currAppoint.time).getTime()


  let clientEmail = user.users.filter(cn => currAppoint.client === cn.id)[0].email
  let masterEmail = user.users.filter(cn => currAppoint.master === cn.id)[0].email

  let anyAdmin = user.users.filter(a => a.userRoleId === 3)[0]

  let email;
  if (currUser.userRoleId === 1) {
    email = clientEmail + ' -ваш клиент'
  } else if (currUser.userRoleId === 2) {
    email = masterEmail + ' -ваш мастер'
  } else {
    email = clientEmail + ' записан к ' + masterEmail
  }

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))

    if ((_thatDate + dayMilliseconds) < (_currDate) && currAppoint.appointStatusId !== [3, 4, 5, 6]) {
      editAppoint(
        {
          id: currAppoint.id,
          appointStatusId: 6,
        }
      )
    }
  }, [fetchMemoAppoints, currAppoint.appointStatusId])

  if (_thatDate - _currDate > dayMilliseconds) {
    goodDateCancel = true;
  } else goodDateCancel = false;

  if (_thatDate < _currDate) {
    goodDateUpdate = true;
  } else goodDateUpdate = false;


  const deleteAppoint = async () => {

    try {

      deleteAppoints({ id: currAppoint.id });
    } catch (e) {
      console.log(e)
    }
  }

  const updateAppoint = async (statusId) => {

    try {
      if (goodDateUpdate) {
        editAppoint(
          {
            id: currAppoint.id,
            appointStatusId: statusId
          }
        )
      } else {
        editAppoint(
          {
            id: currAppoint.id,
            appointStatusId: 5,
          }
        );
      }
    } catch (e) {
      console.log(e)
    }
  }

  const degradeAppoint = () => {
    try {

      if (goodDateCancel) {
        editAppoint(
          {
            id: currAppoint.id,
            appointStatusId: 1,
            client: anyAdmin.id
          }
        )

      } else {
        editAppoint(
          {
            id: currAppoint.id,
            appointStatusId: 3,
          }
        )
      }
    } catch (e) {
      console.log(e)
    }

  }

  return (


    <div className={styles.appoint} >

      <p className={styles.name}>{email}</p>

      <>
        <input id={currAppoint.id} placeholder={currAppoint.date} value={currAppoint.date} type='date' readOnly={true} className={styles.update_input} />

        <input id={currAppoint.id} placeholder={currAppoint.time} value={currAppoint.time} type='time' readOnly={true} />

        <Select object={appoint.statuses} currObject={currAppoint} currUser={currUser} onUpdate={updateAppoint} />
      </>

      <button className={styles.delete_btn}
        value={currAppoint.id} name='delete'
        disabled={currAppoint.appointStatusId === 3 || _thatDate < _currDate ? true : false}
        onClick={currUser.userRoleId === 3 ? deleteAppoint : degradeAppoint}>
        x
      </button>

    </div >

  )
})

export default React.memo(Appoint)