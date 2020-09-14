import request from '@/utils/request'
import { loginReq } from '@/utils/login'
import Cookies from 'js-cookie'

export function login(data) {
  // return false;
  return loginReq(data)
}

export function getInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Cookies.get('userRoles'))
    }, 500)
  })
  // return request({
  //   url: '/account/user/get/personal/info',
  //   method: 'get'
  // })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function UploadFile(data) {
  return request({
    url: `jobbizweb/upload`,
    method: 'POSt',
    data
  })
}
// upload feedback
export function UploadBind(data) {
  return request({
    url: `jobbizweb/uploadBind`,
    method: 'POSt',
    data
  })
}
