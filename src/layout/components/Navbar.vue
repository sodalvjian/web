<template>
  <div class="navbar">
    <router-link
      to="/realtimeAnalysis"
    ><span
      class="navbar-logo"
    ><img src="@/assets/img/mercury_logo_beta.svg" alt="" /></span></router-link>
    <!-- <hamburger
      v-if="router.indexOf('user') === -1"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->
    <!-- <span
      class="header-back cp"
      @click="historyBack"
    ><i class="el-icon-back"></i></span> -->
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <!-- <div class="navbar-search bl-1">
      <el-input
        v-model="navbarQuery"
        clearable
        placeholder="Search job name"
        @keyup.enter.native="handleSearchJob"
        @clear="handleSearchJob"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-search"
          @click="handleSearchJob"
        ></i>
      </el-input>
    </div> -->

    <div class="right-menu">
      <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->
      <el-dropdown class="avatar-container fr" trigger="click">
        <div class="avatar-wrapper">
          <!-- <svg class="icon f22 cp header-menu" aria-hidden="true">
            <use xlink:href="#icon-A19" />
          </svg> -->
          <span class="mr-15 header-title fl cb cp">
            <el-avatar size="small" class="mr-15 fl header-avatar">
              {{ userName | setUserName }}
            </el-avatar>
            <span class="f16 fl">{{ userName }}</span></span>
          <i class=" f16 cp header-menu el-icon-arrow-down fb"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/user/cost">
            <el-dropdown-item>
              Account Settings
            </el-dropdown-item>
          </router-link>
          <!--
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a> -->
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- info message -->
    <dialog-show-info ref="dialogShowInfoRef" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
// import ErrorLog from '@/components/ErrorLog'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
import DialogShowInfo from '@/components/DialogShowInfo'
const defaultAvatar = require('@/assets/img/avatar.png')
export default {
  components: {
    // Breadcrumb,
    // Hamburger,
    DialogShowInfo
    // ErrorLog
  },
  filters: {
    setUserName(val) {
      return val.substr(0, 1)
    }
  },
  data() {
    return {
      userName: store.getters.userInfo.accountName,
      avatarSrc: store.getters.userInfo.imagePath || defaultAvatar,
      navbarQuery: ''
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    router() {
      console.log('this.$route', this.$route)
      return this.$route.path
    }
  },
  mounted() {
    console.log('用户名', store.getters.userInfo)
    this.showBeginInfo()
  },
  methods: {
    showBeginInfo() {
      if (!sessionStorage.firstLogin && store.getters.userInfo.status === 1) {
        this.$refs.dialogShowInfoRef.openDialog('login')
        sessionStorage.firstLogin = true
      }
    },
    handleSearchJob() {
      this.$router.push({
        path: '/annotateJobs',
        query: {
          jobName: this.navbarQuery
        }
      })
    },
    historyBack() {
      window.history.back()
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss">
.header-avatar {
  margin-top: 10px;
  background-color: #3688ff !important;
}
.dialog-show-info {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0 !important;
  }
  p {
    padding: 10px 50px;
    color: #888;
    line-height: 2;
  }
}
.navbar-search {
  float: left;
  padding-left: 5px;
  line-height: 65px;
  input.el-input__inner {
    border: none !important;
    width: 350px;
  }
}
</style>
<style lang="scss" scoped>
.errLog-container {
  display: inline-block;
  vertical-align: top;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #2b3067;
  .navbar-logo {
    float: left;
    line-height: 50px;
    img {
      width: 220px;
      margin-left: 17px;
      margin-top: 17px;
    }
  }

  .header-title {
    margin-bottom: 3px;
  }
  .header-menu {
    margin-bottom: 2px;
  }
  .header-back {
    float: left;
    margin-top: 14px;
    font-size: 20px;
    margin-right: 10px;
  }

  .breadcrumb-container {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 45px;

    &:focus {
      outline: none;
    }
    .el-dropdown,
    .el-dropdown-menu__item,
    .el-message .el-message__content {
      color: #fff;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 15px;

      .avatar-wrapper {
        margin-top: 2px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
