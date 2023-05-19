
import { makeAutoObservable } from 'mobx'

export default class AppointStore {

  constructor() {

    this._appoints = []
    this._statuses = []

    makeAutoObservable(this)
  }

  setAppoints(appoints) { this._appoints = appoints }
  setStatuses(statuses) { this._statuses = statuses }

  get appoints() { return this._appoints }
  get statuses() { return this._statuses }
}
