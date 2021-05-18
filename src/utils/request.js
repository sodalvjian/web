import axios from 'axios'
import { message as Message } from '@/utils/resetMessage'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['token'] = getToken()
      config.headers.Authorization = 'Bearer ' + store.getters.token
    } else {
      // config.defaults.withCredentials = true
      // config.defaults.crossDomain = true
      // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  async response => {
    const res = response.data

    if (res) {
      if (res.code === 200 || res.success) {
        return Promise.resolve(res)
      } else if (res.code === 800004) {
        Message({
          type: 'error',
          message: 'Login expired please login again'
        })
        setTimeout(async () => {
          await store.dispatch('user/logout')
          location.href = '/login'
        }, 1000)
      } else if (res.code === 800008) {
        return Promise.reject(res)
      } else {
        if (res.message || res.msg) {
          Message({
            type: 'error',
            message: res.message || res.msg
          })
        }

        // return Promise.reject(res)
      }

      // else if (
      //   res.code === 50008 ||
      //   res.code === 50012 ||
      //   res.code === 50014
      // ) {
      //   // to re-login
      //   MessageBox.confirm(
      //     'You have been logged out, you can cancel to stay on this page, or log in again',
      //     'Confirm logout',
      //     {
      //       confirmButtonText: 'Re-Login',
      //       cancelButtonText: 'Cancel',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // } else {
      //   Message({
      //     message: res.message || 'Error',
      //     type: 'error',
      //     duration: 5 * 1000
      //   })
      // }
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    const formatError = JSON.parse(JSON.stringify(error))
    return Promise.reject(formatError)
  }
)

export default service
