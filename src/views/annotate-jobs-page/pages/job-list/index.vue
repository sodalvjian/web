<template>
  <div>
    <nav class="vital-container cb bb-1">
      <strong class="fl mt-10 f16">Job list</strong>
      <div class="fr">
        <el-button
          class="filter-item shadow"
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="createData"
        >Job</el-button>
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
      >
        <no-data-table slot="empty"></no-data-table>
        <el-table-column align="center" label="No." width="80" type="index">
        </el-table-column>

        <!-- <el-table-column width="180px" align="center" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column> -->
        <el-table-column min-width="180px" show-overflow-tooltip label="Name">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column width="120px" align="center" label="Type">
          <template slot-scope="scope">
            <span>{{ scope.row.pipeline }}</span>
          </template>
        </el-table-column>

        <el-table-column width="250px" align="left">
          <template slot-scope="scope">
            <!-- <el-progress
            :percentage="setPercent(scope.row)"
            :format="progressFormat"
          ></el-progress> -->
            <el-progress
              :percentage="setPercent(scope.row)"
              :status="setStatus(scope.row)"
            ></el-progress>
          </template>
        </el-table-column>
        <el-table-column width="160px" label="Status">
          <template slot-scope="scope">
            {{ scope.row.status }}
          </template>
        </el-table-column>
        <el-table-column width="160px" align="center" label="Create Time">
          <template slot-scope="scope">
            <span>{{ scope.row.date | setHourDate }}</span>
          </template>
        </el-table-column>
        <el-table-column width="160px" label="Updated Time">
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
              v-if="scope.row.status !== 'COMPLETED'"
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
      total: 0
    }
  },
  created() {
    clearInterval(this.setInterval)
    this.getList()
    this.setInterval = setInterval(() => {
      this.getList()
    }, 60 * 1000)
  },
  destroyed() {
    clearInterval(this.setInterval)
  },
  methods: {
    progressFormat(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    setPercent(row) {
      const processNum = row.processedSize / row.totalSize
      console.log('processNum', processNum)
      return processNum
        ? Math.round(processNum * 100) >= 100
          ? 100
          : Math.round(processNum * 100)
        : 0
    },
    setStatus(row) {
      const processNum = row.processedSize / row.totalSize
      return processNum
        ? Math.round(processNum * 100) >= 100
          ? 'success'
          : ''
        : 'exception'
    },
    // 查看job detail
    viewDetail(row, column, event) {
      this.$router.push({ path: '/jobDetails', query: { bizId: row.bizId }})
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
    getList() {
      this.listLoading = true
      const pageOption = {
        page: this.page,
        pageSize: this.pageSize
      }
      const params = {
        name: this.$route.query.jobName || ''
      }
      GetList(pageOption, params).then(res => {
        console.log('结果', res)
        if (res.code === 200) {
          this.tableList = res.data.content
          this.listLoading = false
          this.total = res.data.totalElements
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped></style>
