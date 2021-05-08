import {
  login,
  //  logout,
  getInfo
} from '@/api/user'
// import Cookies from 'js-cookie'
import {
  getToken,
  setToken,
  removeToken,
  setRoles,
  setUserInfo
} from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, name) => {
    state.name = name
    setUserInfo(name)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLE: (state, roles) => {
    state.roles = roles
    setRoles(roles) // 设置权限
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          const data = response
          // console.log('username', username)
          if (data.code === 401) {
            reject(data)
          } else {
            console.log('登录信息', data)
            commit('SET_TOKEN', data.data.token)
            commit('SET_USER_INFO', JSON.stringify(data.data))
            // Cookies.set('userRoles', data.additionalInformation.privs)

            // commit('SET_ROLE', data.additionalInformation.privs)
            setToken(data.data.token)
            resolve(data)
          }
        })
        .catch(error => {
          // commit('SET_TOKEN', 1)
          // commit('SET_USER_INFO', 'Admin')
          // // Cookies.set('userRoles', data.additionalInformation.privs)

          // // commit('SET_ROLE', data.additionalInformation.privs)
          // setToken(1)
          reject(error)
        })
    })
  },
  loginAuto({ commit }, token) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', token)
      setToken(token)
      resolve(token)
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const data = response

          // if (!data) {
          //   reject('Verification failed, please Login again.')
          // }

          // const { name, avatar } = data

          // commit('SET_USER_INFO', name)
          commit('SET_ROLE', data)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      sessionStorage.clear()
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
