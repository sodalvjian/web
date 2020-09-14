<template>
  <el-dialog
    title="Upload Avatar"
    custom-class="upload-avatar"
    :visible.sync="dialogVisible"
    width="600px"
    align="center"
  >
    <section class="tc">
      <div class="cb disinblock">
        <vue-avatar
          ref="vueavatar"
          class="fl"
          :width="300"
          :height="300"
          :rotation="rotation"
          :scale="scale"
          @vue-avatar-editor:image-ready="onImageReady"
        >
        </vue-avatar>
        <!-- <el-slider
          v-model="rotation"
          vertical
          height="340px"
          class="fr ml-10 mt-8"
          :min="0"
          :max="360"
          :step="1"
        ></el-slider> -->
      </div>
      <div class="tc">
        <el-slider
          v-model="scale"
          class="disinblock upload-avatar-scale"
          :min="1"
          :max="3"
          :step="0.02"
        ></el-slider>
      </div>

      <!-- <button @click="saveClicked">Click</button>
      <br />
      <img ref="image" /> -->
    </section>
    <div class="mt-20 mb-20">
      <el-button size="small" @click="dialogVisible = false">Cancel</el-button>
      <el-button
        size="small"
        type="primary"
        :loading="btnLoading"
        @click="confirmAvatar"
      >Confirm</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { VueAvatar } from 'vue-avatar-editor-improved'
import axios from 'axios'
import moment from 'moment'
import { UploadFile } from '@/api/user'
export default {
  name: '',
  components: {
    VueAvatar
  },
  props: {},
  data() {
    return {
      dialogVisible: false,
      btnLoading: false,
      s3Data: {},
      rotation: 0,
      scale: 1
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    confirmAvatar() {
      const imgPath = this.$refs.vueavatar.getImageScaled()
      imgPath.toBlob(blobObj => {
        console.log(blobObj)

        this.btnLoading = true

        const params = {
          bizData: {},
          fileName: `avatar_${moment().format('YY_MM_DD_HH_mm_ss')}.png`,
          type: 'avatar',
          uuid: ''
        }
        UploadFile(params)
          .then(res => {
            console.log(res)
            if (res.code === 200) {
              this.s3Data = res.data
              const uploadUrl = `http://melaxtechinput.s3.amazonaws.com`
              const files = new window.File([blobObj], 'avatar', {
                type: 'image/png'
              })
              // axios.defaults.headers.Authorization =
              //   'Bearer ' + this.$store.getters.token
              const formData = new FormData()

              for (const key in this.s3Data) {
                formData.append(key, this.s3Data[key])
              }
              formData.append('file', files)
              axios
                .post(uploadUrl, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                })
                .then(res => {
                  this.btnLoading = false
                  console.log(res)
                  const resData = res.data
                  if (resData.code === 200) {
                    this.$message.success('Upload success.')
                    setTimeout(() => {
                      location.reload()
                    }, 800)
                  }
                })
            }
          })
          .catch(() => {
            this.btnLoading = false
          })
      })
    },
    openDialog() {
      this.dialogVisible = true
    },
    saveClicked() {
      var img = this.$refs.vueavatar.getImageScaled()
      this.$refs.image.src = img.toDataURL()
    },
    onImageReady() {
      this.scale = 1
      this.rotation = 0
    },
    resetData() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>
<style lang="scss">
.upload-avatar {
  .el-dialog__body {
    padding: 10px;
  }
  .upload-avatar-scale {
    width: 345px;
    margin-left: 10px;
    margin-top: 5px;
  }
}
</style>
