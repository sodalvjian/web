<template>
  <el-dialog title="User Agreement" :visible.sync="dialogVisible" width="40%">
    <p>This is User Agreement</p>
  </el-dialog>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openDialog() {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped></style>
