import React from 'react'
import { Link } from 'react-router-dom'
import { CALENDAR_ROUTE } from '../../../utils/consts'
import styles from './columns.module.css'
import logo from "./logo.svg"

const Columns = () => {
  return (
    <div className={styles.columns_box}>
      <div className={styles.column} />
      <div className={styles.column} />
      <div className={styles.column} />
      <div className={styles.column4}>

        <Link to={CALENDAR_ROUTE}>
          <img className={styles.logo_un} src={logo} alt="un" />
        </Link>

      </div>
    </div>
  )
}

export default Columns;