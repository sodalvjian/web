<template>
  <div class="">
    <section
      v-loading="pageLoading"
      class="bg-color-white p20-25 api-container"
    >
      <!-- <vue-markdown v-html="mercuryApi">
      </vue-markdown> -->
      <article style="padding-right:80px">
        <strong class="color-main f17">Mercury NLP API</strong>
        <div class="mt-10">
          <strong>API key:</strong>
          <small>{{ apiType ? apiKey : '***************************' }}</small>
          <span class="color-light-blue ml-10 cp" @click="showApi">
            <svg-icon :icon-class="apiType ? 'eye' : 'eye-open'" />
          </span>
          <el-tooltip class="item" effect="dark" content="Copy" placement="top">
            <el-button
              v-clipboard:copy="apiKey"
              v-clipboard:success="copySuccess"
              class="ml-10 f15 color-light-blue"
              type="text"
              icon="el-icon-document-copy"
            ></el-button>
          </el-tooltip>
        </div>
      </article>
    </section>
    <section class="bg-color-white p25 bt-10">
      <iframe
        width="100%"
        style="height:67vh"
        src="/static/api.html"
        frameborder="0"
      ></iframe>
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
      apiKey: '',
      apiType: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getUserInfo()
  },
  methods: {
    showApi() {
      this.apiType = !this.apiType
    },
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
