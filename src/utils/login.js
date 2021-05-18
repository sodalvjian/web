import axios from 'axios'
import { message as Message } from '@/utils/resetMessage'
// import store from '@/store'

export function loginReq(params) {
  console.log(22)
  return new Promise((resolve, reject) => {
    console.log(111)
    axios
      .post(process.env.VUE_APP_BASE_API + 'account/user/login', params, {
        headers: {
          'Access-Control-Allow-Origin': '*', // 解决cors头问题
          'Access-Control-Allow-Credentials': 'true' // 解决session问题
          // 'Content-Type': 'application/x-www-form-urlencoded' // 将表单数据传递转化为form-data类型
        }
        // withCredentials : true
      })
      .then(function(response) {
        var res = response.data
        if (res.success) {
          console.log('登录成功', res)
          resolve(res)
        } else {
          Message.error(res.msg)
          reject(res)
        }

        // if(res=="登录成功,3秒后跳转主页") {
        //     var noticeId= JSON.parse(window.sessionStorage.getItem('user'));
        //     alert(noticeId)
        //     alert(response.data);
        //     setTimeout(that.LoginSuccess, 3000)
        // }else if(response.data=="用户名不存在,请注册后重新登录") {
        //     that.message = response.data
        // }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}
