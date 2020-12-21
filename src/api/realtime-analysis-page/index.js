import request from '@/utils/request'
import axios from 'axios'

// 获取brat
export function GetBrat(data) {
  return request({
    url: `api/nlp`,
    method: 'post',
    data
  })
}

export function GetBratTest(data) {
  return request({
    url: `apitest/nlptest`,
    method: 'post',
    data
  })
}
// export const GetBrat = data => {
//   return request({
//     url: `account/user/update/card`,
//     method: 'post',
//     data
//   })
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`api/nlp`, data, {
//         headers: {
//           Authorization:
//             'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTkxMjEyMDAsInVzZXJJZCI6IjIiLCJzdGF0dXMiOiIyIn0.WAJ1lgzQQWz8LCsh6qVg5i-_MNL8_YRC_k9ADfe2mL0'
//         }
//       })
//       .then(res => {
//         // 获取导出错误的信息
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }
