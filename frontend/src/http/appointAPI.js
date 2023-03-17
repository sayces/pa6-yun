
import { $authHost, $host } from "./index";

export const createAppoint = async (appoint) => {

  const {data} = await $authHost.post('api/calendar', appoint)
  return data

}

export const fetchAppoint = async () => {
  
  const {data} = await $host.get('api/calendar')
  return data

}

export const deleteAppoint = async (appoint) => {
  
  const {data} = await $authHost.delete('api/calendar', appoint)
  return data

}

export const changeAppoint = async (appoint) => {
  
  const {data} = await $authHost.put('api/calendar', appoint)
  return data
  
}

