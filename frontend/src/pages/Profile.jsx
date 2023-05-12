
import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import './pages.css';

import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, deleteAppoint, editAppoint } from '../http/appointAPI';
import { fetchUsers } from '../http/userAPI'




const Profile = observer(() => {

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  let currUser = user.users.filter(u => u.id === user.user.id)[0]
  let clientAppoints = appoint.appoints.filter(ca => ca.client === currUser.id)
  let masterAppoints = appoint.appoints.filter(ma => ma.master === currUser.id)

  const [time, setTime] = useState()
  const [status, setStatus] = useState()



  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    fetchUsers().then(data => user.setUsers(data))

  }, [appoint, appoint.appointStatusId])



  const deleteAppoints = async (e) => {

    try {

      deleteAppoint({ id: e })
      return useEffect;

    } catch (e) {
      console.log(e)
    }

  }


  const updateAppoint = async (e) => {

    try {

      e => e.status !== 1 ? setStatus(1) : setStatus(2)
      console.log(status)

      editAppoint(

        {
          id: e,
          appointStatusId: status,
          time: time
        }


      )
      return useEffect;

    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className='page page__profile'>


      <div className="calendar-info__form">
        <p>добро пожаловать, {currUser.email}</p>
        <p>{currUser.userRoleId === 1 ? 'назначенные сеансы' : 'мои записи'}</p>
        <div className='appoint__list'>
          {

            currUser.id !== appoint.appoints.master ?

              masterAppoints.map(a =>

                <div className='appoint__flex' key={a.id}>

                  <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
                  <input id={a.id} placeholder={a.time} value={a.time} type='time' onChange={e => { setTime(e.target.value) }} />
                  <button className='appoint__delete-btn' value={a.id} name='delete' onClick={e => { deleteAppoints(e.target.value) }}> x </button>
                  {currUser.userRoleId === 1 ? <button className='appoint__update-btn'
                    value={a.id} name='update'
                    status={a.appointStatusId}
                    onClick={e => {
                      updateAppoint(e.target.value, e.target.status)
                    }}
                  > {a.appointStatusId} </button> : null}
                  <p>{a.appoint_status.status}</p>
                </div>
              )
              :
              clientAppoints.map(a =>

                <div className='appoint__flex' key={a.id}>

                  <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
                  <input id={a.id} placeholder={a.time} value={a.time} type='time' readOnly={true} />
                  <button className='appoint__delete-btn' value={a.id} name='delete' onClick={e => { deleteAppoints(e.target.value) }}> x </button>

                </div>
              )
          }
          {clientAppoints.map(a =>

            <div className='appoint__flex' key={a.id}>

              <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
              <input id={a.id} placeholder={a.time} value={a.time} type='time' readOnly={true} />
              <button className='appoint__delete-btn' value={a.id} name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>

            </div>
          )}
        </div>

      </div>

    </div>
  )
})

export default Profile