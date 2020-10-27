import request from '@/utils/request'
import axios from 'axios'
import store from '@/store'
import { resolve } from 'core-js/fn/promise'

// delete user
export function DelData(data) {
  return request({
    url: `jobbizweb/jobbiz/stop/${data.bizId}`,
    method: 'DELETE'
  })
}

// get list
export function GetList(paramsOption, data) {
  return request({
    url: `jobbizweb/jobbiz/${paramsOption.page}/${paramsOption.pageSize}/${paramsOption.propData}/${paramsOption.orderData}`,
    method: 'POST',
    data
  })
}

// get Analysis Type
export function GetAnalysisType() {
  return request({
    url: `jobbizweb/pipelinemng`,
    method: 'get'
  })
}

// add data
export function AddData(data) {
  return request({
    url: `jobbizweb/jobbiz`,
    method: 'POST',
    data
  })
}

// check data
export function CheckData(data) {
  return new Promise((resolve, reject) => {
    axios
      .post('jobbizweb/jobbiz/check', data, {
        headers: {
          Authorization: 'Bearer ' + store.getters.token // token换成从缓存获取
        }
      })
      .then(function(res) {
        console.log('啊啊啊', res)
        resolve(res.data)
      })
  })

  // return request({
  //   url: `jobbizweb/jobbiz/check`,
  //   method: 'POST',
  //   data
  // })
}

// get Analysis Type
export function GetDetail(data) {
  return request({
    url: `jobbizweb/jobbiz/info`,
    method: 'POSt',
    data
  })
}

// get cost
export function GetCostData(bizid) {
  return request({
    url: `jobbizweb/getcost/${bizid}`,
    method: 'get'
  })
}
//  verify S3 Data
export function VerifyS3Data(type, url) {
  return request({
    url: `jobbizweb/jobbiz/policytemplate?type=${type}&s3url=${url}`,
    method: 'get'
  })
}
