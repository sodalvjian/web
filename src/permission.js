import router from './router'
import store from './store'
import { message as Message } from '@/utils/resetMessage'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = [
  '/',
  '/login',
  '/register',
  '/forgetPassword',
  '/test-nlp',
  '/loginAuto',
  '/sendEmailSuccess'
] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.state.user.roles
      if (hasRoles) {
        if (to.path === '/document') {
          NProgress.done()
        }
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const roles = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )

          console.log('accessRoutes', accessRoutes)
          // dynamically add accessible routes
          router.addRoutes(accessRoutes)
          router.addRoutes([{ path: '*', redirect: '/404', hidden: true }])

          // console.log('router', router)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login`)
          NProgress.done()
        }
        // const { roles } = await store.dispatch('user/getInfo')
        // store.dispatch('permission/generateRoutes').then(addRouters => {
        //   addRouters.map(item => {
        //     router.options.routes.push(item)
        //   })
        //   router.addRoutes(addRouters)
        //   next()
        // })
      }

      // const hasGetUserInfo = store.getters.name
      // const hasRoles = store.getters.roles
      // const  roles  = store.getters.roles
      // const accessRoutes = await store.dispatch(
      //   'permission/generateRoutes',
      //   roles
      // )
      // console.log('权限', accessRoutes)
      // router.addRoutes(accessRoutes)
      // get user info
      // await store.dispatch('user/getInfo')
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
