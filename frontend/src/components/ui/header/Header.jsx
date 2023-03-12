import React from 'react'
import AuthLink from './AuthLink'
import CalendarLink from './CalendarLink'
import GalleryLink from './GalleryLink'
import './header.css';


export default function Header() {
  return (
    <div className='header-box'>
      <CalendarLink />
      <GalleryLink />
      <AuthLink />
    </div>
  )
}
