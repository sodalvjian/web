<template>
  <aside class="user-sider br-1 bg-color-white">
    <ul class="user-sider-mean">
      <router-link to="/user/cost"
        ><li :class="handleActive('cost')">
          Bills & Credits
        </li></router-link
      >
      <router-link to="/user/orderInvoice"
        ><li :class="handleActive('orderInvoice')">
          Payments
        </li></router-link
      >
      <router-link to="/user/personalInfo"
        ><li :class="handleActive('personalInfo')">
          Payment Information
        </li></router-link
      >
      <router-link to="/user/accountPassword"
        ><li :class="handleActive('accountPassword')">
          Account Security
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
      avatarSrc: store.getters.userInfo.imagePath || defaultAvatar,
      feeLoading: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
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
    }
  }
}
</script>
<style lang="scss">
.show-connect-info {
  width: 340px;
}
</style>
