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
      <article>
        <h2><strong>Mercury NLP APIs</strong></h2>
        <div>
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
        <hr />
        <p>invoke</p>
        <ul>
          <li>
            <p><strong>Description</strong></p>

            <p style="padding-left:15px">
              Returns JSON data about the entities and relations in a paragraph
              of text processed by a specified pipeline.
            </p>
          </li>

          <li>
            <p><strong>HOST</strong></p>

            <p style="padding-left:15px">http://www.autowire-code.com</p>
          </li>
          <li>
            <p><strong>URL</strong></p>

            <p style="padding-left:15px">/api/nlp</p>
          </li>

          <li>
            <p><strong>Method</strong></p>

            <p style="padding-left:15px">POST</p>
          </li>

          <li>
            <p><strong>URL Params</strong></p>

            <p style="padding-left:15px">None</p>
          </li>

          <li>
            <p><strong>Header Parameters</strong></p>

            <p><strong>Required</strong></p>

            <p>
              <code
                >x-api-key: Bearer < your key > <br />
                Content-Type: application/json</code
              >
            </p>
          </li>

          <li>
            <p><strong>Data Params</strong></p>

            <p><strong>Required</strong></p>

            <p><code>{"pipeline":< pipeline tag >,"text":< text >}</code></p>
          </li>
          <li>
            <p><strong>Success Response</strong></p>

            <p><strong>Code:</strong></p>
            <p style="padding-left:15px">200</p>
            <p><strong>Content:</strong></p>
            <p>
              <code>
                { "bratFile": {"text":"", "entities":[], "relations":[]},
                "bratSem": {}, "tokenBratFile": "", "tokenBratSem": "",
                "sentBratFile":{}, "typeDefXml":{ "entity_types":[],
                "relation_types":[] }, "outputTxt": null, "pieCharts": null,
                "preannotation": true, "hasSuggestion": false, "createdTime":
                null, }
              </code>
            </p>
          </li>

          <li>
            <p><strong>Error Response</strong></p>

            <p><strong>Code:</strong></p>
            <p style="padding-left:15px">400</p>
            <p><strong>Content:</strong></p>
            <p><code>{ error : "" }</code></p>

            <p><strong>Code:</strong></p>
            <p style="padding-left:15px">500</p>
            <p>
              <strong>Content:</strong><br /><code
                >{"timestamp":"","path":"/api/nlp","status":500,"error":"Internal
                Server Error","message":"","requestId":""}</code
              >
            </p>
          </li>
          <li>
            <p><strong>Sample Call</strong></p>

            <p>
              <code>
                curl --location --request POST
                'http://www.autowire-code.com/api/nlp'<br />
                --header 'x-api-key: Bearer
                eyJ0eXAiOiJjikQiLCJhbGciOiJIUI1NiJ9.eyJ1c2VySWQiOiI1IiwidXJsjoiaHR0cDjOuH3d3dy5hdXRvd2lyZS1jb2RlLmNvbSJ9.lgNDASH4jip7jwuZVllNqiW1ZpSYdWuaOP92cmMlIi8'<br />
                --header 'Content-Type: application/json'<br />
                --data-raw
                '{"pipeline":"default_pipeline_1:$LATEST","text":"PPPPP is a 21
                yo female with past psychiatric history significant for SIMD ,
                opiate use disorder , benzodiazepine use disorder , amphetamine
                use disorder, and generalized anxiety disorder who presents with
                SI with plan to overdose on heroin in the context of heroin ,
                cocaine , methamphetamine abuse , medication noncompliance and
                psychosocial stressors ."}'
              </code>
            </p>
          </li>

          <li>
            <p><strong>Notes</strong></p>

            <p style="padding-left:15px">None</p>
          </li>
        </ul>
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
