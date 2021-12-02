<template>
  <section>
    <el-row type="flex" :gutter="20">
      <el-col :span="12">
        <el-select
          v-model="selectPipelineData"
          class="w"
          size="small"
          placeholder="Select pipeline"
          @change="onChangePipeline"
        >
          <el-option
            v-for="(item, index) in optionsList"
            :key="index"
            :label="item.lamdaName"
            :value="item.lamdaName"
          >
            <!-- <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span> -->
          </el-option>
        </el-select>
        <!-- <el-cascader
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
      > -->
      </el-col>
      <el-col :span="12">
        <el-select
          v-model="model"
          class="w "
          popper-class="select-version"
          size="small"
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
        <!-- <el-tooltip
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
        <span class="ml-20 f18 color-white cp icon-info">$</span>
      </el-tooltip> -->
      </el-col>
    </el-row>
    <div class="color-main mt-20 mb-15 f16 fb">
      Pipeline description & Price information:
    </div>
    <div>
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
    onChangePipeline(val) {
      const versionList = (
        this.optionsList.find(item => item.lamdaName === val) || {}
      ).version
      this.versionList = versionList
      this.model = ''
      console.log('versionList', versionList)
      this.selectPipeline = this.$options.data().selectPipeline
      this.$emit('get-complete-data', {})
    },
    handleChange(val) {
      console.log('val', val)
      // const selectData = val[1]
      // const childOptions = this.optionsList
      //   .map(item => item.version)
      //   .flat(Infinity) // 将自己版本数据拉平
      // const resultData = childOptions.find(item => item.params === selectData)

      const resultData = this.versionList.find(item => item.params === val)
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
          // resultData.map(item => {
          //   item.showName = item.lamdaName
          //   item.children = item.version
          //   item.version.map(child => {
          //     child.showName = `${child.name}:${child.version}`
          //   })
          // })
          this.optionsList = resultData
          console.log('resultData', resultData)
          const [current] = resultData
          this.selectPipelineData = current.lamdaName
          this.onChangePipeline(current.lamdaName)
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
