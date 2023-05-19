
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
import './styles/index.scss';

import UserStore from './store/UserStore';
import AppointStore from './store/AppointStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Context.Provider
    value={{
      user: new UserStore(),
      appoint: new AppointStore()
    }}>
    <App />
  </Context.Provider>

);