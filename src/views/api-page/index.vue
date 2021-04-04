<template>
  <div class="">
    <nav class="vital-container cb bb-1">
      <strong class="fl mt-10 f16">API</strong>
      <div class="fr">
        <el-button
          class="filter-item shadow"
          type="primary"
          size="small"
          icon="el-icon-document-copy"
          @click="createData"
          >Download</el-button
        >
      </div>
    </nav>
    <!-- <div class="api-header tc fb pt-20 pb-30">
      <h2 class="color-white" style="white-space: pre;">Implement NLP     Empower clinical application</h2>
      <el-row :gutter="20" class="mt-30 color-white" style="max-width: 1000px;margin: 0 auto;">
        <el-col :span="6">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconneiye" />
            </svg>
          </div>
          <div>Quality measurement</div>
        </el-col>
        <el-col :span="6">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongouxuan" />
            </svg>
          </div>
          <div>Precision medicine</div>
        </el-col>
        <el-col :span="6">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconguangdie" />
            </svg>
          </div>
          <div>Phenotyping</div>
        </el-col>
        <el-col :span="6">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongongwen" />
            </svg>
          </div>
          <div>Drug repurposing</div>
        </el-col>
      </el-row>
    </div> -->
    <section class="bg-color-white p25">
      <vue-markdown v-html="mercuryApi">
      </vue-markdown>
    </section>
  </div>
</template>

<script>
import mercuryApi from '@/assets/md/mercury_api.md'
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  props: {},
  data() {
    return {
      mercuryApi
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
pre {
  overflow: auto;
}
.app-container {
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  * {
    word-break: break-word;
  }
}
.api-header {
  font-size: 16px;
  //   background: url('../../assets/images/api_bg.png');
  svg {
    font-size: 60px;
  }
}
</style>
