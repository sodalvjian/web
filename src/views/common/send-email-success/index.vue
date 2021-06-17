<template>
  <div class="forget-password-container">
    <div class="forget-content">
      <header class="tl cb">
        <div class="fl">
          <img width="90px" src="../../../assets/img/Group.png" alt="" />
        </div>
        <a href="/" class="mt-20 ml-20 fl"
          ><img src="@/assets/img/logo_color.png" width="200px" alt=""
        /></a>
      </header>
      <div v-if="!registerFail" class="register-content p30 bg-color-white">
        <section class="tc p30">
          <div class="f24">Message sent</div>
          <div class="mt-20 f13 p20 lh1-5">
            Email has been sent to your email
            <span class="color-light-blue">{{ formData.email }}</span
            ><br />
            Check the mail
          </div>
          <div class="mt-30 w p15 color-white bg-color-main">
            Message sent <i class="el-icon-check"></i>
          </div>
          <div class="mt-40 color-light-blue cp tc f13">
            <router-link to="/login">Back to login</router-link>
          </div>
        </section>
      </div>
      <div v-else class="register-content p30 bg-color-white">
        <section class="tc p30">
          <div class="f24">Error</div>
          <div class="mt-20 f14 p20 lh1-5">
            We are very sorry. This link is no longer valid.
          </div>
          <div class="mt-30 w p15 color-white bg-color-red">
            <i class="el-icon-close"></i>
          </div>
          <div class="mt-40 color-light-blue cp tc f13">
            <router-link to="/register">Back to Sign up</router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      registerFail: this.$route.query.registerFail,
      formData: {
        email: ''
      }
    }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
.show-email-info {
  width: 300px;
}
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #757575;
$cursor: #757575;

/* reset element-ui css */
.forget-password-container {
  .forget-content {
    width: 1024px;
    margin: 0 auto;
    header {
      margin-left: -120px;
    }
  }
  .register-content {
    width: 500px;
    z-index: 9;
    margin: 20px auto;
    box-shadow: 0px 0px 39px 0px #155dee0f;
    .el-input__inner {
      border: 1px solid #e4e4e4;
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

.forget-password-container {
  height: 100%;
  width: 100%;
  background-color: #fff;
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
