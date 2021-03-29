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
              ? 'Login successfully'
              : 'Times reached Upper limit'
          }}
        </h3>
        <p v-if="type === 'login'">
          {{ userName }} Go to personal center You
          have not set up the credit card information, we suggest you go to
          <strong class="disinblock"> [ Personal Center ] </strong> as soon as
          possible to supplement information, so as not to affect your service
        </p>
        <p v-else>
          The limit has been reached, we suggest you go to
          <strong class="disinblock"> [Personal Center] </strong> as soon as
          possible to supplement information, so as not to affect your service
        </p>
      </section>
      <footer class="tc">
        <el-button
          class=" mb-40"
          type="primary"
          @click="goToPersonal"
        >Go to personal center</el-button>
      </footer>
    </div>
  </el-dialog>
</template>
<script>
import store from '@/store'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      userName: store.getters.userInfo.accountName,
      type: 'login'
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
    },
    goToPersonal() {
      this.dialogVisible = false
      this.$router.push({ path: '/user/personalInfo' })
    }
  }
}
</script>
<style lang="scss">
.dialog-show-info{
  max-width: 600px;
}
</style>
