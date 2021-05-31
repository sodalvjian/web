<template>
  <!-- login success dialog -->
  <el-dialog
    :modal-append-to-body="false"
    :show-close="false"
    center
    width="40%"
    custom-class="dialog-show-info"
    :visible.sync="dialogVisible"
  >
    <div>
      <img src="@/assets/img/dialog_top.png" class="w" alt="" />
      <section class="p20 tc">
        <h3 class="color-main">
          {{
            type === 'login'
              ? 'Login Successfully. Welcome to Mercury NLP.'
              : 'Times reached Upper limit'
          }}
        </h3>
        <p v-if="type === 'login'">
          {{
            `You have ${FREE_CALL_API_LIMIT} free uses of Real-time Analysis. We recommend that you
          add payment information to your Account to continue when your free
          uses are up.`
          }}
        </p>
        <p v-else>
          You have reached your free limit usage. Please complete payment
          information in
          <strong class="disinblock"> [Account Settings]</strong> to continue.
        </p>
      </section>
      <footer class="tc">
        <el-button class="mb-40 " type="primary" @click="goToPersonal"
          >Go to Account Settings</el-button
        >
      </footer>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import { GetQuotaSettings } from '@/api/user-page'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      userName: store.getters.userInfo.accountName,
      type: 'login',
      FREE_CALL_API_LIMIT: 5
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openDialog(type) {
      this.dialogVisible = true
      this.type = type
      this.getSystemInfo()
    },
    getSystemInfo() {
      GetQuotaSettings().then(res => {
        this.FREE_CALL_API_LIMIT = res.data.FREE_CALL_API_LIMIT.val
      })
    },
    goToPersonal() {
      this.dialogVisible = false
      this.$router.push({ path: '/user/personalInfo' })
    }
  }
}
</script>
<style lang="scss">
.dialog-show-info {
  max-width: 600px;
}
</style>
