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
    url: `acc/addition`,
    method: 'post',
    data
  })
}

// forget password send code
export function SendVerification(data) {
  return request({
    url: `acc/resetpwd`,
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
    url: `acc/verify-reset`,
    method: 'post',
    data
  })
}
