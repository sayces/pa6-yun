import React from 'react'
import './columns.css'
import logo from "./logo.svg"

const Columns = function () {
  return (
    <div className="columns-box">
      <div className="column"/>
      <div className="column"/>
      <div className="column"/>
      <div className="column--4">
 
        <img className='logo__un' src={logo} alt="un" />
        
      </div>
    </div>
  )
}

export default Columns;