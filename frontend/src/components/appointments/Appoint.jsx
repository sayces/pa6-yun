
import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import '../../pages/pages.css';
import { Context } from '../../index';
import { deleteAppoint, editAppoint, fetchAppoints } from '../../http/appointAPI';

const Appoint = observer(({ a }) => {

  const { appoint } = useContext(Context)

  useEffect(() => {
    console.log(appoint)
  }, [])

  const deleteAppoints = async (e) => {

    try {

      deleteAppoint({ id: e })
    } catch (e) {
      console.log(e)
    }
  }

  const updateAppoint = async (e) => {

    try {

      setStatus(a.appointStatusId === 1 ? a.appointStatusId = 2 : a.appointStatusId = 1)

      editAppoint(
        {
          id: e,
          appointStatusId: status,
          time: time
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (

    <div className='appoint__flex'>

      {
        <>
          <p>{a.user.email}</p>

          <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
          <input id={a.id} placeholder={a.time} value={a.time} type='time' readOnly={true} />

          <button className='appoint__delete-btn'
            value={a.id} name='delete'
            onClick={e => { deleteAppoints(e.target.value) }}>
            x
          </button>

          <button className='appoint__update-btn'
            value={a.appointStatusId} name='update'
            onChange={e => { updateAppoint(e.target.value) }
            }>

          </button>

          <p>{a.appoint_status.status}</p>
        </>
      }
    </div>
  )
})

export default Appoint