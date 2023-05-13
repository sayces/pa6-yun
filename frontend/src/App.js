
import React, { useContext, useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Columns from '../src/components/Columns';
import './index.css';
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
        user.setIsAuth(true)
        user.setUser(data)
      }).finally(() => setLoading(false))

    } catch (e) {
      console.log(e)
    }

  }, [])

  console.log(user.user)
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
});

export default App;