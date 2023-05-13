import React from 'react'
import { Link } from 'react-router-dom'
import { CALENDAR_ROUTE } from '../utils/consts'
import './columns.css'
import logo from "./logo.svg"

const Columns = () => {
  return (
    <div className="columns-box">
      <div className="column" />
      <div className="column" />
      <div className="column" />
      <div className="column--4">

        <Link to={CALENDAR_ROUTE}>
          <img className='logo__un' src={logo} alt="un" />
        </Link>

      </div>
    </div>
  )
}

export default Columns;