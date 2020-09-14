import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import NoData from '@/components/NoData'
Vue.use(NoData)

import NoDataTable from '@/components/NoDataTable'
Vue.use(NoDataTable)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import './utils/error-log' // error log

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import * as filters from './filters' // global filters

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

window.baseUrl = process.env.VUE_APP_BASE_API // 设置全局URL头

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
