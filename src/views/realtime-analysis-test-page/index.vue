<template>
  <div>
    <nav class="vital-container cb bb-1">
      <strong class="fl f16">Real-Time analysis</strong>
    </nav>
    <div class="vital-container realtime-top-content">
      <nav>
        <el-row type="flex">
          <el-col :span="8">
            <select-pipeline
              v-model="formData.pipeline"
              size="small"
              @get-complete-data="getCompleteData"
              @get-complete-options="getCompleteOptions"
            />
          </el-col>

          <el-col :span="16" align="right">
            <el-button size="small" @click="clearData">Clear</el-button>
            <el-button
              :loading="analysisLoading"
              size="small"
              type="primary"
              icon="el-icon-data-line"
              @click="handleAnalysis(false)"
            >Analyze</el-button>
          </el-col>
        </el-row>
      </nav>
      <section class="mt-15">
        <el-input
          v-model="formData.text"
          type="textarea"
          show-word-limit
          maxlength="4096"
          :rows="12"
          placeholder="Please enter"
        >
        </el-input>
      </section>
      <!-- Analyze result -->
      <analysis-result ref="analysisResultRef" />
    </div>
  </div>
</template>

<script>
import { GetAnalysisType } from '@/api/annotate-jobs-page'
import analysisResult from './components/AnalysisResult'
import { globalBus } from '@/utils/globalBus'
import { demoText } from '@/utils/demo-text'
export default {
  name: '',
  components: {
    analysisResult
  },
  props: {},
  filter: {},
  data() {
    return {
      analysisTypeOptions: [],
      pipelineLoading: false,
      analysisLoading: false,
      selectPipeline: {},

      formData: {
        pipeline: '',
        text: demoText
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.getAnalysisType()
    this.handleAnalysis(true)
    globalBus.$on('set-analysis-loading-false', () => {
      this.analysisLoading = false
    })
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    getCompleteOptions(val) {
      console.log('完整数据', val)
      const analysisChildTypeOptions = val
        .map(item => item.version)
        .flat(Infinity) // 将自己版本数据拉平
      console.log('analysisChildTypeOptions', analysisChildTypeOptions)
      this.formData.pipeline = analysisChildTypeOptions[0].params
      this.selectPipeline = analysisChildTypeOptions[0]
    },
    getCompleteData(val) {
      console.log('val', val)
      this.selectPipeline = val
    },
    handleAnalysis(loadType = false) {
      const { text } = this.formData
      const pipeline = this.selectPipeline.params
      console.log('pipeline', pipeline)
      if (!pipeline && !loadType) {
        this.$message.warning('Please select pipeline.')
        return false
      } else if (!text) {
        this.$message.warning('Please enter content.')
        return false
      }
      const params = {
        pipeline: pipeline,
        text: text,
        frontFlag: true
      }
      this.analysisLoading = true
      this.$refs.analysisResultRef.getResult(params, loadType)
    },
    clearData() {
      this.formData.text = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.realtime-top-content {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
<style lang="scss">
@import '@/styles/variables.scss';
#realtime-select-pipeline {
  width: 130px !important;
  padding-right: 10px;
}
.realtime-select-pipeline {
  .el-input__suffix {
    display: none;
  }
}
.analysis-result-table {
  .el-table__expanded-cell {
    padding: 10px 0px 10px 60px;
  }
  th {
    background-color: #fff;
    color: $mainColor;
  }
}
</style>
