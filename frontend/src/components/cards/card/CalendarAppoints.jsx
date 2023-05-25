
import React, { useContext, useEffect, useState } from 'react'
import styles from '../_card.module.scss'
import { Context } from '../../..'
import { observer } from 'mobx-react-lite'
import { editAppoint, fetchAppoints } from '../../../http/appointAPI'



const CalendarAppoints = observer(({ thatAppoint, index, currUser }) => {

  const { appoint, user } = useContext(Context)

  useEffect(() => {
    fetchAppoints().then(data => appoint.setAppoints(data))
  }, [appoint])

  const admin = user.users.filter(u => u.userRoleId == 3)[0]
  console.log(admin)
  console.log(thatAppoint)

  const [appointBtn, setAppointBtn] = useState(true)

  const upgradeAppoint = () => {
    try {
      editAppoint(
        {
          id: thatAppoint.id,
          appointStatusId: 2,
          client: currUser.id
        }
      )
      setAppointBtn(!appointBtn)
    } catch (e) {
      console.log(e)
    }
  }

  const degradeAppoint = () => {
    try {
      editAppoint(
        {
          id: thatAppoint.id,
          appointStatusId: 1,
          client: admin.id
        }

      )
      setAppointBtn(!appointBtn)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <>
      <div key={thatAppoint.id} className={styles.appoint_card}>
        <p>
          [ {index + 1} ] окно на {thatAppoint.time}
        </p>

        <button

          style=
          {
            appointBtn
              ?
              { background: '#d5f0c1', transition: 'all 0.3s' }
              :
              { background: '#db9c77', transition: 'all 0.3s' }
          }

          onClick=
          {
            appointBtn
              ?
              upgradeAppoint
              :
              degradeAppoint
          }

          className={styles.galochka}>

          {appointBtn ? 'галочка' : 'крестик'}

        </button>
      </div>

    </>
  )
})

export default CalendarAppoints