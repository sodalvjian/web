import moment from 'moment'

export function setDayDate(val) {
  return moment(val).format('YYYY-MM-DD')
}
export function setHourDate(val) {
  return val ? moment(val).format('YYYY-MM-DD HH:mm:ss') : '--'
}
export function emptyShow(val) {
  return val || '--'
}
