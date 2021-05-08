<template>
  <div class="register-container">
    <div class="register-content">
      <div class="register-content-left p30"></div>
      <div class="register-content-right">
        <el-form
          ref="formData"
          :model="formData"
          class="register-form"
          align="left"
          auto-complete="on"
          label-position="left"
        >
          <div class="title-container">
            <nav class="title">Create a Mercury NLP account</nav>
          </div>

          <el-form-item
            prop="email"
            :rules="[
              {
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
          <!-- <el-form-item prop="verificationCode">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-button
                  :disabled="getCodeDisable"
                  :loading="btnLoading"
                  type="danger"
                  class="w"
                  @click="getCode"
                  >{{ getCodeText }}</el-button
                >
              </el-col>
              <el-col :span="16">
                <el-input
                  v-model="formData.verificationCode"
                  placeholder="Verification code case sensitive"
                  type="text"
                />
              </el-col>
            </el-row>
          </el-form-item> -->

          <el-form-item
            prop="password"
            :rules="{
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
            prop="accountName"
            :rules="{ required: true, message: 'Please enter account' }"
          >
            <el-input
              v-model="formData.accountName"
              placeholder="Account name"
              type="text"
            />
          </el-form-item>
          <el-form-item prop="invitationCode">
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
              type="success"
              style="width:100%;height:40px"
              @click.native.prevent="handleRegister"
              >Sign up</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button plain type="primary" class="w" @click="handleLogin"
              >Sign in to an exiting account</el-button
            >
          </el-form-item>
          <el-row :gutter="10" class="f12 register-content-right-footer">
            <!-- <el-col :span="12" class="color-main" align="left">
              Forget password
            </el-col> -->
            <el-col :span="24" align="right" class="color-main">
              <span class=" cp" @click="openPrivacyPolicy">Privacy Policy</span>
            </el-col>
          </el-row>
        </el-form>
        <!-- <footer class="register-content-right-footer tc f12">
          <u>Privacy Policy</u>
        </footer> -->
      </div>
    </div>

    <!-- register-left -->
    <div class="register-left"></div>
    <!-- register-right -->
    <div class="register-right"></div>
    <!-- Privacy Policy -->
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
              this.$router.push('/')
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
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #757575;
$cursor: #757575;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .register-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
  text-align: center;
  .register-left {
    background-image: url('../../../assets/img/login_left.png');
    width: 250px;
    height: 250px;
    position: absolute;
    background-size: 100%;
    bottom: 0;
  }
  .register-right {
    background-image: url('../../../assets/img/login_right.png');
    width: 250px;
    height: 250px;
    position: absolute;
    background-size: 100%;
    right: 0;
    bottom: 0;
  }
  .register-content {
    width: 80%;
    max-width: 900px;
    position: relative;
    z-index: 9;
    top: 10%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);

    .register-content-left {
      float: left;
      width: 40%;
      height: 500px;
      background-size: 100%;
      box-shadow: 0 0 20px #0000001c;
      background-image: url('../../../assets/img/login_content.jpg');
    }
    .register-content-right {
      float: left;
      height: 680px;
      margin-top: -55px;
      position: relative;
      width: 60%;
      background-color: #ffffff;
      box-shadow: 0 0 20px #0000001c;
      .register-form {
        padding: 0 65px;
      }
      .register-content-right-footer {
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

.register-container {
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
      margin: 40px auto 40px auto;
      text-align: center;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
