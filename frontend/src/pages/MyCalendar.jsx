import Calendar from 'react-calendar';
import React from 'react';
import '../components/ui/calendar.css';
// import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {

  let date = (new Date());
  
const arr = Array() = [
    {0: "январь"},
    {1: 'февраль'},
    {2: 'март'},
    {3: "апрель"},
    {4: "май"},
    {5: "июнь"},
    {6: "июль"},
    {7: "август"},
    {8: "сентябрь"},
    {9: "окрябрь"},
    {10: "ноябрь"},
    {11: "декабрь"}
  ]


  return (
    <div className='page page__calendar'>
      <Calendar 
        value={date}
        onClickDay = {({value}) => console.log(value.get)}
        minDate={date}
        minDetail = "year"
        maxDetail = "month"
        showNeighboringMonth = {false}
        navigationLabel = {(x) => arr.map((x) => x) === date.getMonth() ? console.log(x) : null }
        tileClassName = {({ date, view }) => view === 'month' && date.getDay() === 0 ? 'sunday' : null}
        
      />  
    </div>  
      
  ); 
  
}
