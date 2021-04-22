import moment from 'moment'

export function setDayDate(val) {
  const testDateUtc = moment.utc(val)
  const localDate = moment(testDateUtc).local()
  return val ? localDate.format('YYYY-MM-DD') : '--'
}
export function setNormalDate(val) {
  return val ? moment(val).format('YYYY-MM-DD') : '--'
}
export function setHourDate(val) {
  const testDateUtc = moment.utc(val)
  const localDate = moment(testDateUtc).local()
  return val ? localDate.format('YYYY-MM-DD HH:mm:ss') : '--'
}
export function emptyShow(val) {
  return val || '--'
}
