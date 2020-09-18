<template>
  <div class="register-container">
    <div class="register-content bg-color-white">
      <header class="tl cb p20">
        <img src="@/assets/img/Logo.png" class="fl" width="250px" alt="" />
        <div class="fl mt-20 f18">
          <span> | &nbsp; &nbsp;</span> <strong>Password reset</strong>
        </div>
      </header>
      <nav class="f18 forget-header-title p20 fb">
        <span v-if="step === 1">Enter associated account</span>
        <span v-if="step === 2">E-mail verification</span>
        <span v-if="step === 3">Password reset</span>
      </nav>
      <section class="w60 bc pb-70">
        <nav class="mt-50 f15 lh1-5">
          <span v-if="step === 1">
            Please enter the address associated with your account.</span>
          <span v-if="step === 2">
            For the security of your account,we need to verify your identity.We
            have sent a verification code to your email address
            <a href="">{{ formData.email }}</a> Please enter it below.
          </span>
          <span v-if="step === 3">
            Please set a new password. It is recommended to use a combination of
            Numbers,letters ande characters to improve the password security
            level,
          </span>
        </nav>
        <el-form
          ref="formData"
          :model="formData"
          class="register-form mt-50"
          auto-complete="on"
          align="left"
          label-position="left"
          @submit.native.prevent
        >
          <el-form-item
            v-if="step === 1"
            prop="email"
            :rules="[
              { required: true, message: 'Please enter email.' },
              {
                type: 'email',
                message: 'Please enter the correct email address',
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
              @keyup.enter.native="handleNext"
            />
          </el-form-item>
          <el-form-item
            v-if="step === 2"
            prop="verificationCode"
            :rules="[
              { required: true, message: 'Please enter verification code.' }
            ]"
          >
            <el-row :gutter="20">
              <el-col :span="24">
                <el-input
                  v-model="formData.verificationCode"
                  placeholder="Verification code case sensitive"
                  type="text"
                  @keyup.enter.native="handleNext"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
            v-if="step === 3"
            prop="password"
            :rules="{ validator: validatePass }"
          >
            <el-input
              v-model="formData.password"
              placeholder="Password"
              type="password"
              autocomplete="off"
              @keyup.enter.native="handleNext"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-if="step === 3"
            class="mt-35"
            prop="checkPass"
            :rules="{ validator: validateCheckPass }"
          >
            <el-input
              v-model="formData.checkPass"
              type="password"
              placeholder="Confirm password"
              autocomplete="off"
              @keyup.enter.native="handleNext"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              :disabled="!formData.email"
              class="mt-5"
              type="warning"
              style="width:100%;height:40px"
              @click.native.prevent="handleNext"
            >{{ step === 3 ? 'Confirm' : 'Next' }}</el-button>
          </el-form-item></el-form>
        <div v-if="step === 1" class="f13 mt-50 lh2">
          If you no longer use the email address associated with your account.
          contact customer service to help restore access to your account.
        </div>
      </section>
    </div>

    <!-- register-left -->
    <div class="register-left"></div>
    <!-- register-right -->
    <div class="register-right"></div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import {
  GetCode,
  SendVerificationCode,
  DoVerificationForUpdatePassword,
  UpdatePasswordAfterVerification
} from '@/api/login-register'
import { passwordReg, passwordMsg } from '@/utils/method'
export default {
  name: 'Login',
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
    return {
      getCodeText: 'Get Code',
      getCodeDisable: false,
      step: 1,
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
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
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
    getCode() {
      const mailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

      if (!this.formData.email) {
        this.$message.warning('Please enter email')
        return false
      } else if (!mailReg.test(this.formData.email)) {
        this.$message.warning('Please enter the correct email address')
        return false
      }
      const params = {
        email: this.formData.email
      }
      this.btnLoading = true
      GetCode(params)
        .then(res => {
          console.log(res)
          setTimeout(() => {
            this.btnLoading = false
          }, 1000)

          if (res.success) {
            var countDown = setInterval(() => {
              if (this.codeCount < 1) {
                this.getCodeDisable = false
                this.getCodeText = 'Get Code'
                this.codeCount = 30
                clearInterval(countDown)
              } else {
                this.getCodeDisable = true
                this.getCodeText = this.codeCount-- + ' s'
              }
            }, 1000)
            this.$message.success(res.msg)
          }
        })
        .catch(() => {
          this.btnLoading = false
        })
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
    handleNext() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          if (this.step === 1) {
            const params = {
              email: this.formData.email
            }
            this.loading = true
            SendVerificationCode(params)
              .then(res => {
                if (res.success) {
                  this.loading = false
                  this.step = 2
                }
              })
              .catch(() => {
                this.loading = false
              })
          } else if (this.step === 2) {
            const params = {
              email: this.formData.email,
              verificationCode: this.formData.verificationCode
            }
            this.loading = true
            DoVerificationForUpdatePassword(params)
              .then(res => {
                if (res.success) {
                  this.loading = false
                  this.step = 3
                }
              })
              .catch(() => {
                this.loading = false
              })
          } else if (this.step === 3) {
            const params = {
              password: this.formData.password,
              email: this.formData.email,
              verificationCode: this.formData.verificationCode
            }
            this.loading = true
            UpdatePasswordAfterVerification(params)
              .then(res => {
                if (res.success) {
                  this.$message.success(res.msg)
                  setTimeout(() => {
                    this.$router.push('/login')
                  }, 1000)
                }
              })
              .catch(() => {
                this.loading = false
              })
          }
          // this.loading = true
          // const params = Object.assign(this.formData)
          // RegisterAccount(params)
          //   .then(res => {
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     this.loading = false
          //   })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.forget-header-title {
  background: #3189ef;
  color: white;
}
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
    z-index: 9;
    margin: 5% auto;

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
      height: 615px;
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
  overflow: hidden;

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
