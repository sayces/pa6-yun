
import {
  $authHost,
  $host
} from "./index";

export const fetchAppoints = async () => {

  const { data } = await $host.get('api/calendar')
  return data

}

export const createAppoint = async ({ date, time, appointStatusId, client, master }) => {

  const { data } = await $authHost.post('api/calendar/get', { date, time, appointStatusId, client, master })
  return data

}

export const deleteAppoint = async ({ id }) => {

  const { data } = await $authHost.delete('api/calendar/appoint/delete/' + id)
  return data

}

export const editAppointStatus = async ({ appointStatusId, id }) => {

  const { data } = await $authHost.put('api/calendar/appoint/update/' + id, { id, appointStatusId })

  console.log(data)
  return data

}



