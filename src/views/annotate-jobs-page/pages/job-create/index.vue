<template>
  <div class="vital-container">
    <nav class="cb">
      <strong class="fl nav-title mt-10 f16"
        ><span class="color-gray"> Job details > </span>
        <small>New job</small></strong
      >
    </nav>
    <el-form
      ref="formData"
      label-position="top"
      :model="formData"
      label-width="80px"
    >
      <section v-loading="pageLoading" class="bg-color-gray mt-20 bd-1">
        <el-row :gutter="15" class="p20">
          <el-col :span="8">
            <strong class="f16">Job Setting</strong>
          </el-col>
        </el-row>
        <el-divider class="m-0"></el-divider>
        <el-row :gutter="20">
          <el-col :span="12" class="br-1">
            <div class="p20">
              <el-form-item
                label="Job name"
                prop="name"
                :rules="{ required: true }"
              >
                <el-input
                  v-model="formData.name"
                  placeholder="Input your job name"
                ></el-input>
              </el-form-item>
              <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i> Support for
                letters, Numbers and their combinations 2.Please enter 6
                characters to 256 characters
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="p20">
              <el-form-item
                label="Analysis Type"
                prop="pipelineId"
                :rules="{ required: true }"
              >
                <el-input v-model="formData.pipelineId" readonly>
                  <el-select
                    id="select-pipeline"
                    slot="append"
                    v-model="formData.pipelineId"
                    class="w"
                    popper-class=""
                    placeholder="Please select…"
                    @change="changepipeline"
                  >
                    <el-option-group
                      v-for="(group, index) in analysisTypeOptions"
                      :key="index"
                      :label="group.lamdaName"
                    >
                      <el-option
                        v-for="item in group.version"
                        :key="item.id"
                        :label="item.params"
                        :value="item.params"
                      >
                      </el-option>
                    </el-option-group>
                  </el-select>
                  <!-- <el-button
                    slot="append"
                    @click="
                      openBrowse('output', {
                        label: outRegionLabel,
                        value: outRegion
                      })
                    "
                    >Change pipeline
                  </el-button> -->
                </el-input>
              </el-form-item>
            </div>
          </el-col></el-row
        >
      </section>
      <section v-loading="pageLoading" class="bg-color-gray mt-25 bd-1">
        <el-row :gutter="20" class="">
          <el-col :span="12" class="br-1">
            <strong class="f16 p20 disinblock">Input Data</strong>
          </el-col>
          <el-col :span="12">
            <strong class="f16 p20 disinblock fl">Output Data</strong>
            <el-popover
              v-model="popoverVisible"
              placement="top-end"
              trigger="manual"
              width="300"
            >
              <el-radio-group v-model="encryptionRadio" class="w">
                <el-radio label="AES-256">AES-256</el-radio>
                <div class="encryption-handle mt-10">
                  <el-radio label=""></el-radio>
                  <div class="encryption-input">
                    <el-input
                      v-model="encryptionHandle"
                      clearable
                      placeholder="Please enter kms key"
                      size="mini"
                      @change="handleEncryption"
                    ></el-input>
                  </div>
                </div>
              </el-radio-group>
              <div class="tr mt-20">
                <el-button
                  size="mini"
                  type="text"
                  @click="popoverVisible = false"
                  >Cancel</el-button
                >
                <el-button
                  type="text"
                  size="mini"
                  class="color-red"
                  @click="cancerPopoverVisible"
                  >Close</el-button
                >
                <el-button
                  type="text"
                  size="mini"
                  class="color-green"
                  @click="confirmEncryption"
                  >Confirm</el-button
                >
              </div>
              <el-switch
                slot="reference"
                v-model="encryption"
                class="fr mt-15 mr-20 job-create-switch"
                active-color="#13ce66"
                inactive-text="Encryption"
                disabled
                @click.native="popoverVisible = true"
                @change="changeEncrytion"
              >
              </el-switch>
            </el-popover>
          </el-col>
        </el-row>
        <el-divider class="m-0"></el-divider>
        <el-row :gutter="20">
          <el-col :span="12" class="br-1">
            <div class="p20">
              <el-form-item
                label="S3 location:"
                prop="input"
                :rules="{ required: true }"
              >
                <el-input
                  v-model="formData.input"
                  placeholder="s3://mybucket/myinput"
                >
                  <el-button
                    slot="append"
                    :loading="btnInputLoading"
                    @click="verifyS3Data('r')"
                    >Verify</el-button
                  >
                </el-input>
              </el-form-item>

              <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i> Browse,type or
                paste the URL of a bucket or folder location in S3, or select a
                bucket or folder location in S3
              </div>
              <!-- <div v-if="inRegionName" class="f15 mt-15">
                S3 region: <strong>{{ inRegionName }}</strong>
              </div> -->
            </div>
          </el-col>
          <el-col :span="12">
            <div class="p20">
              <el-form-item
                label="S3 location:"
                prop="output"
                :rules="{ required: true }"
              >
                <el-input
                  v-model="formData.output"
                  placeholder="s3://mybucket/myoutput"
                >
                  <el-button
                    slot="append"
                    :loading="btnOutputLoading"
                    @click="verifyS3Data('w')"
                    >Region S3
                  </el-button>
                </el-input>
              </el-form-item>
              <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i> Browse,type or
                paste the URL of a bucket or folder location in S3, or select a
                bucket or folder location in S3
              </div>
              <!-- <div v-if="outRegionName" class="f15 mt-15">
                S3 region: <strong>{{ outRegionName }}</strong>
              </div> -->
            </div>
          </el-col></el-row
        >
      </section>
      <el-form-item class="tc mt-40">
        <el-button size="medium" @click="$emit('close-dialog')"
          >Cancel</el-button
        >
        <el-button
          size="medium"
          type="primary"
          :loading="btnLoading"
          @click="onSubmit"
          >Confirm</el-button
        >
      </el-form-item>
    </el-form>
    <section class="mt-40 tc"></section>
    <!-- choose resource -->
    <choose-resource ref="chooseResourceRef" @select-s3="selectS3" />
    <!-- info message -->
    <dialog-show-info ref="dialogShowInfoRef" />
    <!-- S3 info show -->
    <show-s3-info ref="showS3InfoRef"></show-s3-info>
  </div>
</template>

<script>
import {
  GetAnalysisType,
  AddData,
  VerifyS3Data
} from '@/api/annotate-jobs-page'
import DialogShowInfo from '@/components/DialogShowInfo'
import ChooseResource from './components/ChooseResource'
import ShowS3Info from './components/ShowS3Info'
import 'codemirror/lib/codemirror.css'
import { s3List } from './constants'
import store from '@/store'
export default {
  name: 'InlineEditTable',
  components: {
    ChooseResource,
    DialogShowInfo,
    ShowS3Info
  },
  filters: {},
  data() {
    return {
      analysisTypeOptions: [],
      analysisChildTypeOptions: [],
      pageLoading: false,
      encryptionRadio: 'AES-256',
      encryptionHandle: '',
      userId: store.getters.userInfo.userId,
      btnLoading: false,
      popoverVisible: false,
      encryption: false,
      btnInputLoading: false,
      btnOutputLoading: false,
      formData: {
        name: '',
        pipelineId: '',
        encryption: '',
        input: '',
        output: ''
      },
      pipelineData: {},
      inRegionName: '',
      outRegionName: '',
      inRegion: '',
      outRegion: '',
      inRegionLabel: '',
      outRegionLabel: ''
    }
  },

  created() {},
  mounted() {
    this.getAnalysisType()
  },
  methods: {
    verifyS3Data(type) {
      const url = type === 'r' ? this.formData.input : this.formData.output
      if (type === 'r') {
        this.btnInputLoading = true
      } else {
        this.btnOutputLoading = true
      }
      VerifyS3Data(type, url).then(res => {
        this.btnInputLoading = false
        this.$refs.showS3InfoRef.openDialog(type, res.data)
      })
    },
    cancerPopoverVisible() {
      this.popoverVisible = false
      this.encryption = false
    },
    getCopyData() {
      const copyStatus = this.$route.query.copy
      const copyJobData = JSON.parse(sessionStorage.copyJobData)
      console.log('复制数据', copyJobData, this.analysisTypeOptions)
      const {
        name,
        pipeline,
        encryption,
        input,
        output,
        inRegion,
        outRegion
      } = copyJobData
      if (copyStatus) {
        console.log('pipeline', this.analysisChildTypeOptions)
        const pipelineObj = this.analysisChildTypeOptions.find(
          item => item.params === pipeline
        )
        console.log('pipelineObj', pipelineObj)

        this.formData = {
          name: name,
          pipelineId: pipelineObj ? pipelineObj.params : '',
          encryption: encryption,
          input: input,
          output: output
        }
        this.pipelineData = pipelineObj
          ? this.analysisChildTypeOptions.find(
              item => item.params === pipelineObj.params
            )
          : {}
        this.inRegion = inRegion
        const inRegionLabel = s3List.find(item => inRegion === item.value)
        this.inRegionName = `${inRegionLabel.label}(${inRegionLabel.value})`
        this.inRegionLabel = inRegionLabel.label
        this.outRegion = outRegion
        const outRegionLabel = s3List.find(item => outRegion === item.value)
        this.outRegionName = `${outRegionLabel.label}(${outRegionLabel.value})`
        this.outRegionLabel = outRegionLabel.label
        if (encryption) {
          if (encryption === 'AES-256') {
            this.encryptionRadio = 'AES-256'
            this.encryptionHandle = ''
          } else {
            this.encryptionRadio = ''
            this.encryptionHandle = encryption
          }
          this.encryption = true
        } else {
          this.encryption = false
        }
        this.setPipelineText()
      }
    },
    confirmEncryption() {
      if (!this.encryptionRadio) {
        this.formData.encryption = this.encryptionHandle
      } else {
        this.formData.encryption = this.encryptionRadio
      }
      this.encryption = true
      this.popoverVisible = false
    },
    handleEncryption() {
      this.encryptionRadio = this.encryptionHandle ? '' : 'AES-256'
    },
    changeEncrytion() {
      this.popoverVisible = this.encryption
      if (!this.encryption) {
        this.formData.encryption = ''
      }
    },
    changepipeline() {
      this.pipelineData = this.analysisChildTypeOptions.find(
        item => item.params === this.formData.pipelineId
      )
      console.log('this.pipelineData', this.pipelineData)
      this.setPipelineText()
    },
    onSubmit() {
      console.log('this.pipelineData', this.pipelineData)
      this.$refs.formData.validate(valid => {
        if (valid) {
          if (!this.inRegion || !this.outRegion) {
            this.$message.warning('Pleas select region S3')
            return false
          }
          const { name, input, output, encryption } = this.formData
          const params = {
            userId: this.userId,
            name: name,
            input: input,
            output: output,
            // inRegion: this.inRegion,
            // outRegion: this.outRegion,
            pipeline: this.pipelineData.params,
            encryption: encryption
          }
          // {
          //   userId: 999,
          //   name: name,
          //   input: 's3://melaxtechinput/test',
          //   output: 's3://melaxtechinput/out',
          //   inRegion: 'us-east-2',
          //   outRegion: 'us-east-2',
          //   pipeline: 'document'
          // }
          console.log(params)
          this.btnLoading = true
          AddData(params)
            .then(res => {
              if (res.code === 200) {
                this.$message.success(res.message)
                this.$emit('close-dialog')
              }
            })
            .catch(res => {
              this.btnLoading = false
              if (res.code === 800008) {
                this.$refs.dialogShowInfoRef.openDialog('nlp')
                this.loading = false
                this.noDataShow = true
              }
            })
          // CheckData(params)
          //   .then(checkRes => {
          //     if (checkRes.code === 200) {
          //       if (checkRes.data.canRead && checkRes.data.canWrite) {
          //         AddData(params)
          //           .then(res => {
          //             if (res.code === 200) {
          //               this.$message.success(res.message)
          //               this.$emit('close-dialog')
          //             }
          //           })
          //           .catch(msg => {
          //             this.btnLoading = false
          //           })
          //       } else {
          //         this.$message.success(checkRes.message)
          //         this.btnLoading = false
          //       }
          //     }
          //   })
          //   .catch(msg => {
          //     this.btnLoading = false
          //   })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    selectS3(res) {
      console.log(res)
      if (res.type === 'input') {
        this.inRegionName = `${res.data.label}(${res.data.value})`
        this.inRegion = res.data.value
      } else {
        this.outRegionName = `${res.data.label}(${res.data.value})`
        this.outRegion = res.data.value
      }
    },
    openBrowse(type, data) {
      this.$refs.chooseResourceRef.openDialog(type, data)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getAnalysisType() {
      this.pageLoading = true
      GetAnalysisType().then(res => {
        if (res.code === 200) {
          this.analysisTypeOptions = res.data
          this.analysisChildTypeOptions = res.data
            .map(item => item.version)
            .flat(Infinity) // 将自己版本数据拉平
          this.formData.pipelineId = this.analysisChildTypeOptions[0].params
          const copyStatus = this.$route.query.copy
          if (copyStatus) {
            this.getCopyData()
          }

          this.pageLoading = false
        }
      })
    },
    // 设置pipeline选择按钮的文字
    setPipelineText() {
      this.$nextTick(() => {
        document.getElementById('select-pipeline').value = 'Change pipeline'
      })
    }
  }
}
</script>
<style lang="scss">
.job-create-switch {
  opacity: 1 !important;
  .el-switch__label,
  .el-switch__core {
    cursor: pointer !important;
  }
}
#select-pipeline {
  width: 142px !important;
  padding-right: 10px;
}
</style>
<style lang="scss" scoped>
.encryption-handle {
  label {
    float: left;
    margin-right: 5px;
    margin-top: 5px;
  }
  .encryption-input {
    width: 220px;
    float: left;
    // .el-input {

    //   }
  }
}
.job-select {
  .el-select-dropdown__item {
    height: 70px;
    .job-select-label {
      font-weight: normal;
      margin-top: 7px;
    }
    .job-select-value {
      margin-top: -10px;
      color: #a0a0a0;
      font-weight: normal;
    }
  }
  .el-select-dropdown__item.selected::after {
    bottom: 20px !important;
  }
}
</style>
