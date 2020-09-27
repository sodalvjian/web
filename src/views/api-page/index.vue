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
        >Download</el-button>
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
      <div class="bc mb-20">
        <!-- <h3>
          <svg class="icon f18 mr-5" aria-hidden="true">
            <use xlink:href="#iconinfo" />
          </svg>Installation instruction
        </h3> -->
        <div class="f15">
          <strong>First all, please make sure docker is installed in your
            environment.</strong>
          After downloading the docker image file of your model
          <span class="color-8">(e.g., test.tar)</span>
        </div>
        <pre class="bg-color-gray p15 radius5">
1. docker load -i /your image path/test.tar

2. docker run -d --network host --name mytest run “pip:test”</pre>
        <h4 class="color-red">Notes:</h4>
        <div class="bd-1-black p15 radius5">
          <p>
            1. The default tag of your docker image is the name of downloaded
            tar file. In the above example, the tag of test.tar is pip:test.
          </p>

          <p>
            2. The parameters of running docker should be adjusted according to
            your network.
          </p>

          <p>
            3. The default port of docker is 8080. Use server.port to customize
            it, e.g. docker run -d --network run “pip:test” --server.port 9999
          </p>
        </div>
      </div>
    </section>
    <section class="radius5 bg-color-white p25">
      <div class="bc mb-20">
        <div class="f15">
          <strong>
            Once the model is initiated, simply call the API with two
            parameters: id of the model and text to be processed:
          </strong>
        </div>
        <pre class="bg-color-gray p15 radius5">

{"pipelineId":"test","text":"hi,i am  diabetes and cancer patients"}

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pipelineId":"test","text":"hi,i am  diabetes and cancer patients"}' 'http://127.0.0.1:8080/query/brat'
{
  "docentiry": [
    {
      "id": 0,
      "docId": "xx",
      "startPos": 9,
      "endPos": 17,
      "semType": "clinical_finding",
      "seert": null,
      "entText": "diabetes",
      "code": null,
      "attr1": null,
      "attr2": "",
      "attr3": "",
      "attr4": ""
    },
    {
      "id": 0,
      "docId": "xx",
      "startPos": 22,
      "endPos": 37,
      "semType": "clinical_finding",
      "seert": null,
      "entText": "cancer patients",
      "code": null,
      "attr1": null,
      "attr2": "",
      "attr3": "",
      "attr4": ""
    }
  ],
  "bratFile": "{\"text\":\"hi,i am  diabetes and cancer patients\",\"entities\":[[\"T0\",\"clinical_finding\",[[9,17]]],[\"T1\",\"clinical_finding\",[[22,37]]]],\"relations\":[]}",
  "bratSem": "{\"entity_types\":[{\"type\":\"clinical_finding\",\"labels\":[\"clinical_finding\"],\"bgColor\":\"#00FF00\",\"borderColor\":\"darken\"}],\"entity_attribute_types\":[],\"relation_types\":[],\"event_types\":[]}"
}
        </pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
pre{
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
