<template>
  <div class="vital-container">
    <nav class="cb">
      <div class="f17 color-main">
        <router-link
          to="/annotateJobs"
          class="color-main f17"
        ><i class="el-icon-arrow-left fb"></i>
          <span class="color-hui">Batch Analysis</span></router-link>
        <span class="ml-5 mr-5">/</span> New job
      </div>
    </nav>
    <el-form
      ref="formData"
      label-position="top"
      :status-icon="!needAuthor"
      :model="formData"
      label-width="80px"
    >
      <section v-loading="pageLoading" class="mt-20 bg-color-gray bd-1">
        <el-row :gutter="15" class="p20">
          <el-col :span="8">
            <strong class="f16">Job Setting</strong>
          </el-col>
        </el-row>
        <el-divider class="m-0"></el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="p20">
              <el-form-item
                label="Job name"
                prop="name"
                :rules="projectNameRules"
              >
                <el-input
                  v-model="formData.name"
                  minlength="1"
                  maxlength="256"
                  placeholder="Input your job name"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="Select NLP Pipeline"
                prop="pipelineId"
                :rules="{ required: true }"
              >
                <select-pipeline-split
                  ref="selectPipelineSplitRef"
                  v-model="formData.pipelineId"
                  class="mt-15"
                  size="big"
                  fetch-list
                  @get-complete-data="getCompleteData"
                  @get-complete-options="getCompleteOptions"
                />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="13"> <div class="p20"></div> </el-col></el-row>
      </section>
      <section
        v-loading="pageLoading"
        class="bg-color-gray project-create-section mt-25 bd-1"
      >
        <el-row :gutter="20" class="">
          <el-col :span="12" class="br-1">
            <strong class="f16 p20 disinblock">Input Data</strong>
          </el-col>
          <el-col :span="12">
            <strong class="f16 p20 disinblock fl">Output Data</strong>

            <el-switch
              v-model="formData.encryption"
              class="mr-20 fr mt-15 job-create-switch"
              active-color="#409EFF"
              inactive-text="Encryption"
            >
            </el-switch>
          </el-col>
        </el-row>
        <el-divider class="m-0"></el-divider>
        <el-row :gutter="15">
          <el-col :span="12" class="br-1">
            <div class="p20">
              <el-form-item label="S3 location:" prop="input" :rules="s3Rules">
                <el-col :span="14" class="pl-0">
                  <el-input
                    v-model="formData.input"
                    v-loading="inputCheckLoading"
                    class="job-create-input-read"
                    placeholder="s3://mybucket"
                    @paste.native="verityhandle('read')"
                    @keyup.native="verityhandle('read')"
                  >
                  </el-input>
                </el-col>
                <el-col v-if="needAuthor" :span="10">
                  <el-button
                    :loading="inputAuthorizeLoading"
                    type="warning"
                    size="medium"
                    @click="authorizeS3Data('read')"
                  >
                    Authorize
                  </el-button>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Verify again"
                    placement="top"
                  >
                    <el-button
                      :loading="inputAuthorizeLoading"
                      type="primary"
                      size="medium"
                      icon="el-icon-key"
                      @click="verityhandle('read')"
                    >
                    </el-button>
                  </el-tooltip>
                </el-col>
              </el-form-item>

              <div class="mt-20 f13 lh1-5">
                <i class="el-icon-warning color-main f15"></i>
                Example: s3://mybucket/my_input_folder
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="p20">
              <el-form-item label="S3 location:" prop="output">
                <el-col :span="24" class="pl-0">
                  <el-input v-model="formData.output" disabled> </el-input>
                </el-col>
              </el-form-item>
            </div> </el-col></el-row>
      </section>
      <el-form-item class="mt-40 tc">
        <el-button
          size="medium"
          @click="$emit('close-dialog')"
        >Cancel</el-button>
        <el-button
          size="medium"
          type="primary"
          class="button-shadow"
          :loading="btnLoading"
          @click="onSubmit"
        >Confirm</el-button>
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
import { AddData, CheckData } from '@/api/annotate-jobs-page'
import DialogShowInfo from '@/components/DialogShowInfo'
import ChooseResource from './components/ChooseResource'
import ShowS3Info from './components/ShowS3Info'
// import 'codemirror/lib/codemirror.css'
import { s3List } from './constants'
import { debounce } from '@/utils/method'
import store from '@/store'
const s3Reg = /^s3:\/(\/\w+){1,}\/?$/
const s3RegName = /(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/

export default {
  name: 'InlineEditTable',
  components: {
    ChooseResource,
    DialogShowInfo,
    ShowS3Info
  },
  filters: {},
  data() {
    const validateProjectName = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('Please enter 1 characters to 100 characters'))
      } else if (value.length > 100) {
        callback(new Error('Please enter 1 characters to 100 characters'))
      } else {
        callback()
      }
    }
    const validateS3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter s3 location.'))
      } else {
        if (value !== '') {
          if (!s3Reg.test(value)) {
            callback(
              new Error('Please enter the correct s3 location,like:"s3://xxx".')
            )
          } else {
            const s3NameFirst = value.replace(
              /^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,
              '$1'
            )
            const s3Name = s3NameFirst.split('/')[0]
            if (!s3RegName.test(s3Name)) {
              callback(new Error('Please enter the correct S3 URI.'))
            }
          }
        }
        callback()
      }
    }
    return {
      analysisTypeOptions: [],
      analysisChildTypeOptions: [],
      pageLoading: false,
      verityInput: false,
      verityOutput: false,
      inputHasVerity: false,
      outputHasVerity: false,
      verityInputData: {},
      verityOutputData: {},
      encryptionRadio: 'AES-256',
      encryptionHandle: '',
      userId: store.getters.userInfo.userId,
      btnLoading: false,
      popoverVisible: false,
      encryption: false,
      inputCheckLoading: false,
      outputCheckLoading: false,
      inputAuthorizeLoading: false,
      outputAuthorizeLoading: false,
      btnOutputLoading: false,
      needAuthor: false,
      selectPipeline: {},
      projectNameRules: [
        { required: true, message: 'Job name is required' },
        { validator: validateProjectName }
      ],
      s3Rules: [
        { required: true, message: 'S3 location is required' },
        { validator: validateS3 }
      ],
      formData: {
        name: '',
        pipelineId: '',
        encryption: false,
        input: '',
        output: ''
      },
      pipelineData: {},
      inRegionName: '',
      outRegionName: '',
      inRegion: '',
      outRegion: '',
      inRegionLabel: '',
      outRegionLabel: '',
      messageData: ''
    }
  },

  created() {},
  mounted() {
    this.showIconStatus = true
    this.messageData = ''
    const copyStatus = this.$route.query.copy
    if (copyStatus) {
      this.getCopyData()
    }
  },
  methods: {
    verityhandle(type) {
      debounce(() => {
        const s3NameFirst = this.formData.input.replace(
          /^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,
          '$1'
        )
        const s3Name = s3NameFirst.split('/')[0]
        if (
          type === 'read' &&
          s3Reg.test(this.formData.input) &&
          s3RegName.test(s3Name)
        ) {
          this.verityInput = false
          this.verifyS3Data('read')
        } else if (type === 'write' && s3Reg.test(this.formData.output)) {
          this.verityOutput = false
          this.verifyS3Data('write')
        }
      }, 800)
    },
    authorizeS3Data(type) {
      if (type === 'read') {
        if (this.verityInput) {
          this.$message.success('Verify success.')
        } else if (this.inputHasVerity) {
          this.$refs.showS3InfoRef.openDialog(this.verityInputData, 'read') // 验证不过弹出授权提示
        } else {
          this.$message.warning('Please validate first.')
        }
      } else {
        if (this.verityOutput) {
          this.$message.success('Verify success.')
        } else if (this.outputHasVerity) {
          this.$refs.showS3InfoRef.openDialog(this.verityOutputData, 'write') // 验证不过弹出授权提示
        } else {
          this.$message.warning({
            message: 'Please validate first.',
            duration: 0
          })
        }
      }
    },
    verifyS3Data(type) {
      const url = type === 'read' ? this.formData.input : this.formData.output
      this.inputCheckLoading = true
      const params = {
        input: url
      }
      CheckData(params)
        .then(res => {
          this.inputCheckLoading = false
          this.inputHasVerity = true
          this.messageData = ''
          if (res.data && res.data.pass) {
            this.verityInput = true
            this.$message.success(
              'Authorization checks successfully completed.'
            )
            this.needAuthor = false
            this.formData.output = res.data.output
          } else {
            if (res.code !== 200) {
              this.$message.warning(res.message)
              this.needAuthor = false
              this.messageData = res.message
            } else {
              this.$message.warning(
                'Authorization error. Please check the path of your S3 folder and grant Meric NLP permissions to verify your S3 Bucket.'
              )
              this.needAuthor = true
            }
            this.formData.output = res.data ? res.data.output : ''
            this.verityInput = false
            this.verityInputData = res.data || {}

            // this.$refs.showS3InfoRef.openDialog(res.data, 'read') // 验证不过弹出授权提示
          }
        })
        .catch(msg => {
          this.messageData = ''
          this.inputCheckLoading = false
          this.verityInput = false
          this.needAuthor = true
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
        this.$nextTick(() => {
          console.log('copyencryption', encryption)

          this.formData = {
            name: name,
            pipelineId: pipeline,
            encryption: !!encryption,
            input: input,
            output: output
          }

          this.inRegion = inRegion
          const inRegionLabel = s3List.find(item => inRegion === item.value)
          this.inRegionName = `${inRegionLabel.label}(${inRegionLabel.value})`
          this.inRegionLabel = inRegionLabel.label
          this.outRegion = outRegion
          const outRegionLabel = s3List.find(item => outRegion === item.value)
          this.outRegionName = `${outRegionLabel.label}(${
            outRegionLabel.value
          })`
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
          this.$refs.selectPipelineSplitRef.getData(pipeline)
        })

        this.$nextTick(() => {
          this.verifyS3Data('read')
        })
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

    onSubmit() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          const { name, input, output, encryption } = this.formData
          if (this.verityInput) {
            this.btnLoading = true
            const params = {
              userId: this.userId,
              name: name,
              input: input,
              output: output,
              pipeline:
                typeof this.formData.pipelineId === 'string'
                  ? this.formData.pipelineId
                  : this.formData.pipelineId[1],
              encryption: encryption ? 'AES-256' : ''
            }
            console.log('/encryption', params.encryption)
            // return false
            AddData(params)
              .then(res => {
                if (res.code === 200) {
                  this.$message.success(`Batch Analysis <${name}> started`)
                  this.$emit('close-dialog')
                }
              })
              .catch(res => {
                this.btnLoading = false
                if (res.code === 800008) {
                  this.$refs.dialogShowInfoRef.openDialog('job')
                  this.loading = false
                  this.noDataShow = true
                }
                // else {
                //   this.$refs.dialogShowInfoRef.openDialog(res.code)
                //   this.loading = false
                //   this.noDataShow = true
                // }
              })
          } else {
            this.$message.warning(
              this.messageData || 'Please verify the input data.'
            )
          }

          // const checkData = {
          //   input: this.formData.input,
          //   output: this.formData.output
          // }
          // CheckData(checkData)
          //   .then(res => {
          //     console.log('检查', res)
          //     if (res.code === 200) {
          //       if (res.data.read && res.data.write) {
          //         const params = {
          //           userId: this.userId,
          //           name: name,
          //           input: input,
          //           output: output,
          //           // inRegion: this.inRegion,
          //           // outRegion: this.outRegion,
          //           pipeline: this.pipelineData.params,
          //           encryption: encryption
          //         }
          //         AddData(params)
          //           .then(res => {
          //             if (res.code === 200) {
          //               this.$message.success(res.message)
          //               this.$emit('close-dialog')
          //             }
          //           })
          //           .catch(res => {
          //             this.btnLoading = false
          //             if (res.code === 800008) {
          //               this.$refs.dialogShowInfoRef.openDialog('nlp')
          //               this.loading = false
          //               this.noDataShow = true
          //             } else {
          //               this.$refs.dialogShowInfoRef.openDialog('nlp')
          //               this.loading = false
          //               this.noDataShow = true
          //             }
          //           })
          //       } else {
          //         this.btnLoading = false
          //         this.$refs.showS3InfoRef.openDialog(res.data) // 验证不过弹出授权提示
          //       }
          //     } else {
          //       this.btnLoading = false
          //       this.$message.error(res.message)
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
    getCompleteData(val) {
      console.log('val', val)
      // this.formData.pipelineId=val.params
      this.selectPipeline = val
    },
    getCompleteOptions(val) {
      this.analysisTypeOptions = val
      this.analysisChildTypeOptions = val
        .map(item => item.version)
        .flat(Infinity) // 将自己版本数据拉平

      // this.$nextTick(() => {
      //   this.formData.pipelineId = this.analysisChildTypeOptions[0].params
      // })

      this.pageLoading = false
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
.job-create-input-read {
  .el-loading-mask {
    right: 5px !important;
    width: 30px;
    left: auto;
    height: 30px;
    top: 6px;
    .circular {
      width: 22px !important;
      height: 22px !important;
      margin-top: 10px;
    }
  }
}
#select-pipeline {
  width: 142px !important;
  padding-right: 10px;
}
</style>
<style lang="scss" scoped>
.encryption-close-button {
  position: absolute;
  top: -15px;
  right: -6px;
  color: #7b7b7b;
  font-size: 18px;
}
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
.project-create-section {
  .el-button {
    padding: 10px 14px;
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
