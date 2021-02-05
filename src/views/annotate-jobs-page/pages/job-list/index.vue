<template>
  <div>
    <nav class="vital-container cb bb-1">
      <strong class="fl f16">Job list</strong>
      <div class="fr">
        <el-button
          class="filter-item shadow"
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="createData"
          >Job</el-button
        >
      </div>
    </nav>
    <section class="p20">
      <el-table
        v-loading="listLoading"
        class="table-content"
        :data="tableList"
        highlight-current-row
        style="width: 100%"
        @row-click="viewDetail"
        @sort-change="changeTableSort"
      >
        <no-data-table slot="empty"></no-data-table>
        <el-table-column align="center" label="No." width="60" type="index">
        </el-table-column>

        <!-- <el-table-column width="180px" align="center" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column> -->
        <el-table-column
          min-width="170px"
          show-overflow-tooltip
          sortable="custom"
          label="Name"
          prop="name"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="170px"
          show-overflow-tooltip
          align="left"
          sortable="custom"
          label="Type"
          prop="pipeline"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.pipeline }}</span>
          </template>
        </el-table-column>

        <el-table-column width="250px" align="left">
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              :disabled="setTooltipDisabled(scope.row)"
              :content="setTooltipContent(scope.row)"
              placement="top"
            >
              <span
                v-if="
                  scope.row.status === 'STOPPED' ||
                    scope.row.reqStatus === 'STOPPED' ||
                    scope.row.reqStatus === 'STOPPING'
                "
                >--</span
              >
              <div
                v-else-if="
                  scope.row.status === 'STARTED' ||
                    scope.row.status === 'STARTING'
                "
                class="progress-running"
              >
                <el-progress :percentage="0" class="w"></el-progress
                ><i
                  style="right:14%"
                  class="progress-running-icon el-icon-loading"
                ></i>
              </div>
              <el-progress
                v-else
                :percentage="setPercent(scope.row)"
                :status="setStatus(scope.row)"
              ></el-progress>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column width="120px" label="Status">
          <template slot-scope="scope">
            {{
              scope.row.reqStatus !== 'UNKNOWN' && scope.row.reqStatus
                ? scope.row.reqStatus
                : scope.row.status
            }}
          </template>
        </el-table-column>
        <el-table-column
          width="190px"
          align="center"
          sortable="custom"
          label="Create Time"
          prop="date"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.date | setHourDate }}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="190px"
          sortable="custom"
          label="Updated Time"
          prop="update"
        >
          <template slot-scope="scope">
            {{ scope.row.update | setHourDate }}
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="Operation"
          fixed="right"
          width="90px"
        >
          <template slot-scope="scope">
            <el-tooltip
              v-if="
                scope.row.status === 'STARTED' ||
                  scope.row.status === 'STARTING'
              "
              class="item"
              effect="dark"
              content="Stop job"
              placement="top"
            >
              <i
                class="el-icon-remove color-red cp"
                @click.stop="stopData(scope.row)"
              ></i>
            </el-tooltip>
            <span v-else>--</span>

            <!-- <span v-if="setRole(scope.row).indexOf('admin') !== -1">--</span> -->
          </template>
        </el-table-column>
      </el-table>
      <div class="tr mt-25">
        <el-pagination
          background
          :page-size="10"
          hide-on-single-page
          layout="total, prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import {
  DelData,
  // GET_USER_LIST
  GetList
} from '@/api/annotate-jobs-page'
export default {
  name: 'InlineEditTable',
  filters: {},
  components: {},
  data() {
    return {
      tableList: [],
      setInterval: {},
      loading: false,
      listLoading: true,
      page: 0,
      pageSize: 10,
      total: 0,
      propData: 'date',
      orderData: 'desc'
    }
  },
  computed: {},
  created() {
    clearInterval(this.setInterval)
    this.getList()
    this.setInterval = setInterval(() => {
      this.getList(false)
    }, 45 * 1000)
  },
  destroyed() {
    clearInterval(this.setInterval)
  },
  methods: {
    // 排序
    changeTableSort(column) {
      this.propData = column.order ? column.prop : 'date'
      this.orderData = column.order
        ? column.order === 'descending'
          ? 'desc'
          : 'asc'
        : 'desc'

      this.getList()
    },
    setTooltipDisabled(row) {
      if (row.processedErrCount > 0) {
        return false
      }
      return true
    },
    setTooltipContent(row) {
      if (row.processedErrCount > 0) {
        return `Error count: ${row.processedErrCount}`
      }
    },
    setPercent(row) {
      const processNum = row.processedSize / row.totalSize
      if (processNum) {
        if (Math.round(processNum * 100) >= 100) {
          return 100
        } else {
          return Math.round(processNum * 100)
        }
      } else if (row.status === 'FAILED') {
        return 100
      } else {
        return 0
      }
      // return processNum
      //   ? Math.round(processNum * 100) >= 100
      //     ? 100
      //     : Math.round(processNum * 100)
      //   : 0
    },
    setStatus(row) {
      const processNum = row.processedSize / row.totalSize
      return row.processedErrCount > 0
        ? 'warning'
        : processNum
        ? Math.round(processNum * 100) >= 100
          ? 'success'
          : ''
        : 'exception'
    },
    // 查看job detail
    viewDetail(row, column, event) {
      this.$router.push({ path: '/jobDetails', query: { bizId: row.bizId } })
      // sessionStorage.patientListData = JSON.stringify(row)
    },
    setRole(val) {
      const roleArray = val.roles.map(item => {
        return item.name
      })
      return roleArray.join(',')
    },
    stopData(row) {
      this.$confirm('Are you sure you want to stop job?', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          DelData(row).then(res => {
            if (res.code === 200) {
              this.$message({
                type: 'success',
                message: 'Stop success.'
              })
              this.getList()
            }
          })
        })
        .catch(() => {})
    },
    createData() {
      this.$emit('createData', 'create')
    },
    handleCurrentChange(val) {
      this.page = val
      this.getList()
    },
    getList(loadingNotShow) {
      if (!loadingNotShow) {
        this.listLoading = true
      }

      const paramsOptions = {
        page: this.page,
        pageSize: this.pageSize,
        propData: this.propData,
        orderData: this.orderData
      }
      const params = {
        name: this.$route.query.jobName || ''
      }
      GetList(paramsOptions, params)
        .then(res => {
          if (res.code === 200) {
            this.tableList = res.data.content
            this.listLoading = false
            this.total = res.data.totalElements
          }
        })
        .catch(() => {
          this.listLoading = false
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss"></style>
