<template>
  <el-row type="flex">
    <el-col :span="20">
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
      >
        <template slot-scope="{ data }">
          <span>{{ data.showName }}</span>
        </template></el-cascader
      >
    </el-col>
    <el-col :span="4">
      <el-tooltip
        v-show="selectPipeline.unitPrice"
        class="item"
        effect="dark"
        placement="top"
      >
        <div slot="content">
          Pricing: ${{ (selectPipeline.unitPrice * 100).toFixed(3) }}/unit;
          100byte/unit
          <br />
          Description: {{ selectPipeline.description }}
        </div>
        <i class="mt-8 ml-20 el-icon-info f18 color-hui cp"></i>
      </el-tooltip>
    </el-col>
  </el-row>
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
    fetchList: {
      type: Boolean,
      default: false
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
      selectPipeline: {
        unitPrice: 0
      },
      propsOption: {
        expandTrigger: 'hover',
        value: 'params',
        label: 'showName'
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
  activated() {
    this.getData()
  },
  mounted() {
    if (this.fetchList) {
      this.getData()
    }
  },
  methods: {
    handleChange(val) {
      const selectData = val[1]
      const childOptions = this.optionsList
        .map(item => item.version)
        .flat(Infinity) // 将自己版本数据拉平
      const resultData = childOptions.find(item => item.params === selectData)
      this.selectPipeline = resultData
      this.$emit('get-complete-data', resultData)
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
            item.showName = item.lamdaName
            item.children = item.version
            item.version.map(child => {
              child.showName = `${child.name}:${child.version}`
            })
          })
          this.optionsList = resultData
          console.log('resultData', resultData)
          this.$emit('get-complete-options', resultData)
          this.getCompleteOptions(resultData)
          loading.close()
        }
      })
    },
    getCompleteOptions(val) {
      console.log('完整数据', val)
      const analysisChildTypeOptions = val
        .map(item => item.version)
        .flat(Infinity)
      // .flat(Infinity) // 将自己版本数据拉平
      console.log('analysisChildTypeOptions', analysisChildTypeOptions)

      this.selectPipeline = analysisChildTypeOptions[0]
    }
  }
}
</script>
<style lang="scss" scoped></style>
