import request from '@/utils/request'
// get code
export function GetCode(data) {
  return request({
    url: `account/user/send/verification/code/signup`,
    method: 'post',
    data
  })
}
// 注册
export function RegisterAccount(data) {
  return request({
    url: `account/user/addition`,
    method: 'post',
    data
  })
}

// forget password send code
export function SendVerificationCode(data) {
  return request({
    url: `account/user/send/verification/code/password`,
    method: 'post',
    data
  })
}

// Do verification for update password
export function DoVerificationForUpdatePassword(data) {
  return request({
    url: `account/user/forgot/verification/code`,
    method: 'post',
    data
  })
}

// Update password after verification
export function UpdatePasswordAfterVerification(data) {
  return request({
    url: `account/user/forgot/update/password`,
    method: 'post',
    data
  })
}
