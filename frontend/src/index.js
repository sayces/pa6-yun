
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import './index.css';
import Layout from './routes/Layout';
import MyCalendar from './components/ui/calendar/Calendar.jsx';
// import './layout.css';
import Auth from './components/ui/auth/Auth';


 // Use this after the variable declaration

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children: [
      {
        path: "/calendar",
        element: <MyCalendar /> ,

      },
      {
        path: "/auth",
        element: <Auth />,
      }
    ]
    
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)

