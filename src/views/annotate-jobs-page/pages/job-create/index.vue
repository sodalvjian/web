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
                :rules="projectNameRules"
              >
                <el-input
                  v-model="formData.name"
                  minlength="6"
                  maxlength="256"
                  placeholder="Input your job name"
                ></el-input>
              </el-form-item>
              <!-- <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i> Support for
                letters, Numbers and their combinations 2.Please enter 6
                characters to 256 characters
              </div> -->
            </div>
          </el-col>
          <el-col :span="12">
            <div class="p20">
              <el-form-item
                label="Type pipeline"
                prop="pipelineId"
                :rules="{ required: true }"
              >
                <select-pipeline
                  v-model="formData.pipelineId"
                  size="big"
                  fetch-list
                  @get-complete-options="getCompleteOptions"
                />
                <!-- <el-input v-model="formData.pipelineId" readonly>
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
                  <el-button
                    slot="append"
                    @click="
                      openBrowse('output', {
                        label: outRegionLabel,
                        value: outRegion
                      })
                    "
                    >Change pipeline
                  </el-button>
                </el-input> -->
              </el-form-item>
            </div>
          </el-col></el-row
        >
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
                  class="encryption-close-button"
                  icon="el-icon-error"
                  @click="popoverVisible = false"
                ></el-button>
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
              <el-form-item label="S3 location:" prop="input" :rules="s3Rules">
                <el-col :span="16" class="pl-0">
                  <el-input
                    v-model="formData.input"
                    placeholder="s3://mybucket/myinput"
                    @keyup.native="verityhandle('read')"
                  >
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Validate"
                    placement="top"
                  >
                    <el-button
                      :disabled="!formData.input"
                      :loading="inputCheckLoading"
                      :type="verityInput ? 'success' : 'primary'"
                      size="medium"
                      icon="icon-yanzhengma iconfont"
                      @click="verifyS3Data('read')"
                    >
                    </el-button>
                  </el-tooltip>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Authorize"
                    placement="top"
                  >
                    <el-button
                      :disabled="!formData.input"
                      :loading="inputAuthorizeLoading"
                      type="warning"
                      size="medium"
                      icon="icon-shouquan iconfont"
                      @click="authorizeS3Data('read')"
                    >
                    </el-button>
                  </el-tooltip>
                </el-col>
                <!-- <el-button
                    slot="append"
                    :disabled="!formData.input"
                    :loading="inputCheckLoading"
                    @click="verifyS3Data('r')"
                    ><i
                      v-if="verityInput"
                      class="el-icon-success mr-5 color-green"
                    ></i
                    >Verify</el-button
                  > -->
                <!-- </el-input> -->
              </el-form-item>

              <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i>
                Example: s3://mybucket/my_input_folder
                <!-- Browse,type or
                paste the URL of a bucket or folder location in S3, or select a
                bucket or folder location in S3 -->
              </div>
              <!-- <div v-if="inRegionName" class="f15 mt-15">
                S3 region: <strong>{{ inRegionName }}</strong>
              </div> -->
            </div>
          </el-col>
          <el-col :span="12">
            <div class="p20">
              <el-form-item label="S3 location:" prop="output" :rules="s3Rules">
                <el-col :span="16" class="pl-0">
                  <el-input
                    v-model="formData.output"
                    placeholder="s3://mybucket/myoutput"
                    @keyup.native="verityhandle('write')"
                  >
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Validate"
                    placement="top"
                  >
                    <el-button
                      :disabled="!formData.output"
                      :loading="outputCheckLoading"
                      :type="verityOutput ? 'success' : 'primary'"
                      size="medium"
                      icon="icon-yanzhengma iconfont"
                      @click="verifyS3Data('write')"
                    >
                    </el-button>
                  </el-tooltip>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Authorize"
                    placement="top"
                  >
                    <el-button
                      :disabled="!formData.output"
                      :loading="outputAuthorizeLoading"
                      type="warning"
                      size="medium"
                      icon="icon-shouquan iconfont"
                      @click="authorizeS3Data('write')"
                    >
                    </el-button>
                  </el-tooltip>
                </el-col>
              </el-form-item>
              <div class="f13 lh1-5 mt-20">
                <i class="el-icon-warning color-main f15"></i> 
                Example: s3://mybucket/my_output_folder
                <!-- Browse,type or
                paste the URL of a bucket or folder location in S3, or select a
                bucket or folder location in S3 -->
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
import { GetAnalysisType, AddData, CheckData } from '@/api/annotate-jobs-page'
import DialogShowInfo from '@/components/DialogShowInfo'
import ChooseResource from './components/ChooseResource'
import ShowS3Info from './components/ShowS3Info'
// import 'codemirror/lib/codemirror.css'
import { s3List } from './constants'
import { debounce } from '@/utils/method'
import store from '@/store'
const s3Reg = /^s3:\/(\/\w+){2,}\/?$/
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
      if (value.length < 6) {
        callback(new Error('Please enter 6 characters to 256 characters'))
      } else if (value.length > 256) {
        callback(new Error('Please enter 6 characters to 256 characters'))
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
              new Error(
                'Please enter the correct s3 location,like:"s3://xxx/xxx.'
              )
            )
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
      projectNameRules: [
        { required: true },
        { validator: validateProjectName, trigger: 'blur' }
      ],
      s3Rules: [{ required: true }, { validator: validateS3, trigger: 'blur' }],
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
    // this.getAnalysisType()
  },
  methods: {
    verityhandle(type) {
      debounce(() => {
        if (type === 'read' && s3Reg.test(this.formData.input)) {
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
      if (type === 'read') {
        this.inputCheckLoading = true
        const params = {
          input: url
        }
        CheckData(params)
          .then(res => {
            this.inputCheckLoading = false
            this.inputHasVerity = true
            if (res.data && res.data.read) {
              this.verityInput = true
              this.$message.success('Verify input success.')
            } else {
              this.verityInput = false
              this.verityInputData = res.data
              if (res.code !== 200) {
                this.$message.warning(res.message)
              } else {
                this.$message.warning('Verity failed, Please authorize.')
              }

              // this.$refs.showS3InfoRef.openDialog(res.data, 'read') // 验证不过弹出授权提示
            }
          })
          .catch(msg => {
            this.inputCheckLoading = false
          })
      } else {
        this.outputCheckLoading = true
        const params = {
          output: url
        }
        CheckData(params)
          .then(res => {
            this.outputCheckLoading = false
            this.outputHasVerity = true
            if (res.data && res.data.write) {
              this.verityOutput = true
              this.$message.success('Verify output success.')
            } else {
              this.verityOutput = false
              this.verityOutputData = res.data
              // this.$refs.showS3InfoRef.openDialog(res.data, 'write') // 验证不过弹出授权提示
              this.$message.warning('Verity failed, Please authorize.')
            }
          })
          .catch(msg => {
            this.outputCheckLoading = false
          })
      }
    },
    cancerPopoverVisible() {
      this.popoverVisible = false
      this.encryption = false
    },
    getCopyData() {
      const copyStatus = this.$route.query.copy
      const copyJobData = JSON.parse(sessionStorage.copyJobData)
      // console.log('复制数据', copyJobData, this.analysisTypeOptions)
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
        this.$nextTick(() => {
          this.verifyS3Data('read')
          this.verifyS3Data('white')
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
    },
    onSubmit() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          const { name, input, output, encryption } = this.formData
          if (this.verityInput && this.verityOutput) {
            this.btnLoading = true
            const params = {
              userId: this.userId,
              name: name,
              input: input,
              output: output,
              // inRegion: this.inRegion,
              // outRegion: this.outRegion,
              pipeline:
                typeof this.formData.pipelineId === 'string'
                  ? this.formData.pipelineId
                  : this.formData.pipelineId[1],
              encryption: encryption
            }
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
                // else {
                //   this.$refs.dialogShowInfoRef.openDialog(res.code)
                //   this.loading = false
                //   this.noDataShow = true
                // }
              })
          } else {
            this.$message.warning(
              'Please verity the input data and output data.'
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
    getCompleteOptions(val) {
      this.analysisTypeOptions = val
      this.analysisChildTypeOptions = val
        .map(item => item.version)
        .flat(Infinity) // 将自己版本数据拉平
      this.formData.pipelineId = this.analysisChildTypeOptions[0].params
      const copyStatus = this.$route.query.copy
      if (copyStatus) {
        this.getCopyData()
      }

      this.pageLoading = false
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
