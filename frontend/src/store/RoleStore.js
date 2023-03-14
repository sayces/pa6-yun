// import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class RoleStore {
  constructor() {
    this._roles = [
      {id: 1, title: 'master'},
      {id: 2, title: 'client'},
    ]
    this._selectedRole = {}
    makeAutoObservable(this)
  }

  setSelectedRole(roles) {
    this._selectedRole = roles
  }

  setRole(roles) {
    this._roles = roles
  }

  get selectedRole() {
    return this._selectedRole
  } 

  get roles() {
    return this._roles
  }
}
