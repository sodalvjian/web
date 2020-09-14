import { asyncRoutes, constantRoutes } from '@/router'
// import rolesRouter from '@/router/roles-page'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.roles) {
    // console.log('一次判断', roles, route.roles)
    // console.log('二次判断', roles.indexOf(route.roles) !== -1)
    // console.log('二次判断', roles.indexOf(route.meta.roles))
    return roles.indexOf(route.roles) !== -1
  } else {
    return false
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  // console.log(111, routes, roles)

  routes.forEach(route => {
    const tmp = { ...route }
    // console.log('tmp', tmp)
    if (hasPermission(roles, tmp)) {
      // if (tmp.children) {
      //   tmp.children = filterAsyncRoutes(tmp.children, roles)
      // }
      res.push(tmp)
    }
    // if (tmp.children) {
    //   tmp.children.forEach(child => {
    //     if (hasPermission(roles, child)) {
    //       if (child.children) {
    //         child.children = filterAsyncRoutes(child.children, roles)
    //       }
    //       res.push(tmp)
    //     }
    //   })
    // }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    // console.log('过来的route', routes)
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      // console.log('权限', roles)
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      commit('SET_ROUTES', accessedRoutes)
      // console.log('处理过的权限', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
