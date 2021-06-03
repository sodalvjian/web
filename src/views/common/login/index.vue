<template>
  <div class="login-container pr">
    <div class="login-content pr">
      <img class="mt-20 top-icon" src="../../../assets/img/Group.png" alt="" />
      <img class="mt-20 bottom-icon" src="../../../assets/img/bac.png" alt="" />
      <el-row>
        <el-col :span="10">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
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
                Sign in
                <img
                  class="nlp-img-icon"
                  src="../../../assets/img/NLP.png"
                  alt=""
                />
              </h2>
            </div>

            <el-form-item prop="username" label="Email address or account name">
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Email address or account name"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="off"
              />
            </el-form-item>

            <el-form-item prop="password" label="Password">
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="Password"
                name="password"
                tabindex="2"
                auto-complete="off"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd color-main" @click="showPwd">
                <svg-icon
                  :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
                />
              </span>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="mt-25"
                type="primary"
                style="width:100%;height:40px"
                @click.native.prevent="handleLogin"
              >Sign in</el-button>
            </el-form-item>
            <el-row :gutter="10" class="mt-20 f12">
              <el-col :span="12" class="color-light-blue" align="left">
                <router-link to="/forgetPassword">Forget password</router-link>
              </el-col>
              <el-col :span="12" align="right">
                <span
                  class="color-light-blue cp"
                  @click="handleRegister"
                >Create a new account</span>
              </el-col>
            </el-row>
            <div class=" f12 color-gray bottom-privacy">
              If you click authorize, you will agree and authorize
              <span
                class="color-light-blue cp"
                @click="openPrivacyPolicy"
              >Privacy Policy</span>
            </div>
          </el-form>
        </el-col>
        <el-col :span="14" align="right" class="pl-20">
          <img
            width="95%"
            class="login-right-login-img"
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
import Cookies from 'js-cookie'
import PrivacyPolicy from '../privacy-policy'
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
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          // { required: true, trigger: 'blur', validator: validateUsername }
          {
            required: true,
            trigger: 'blur',
            message: 'Please enter account name'
          }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
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
    Cookies.set('userRoles', 'undefined')
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
    handleRegister() {
      this.$router.push({ path: '/register' })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // console.log('登录', this.loginForm)
          // const params = `password=${this.loginForm.password}&username=${this.loginForm.username}&grant_type=password&scope=write&client_secret=123456&client_id=android-nlpes`
          // return false;
          const userInfo = {
            password: this.loginForm.password,
            loginName: this.loginForm.username
          }
          this.$store
            .dispatch('user/login', userInfo)
            .then(res => {
              console.log('为什么过不去', res)
              location.href = '/'
              this.loading = false
            })
            .catch(err => {
              console.log('error', err)
              if (err.code === 404) {
                this.$message.error(err.msg)
              }
              this.loading = false
            })
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
