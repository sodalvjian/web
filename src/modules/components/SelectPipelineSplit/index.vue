<template>
  <section>
    <el-row type="flex" :gutter="20">
      <el-col :span="12">
        <el-select
          v-model="selectPipelineData"
          class="w"
          :size="size"
          filterable
          placeholder="Select Pipeline"
          @change="onChangePipeline"
        >
          <el-option
            v-for="(item, index) in optionsList"
            :key="index"
            :label="item.lamdaName"
            :value="item.lamdaName"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <el-select
          v-model="model"
          class="w "
          popper-class="select-version"
          :size="size"
          placeholder="Select version"
          @change="handleChange"
        >
          <el-option
            v-for="item in versionList"
            :key="item.id"
            :label="item.version"
            :value="item.params"
          >
            <div>{{ item.version }}</div>
            <div
              :title="item.description"
              class="version-item-description"
              style="color: #8492a6; font-size: 12px;margin-top:-10px"
            >
              {{ item.description }}
            </div>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="color-main mt-20 f16 fb">
      Pipeline Description & Pipeline Information:
    </div>
    <div class="mt-10">
      <strong class="mr-10">Pricing:</strong>
      {{
        selectPipeline.unitPrice
          ? (selectPipeline.unitPrice * 100).toFixed(3) + '/unit;100byte/unit'
          : '--'
      }}
    </div>
    <div class="mt-10" style="line-height: 1.7;">
      <strong class="mr-10">Description:</strong>
      {{ selectPipeline.description || '--' }}
    </div>
  </section>
</template>

<script>
import { GetAnalysisType } from '@/api/annotate-jobs-page'
import { deepClone } from '@/utils/method'
export default {
  name: 'SelectPipelineSplit',
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
      isCopy: this.$route.query.copy,
      selectPipeline: {
        unitPrice: 0,
        description: ''
      },
      propsOption: {
        expandTrigger: 'hover',
        value: 'params',
        label: 'showName'
      },
      selectPipelineData: '',
      versionList: []
    }
  },
  computed: {},
  watch: {
    // 监听外界传来的v-model的值
    value: {
      handler(newVal, oldName) {
        this.model = newVal
      },
      immediate: true,
      deep: true
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
    if (this.fetchList && !this.isCopy) {
      this.getData()
    }
  },
  methods: {
    onChangePipeline(val) {
      const versionList = (
        this.optionsList.find(item => item.lamdaName === val) || {}
      ).version
      this.versionList = versionList
      // this.model = ''
      console.log('versionList', versionList)
      const [currentPipeline] = versionList
      this.selectPipeline = currentPipeline
      this.model = currentPipeline.params || ''
      console.log('currentPipeline.params', currentPipeline.params)
      this.$emit('get-complete-data', currentPipeline)
    },
    handleChange(val) {
      const resultData = this.versionList.find(item => item.params === val)
      this.selectPipeline = resultData
      this.$emit('get-complete-data', resultData)
    },
    // 下拉框出现时重新加载数据
    visibleChange(val) {
      val && this.getData()
    },
    getData(value = '') {
      const loading = this.$loading({
        lock: true
      })
      GetAnalysisType().then(res => {
        if (res.code === 200) {
          const resultData = res.data
          this.optionsList = deepClone(resultData)
          console.log('resultData', resultData)
          if (this.isCopy) {
            const copyData = deepClone(resultData)
            const analysisChildTypeOptions = copyData
              .map(item => item.version)
              .flat(Infinity)
            console.log('value', value)
            analysisChildTypeOptions.forEach(item => {
              if (item.params === value) {
                this.onChangePipeline(item.name)
                this.selectPipelineData = item.name
              }
            })
            this.handleChange(value)
          } else {
            const [current] = resultData
            this.selectPipelineData = current.lamdaName
            this.onChangePipeline(current.lamdaName)
          }
          this.$emit('get-complete-options', resultData)
          // this.getCompleteOptions(resultData)
          loading.close()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-info {
  margin-top: 3px;
  background-color: #424780;
  border-radius: 50%;
  width: 25px;
  height: 24px;
  display: inline-block;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
}
.select-version {
  li {
    height: 60px;
    max-width: 450px !important;
    .version-item-description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
