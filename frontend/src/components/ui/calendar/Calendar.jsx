import Calendar from 'react-calendar';
import React from 'react';
import './calendar.css';


export default function MyCalendar() {

  const date = (new Date());
  
  return (
    <Calendar 
      value={date}
      minDate={date}
      minDetail = "year"
      maxDetail = "month"
      showNeighboringMonth = {false}
      // showNavigation = {false}
      navigationLabel = {({ date, view }) => view ==='month' ? `месяц ${date.getMonth()+1 }`: null}
      // onClickDay = {(date) => alert(`New date is: ${date.getDate()}`)}
      tileClassName = {({ date, view }) => view === 'month' && date.getDay() === 0 ? 'sunday' : null}
      
    />      
  ); 
}
