<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item
      v-if="patientsShow"
      :to="{ path: '/patientListDetail', query: { id: patientListId } }"
    >Patient list detail</el-breadcrumb-item>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null,
      patientsShow: false,
      patientListId: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    setPatientsShow(val) {
      if (val.fullPath.indexOf('patientListId') !== -1) {
        this.patientListId = val.query.patientListId
        this.patientsShow = true
      } else {
        this.patientsShow = false
      }
    },
    getBreadcrumb() {
      if (this.$route.name === 'PatientDetail') {
        this.setPatientsShow(this.$route)
      } else {
        this.patientsShow = false
      }
      // only show routes with meta.title
      const matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      )
      // const first = matched[0]

      // if (!this.isDashboard(first)) {
      //   matched = [{ meta: { title: 'Home' }}].concat(matched)
      // }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  font-size: 14px;
  line-height: 65px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
