<template>
  <aside class="user-sider br-1 bg-color-white">
    <nav class="tc bb-1 p20">
      <el-avatar shape="circle" :size="80" :src="avatarSrc"></el-avatar>
      <div class="mt-10">
        <strong class="color-black f16">{{ userName }} </strong>
      </div>
    </nav>
    <section class="mt-20 p20">
      <el-row>
        <el-col :span="21">
          <strong class="f16">Maximum fee for a single account</strong>
        </el-col>
        <el-col :span="3" align="right"><i class="el-icon-edit cp f20 color-main"></i></el-col>
        <el-col :span="24" class="mt-15">
          <strong class="f35">$ 100</strong>
        </el-col>
      </el-row>
      <el-row class="mt-30">
        <el-col :span="21">
          <strong class="f16">Maximum fee for a single task</strong>
        </el-col>
        <el-col :span="3" align="right"><i class="el-icon-edit cp f20 color-main"></i></el-col>
        <el-col :span="24" class="mt-15">
          <strong class="f35">$ 20</strong>
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
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      userName: store.getters.userInfo.accountName,
      avatarSrc: store.getters.userInfo.imagePath || defaultAvatar
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$router)
  },
  beforeDestroy() {},
  methods: {
    handleActive(name) {
      const routerName = this.$route.name
      if (routerName === name) {
        return 'active'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
