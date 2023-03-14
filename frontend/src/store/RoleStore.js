// import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class RoleStore {
  constructor() {
    this._role = [
      {id: 1, title: 'master'},
      {id: 2, title: 'client'},
    ]
    this._selectedRole = {}
    makeAutoObservable(this)
  }
  setSelectedRole(selectedRole) {
    this._selectedRole = selectedRole
  }

  setRole(role) {
    this._role = role
  }

  get selectedRole() {
    return this._selectedRole
  } 

  get role() {
    return this._role
  }
}
