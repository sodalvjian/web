<template>
  <div>
    <vue-pdf-app
      class="pdf-viewer"
      theme="light"
      :config="{ sidebar: false }"
      pdf="https://mercurydevinput.s3.us-east-2.amazonaws.com/mercury/MEL-MercuryNLP.pdf"
    ></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from 'vue-pdf-app'
import 'vue-pdf-app/dist/icons/main.css'
export default {
  name: '',
  components: {
    VuePdfApp
  },
  props: {},
  filters: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.pdf-viewer {
  height: calc(100vh - 80px);
}
</style>
