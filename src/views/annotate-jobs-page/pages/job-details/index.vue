<template>
  <div class="vital-container">
    <nav class="cb">
      <strong class="fl nav-title mt-10 f16">Job details</strong>
      <div class="fr">
        <el-button
          class="filter-item shadow"
          type="primary"
          size="small"
          icon="el-icon-document-copy"
          @click="createJobAgain"
          >Copy</el-button
        >
      </div>
    </nav>
    <section v-loading="pageLoading" class="bg-color-gray mt-15 bd-1">
      <el-row :gutter="15" class="p20">
        <el-col :span="8" class="tc">
          Job Name: <strong> {{ detailData.name }}</strong>
        </el-col>
        <el-col :span="8" class="tc">
          Analysis Type:<strong> {{ detailData.pipeline }}</strong>
        </el-col>
        <el-col :span="8" class="tc">
          Job ID: <strong>{{ detailData.bizId }}</strong>
        </el-col>
      </el-row>
      <el-divider class="m-0"></el-divider>
      <el-row :gutter="15" class="p20">
        <el-col :span="8" class="tc">
          Created Time: <strong> {{ detailData.date }}</strong>
        </el-col>
        <el-col :span="8" class="tc">
          <el-row :gutter="10">
            <el-col :span="6" align="right">
              Status:
            </el-col>
            <el-col :span="18">
              <el-tooltip
                class="item"
                effect="dark"
                :content="setTooltipContent"
                placement="top"
              >
                <span v-if="detailData.status === 'STOPPED'">--</span>
                <div
                  v-else-if="
                    detailData.status === 'STARTED' ||
                      detailData.status === 'STARTING'
                  "
                  class="progress-running"
                >
                  <el-progress class="w" :percentage="0"></el-progress
                  ><i class="progress-running-icon el-icon-loading"></i>
                </div>
                <el-progress
                  v-else
                  :percentage="progressNum"
                  :status="setStatus"
                ></el-progress>
              </el-tooltip>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" class="tc">
          Updated Time: <strong> {{ detailData.update }}</strong>
        </el-col> </el-row
      ><el-row :gutter="15" class="p20">
        <el-col :span="8" class="tc">
          <el-card shadow="never">
            <div class="f15">Number of ducuments</div>
            <div class="fb f32 mt-20">{{ detailData.processedCount }}</div>
          </el-card>
        </el-col>
        <el-col :span="8" class="tc">
          <el-card shadow="never">
            <div class="f15">Number of Entity</div>
            <div class="fb f32 mt-20">{{ detailData.processedEntities }}</div>
          </el-card>
        </el-col>
        <el-col :span="8" class="tc">
          <el-card shadow="never">
            <div class="f15">Number of relation</div>
            <div class="fb f32 mt-20">{{ detailData.processedRelations }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="15" class="p20">
        <el-col :span="24" class="tl">
          Input location:
          <strong> {{ detailData.input }}</strong>
          <span
            ><i
              v-clipboard:copy="detailData.input"
              v-clipboard:success="copySuccess"
              class="el-icon-document-copy cp ml-5"
            ></i
          ></span>
        </el-col>
      </el-row>
      <el-divider class="m-0"></el-divider>
      <el-row :gutter="15" class="p20">
        <el-col :span="24" class="tl">
          Output location:
          <strong> {{ detailData.output }}</strong>
          <span
            ><i
              v-clipboard:copy="detailData.output"
              v-clipboard:success="copySuccess"
              class="el-icon-document-copy cp ml-5"
            ></i
          ></span>
        </el-col> </el-row
      ><el-divider class="m-0"></el-divider>
      <el-row :gutter="15" class="p20">
        <el-col :span="24" class="tl">
          Cost:
          <strong class="f20 color-main"> {{ costData }}</strong>
          <small> $</small>
        </el-col>
      </el-row>
    </section>
    <section class="mt-40">
      <h3 class="mb-0">Application integration</h3>
      <div class="mt-10">
        We create a font convention to ensure the best presentation across
        different platforms.
      </div>
      <el-divider></el-divider>
      <el-row :gutter="30">
        <el-col v-loading="pageLoading" :span="12">
          <div class="cb">
            <div class="fl fb mt-8">
              API call
            </div>
            <div class="fr">
              <el-button
                v-clipboard:copy="apiCallData"
                v-clipboard:success="copySuccess"
                class="filter-item shadow"
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
            <div class="fl fb mt-8">
              API response
            </div>
            <div class="fr">
              <el-button
                v-clipboard:copy="apiResponseData"
                v-clipboard:success="copySuccess"
                class="filter-item shadow"
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
    </section>
  </div>
</template>

<script>
import { GetDetail, GetCostData } from '@/api/annotate-jobs-page'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/display/autorefresh'
export default {
  name: 'InlineEditTable',
  components: {
    codemirror
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
      } else if (this.detailData.status === 'FAILED') {
        return 100
      } else {
        return 0
      }
    },
    setStatus() {
      const processNum =
        this.detailData.processedSize / this.detailData.totalSize
      return this.detailData.processedErrCount > 0
        ? 'warning'
        : processNum
        ? Math.round(processNum * 100) >= 100
          ? 'success'
          : ''
        : 'exception'
    },
    setTooltipContent() {
      console.log('详细信息', this.detailData.status)
      if (this.detailData.processedErrCount > 0) {
        return `Error count: ${this.detailData.processedErrCount}`
      } else {
        return this.detailData.status
      }
    },
    codemirror() {
      return this.$refs.jsonEditor.codemirror
    }
  },
  mounted() {
    this.getData()
    this.getCostData()
  },
  methods: {
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
          this.$nextTick(() => {
            this.codemirror.setValue(
              JSON.stringify(JSON.parse(this.apiResponseData), null, 2)
            )
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
