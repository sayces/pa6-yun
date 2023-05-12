
import React, {
  useContext,
  useEffect,
  // useState 
} from 'react';

import { useParams } from 'react-router-dom';

import './pages.css';
// import { PROFILE_ROUTE } from '../utils/consts';

// import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { fetchAppoints, deleteAppoint, editAppointStatus } from '../http/appointAPI';
import { getAllUsers } from '../http/userAPI'



const Profile = observer(() => {

  const params = useParams()
  console.log(params)

  const { appoint } = useContext(Context)
  const { user } = useContext(Context)

  // const [aState, setAState] = useState('')

  let currUser = user.users.filter(u => u.id === user.user.id)[0]
  let clientAppoints = appoint.appoints.filter(ca => ca.client === currUser.id)
  let masterAppoints = appoint.appoints.filter(ma => ma.master === currUser.id)

  console.log(`userrole ` + currUser.userRoleId)
  console.log(`userid ` + currUser.id)
  console.log(clientAppoints)
  console.log(masterAppoints)



  useEffect(() => {

    fetchAppoints().then(data => appoint.setAppoints(data))
    getAllUsers().then(data => user.setUsers(data))

    console.log(appoint.appoints)
  }, [appoint, user])

  const deleteAppoints = (e) => {

    try {

      deleteAppoint({ id: e })

    } catch (e) {
      console.log(e.promise.data.message)
    }
    e.preventDefault()
  }

  const updateAppointStatus = (e) => {
    debugger
    console.log(e)
    try {

      editAppointStatus(

        { appointStatusId: 2, id: e }
      )

      console.log(appoint.appointStatusId)
    } catch (e) {
      console.log(e.promise.data.message)
    }

  }





  return (
    <div className='page page__profile'>


      <form className="calendar-info__form"
      // onSubmit={e => e.preventDefault()}
      >
        <p>добро пожаловать, {currUser.email}</p>
        <p>{currUser.userRoleId === 1 ? 'назначенные сеансы' : 'мои записи'}</p>
        <div className='appoint__list'>
          {

            currUser.id !== appoint.appoints.master ?

              masterAppoints.map(a =>

                <div className='appoint__flex' key={a.id}>

                  <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
                  <input id={a.id} placeholder={a.time} value={a.time} type='time' readOnly={true} />
                  <button className='appoint__delete-btn' value={a.id} name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>
                  {currUser.userRoleId === 1 ? <button className='appoint__update-btn' value={a.id} name='update'
                    onClick={e => { e.preventDefault; updateAppointStatus(e.target.value) }}
                  > upd </button> : null}
                </div>
              )
              :
              clientAppoints.map(a =>

                <div className='appoint__flex' key={a.id}>

                  <input id={a.id} placeholder={a.date} value={a.date} type='date' readOnly={true} />
                  <input id={a.id} placeholder={a.time} value={a.time} type='time' readOnly={true} />
                  <button className='appoint__delete-btn' value={a.id} name='delete' onClick={e => deleteAppoints(e.target.value)}> x </button>

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

      </form>



    </div>
  )
})

export default Profile