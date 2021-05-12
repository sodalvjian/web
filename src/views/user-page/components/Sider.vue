<template>
  <aside class="user-sider br-1 bg-color-white">
    <ul class="user-sider-mean">
      <router-link
        to="/user/cost"
      ><li :class="handleActive('cost')">
        Bills & Credits
      </li></router-link>
      <router-link
        to="/user/orderInvoice"
      ><li :class="handleActive('orderInvoice')">
        Payments
      </li></router-link>
      <router-link
        to="/user/personalInfo"
      ><li :class="handleActive('personalInfo')">
        Payment Information
      </li></router-link>
      <router-link
        to="/user/accountPassword"
      ><li :class="handleActive('accountPassword')">
        Account Security
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
