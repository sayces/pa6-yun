// import React, { Component } from 'react'
import {makeAutoObservable} from 'mobx'

export default class LinkStore {
  constructor() {
    this._link = {}
    this._selectedLink = {}
    makeAutoObservable(this)
  }
  
  setSelectedRole(link) {
    this._selectedLink = link
  }

  get selectedLink() {
    return this._selectedLink
  } 
}
