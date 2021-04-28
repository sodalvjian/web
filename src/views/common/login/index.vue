<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-content-left p30"></div>
      <div class="login-content-right">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <div class="title-container">
            <nav class="title">Welcome to Mercury NLP</nav>
          </div>

          <el-form-item prop="username">
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

          <el-form-item prop="password">
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
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="mt-25"
              type="success"
              style="width:100%;height:40px"
              @click.native.prevent="handleLogin"
              >Sign in</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button class="w" plain type="primary" @click="handleRegister"
              >Create a new account</el-button
            >
          </el-form-item>
          <el-row :gutter="10" class="f12 login-content-right-footer">
            <el-col :span="12" class="color-main" align="left">
              <router-link to="/forgetPassword">Forget password</router-link>
            </el-col>
            <el-col :span="12" align="right" class="color-main">
              <span class=" cp" @click="openPrivacyPolicy">Privacy Policy</span>
            </el-col>
          </el-row>
        </el-form>
        <!-- <footer class="login-content-right-footer tc f12">
          <u>Privacy Policy</u>
        </footer> -->
      </div>
    </div>

    <!-- login-left -->
    <div class="login-left"></div>
    <!-- login-right -->
    <div class="login-right"></div>
    <!-- Privacy Policy -->
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
          { required: true, trigger: 'blur' }
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
              location.href = '/'
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
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #757575;
$cursor: #757575;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  text-align: center;
  .login-left {
    background-image: url('../../../assets/img/login_left.png');
    width: 250px;
    height: 250px;
    position: absolute;
    background-size: 100%;
    bottom: 0;
  }
  .login-right {
    background-image: url('../../../assets/img/login_right.png');
    width: 250px;
    height: 250px;
    position: absolute;
    background-size: 100%;
    right: 0;
    bottom: 0;
  }
  .login-content {
    width: 80%;
    max-width: 900px;
    position: relative;
    z-index: 9;
    top: 10%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);

    .login-content-left {
      float: left;
      width: 40%;
      height: 500px;
      background-size: 100%;
      box-shadow: 0 0 20px #0000001c;
      background-image: url('../../../assets/img/login_content.jpg');
    }
    .login-content-right {
      float: left;
      height: 500px;
      position: relative;
      width: 60%;
      background-color: #ffffff;
      box-shadow: 0 0 20px #0000001c;
      .login-form {
        padding: 0 65px;
      }
      .login-content-right-footer {
        margin-top: -10px;
      }
    }
  }
  .el-input {
    display: inline-block;
    // height: 40px;
    // width: 85%;

    input {
      // background: transparent;
      // border: 0px;
      // -webkit-appearance: none;
      // border-radius: 10px;
      // padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 40px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #efefef inset !important;
      }
    }
  }

  // .el-form-item {
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   background: #efefef;
  //   border-radius: 50px;
  //   color: #454545;
  // }
}
</style>

<style lang="scss" scoped>
$bg: #f5f5f5;
$dark_gray: #333333;
$light_gray: #333333;

.login-container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  background-size: 100%;

  .tips {
    font-size: 14px;
    color: #3a3a3a;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 50px auto 50px auto;
      text-align: center;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
