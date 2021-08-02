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
      <img src="@/assets/img/dialog_top.svg" class="w" alt="" />
      <section class="p20 tc">
        <h3 class="color-main">
          {{ messageTitle }}
        </h3>
        <p v-if="type === 'login'">
          {{
            `You have ${FREE_CALL_API_LIMIT} free uses of Real-Time Analysis. We recommend that you
          add payment information to your account to continue when your free
          uses are up.`
          }}
        </p>
        <p v-else v-html="messageDescript"></p>
      </section>
      <footer class="tc">
        <el-button
          class="mb-40 "
          type="primary"
          @click="goToPersonal"
        >Go to Account Settings</el-button>
      </footer>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
import { GetQuotaSettings } from '@/api/user-page'
import { errorCode } from './constants'
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
  computed: {
    messageTitle() {
      const message = errorCode.find(item => item.type === this.type).title
      return message
    },
    messageDescript() {
      const message = errorCode.find(item => item.type === this.type)
        .description
      return message
    }
  },
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
