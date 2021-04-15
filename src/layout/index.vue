<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar v-if="hideSidebar" class="sidebar-container" />
    <div :class="{ 'fixed-header': true }">
      <navbar />
    </div>
    <div class="main-container" :style="hideSidebar || 'margin-left:0'">
      <app-main />
    </div>

    <!-- 返回顶部 -->
    <el-backtop class="page-backup" :right="28" :bottom="80"></el-backtop>

    <!-- 问题反馈 -->
    <feedback-module />
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import FeedbackModule from './components/FeedbackModule'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FeedbackModule
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    hideSidebar() {
      const routerPath = this.$route.path
      console.log(this.$route)
      if (routerPath.indexOf('/user') !== -1) {
        return false
      }
      return true
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  min-width: 1000px;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1002;
  // width: calc(100% - #{$sideBarWidth});
  width: 100%;
  transition: width 0.28s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px);
// }

.mobile .fixed-header {
  width: 100%;
}
.page-backup {
  z-index: 2000;
}
</style>
