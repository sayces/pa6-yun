
import React from 'react'
import Columns from '../components/ui/Columns.jsx';
import AuthLink from '../components/ui/header/AuthLink.jsx';
import CalendarLink from '../components/ui/header/CalendarLink.jsx';
import GalleryLink from '../components/ui/header/GalleryLink'
import { Link, Outlet } from 'react-router-dom';
// import MyCalendar from '../components/ui/calendar/Calendar.jsx';
import '../components/ui/calendar/calendar.css';
import './layout.css';


export default function Layout() {
  
  return (
    <div className="layout-grid">
      <header>
        <Link to='/auth'>
          <AuthLink/>
        </Link>
        <Link to='/calendar'>
         <CalendarLink/>
        </Link>
        <Link to='/'>
          <GalleryLink/>
        </Link>
        
      </header>
      <main className='main'>
        <Outlet className='outlet'/>
        <Columns className='columns'/>
      </main>
       
      
      
    </div> 
  )
}


