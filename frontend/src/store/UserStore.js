
import { makeAutoObservable } from 'mobx'

export default class UserStore {

  constructor() {

    this._isAuth = false
    this._user = {}
    this._users = []
    this._roles = []

    makeAutoObservable(this)
  }

  setUsers(users) { this._users = users }
  setRoles(roles) { this._roles = roles }
  setIsAuth(bool) { this._isAuth = bool }
  setUser(user) { this._user = user }

  get isAuth() { return this._isAuth }
  get user() { return this._user }
  get users() { return this._users }
  get roles() { return this._roles }
}
