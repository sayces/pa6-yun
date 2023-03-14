import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react'
import {
  Route, 
  Routes, 
  // redirect
} from 'react-router-dom'
// import {CALENDAR_ROUTE} from '../utils/consts'
import {Context} from '../index';
import {authRoutes, publicRoutes} from '../routes'


const  AppRouter = observer(() => {
  
  

  const {user} = useContext(Context)
  console.log(user)
  let isLogin = user.isAuth

  return (
    
    <Routes>
        {isLogin && authRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>} exect/>
        )}
        {publicRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>} exect/>
        )}
    </Routes> 
  );  
});

export default AppRouter;