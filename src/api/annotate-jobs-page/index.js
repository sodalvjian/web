import request from '@/utils/request'

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
    url: `jobbizweb/pipeline`,
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
  return request({
    url: `jobbizweb/jobbiz/check`,
    method: 'POST',
    data
  })
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
