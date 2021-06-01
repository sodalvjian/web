<template>
  <el-dialog title="Privacy Policy" :visible.sync="dialogVisible" width="40%">
    <p>This is Privacy Policy</p>
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
