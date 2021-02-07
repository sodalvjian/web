<template>
  <div>
    <nav class="vital-container cb bb-1">
      <strong class="fl f16">Realtime analysis</strong>
    </nav>
    <div class="vital-container realtime-top-content">
      <nav>
        <el-row>
          <el-col :span="5">
            <select-pipeline size="small" v-model="formData.pipeline" />
          </el-col>
          <el-col :span="19" align="right">
            <el-button size="small" @click="clearData">Clear</el-button>
            <el-button
              :loading="analysisLoading"
              size="small"
              type="primary"
              icon="el-icon-data-line"
              @click="handleAnalysis(false)"
              >Analysis</el-button
            >
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
      <!-- Analysis result -->
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
    this.getAnalysisType()
    this.handleAnalysis(true)
    globalBus.$on('set-analysis-loading-false', () => {
      this.analysisLoading = false
    })
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    handleAnalysis(loadType = false) {
      const { pipeline, text } = this.formData
      if (!pipeline && !loadType) {
        this.$message.warning('Please select pipeline.')
        return false
      } else if (!text) {
        this.$message.warning('Please enter content.')
        return false
      }
      const params = {
        pipeline: pipeline,
        text: text
      }
      this.analysisLoading = true
      this.$refs.analysisResultRef.getResult(params, loadType)
    },
    getAnalysisType() {
      this.pipelineLoading = true
      GetAnalysisType().then(res => {
        if (res.code === 200) {
          this.pipelineLoading = false
          this.analysisTypeOptions = res.data
          const analysisChildTypeOptions = res.data
            .map(item => item.version)
            .flat(Infinity) // 将自己版本数据拉平
          this.formData.pipeline = analysisChildTypeOptions[0].params
        }
      })
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
