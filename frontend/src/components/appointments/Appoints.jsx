
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import Appoint from './Appoint'
import { Context } from '../../index'


const Appoints = observer(({ currUser, masters, clients }) => {

  const { appoint } = useContext(Context)

  let clientAppoints = appoint.appoints.filter(ca => ca.client === currUser.id)
  let masterAppoints = appoint.appoints.filter(ma => ma.master === currUser.id)


  useEffect(() => {

  })

  return (
    <div>
      {
        currUser.id !== appoint.appoints.master
          ?
          masterAppoints.map(a => <Appoint a={a} key={a.id} />)
          :
          null
      }
      {
        clientAppoints.map(a => <Appoint a={a} key={a.id} />)
      }
    </div>
  )
}
)


export default Appoints