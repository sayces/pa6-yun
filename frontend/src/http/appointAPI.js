
import { 
  $authHost,
  $host 
  } from "./index";

export const fetchAppoints = async () => {

  const {data} = await $host.get('api/calendar')
  return data
  
}

export const createAppoint = async ( { date, time, appointStatusId, userId } ) => {
  
  const {data} = await $authHost.post('api/calendar/get',{userId, date, time, appointStatusId})
  return data

}

export const deleteAppoint = async ( id ) => {
  
  const {data} = await $authHost.delete('api/calendar/deleteAppoint',{id})
  return data

}