<template>
  <aside class="user-sider br-1 bg-color-white">
    <nav class="tc bb-1 p20">
      <el-avatar shape="circle" :size="80" :src="avatarSrc"></el-avatar>
      <div class="mt-10">
        <strong class="color-black f16">{{ userName }} </strong>
      </div>
    </nav>
    <ul class="user-sider-mean">
      <router-link
        to="/user/cost"
      ><li :class="handleActive('cost')">
        Billing & Cost Management
      </li></router-link>
      <router-link
        to="/user/personalInfo"
      ><li :class="handleActive('personalInfo')">
        Personal Information& credit card
      </li></router-link>
      <router-link
        to="/user/accountPassword"
      ><li :class="handleActive('accountPassword')">
        Account and password
      </li></router-link>
      <router-link
        to="/user/orderInvoice"
      ><li :class="handleActive('orderInvoice')">
        Order and invoice
      </li></router-link>
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
