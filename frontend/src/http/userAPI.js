import { $authHost, $host } from "./index";
import  jwt_decode  from 'jwt-decode'


export const signup = async (email, password, userRoleId) => {
  const {data} = await $host.post('api/user/signup', {email, password, userRoleId})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}


export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token) 
  return jwt_decode(data.token)
}


export const auth = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token) 
  return jwt_decode(data.token)
}

export const createRole = async (user) => {
  const {data} = await $host.post('api/user', user)
  return data
}

export const fetchRole = async () => {
  const {data} = await $authHost.get('api/user')
  return data
}

export const fetchUser = async () => {
  const {data} = await $authHost.get('api/user')
  return data
}



