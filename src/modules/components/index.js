// 自定义全局组件
import Vue from 'vue'

import SelectPipeline from './SelectPipeline' // 选择pipeline
import SelectPipelineSplit from './SelectPipelineSplit' // 选择pipeline-拆分版
Vue.component('select-pipeline', SelectPipeline)
Vue.component('select-pipeline-split', SelectPipelineSplit)
