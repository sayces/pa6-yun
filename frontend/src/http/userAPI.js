import { $authHost, $host } from "./index";
import  jwt_decode  from 'jwt-decode'

export const signup = async (email, password, userRoleId) => {
  const {data} = await $host.post('api/user/signup', {email, password, userRoleId})
  return jwt_decode(data.toke)
}


export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  return jwt_decode(data.token)
}


export const auth = async () => {
  const response = await $host.post('api/user/auth',)
  return response
}

