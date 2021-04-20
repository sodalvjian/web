// 自定义全局组件
import Vue from 'vue'

import SelectPipeline from './SelectPipeline' // 选择pipeline
import StripeSaveCard from './StripeSaveCard' // Stripe绑卡
Vue.component('select-pipeline', SelectPipeline)
Vue.component('stripe-save-card', StripeSaveCard)
