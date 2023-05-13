import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';



const AppRouter = observer(({ user }) => {

  return (

    <Routes>
      {user.isAuth && authRoutes.map(({ path, Element }) =>
        <Route key={path} path={path} element={<Element />} />
      )}
      {publicRoutes.map(({ path, Element }) =>
        <Route key={path} path={path} element={<Element />} />
      )}
    </Routes>
  )
});

export default AppRouter;