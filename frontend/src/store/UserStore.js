// import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._users = {}
    this._roles = []

    makeAutoObservable(this)
  }

  setRole(roles) {
    this._roles = roles
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
  

  get roles() {
    return this._roles
  }
}
