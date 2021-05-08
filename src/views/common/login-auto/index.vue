<template>
  <div class=""></div>
</template>
<script>
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
      this.$store
        .dispatch('user/loginAuto', this.token)
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
    }
  }
}
</script>
<style lang="scss" scoped></style>
