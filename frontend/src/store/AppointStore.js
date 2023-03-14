import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class AppointStore {
  constructor() {
    this.appoints = [
      {id: 1, user: 2, date: new Date("01.04.2002")},
      {id: 2, user: 2, date: new Date("25.11.2001")}
    ]
    this.setAppoint = [
      
    ]


    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._users = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  
}
