<template>
  <div class="">
    <!-- <nav class="vital-container cb bb-1">
      <strong class="mt-10 fl f16">API</strong>
      <div class="fr">
        <el-button
          class="shadow filter-item"
          type="primary"
          size="small"
          icon="el-icon-document-copy"
          >Download</el-button
        >
      </div>
    </nav> -->
    <!-- <div class="pt-20 api-header tc fb pb-30">
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
    <section v-loading="pageLoading" class="bg-color-white p25 api-container">
      <!-- <vue-markdown v-html="mercuryApi">
      </vue-markdown> -->
      <article style="padding-right:80px">
        <h2 style="padding-left:102px"><strong>Mercury NLP APIs</strong></h2>
        <div style="padding-left:102px" class="mb-20 bb-1">
          <strong>Api key:</strong> <small>{{ apiKey }}</small>
          <el-tooltip class="item" effect="dark" content="Copy" placement="top">
            <el-button
              v-clipboard:copy="apiKey"
              v-clipboard:success="copySuccess"
              class="ml-10 f15"
              type="text"
              icon="el-icon-document-copy"
            ></el-button>
          </el-tooltip>
        </div>
        <iframe
          width="100%"
          style="height:60vh"
          src="/static/api.html"
          frameborder="0"
        ></iframe>
      </article>
    </section>
  </div>
</template>

<script>
import mercuryApi from '@/assets/md/mercury_api.md'
import store from '@/store'
import { GetUserInfo } from '@/api/user-page'
// import VueMarkdown from 'vue-markdown'
export default {
  components: {
    // VueMarkdown
  },
  props: {},
  data() {
    return {
      mercuryApi,
      pageLoading: false,
      userId: store.getters.userInfo.userId,
      apiKey: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getUserInfo()
  },
  methods: {
    copySuccess() {
      this.$message.success('Copy success!')
    },
    getUserInfo() {
      this.pageLoading = true
      GetUserInfo()
        .then(res => {
          this.apiKey = res.data.apiKey
          this.pageLoading = false
        })
        .catch(() => {
          this.pageLoading = false
        })
    }
  }
}
</script>
<style scoped lang="scss">
.api-container {
  color: #5f5f5f;
  p {
    padding: 5px 0;
    strong {
      display: block;
      background-color: #f6f6f6;
      padding: 15px;
      color: #000;
    }
  }

  // ul {
  //   li {
  //     p:nth-child(2),
  //     p:nth-child(3) {
  //       padding: 0 20px 20px 20px;
  //     }
  //   }
  // }
}
code {
  background-color: #eee;
  display: block;
  padding: 10px;
  margin: 10px;
  border: 1px solid #bbb;
}

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
