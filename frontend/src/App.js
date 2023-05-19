
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Columns from './components/ui/columns/Columns';

import { observer } from "mobx-react-lite";
import { auth, fetchUsers, fetchRoles } from './http/userAPI';
import { Context } from './index';


const App = () => {

  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then(data => user.setUsers(data))
    fetchRoles().then(data => user.setRoles(data))

    try {

      auth().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))

    } catch (e) {
      console.log(e)
    }
  }, [user.users])

  console.log(user.isAuth)

  if (loading) {
    return <h1>LOADING</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar className="navbar" />
        <div className="center">
          <Columns className="center__elem ui__columns" />
          <AppRouter className='center__elem app-router' user={user} />
        </div>
      </BrowserRouter>
    </div>

  )
};

export default App;