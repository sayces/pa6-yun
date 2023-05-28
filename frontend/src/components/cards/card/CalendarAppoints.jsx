
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
      <div key={thatAppoint.id} className={styles.appoint_card}
        style={thatAppoint.appointStatusId === 1 ? {} : { background: '#9d6363' }}
      >
        <p>
          [ {index + 1} ] окно на {thatAppoint.time}
        </p>

        <button

          disabled=
          {
            thatAppoint.appointStatusId === 1 && currUser.userRoleId !== 3
              ?
              false
              :
              true
          }


          style=
          {
            appointBtn && thatAppoint.appointStatusId === 1
              ?
              { background: '#d5f0c1' }
              :
              { borderRadius: '0.1rem 0.6rem' }
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


          {appointBtn && thatAppoint.appointStatusId === 1 ? 'галочка' : 'крестик'}

        </button>
      </div >

    </>
  )
})

export default CalendarAppoints