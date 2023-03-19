
import { 
  $authHost,
  $host 
  } from "./index";

export const fetchAppoints = async () => {

  const {data} = await $host.get('api/calendar')
  return data
  
}

export const createAppoint = async ( {date, time, appointStatusId, client, master}  ) => {
  
  const {data} = await $authHost.post('api/calendar/get',{ date, time, appointStatusId, client, master})
  return data

}

export const deleteAppoint = async ( id ) => {
  
  const {data} = await $authHost.delete('api/calendar/deleteAppoint', { id })
  return data

}



