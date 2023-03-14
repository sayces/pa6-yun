// import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._users = [
      {id: 1, name: 'sasha', role: 1},
      {id: 2, name: 'arisha', role: 2}
    ]


    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(users) {
    this._users = users
  }

  get isAuth() {
    return this._isAuth
  }

  get users() {
    return this._users
  }

  
}
