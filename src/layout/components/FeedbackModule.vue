<template>
  <div>
    <!-- 问题反馈 -->
    <el-tooltip class="item" effect="dark" content="Feedback" placement="top">
      <footer class="problem-feedback cp bg-color-main" @click="openFeedback">
        <i class="el-icon-question color-white f28"></i>
      </footer>
    </el-tooltip>

    <el-dialog
      title="Feedback"
      center
      :visible.sync="dialogVisible"
      width="50%"
      @close="resetData"
    >
      <div>
        <el-form
          ref="formData"
          label-position="top"
          :model="formData"
          class="demo-form-inline"
        ><el-form-item>
           <strong
             class="f15 color-black lh1-5 disinblock"
           >● The content will be sent to our team, please do not send HPI or
             other sensitive inforrmation…</strong>
         </el-form-item>
          <el-form-item
            label="Question Description"
            prop="qDesc"
            :rules="{
              required: true,
              message: 'Please enter quertion description.'
            }"
          >
            <el-input
              v-model="formData.qDesc"
              type="textarea"
              :rows="4"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <el-form-item label="Text paste">
            <el-input
              v-model="formData.tDesc"
              type="textarea"
              :rows="4"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <el-form-item label="Picture Upload">
            <el-upload
              ref="upload"
              action="http://melaxtechinput.s3.amazonaws.com"
              list-type="picture-card"
              :data="s3Data"
              :auto-upload="false"
              :multiple="false"
              :on-change="onChange"
              :on-success="onSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :before-upload="beforeUpload"
              :file-list="fileList"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="small"
          @click="dialogVisible = false"
        >Cancel</el-button>
        <el-button
          size="small"
          :disabled="!imgSuccess"
          :loading="btnLoading"
          type="primary"
          @click="handleConfirm"
        >Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogImgVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { UploadFile, UploadBind } from '@/api/user'
import axios from 'axios'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      dialogImgVisible: false,
      imgSuccess: true,
      btnLoading: false,
      dialogImageUrl: '',
      fileList: [],
      s3Data: {},
      formData: {
        qDesc: '',
        tDesc: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSuccess(res, file, fileList) {
      console.log('上传成功', res)
      if (res.code === 200) {
        this.fileList = fileList
        this.imgSuccess = true
      }
    },
    beforeUpload() {
      this.imgSuccess = false
    },
    onChange(file, fileList) {
      if (fileList.length - 1 === this.fileList.length) {
        console.log('文件', file)
        console.log('fileList', fileList, this.fileList)
        const fileName = file.name
        const params = {
          bizData: {},
          fileName: fileName,
          type: 'comment',
          uuid: ''
        }
        UploadFile(params).then(res => {
          console.log(res)
          if (res.code === 200) {
            this.s3Data = res.data
            console.log('data', this.s3Data)
            this.$nextTick(() => {
              this.$refs.upload.submit()
            })
          }
        })
      }
    },

    handleConfirm() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          const fileId = this.fileList.map(item => item.response.data.bizId)
          const params = {
            bizData: this.formData,
            type: 'comment',
            uuids: fileId
          }
          console.log('提交参数', params)
          this.btnLoading = true
          UploadBind(params)
            .then(res => {
              if (res.code === 200) {
                this.$message.success('Submit success')
                this.resetData()
                this.btnLoading = false
              }
            })
            .catch(() => {
              this.btnLoading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    openFeedback() {
      this.dialogVisible = true
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogImgVisible = true
    },
    resetData() {
      Object.assign(this.$data, this.$options.data())
      this.$refs.formData.resetFields()
    }
  },
  filter: {}
}
</script>

<style lang="scss" scoped>
.problem-feedback {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 9998;
}
</style>
