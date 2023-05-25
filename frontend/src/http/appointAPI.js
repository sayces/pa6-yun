
import {
  $authHost,
  $host
} from "./index";

export const fetchAppoints = async () => {

  const { data } = await $host.get('api/calendar')
  return data
}

export const fetchAppointStatus = async () => {

  const { data } = await $host.get('api/calendar/appoint-status')
  return data
}

export const fetchStatuses = async () => {

  const { data } = await $host.get('api/calendar/statuses')
  return data
}

export const exactAppoint = async ({ id }) => {

  const { data } = await $host.get('api/calendar/appoint/' + id)
  return data
}



export const createAppoint = async ({ date, time, appointStatusId, client, master }) => {

  const { data } = await $authHost.post('api/calendar/get', { date, time, appointStatusId, client, master })
  return data

}

export const deleteAppoints = async ({ id }) => {

  const { data } = await $authHost.delete('api/calendar/appoint/delete/' + id)
  return data

}

export const editAppoint = async ({ id, appointStatusId, client }) => {
  console.log('edit ' + id + ' ' + appointStatusId + ' ' + client)

  const { data } = await $authHost.put('api/calendar/appoint/update/' + id, { appointStatusId, client })
  return data

}



