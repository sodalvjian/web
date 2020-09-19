<template>
  <article class="bg-color-white w">
    <nav class="p25 bb-1">
      <el-row class="w">
        <el-col :span="12">
          <span class="f18 color-black">
            <router-link to="/user/cost" class="color-main f19"
              >Personal center</router-link
            >
            / Bill Details
          </span>
        </el-col>
        <el-col :span="12" align="right">
          <span class="mr-5">Recent</span>
          <el-select
            v-model="filterForm.recentMonth"
            clearable
            size="small"
            placeholder="Please select"
            @change="handleSearch"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-date-picker
            v-model="filterForm.dateRange"
            size="small"
            type="datetimerange"
            range-separator="~"
            start-placeholder="Begin time"
            end-placeholder="End time"
            @change="handleSearch"
          >
          </el-date-picker>
        </el-col>
      </el-row>
    </nav>
    <section class="p25 w">
      <el-table
        v-loading="tableLoading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <no-data-table slot="empty"></no-data-table>
        <el-table-column
          prop="serialNumber"
          label="Serial Number"
          align="center"
          min-width="180"
        >
        </el-table-column>
        <el-table-column
          prop="analysisType"
          align="center"
          label="Analysis Type"
          min-width="180"
        >
        </el-table-column>
        <el-table-column label="Call times" align="center" min-width="180">
          <template slot-scope="scope">
            {{ scope.row.cDate | setHourDate }}
          </template>
        </el-table-column>
        <el-table-column
          prop="cost"
          label="Cost"
          align="center"
          min-width="180"
        >
        </el-table-column>
        <el-table-column
          prop="fieldNumber"
          align="center"
          label="Number of field"
          min-width="180"
        >
        </el-table-column>
        <el-table-column
          prop="cost"
          label="Cost"
          align="center"
          min-width="180"
        >
        </el-table-column>
      </el-table>
      <div class="tr mt-20">
        <el-pagination
          :page-size="pageSize"
          :hide-on-single-page="true"
          layout="prev, pager, next,jumper"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </section>
  </article>
</template>
<script>
import { GetBillDetails } from '@/api/user-page'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableLoading: false,
      dateData: [],
      filterForm: {
        recentMonth: '',
        dateRange: []
      },
      options: [
        {
          value: 1,
          label: '1 month'
        },
        {
          value: 2,
          label: '2 month'
        },
        {
          value: 3,
          label: '3 month'
        },
        {
          value: 4,
          label: '4 month'
        },
        {
          value: 5,
          label: '5 month'
        },
        {
          value: 6,
          label: '6 month'
        }
      ],
      tableData: [],
      value: '',
      total: 0,
      pageSize: 10,
      page: 1
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getData()
  },
  beforeDestroy() {},
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.page = val
      this.getData()
    },
    handleSearch() {
      this.page = 1
      this.getData()
    },
    getData() {
      console.log('this.filterForm', this.filterForm)
      const params = {
        countPerPage: this.pageSize,
        endDate: this.filterForm.dateRange ? this.filterForm.dateRange[1] : '',
        jobName: '',
        page: this.page,
        recentMonth: this.filterForm.recentMonth,
        startDate: this.filterForm.dateRange ? this.filterForm.dateRange[0] : ''
      }
      this.tableLoading = true
      GetBillDetails(params).then(res => {
        this.tableLoading = false
        const resultData = res.data
        this.tableData = resultData.billDetailList
        this.total = resultData.totalCount
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
