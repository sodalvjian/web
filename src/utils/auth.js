import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setRoles(roles) {
  return Cookies.set('userRoles', roles)
}
export function setUserInfo(data) {
  return Cookies.set('userInfo', data)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
