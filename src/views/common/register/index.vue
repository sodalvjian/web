<template>
  <div class="login-container pr">
    <div class="login-content pr">
      <img class="mt-20 top-icon" src="../../../assets/img/Group.png" alt="" />
      <img class="mt-20 bottom-icon" src="../../../assets/img/bac.png" alt="" />
      <el-row>
        <el-col :span="10">
          <el-form
            ref="formData"
            :model="formData"
            class="login-form"
            align="left"
            auto-complete="on"
            label-position="left"
          >
            <div>
              <router-link to="/realtimeAnalysis">
                <img
                  width="45px"
                  src="../../../assets/img/logo_single.png"
                  alt=""
                />
              </router-link>
            </div>
            <div class="mt-40 title-container">
              <nav class="title color-main fb f24">Welcome to Mercury NLP</nav>
              <div class="mt-10 color-gray f13">
                Fast, secure, cloud-based clinical NLP with high precision and
                accuracy based on the award-winning CLAMP system from Melax
                Technologies!
              </div>
              <h2 class="mt-30 color-main pr">
                Sign up
                <img
                  class="nlp-img-icon"
                  src="../../../assets/img/NLP.png"
                  alt=""
                />
              </h2>
            </div>

            <el-form-item
              prop="email"
              label="Email address"
              :rules="[
                {
                  required: true,
                  validator: validateEmail,
                  trigger: ['blur', 'change']
                }
              ]"
            >
              <el-input
                ref="email"
                v-model.trim="formData.email"
                placeholder="Email address"
                name="email"
                type="text"
              />
            </el-form-item>

            <el-form-item
              prop="password"
              label="Password"
              :rules="{
                required: true,
                validator: validatePass
              }"
            >
              <el-input
                v-model.trim="formData.password"
                placeholder="Password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="checkPass"
              class="mt-40"
              :rules="{ validator: validateCheckPass }"
            >
              <el-input
                v-model.trim="formData.checkPass"
                type="password"
                placeholder="Confirm password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="Account name"
              prop="accountName"
              :rules="{
                required: true,
                message: 'Please enter an account name'
              }"
            >
              <el-input
                v-model.trim="formData.accountName"
                placeholder="Account name"
                type="text"
              />
            </el-form-item>
            <el-form-item prop="invitationCode" label="Invitation code">
              <el-input
                v-model.trim="formData.invitationCode"
                :maxlength="64"
                placeholder="Invitation code ( optional )"
                type="text"
              />
            </el-form-item>
            <el-form-item prop="invitationCode" label="">
              <el-checkbox v-model="checked" class="mr-5"></el-checkbox
              ><span class="ml-10"
                >I agree with the
                <span
                  class="cp"
                  style="text-decoration: underline;"
                  @click="$refs.userAgreement.openDialog()"
                  >User Agreement</span
                ></span
              >
            </el-form-item>

            <el-form-item>
              <!-- <small>Please check the User Agreement</small> -->
              <el-button
                :loading="loading"
                type="primary"
                style="width:100%;height:40px"
                @click.native.prevent="handleRegister"
                >Sign up</el-button
              >
            </el-form-item>
            <el-row :gutter="10" class="mt-20 f12">
              <el-col :span="12" align="left" class="color-main">
                <span class="color-light-blue cp" @click="openPrivacyPolicy"
                  >Privacy Policy</span
                >
              </el-col>

              <el-col :span="12" align="right" class="color-main">
                <span class="color-light-blue cp" @click="handleLogin"
                  >Already have an account?</span
                >
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="14" align="right" class="pl-20">
          <img
            :style="registerRightStyle"
            class="register-right"
            src="../../../assets/img/login_right.jpg"
            alt=""
          />
        </el-col>
      </el-row>
    </div>

    <privacy-policy ref="privacyPolicy" />
    <user-agreement ref="userAgreement" />
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import PrivacyPolicy from '../privacy-policy'
import UserAgreement from '../user-agreement'
import { RegisterAccount } from '@/api/login-register'
import { passwordReg, passwordMsg } from '@/utils/method'
import xss from 'xss'
const mailReg = /^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default {
  name: 'Login',
  components: {
    PrivacyPolicy,
    UserAgreement
  },
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter a password'))
      } else if (!passwordReg.test(value)) {
        callback(new Error(passwordMsg))
      } else {
        // console.log('passwordReg.test(value)', passwordReg.test(value))
        if (this.formData.checkPass !== '') {
          this.$refs.formData.validateField('checkPass')
        }
        callback()
      }
    }
    var validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Confirm password'))
      } else if (value !== this.formData.password) {
        callback(
          new Error('Confirmed password does not match the new password. ')
        )
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter an email address.'))
      } else {
        if (value !== '') {
          if (!mailReg.test(value)) {
            callback(new Error('Please enter the correct email address.'))
          }
        }
        callback()
      }
    }
    return {
      passwordReg,
      passwordMsg,
      validateEmail,
      getCodeText: 'Get Code',
      getCodeDisable: false,
      btnLoading: false,
      codeCount: 30,
      validatePass,
      validateCheckPass,
      registerRightStyle: {
        marginTop: '160px'
      },

      formData: {
        email: '',
        accountName: '',
        password: '',
        checkPass: '',
        verificationCode: ''
      },
      checked: false,
      loginRules: {
        username: [
          // { required: true, trigger: 'blur', validator: validateUsername }
          { required: true, trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            pattern: passwordReg,
            message: passwordMsg,
            validator: validatePass
          }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop // 滚动条偏移量
      const offsetTop = document.querySelector('.register-right').offsetTop // 要滚动到顶部吸附的元素的偏移量
      if (scrollTop < 306 && scrollTop > 160) {
        this.registerRightStyle = {
          marginTop: scrollTop + 'px'
        }
      }
    },
    openPrivacyPolicy() {
      this.$refs.privacyPolicy.openDialog()
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      location.href = '/login'
    },
    handleRegister() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          if (!this.checked) {
            this.$message.warning(
              'Before proceeding you must review and acknowledge the User Agreement.'
            )
            return
          }
          this.loading = true
          const params = Object.assign(this.formData)
          console.log('params', params)
          params.email = xss(params.email)
          delete params.checkPass
          RegisterAccount(params)
            .then(res => {
              // this.$router.push('/')
              this.loading = false
              if (res.code === 200) {
                this.$router.push('/sendEmailSuccess')
              }
            })
            .catch(() => {
              this.loading = false
            })
          // this.$store
          // .dispatch('user/register', userInfo)
          // .then(res => {
          //   this.$router.push({ path: this.redirect || '/' })
          //   this.loading = false
          // })
          // .catch(err => {
          //   console.log('error', err)
          //   if (err.code === 401) {
          //     this.$message.error(err.msg)
          //   }
          //   this.loading = false
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/login-register.scss';
.register-right {
  width: 520px;
  margin-top: 160px;
}
</style>
