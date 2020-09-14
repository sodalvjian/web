import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import userPage from './user-page'
// import rolesPage from './roles-page'
// import dashboard from './dashboard-page'
import apiPage from './api-page'
import annotateJobsPage from './annotate-jobs-page'
import realtimeAnalysis from './realtime-analysis-page'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/common/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/common/register/index'),
    hidden: true
  },
  {
    path: '/forgetPassword',
    component: () => import('@/views/common/forget-password/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }

  // 单个页面
  // 404 page must be placed at the end !!!
]
export const asyncRoutes = [
  // ...dashboard,

  // ...rolesPage,
  ...userPage,
  ...realtimeAnalysis,
  ...annotateJobsPage,
  ...apiPage
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
