
import React, { useContext, useEffect, useState} from "react"
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/ui/NavBar";
import Columns from '../src/components/ui/Columns';
import './index.css'
import { observer } from "mobx-react-lite";
import data, {auth} from './http/userAPI'
import {Context} from './index';
import { Spinner } from "react-bootstrap";



const App = observer(() => {
  const {user} = useContext(Context);
  const setLoading = useState(true)

  useEffect(() => {
    setTimeout(() => {
      auth().then(data => {
        user.setUser(true)
        user.serIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)   
  })

 

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar className="navbar"/>
        <div className="center">
          <Columns className="center__elem ui__columns"/>
          <AppRouter className='center__elem app-router'/>
        </div>
      </BrowserRouter>
    </div>
    
  )
});

export default App;