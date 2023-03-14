
import React from "react"
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/ui/NavBar";
import Columns from '../src/components/ui/Columns';
import './index.css'

function App() {
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
}

export default App;