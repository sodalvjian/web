<template>
  <el-dialog title="Privacy Policy" :visible.sync="dialogVisible" width="30%">
    <p>This is Privacy Policy</p>
  </el-dialog>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    openDialog() {
      this.dialogVisible = true
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {}
}
</script>
<style lang="scss" scoped></style>
