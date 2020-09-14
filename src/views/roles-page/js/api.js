import request from '@/utils/request'

export function GET_LIST(params) {
  return request({
    url: `api/roles/byName`,
    method: 'GET',
    params
  })
}

export function GET_PRIVILEGES(params) {
  return request({
    url: `api/privileges`,
    method: 'GET',
    params
  })
}

export function DELETE_DATA(id) {
  return request({
    url: `api/roles/${id}`,
    method: 'delete'
  })
}

export function CHANGE_DATA(id, data) {
  return request({
    url: `api/roles/${id}`,
    method: 'put',
    data
  })
}

export function SAVE_DATA(data) {
  return request({
    url: `api/roles`,
    method: 'ppst',
    data
  })
}
