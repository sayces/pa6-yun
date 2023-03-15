import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react'
import {
  Route, 
  Routes, 
  // redirect
} from 'react-router-dom'
// import {CALENDAR_ROUTE} from '../utils/consts'
import {Context} from '../index';
import {authRoutes, publicRoutes} from '../routes'
import {fetchRole} from '../http/userAPI'


const  AppRouter = observer(() => {
  
  

  const {user} = useContext(Context)
  console.log(user)
  
  useEffect(() => {
    fetchRole().then(data => user.setRoles(data))
  
  }, []);

  return (
    
    <Routes>
        {user.isAuth && authRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>} exect/>
        )}
        {publicRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>} exect/>
        )}
    </Routes> 
  );  
});

export default AppRouter;