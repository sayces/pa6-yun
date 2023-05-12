
import { makeAutoObservable } from 'mobx'

export default class AppointStore {

  constructor() {

    this._appoints = []

    makeAutoObservable(this)
  }

  setAppoints(appoints) { this._appoints = appoints }

  get appoints() { return this._appoints }
}
