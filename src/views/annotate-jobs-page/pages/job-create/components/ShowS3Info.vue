<template>
  <el-dialog
    title="Verity S3"
    :visible.sync="dialogVisible"
    :width="doubleShow ? '80%' : '40%'"
  >
    <article>
      <el-row :gutter="15">
        <el-col
          v-for="(item, index) in verityList"
          :key="index"
          :span="doubleShow ? 12 : 24"
        >
          <header>
            <h3>{{ setTitle(verityList, index) }}</h3>
            <p>
              Please copy the information to
              <a class="color-main" :href="item.url" target="_blank"
                ><u> S3 authorization</u></a
              >
            </p>
            <div>
              <el-button
                v-clipboard:copy="item.temp"
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
              v-model="item.temp"
              :options="cmOptions"
            ></codemirror>
          </section>
        </el-col>
      </el-row>
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
  filters: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      doubleShow: false,
      readStatus: false,
      whiteStatus: false,
      verityList: [],
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
    setTitle(list, index) {
      console.log('list', list)
      if (list.length > 1) {
        return index === 0 ? 'Input' : 'Output'
      } else if (list.length === 1) {
        return !this.readStatus ? 'Input' : 'Output'
      }
    },
    openDialog(data) {
      console.log(data)
      this.readStatus = data.read
      this.whiteStatus = data.white
      this.doubleShow = !data.read && !data.write
      this.dialogVisible = true
      this.verityList = data.list
      // this.s3Data = data.temp
      // this.s3Url = data.url
    },
    copySuccess() {
      this.$message.success('Copy success!')
    }
  }
}
</script>

<style lang="scss" scoped></style>
