<template>
  <div class=""></div>
</template>
<script>
import { GetUserInfo } from '@/api/user-page'
import Cookies from 'js-cookie'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      token: this.$route.query.token,
      uid: this.$route.query.uid
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.autoLogin()
  },
  beforeDestroy() {},
  methods: {
    autoLogin() {
      console.log('token', this.token)
      Cookies.remove('userInfo')
      sessionStorage.clear()
      this.$store
        .dispatch('user/loginAuto', this.token)
        .then(res => {
          this.getUserInfo()
        })
        .catch(err => {
          console.log('error', err)
          if (err.code === 404) {
            this.$message.error(err.msg)
          }
          location.href = '/'
          this.loading = false
        })
    },
    getUserInfo() {
      GetUserInfo()
        .then(res => {
          if (res.success) {
            this.$store.dispatch('user/setUserInfo', res.data)
            console.log('为什么过不去', res)
            location.href = '/'
            this.loading = false
          } else {
            this.$message.error(res.msg)
          }
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="scss" scoped></style>
