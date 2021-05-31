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
              <router-link to="/">
                <img
                  width="200px"
                  src="../../../assets/img/logo_color.png"
                  alt=""
                />
              </router-link>
            </div>
            <div class="mt-40 title-container">
              <nav class="title color-main fb f24">Welcome to Mercury NLP</nav>
              <div class="mt-10 color-gray f13">
                Fast,secure,cloud-based clinical NLP with high precision and
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
                v-model="formData.email"
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
                v-model="formData.password"
                placeholder="Password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="checkPass"
              class="mt-35"
              :rules="{ validator: validateCheckPass }"
            >
              <el-input
                v-model="formData.checkPass"
                type="password"
                placeholder="Confirm password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="account name"
              prop="accountName"
              :rules="{ required: true, message: 'Please enter account' }"
            >
              <el-input
                v-model="formData.accountName"
                placeholder="Account name"
                type="text"
              />
            </el-form-item>
            <el-form-item prop="invitationCode" label="Invitation code">
              <el-input
                v-model="formData.invitationCode"
                :maxlength="64"
                placeholder="Invitation code"
                type="text"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="mt-25"
                type="primary"
                style="width:100%;height:40px"
                @click.native.prevent="handleRegister"
                >Sign up</el-button
              >
            </el-form-item>
            <el-row :gutter="10" class="mt-20 f12">
              <el-col :offset="12" :span="12" align="right" class="color-main">
                <span class="color-light-blue cp" @click="handleLogin"
                  >Already have an account?</span
                >
              </el-col>
            </el-row>

            <div class="mt-50 f12 color-gray">
              If you click authorize, you will agree and authorize
              <span class="color-light-blue cp" @click="openPrivacyPolicy"
                >Privacy Policy</span
              >
            </div>
          </el-form>
        </el-col>
        <el-col :span="14" align="right" class="pl-20">
          <img
            width="95%"
            class="login-right-register-img"
            src="../../../assets/img/login_right.jpg"
            alt=""
          />
        </el-col>
      </el-row>
    </div>

    <privacy-policy ref="privacyPolicy" />
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import PrivacyPolicy from '../privacy-policy'
import { RegisterAccount } from '@/api/login-register'
import { passwordReg, passwordMsg } from '@/utils/method'
const mailReg = /^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default {
  name: 'Login',
  components: {
    PrivacyPolicy
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
        callback(new Error('Please enter the password'))
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
        callback(new Error('Please enter the password again'))
      } else if (value !== this.formData.password) {
        callback(new Error('The two passwords are inconsistent!'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter email.'))
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

      formData: {
        email: '',
        accountName: '',
        password: '',
        checkPass: '',
        verificationCode: ''
      },
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
  methods: {
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
      this.$router.push('/login')
    },
    handleRegister() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.loading = true
          const params = Object.assign(this.formData)
          console.log('params', params)
          delete params.checkPass
          RegisterAccount(params)
            .then(res => {
              // this.$router.push('/')
              this.loading = false
              if (res.code === 200) {
                this.$message.success(
                  'Register success, please check your email.'
                )
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
</style>
