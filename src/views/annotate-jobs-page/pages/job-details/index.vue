<template>
  <div class="vital-container">
    <nav class="cb">
      <div class="f17 color-main">
        <router-link to="/annotateJobs" class="color-main f17"
          ><i class="el-icon-arrow-left fb"></i>
          <span class="color-hui">Batch Analysis</span></router-link
        >
        <span class="ml-5 mr-5">/</span> Job details
      </div>
      <div class="fr">
        <el-button
          class="shadow filter-item"
          type="primary"
          size="mini"
          icon="el-icon-document-copy"
          @click="createJobAgain"
          >Clone job</el-button
        >
      </div>
    </nav>
    <section v-loading="pageLoading" class="bg-color-gray mt-15 bd-1">
      <el-row :gutter="15" class="p20">
        <el-col :span="7" align="left">
          Job Name: <strong> {{ detailData.name }}</strong>
        </el-col>
        <el-col :span="10" align="left">
          Pipeline:<strong> {{ detailData.pipeline }}</strong>
        </el-col>
        <el-col :span="7" align="left">
          Job ID: <strong>{{ detailData.bizId }}</strong>
        </el-col>
      </el-row>
      <el-divider class="m-0"></el-divider>
      <el-row :gutter="15" class="p20">
        <el-col :span="7" align="left">
          Created Time: <strong> {{ detailData.date | setHourDate }}</strong>
        </el-col>
        <el-col :span="10" align="left">
          <el-row :gutter="5">
            <el-col :span="22">
              <span style="width:55px" class="fl">Status:</span>
              <span style="width: calc(100% - 70px);float: left;" class="pr-10">
                <el-tooltip
                  v-if="
                    detailData.status === 'STOPPED' ||
                      detailData.status === 'CANCELED' ||
                      detailData.reqStatus === 'STOPPED' ||
                      detailData.reqStatus === 'STOPPING'
                  "
                  :content="setTooltipContent"
                  class="cp"
                  placement="top"
                >
                  <span
                    v-if="
                      detailData.subStatus === 'FAILED_TASK_LIMIT' ||
                        detailData.subStatus === 'FAILED_QUOTA_LIMIT'
                    "
                    ><i class="el-icon-warning color-yellow f18"></i></span
                  ><span v-else>--</span>
                </el-tooltip>

                <el-tooltip
                  v-else-if="
                    detailData.status === 'STARTED' ||
                      detailData.status === 'STARTING'
                  "
                  class="cp"
                  effect="dark"
                  :content="setTooltipContent"
                  placement="top"
                >
                  <div class="progress-running">
                    <el-progress
                      class="w"
                      :stroke-width="8"
                      :percentage="setProcessData(detailData)"
                    ></el-progress
                    ><i
                      style="right:1%"
                      class="progress-running-icon el-icon-loading"
                    ></i>
                  </div>
                </el-tooltip>
                <el-progress
                  v-else
                  :percentage="progressNum"
                  :stroke-width="8"
                  :status="setStatus"
                ></el-progress>
              </span>
              <el-tooltip
                v-if="detailData.passFileCount"
                placement="top"
                :content="
                  `${detailData.passFileCount} file${
                    detailData.passFileCount !== 1 ? 's' : ''
                  } exceeded the limit`
                "
                ><i
                  style="margin-left:-20px"
                  class="el-icon-info f17 color-yellow"
                ></i
              ></el-tooltip>
            </el-col>
            <el-col :span="2"> </el-col>
          </el-row>
        </el-col>
        <el-col :span="7" align="left">
          Updated Time: <strong> {{ detailData.update | setHourDate }}</strong>
        </el-col> </el-row
      ><el-row :gutter="15" class="p20">
        <el-col :span="7" align="left">
          <el-card shadow="never" class="job-detail-count">
            <div class="f18">Ducuments</div>
            <div class="mt-20 fb f32">{{ detailData.processedCount }}</div>
          </el-card>
        </el-col>
        <el-col :span="7" align="left">
          <el-card shadow="never" class="job-detail-entities">
            <div class="f18">Entities</div>
            <div class="mt-20 fb f32">{{ detailData.processedEntities }}</div>
          </el-card>
        </el-col>
        <el-col :span="7" align="left">
          <el-card shadow="never" class="job-detail-relations">
            <div class="f18">Relations</div>
            <div class="mt-20 fb f32">{{ detailData.processedRelations }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="15" class="p20">
        <el-col :span="24" class="tl">
          Input location:
          <strong class="job-detail-location"> {{ detailData.input }}</strong>
          <span
            ><i
              v-clipboard:copy="detailData.input"
              v-clipboard:success="copySuccess"
              class="ml-5 el-icon-document-copy cp color-light-blue"
            ></i
          ></span>
        </el-col>
      </el-row>
      <el-row :gutter="15" class="p20">
        <el-col :span="24" class="tl">
          Output location:
          <strong class="job-detail-location"> {{ detailData.output }}</strong>
          <span
            ><i
              v-clipboard:copy="detailData.output"
              v-clipboard:success="copySuccess"
              class="ml-5 el-icon-document-copy cp color-light-blue"
            ></i
          ></span>
        </el-col>
      </el-row>
    </section>
    <div class="mt-20">
      Cost:
      <strong class="f20 color-light-blue">
        <small> $</small> {{ costData }}</strong
      >
    </div>
    <!-- <section class="mt-40">
      <h3 class="mb-0">Application integration</h3>
      <div class="mt-10">
        We create a font convention to ensure the best presentation across
        different platforms.
      </div>
      <el-divider></el-divider>
      <el-row :gutter="30">
        <el-col v-loading="pageLoading" :span="12">
          <div class="cb">
            <div class="mt-8 fl fb">
              API call
            </div>
            <div class="fr">
              <el-button
                v-clipboard:copy="apiCallData"
                v-clipboard:success="copySuccess"
                class="shadow filter-item"
                type="primary"
                size="mini"
                icon="el-icon-document-copy"
                >Copy</el-button
              >
            </div>
          </div>
          <div class="mt-10">
            <codemirror v-model="apiCallData" :options="cmOptions"></codemirror>
          </div>
        </el-col>
        <el-col v-loading="pageLoading" :span="12">
          <div class="cb">
            <div class="mt-8 fl fb">
              API response
            </div>
            <div class="fr">
              <el-button
                v-clipboard:copy="apiResponseData"
                v-clipboard:success="copySuccess"
                class="shadow filter-item"
                type="primary"
                size="mini"
                icon="el-icon-document-copy"
                >Copy</el-button
              >
            </div>
          </div>
          <div class="mt-10">
            <codemirror
              ref="jsonEditor"
              v-model="apiResponseData"
              :options="cmOptions"
            ></codemirror>
          </div>
        </el-col>
      </el-row>
    </section> -->
  </div>
</template>

<script>
import { GetDetail, GetCostData } from '@/api/annotate-jobs-page'
// import { codemirror } from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/addon/display/autorefresh'
export default {
  name: 'InlineEditTable',
  components: {
    // codemirror
  },
  filters: {},
  data() {
    return {
      pageLoading: false,
      detailData: {},
      sqlData: '',
      apiCallData: '',
      apiResponseData: '',
      costData: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        lineWrapping: true,
        mode: 'json',
        lineNumbers: true
      }
    }
  },
  computed: {
    progressNum() {
      const processNum =
        this.detailData.processedSize / this.detailData.totalSize
      if (processNum) {
        if (Math.round(processNum * 100) >= 100) {
          return 100
        } else {
          return Math.round(processNum * 100)
        }
      } else if (
        this.detailData.status === 'FAILED' ||
        this.detailData.status === 'COMPLETED'
      ) {
        return 100
      } else {
        return 0
      }
    },
    setStatus() {
      const processNum =
        this.detailData.processedSize / this.detailData.totalSize
      if (
        this.detailData.totalSize === 0 &&
        this.detailData.processedCount === 0
      ) {
        return 'success'
      } else {
        return this.detailData.processedErrCount > 0
          ? 'warning'
          : processNum
          ? Math.round(processNum * 100) >= 100
            ? 'success'
            : ''
          : 'exception'
      }
    },
    setTooltipContent() {
      console.log('详细信息', this.detailData.status)
      const processNum =
        this.detailData.processedSize / this.detailData.totalSize
      if (this.detailData.processedErrCount > 0) {
        return `Error count: ${this.detailData.processedErrCount}`
      } else if (
        this.detailData.subStatus === 'FAILED_TASK_LIMIT' ||
        this.detailData.subStatus === 'FAILED_QUOTA_LIMIT'
      ) {
        return `Out of limit, please contact us.`
      } else if (
        this.detailData.status === 'STARTED' ||
        this.detailData.status === 'STARTING'
      ) {
        return (processNum ? Math.round(processNum * 100) : 0) + '%'
      } else {
        return this.detailData.status
      }
    }
    // codemirror() {
    //   return this.$refs.jsonEditor.codemirror
    // }
  },
  mounted() {
    this.getData()
    this.getCostData()
  },
  methods: {
    // 设置进行中的百分比
    setProcessData(row) {
      return parseInt((row.processedSize / row.totalSize) * 100) || 0
    },
    createJobAgain() {
      this.$router.push({
        path: '/annotateJobs',
        query: { createStatus: true, copy: true }
      })
      sessionStorage.copyJobData = this.apiResponseData
    },
    copySuccess() {
      this.$message.success('Copy success!')
    },
    getCostData() {
      const bizId = this.$route.query.bizId
      GetCostData(bizId).then(res => {
        this.costData = res.data || 0
      })
    },
    getData() {
      const params = {
        bizId: this.$route.query.bizId
      }
      this.pageLoading = true
      GetDetail(params).then(res => {
        if (res.code === 200) {
          this.pageLoading = false
          this.detailData = res.data
          this.apiCallData = JSON.stringify(params)
          this.apiResponseData = JSON.stringify(res.data)
          // this.$nextTick(() => {
          //   this.codemirror.setValue(
          //     JSON.stringify(JSON.parse(this.apiResponseData), null, 2)
          //   )
          // })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.job-detail-location {
  color: #2d5b82;
}
.job-detail-count {
  background-image: url('../../../../assets/img/ducuments.png');
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-size: 65px;
  background-position-y: 25px;
}
.job-detail-entities {
  background-image: url('../../../../assets/img/entities.png');
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-size: 65px;
  background-position-y: 25px;
}
.job-detail-relations {
  background-image: url('../../../../assets/img/relation.png');
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-size: 65px;
  background-position-y: 25px;
}
</style>
