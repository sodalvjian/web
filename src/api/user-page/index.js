import request from '@/utils/request'

// 注册
export function RegisterAccount(data) {
  return request({
    url: `account/user/addition`,
    method: 'post',
    data
  })
}

// Add user
export function AddUserInfo(data) {
  return request({
    url: `account/user/update/personal/info`,
    method: 'post',
    data
  })
}
// Get user info

export function GetUserInfo() {
  return request({
    url: `account/user/get/personal/info`,
    method: 'get'
  })
}
// Get Billing Summary
export function GetBillingSummary() {
  return request({
    url: `account/user/get/billing/summary`,
    method: 'get'
  })
}

// Get Bill Details
export function GetBillDetails(data) {
  return request({
    url: `account/user/get/bill/details`,
    method: 'post',
    data
  })
}
// Get Cost Dashboard
export function GetCostDashboard(data) {
  return request({
    url: `account/user/get/cost/dashboard`,
    method: 'post',
    data
  })
}
// Get Order and Invoice History
export function GetOrderAndInvoiceHistory(data) {
  return request({
    url: `account/user/get/order/invoice`,
    method: 'post',
    data
  })
}

// Get Billing Summary
export function GetPaymentDue() {
  return request({
    url: `account/user/get/payment/due`,
    method: 'get'
  })
}

// Update password by user id
export function UpdatePassword(data) {
  return request({
    url: `account/user/update/password`,
    method: 'post',
    data
  })
}

// Download Invoice PDF
export function DownloadInvoicePDF(data) {
  return request({
    url: `account/user/download/invoice/pdf`,
    method: 'post',
    data
  })
}
// Generate single invoice
export function GenerateSingleInvoice(transactionId) {
  return request({
    url: `account/user/generate/single/invoice/${transactionId[0]}`,
    method: 'get'
  })
}

// Generate single invoice
export function GenerateMultiInvoice(data) {
  return request({
    url: `account/user/generate/multi/invoice`,
    method: 'post',
    data
  })
}

// Add bank card
export function AddBankCard(data) {
  return request({
    url: `account/user/add/card`,
    method: 'post',
    data
  })
}

// Get bank card details
export function GetBankCardDetails(customerPaymentProfileId) {
  return request({
    url: `account/user/card/details/${customerPaymentProfileId}`,
    method: 'get'
  })
}

// Update bank card information
export function EditBankCard(data) {
  return request({
    url: `account/user/update/card`,
    method: 'post',
    data
  })
}

// Get bank card list by user id
export function GetBankCardList(userId) {
  return request({
    url: `account/user/list/card/${userId}`,
    method: 'get'
  })
}

// Update default payment
export function UpdateDefaultPayment(params) {
  return request({
    url: `account/user/update/default/payment/${params.defaultPayment}/${params.customerPaymentProfileId}`,
    method: 'get'
  })
}

// Delete bank card
export function DeleteBankCard(params) {
  return request({
    url: `account/user/delete/card/${params.customerPaymentProfileId}`,
    method: 'get'
  })
}

// Get Quota Settings
export function GetQuotaSettings() {
  return request({
    url: `jobbizweb/quotasettings`,
    method: 'get'
  })
}

// Get Quota Settings
export function GetVoucher(params) {
  return request({
    url: `jobbizweb/voucher`,
    method: 'get',
    params
  })
}
