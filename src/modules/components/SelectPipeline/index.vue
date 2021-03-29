<template>
  <div>
    <el-cascader
      v-model="model"
      :options="optionsList"
      class="w"
      :props="propsOption"
      :show-all-levels="false"
      placeholder="Select pipeline"
      :size="size"
      @visible-change="visibleChange"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
import { GetAnalysisType } from '@/api/annotate-jobs-page'
export default {
  name: 'SelectPipeline',
  components: {},
  props: {
    value: {
      type: [String, Number, Array],
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    name: { type: Boolean, default: false }, // name-name
    disabled: { type: Boolean }, // 设置不可点击
    allShow: { type: Boolean }, // 设置是否显全部
    multiple: { type: Boolean } // 设置是否多选
  },
  filter: {},
  data() {
    return {
      loading: false,
      model: this.value,
      optionsList: [],

      propsOption: {
        expandTrigger: 'hover',
        value: 'params',
        label: 'params'
      }
    }
  },
  computed: {},
  watch: {
    // 监听外界传来的v-model的值
    value(newVal) {
      this.model = newVal
    },
    // 判断下拉框的值是否有改变
    model(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('input', this.model)
      }
    }
  },
  created() {},
  mounted() {
    this.getData()
  },
  methods: {
    handleChange(val) {
      // 处理多选及单选的情况
      if (this.multiple) {
        const resultArr = this.optionsList.filter((ele, index, arr) => {
          return val.some(item => {
            return item === ele.siteCode
          })
        })
        this.$emit('get-complete-data', resultArr)
      } else {
        const resultArr = this.optionsList.find(item => {
          return item.siteCode === val
        })
        this.$emit('get-complete-data', resultArr)
      }
    },
    // 下拉框出现时重新加载数据
    visibleChange(val) {
      // val && this.getData()
    },
    getData() {
      const loading = this.$loading({
        lock: true
      })
      GetAnalysisType().then(res => {
        if (res.code === 200) {
          const resultData = res.data
          resultData.map(item => {
            item.params = item.lamdaName
            item.children = item.version
          })
          this.optionsList = resultData
          console.log('res消息啊啊啊', this.optionsList)
          this.$emit('get-complete-options', resultData)
          loading.close()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
