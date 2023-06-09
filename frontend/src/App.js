
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/header/NavBar";
import Columns from './components/ui/columns/Columns';

import styles from './styles/index.module.scss'

import { observer } from "mobx-react-lite";
import { auth, fetchUsers, fetchRoles } from './http/userAPI';
import { Context } from './index';


const App = observer(() => {

  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    try {
      fetchUsers().then(data => user.setUsers(data))
      fetchRoles().then(data => user.setRoles(data))
      auth().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))

    } catch (e) {
      console.log(e)
    }
  }, [])

  if (loading) {
    return <h1>LOADING</h1>
  }

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <div className={styles.central}>
          <Columns className={styles.central_elem} />
          <AppRouter className={styles.central_elem} user={user} />
        </div>
      </BrowserRouter>
    </div>

  )
});

export default App;