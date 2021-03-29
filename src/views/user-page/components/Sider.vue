<template>
  <aside class="user-sider br-1 bg-color-white">
    <nav class="tc bb-1 p20">
      <el-avatar shape="circle" :size="80" :src="avatarSrc"></el-avatar>
      <div class="mt-10">
        <strong class="color-black f16">{{ userName }} </strong>
      </div>
    </nav>
    <section v-loading="feeLoading" class="mt-20 p20">
      <el-row>
        <el-col :span="21">
          <strong class="f16">Monthly maximum expense for a single account</strong>
        </el-col>
        <el-col :span="3" align="right"
          ><i class="el-icon-edit cp f20 color-main" @click="handleConnect"></i
        ></el-col>
        <el-col :span="24" class="mt-15">
          <strong class="f26">$ {{ quotaSetting.QUOTA.val }}</strong>
        </el-col>
      </el-row>
      <el-row class="mt-30">
        <el-col :span="21">
          <strong class="f16">Monthly maximum expense for a single task</strong>
        </el-col>
        <el-col :span="3" align="right"
          ><i class="el-icon-edit cp f20 color-main" @click="handleConnect"></i
        ></el-col>
        <el-col :span="24" class="mt-15">
          <strong class="f26">$ {{ quotaSetting.TASK_QUOTA.val }}</strong>
        </el-col>
      </el-row>
    </section>
    <ul class="user-sider-mean bt-1 pt-20">
      <router-link to="/user/cost"
        ><li :class="handleActive('cost')">
          Billing & Cost Management
        </li></router-link
      >
      <router-link to="/user/orderInvoice"
        ><li :class="handleActive('orderInvoice')">
          Order and invoice
        </li></router-link
      >
      <router-link to="/user/personalInfo"
        ><li :class="handleActive('personalInfo')">
          Personal Information& credit card
        </li></router-link
      >
      <router-link to="/user/accountPassword"
        ><li :class="handleActive('accountPassword')">
          Account and password
        </li></router-link
      >
    </ul>
  </aside>
</template>
<script>
import store from '@/store'
const defaultAvatar = require('@/assets/img/avatar.png')
import { GetQuotaSettings } from '@/api/user-page'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      userName: store.getters.userInfo.accountName,
      avatarSrc: store.getters.userInfo.imagePath || defaultAvatar,
      feeLoading: false,
      quotaSetting: {
        QUOTA: {},
        TASK_QUOTA: {},
        MAIL_TO_USER: {}
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getVoucher()
  },
  beforeDestroy() {},
  methods: {
    handleConnect() {
      this.$alert(
        `<div class="cb">
        <div class="fl w10">
        <i class="el-icon-warning color-yellow f26 mr-15"></i></div>
        <div class="fl w90">
        <strong>Please contact the administrator if you want to change the amount limit</strong>
        <div class="mt-10 color-red">
        E-mail: <a href=mailto:${this.quotaSetting.MAIL_TO_USER.val}>${this.quotaSetting.MAIL_TO_USER.val}</a>
        </div>
        </div>
        </div>
        `,
        {
          confirmButtonText: 'OK',
          center: true,
          dangerouslyUseHTMLString: true,
          customClass: 'show-connect-info'
        }
      )
    },
    handleActive(name) {
      const routerName = this.$route.name
      if (routerName === name) {
        return 'active'
      } else {
        return ''
      }
    },
    getVoucher() {
      this.feeLoading = true
      GetQuotaSettings().then(res => {
        this.feeLoading = false
        if (res.code === 200) {
          this.quotaSetting = res.data
        }
      })
    }
  }
}
</script>
<style lang="scss">
.show-connect-info {
  width: 340px;
}
</style>
