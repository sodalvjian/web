<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <svg
            v-if="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            class="mr-10 icon f19 side-svg color-black"
            aria-hidden="true"
          >
            <use :xlink:href="onlyOneChild.meta.icon" />
          </svg>
          <item :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <svg class="mr-10 icon f19 side-svg color-black" aria-hidden="true">
          <use :xlink:href="item.meta.icon" />
        </svg>
        <item v-if="item.meta" :title="item.meta.title" />
      </template>
      <el-menu-item index="2">
        <a href="/document#Overview" title="Overview"> <span slot="title">Overview</span></a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="/document#Login" title="Login"> <span slot="title">Login</span></a>
      </el-menu-item>
      <el-menu-item index="4">
        <a class="text-short" title="User Account and Password Management" href="/document#Account-management">
          <span slot="title">User Account and Password Management</span></a
        >
      </el-menu-item>
      <el-menu-item index="5">
        <a class="text-short" title="Feedback" href="/document#Feedback">
          <span slot="title"> Feedback</span></a
        >
      </el-menu-item>
      <el-menu-item index="6">
        <a class="text-short" title="Clinical Real-Time Analysis" href="/document#Real-time">
          <span slot="title"
            >Clinical Real-Time Analysis</span
          ></a
        >
      </el-menu-item>
      <el-menu-item index="7">
        <a class="text-short" title="Clinical Batch Analysis" href="/document#Batch">
          <span slot="title"
            >Clinical Batch Analysis</span
          ></a
        >
      </el-menu-item>
      <el-menu-item index="8" title="API Use">
        <a href="/document#API"> <span slot="title">API Use</span></a>
      </el-menu-item>
      <!-- <sidebar-item
        v-for="child in item.children"
        :key="child.key"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      /> -->
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      console.log('children', children)
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          console.log('this.onlyOneChild', this.onlyOneChild)
          return true
        }
      })
      console.log('showingChildren啊啊啊啊.', showingChildren)

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
