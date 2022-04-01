<template>
  <div>
    <!-- job list -->
    <job-list v-if="!createStatus" ref="jobListRef" @createData="createData" />
    <!-- job-create -->
    <job-create
      v-if="createStatus"
      ref="jobCreate"
      @close-dialog="closeDialog"
    />
  </div>
</template>

<script>
import jobList from './pages/job-list'
import jobCreate from './pages/job-create'
export default {
  name: '',
  components: {
    jobList,
    jobCreate
  },
  props: {},
  data() {
    return {
      createStatus: this.$route.query.createStatus
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log('进入')
  },
  methods: {
    closeDialog() {
      this.$router.push('/annotateJobs')
    },
    createData(type) {
      this.$router.push({
        path: '/annotateJobs',
        query: { createStatus: true }
      })
    }
  },
  filter: {}
}
</script>

<style lang="scss" scoped></style>
