
import { makeAutoObservable } from 'mobx'

export default class UserStore {

  constructor() {

    this._isAuth = false
    this._user = {}
    this._users = []

    makeAutoObservable( this )
  }

  setUsers( users ) { this._users = users }
  setIsAuth( bool ) { this._isAuth = bool }
  setUser( user ) { this._user = user }

  get isAuth() { return this._isAuth }
  get user() { return this._user } 
  get users() { return this._users } 
}
