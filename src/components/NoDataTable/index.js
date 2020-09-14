import no_data_table from './index.vue'

// 这里是重点
const NoDataTable = {
  install: function(Vue) {
    Vue.component('no-data-table', no_data_table)
  }
}

// 导出组件
export default NoDataTable
