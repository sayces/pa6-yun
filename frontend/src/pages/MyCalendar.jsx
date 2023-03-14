import Calendar from 'react-calendar';
import React from 'react';
import '../components/ui/calendar.css';
// import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {

  let date = (new Date());
  
const arr = () =>

[
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "окрябрь",
  "ноябрь",
  "декабрь",
    
]



// console.log(arr.map((num => num)))
// console.log(arr.map((i => i)))

  return (
    <div className='page page__calendar'>
      <Calendar 
        value={date}
        // onClickDay =
        minDate={date}
        minDetail = "year"
        maxDetail = "month"
        showNeighboringMonth = {false}
        // navigationLabel = {({date, i}) => arr.map((i => i)) === date.getMonth() ? console.log(arr.map((i => i))) : null }
        
        tileClassName = {({ date, view }) => view === 'month' && date.getDay() === 0 ? 'sunday' : null}
        
      />  
    </div>  
      
  ); 
  
}
