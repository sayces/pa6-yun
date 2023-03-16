
import React, { useContext, useEffect, useState} from "react"
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/ui/NavBar";
import Columns from '../src/components/ui/Columns';
import './index.css'
import { observer } from "mobx-react-lite";
import {auth, fetchRole} from './http/userAPI'
import {Context} from './index';



const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true)

  

  useEffect(() => {
    fetchRole().then(data => user.setRole(data))
    

    auth().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
        
  
      }).finally(() => setLoading(false))
    }, [user])

 if (loading) {
    return <h1>LOADING</h1>
    }

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