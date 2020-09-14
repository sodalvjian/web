import no_data from './index.vue'

// 这里是重点
const NoData = {
  install: function(Vue) {
    Vue.component('no-data', no_data)
  }
}

// 导出组件
export default NoData
