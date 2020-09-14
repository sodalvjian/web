import request from '@/utils/request'
// get users
export function GET_USER_LIST(params) {
  return request({
    url: `api/users`,
    method: 'get',
    params
  })
}
// update user
export function UPDATE_USER(data) {
  return request({
    url: `api/users/${data.id}`,
    method: 'PUT',
    data
  })
}
// add user
export function ADD_USER(data) {
  return request({
    url: `api/users/create`,
    method: 'POST',
    data
  })
}
// get roles
export function GET_ROLES(params) {
  return request({
    url: `api/roles`,
    method: 'GET',
    params
  })
}
// delete user
export function DEL_ROLES(data) {
  return request({
    url: `api/users/${data.id}`,
    method: 'GET'
  })
}
