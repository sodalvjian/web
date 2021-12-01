<template>
  <div>
    <nav class="vital-container cb bb-1">
      <strong class="fl f17 color-main">Real-Time analysis</strong>
    </nav>
    <div class="vital-container realtime-top-content">
      <nav>
        <el-row type="flex">
          <el-col :span="24">
            <div class="f16 fb mt-5 color-main">Select NLP pipeline:</div>
            <select-pipeline-split
              v-model="formData.pipeline"
              style="width:600px"
              class="mt-15"
              size="small"
              @get-complete-data="getCompleteData"
              @get-complete-options="getCompleteOptions"
            />
          </el-col>
        </el-row>
      </nav>
      <section class="mt-30">
        <div class="color-main mt-15 mb-15 f16 fb">Input text:</div>
        <div class="pr">
          <el-input
            v-model="formData.text"
            type="textarea"
            :class="{ 'input-limit-container-error': inputLimit }"
            @keydown.native="onKeyupInput"
            @keyup.native="onKeyupInput"
            @paste.native="onPaste"
            class="analysis-textarea"
            show-word-limit
            :rows="8"
            placeholder="Please enter"
          >
          </el-input>
          <span class="input-limit-container"
            >{{ formData.text.length }}/4096</span
          >
        </div>

        <p>
          <el-button size="small" @click="clearData">Clear</el-button>
          <el-button
            :loading="analysisLoading"
            size="small"
            :disabled="inputLimit"
            type="primary"
            icon="iconfont icon-Analyze"
            @click="handleAnalysis(false)"
          >
            Analyze</el-button
          >
        </p>
      </section>
    </div>
    <div class="vital-container analysis-content">
      <!-- Analyze result -->
      <analysis-result ref="analysisResultRef" />
    </div>
  </div>
</template>

<script>
import analysisResult from './components/AnalysisResult'
import { globalBus } from '@/utils/globalBus'
import { demoText } from '@/utils/demo-text'
import { message as Message } from '@/utils/resetMessage'
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
      inputLimit: false,
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
    onKeyupInput() {
      this.formData.text = this.formData.text.replace(/^\s/, '')
      if (this.formData.text.length > 4096) {
        this.inputLimit = true
        Message.error(
          'The length of your input text exceeds the limit of 4096. So it is truncated. Please use Batch Analysis or API to process the long notes.'
        )
      } else {
        this.inputLimit = false
      }
    },
    onPaste(evt) {
      const text = evt.clipboardData.getData('text')
      if (text.length > 4096) {
        Message.error(
          'You have reached the allowable character limit. Data has been truncated.'
        )
        this.inputLimit = true
      } else {
        this.inputLimit = false
      }
    },
    getCompleteOptions(val) {
      console.log('完整数据', val)
      const analysisChildTypeOptions = val
        .map(item => item.version)
        .flat(Infinity) // 将自己版本数据拉平
      console.log('analysisChildTypeOptions', analysisChildTypeOptions)
      this.$nextTick(() => {
        this.formData.pipeline = analysisChildTypeOptions[0].params
        this.selectPipeline = analysisChildTypeOptions[0]
      })
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
        this.$message.warning('Input text is missing.')
        return false
      }
      const params = {
        pipeline: pipeline,
        text: text.trim(),
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
.input-limit-container {
  position: absolute;
  bottom: -20px;
  width: 200px;
  right: 0;
  text-align: right;
  font-size: 12px;
  color: #7492b5;
}
.realtime-top-content {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.analysis-content {
  border-top: 15px solid #f5f7fe;
}
</style>
<style lang="scss">
@import '@/styles/variables.scss';
.input-limit-container-error {
  textarea {
    border: 2px solid #ff8888;
    &:hover {
      border: 2px solid #db3535;
    }
    &:focus {
      border: 2px solid #db3535;
    }
  }
}
.analysis-textarea {
  textarea {
    background-color: #f1f4fc;
  }
}
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
