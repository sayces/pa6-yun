import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class AppointStore {
  constructor() {
    this._appoints = []
    
    makeAutoObservable(this)
  }

  setAppoint(appoints) {
    this._appoints = appoints
  }

  get appoints() {
    return this._appoints
  }

}
