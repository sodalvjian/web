<template>
  <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%">
    <article>
      <header>
        <p>
          Please copy the information to
          <a
            class="color-main"
            href="https://s3.console.aws.amazon.com/s3/buckets/testofhong/?region=us-east-2&tab=permissions"
            target="_blank"
            ><u> S3 authorization</u></a
          >
        </p>
        <div>
          <el-button
            v-clipboard:copy="s3Data"
            v-clipboard:success="copySuccess"
            class="filter-item shadow"
            type="primary"
            size="mini"
            icon="el-icon-document-copy"
            >Copy</el-button
          >
        </div>
      </header>
      <section class="mt-20 pb-20">
        <codemirror
          ref="jsonEditor"
          v-model="s3Data"
          :options="cmOptions"
        ></codemirror>
      </section>
    </article>
  </el-dialog>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/display/autorefresh'
export default {
  name: '',
  components: { codemirror },
  props: {},
  filters: {},
  data() {
    return {
      dialogVisible: false,
      dialogTitle: '',
      s3Data: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        lineWrapping: true,
        mode: 'json',
        lineNumbers: true
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    openDialog(type, data) {
      this.dialogTitle = type === 'r' ? 'S3 input info' : 'S3 output info'
      this.dialogVisible = true
      this.s3Data = data
    },
    copySuccess() {
      this.$message.success('Copy success!')
    }
  }
}
</script>

<style lang="scss" scoped></style>
