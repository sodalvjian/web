import Cookies from 'js-cookie'
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  errorLogs: state => state.errorLog.logs,
  roles: state =>
    state.user.roles ? state.user.roles : Cookies.get('userRoles'),
  userInfo: state =>
    state.user.userInfo
      ? state.user.userInfo
      : JSON.parse(Cookies.get('userInfo')),
  permission_routes: state => state.permission.routes
}
export default getters
