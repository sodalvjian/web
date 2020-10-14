<template>
  <div class="">
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p25 bb-1">
        <span class="f18 color-black">
          Billing & Cost Management
        </span>
      </nav>
      <section class="p25 mt-10 w">
        <nav>
          <el-row class="w">
            <el-col :span="16">
              <strong
                class="color-black f15"
              >Month-to-Date Spend By Service</strong>
            </el-col>
            <el-col :span="8" align="right">
              <strong
                class="color-black mr-15 f15"
              >$ {{ totalCharges }}</strong>
              <el-button
                size="small"
                type="primary"
                @click="openBillDetail"
              >Bill Details</el-button>
            </el-col>
          </el-row>
        </nav>
        <div class="mt-15">
          <el-table
            v-loading="billingLoading"
            :data="summaryData"
            border
            style="width: 100%"
          >
            <el-table-column prop="name" label="Summary" width="180">
            </el-table-column>
            <el-table-column align="right" label="" min-width="180">
              <template slot-scope="scope">
                <span class="mr-30">{{ scope.row.cost }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <nav class="mt-40">
          <el-row class="w">
            <el-col :span="16">
              <strong class="color-black f15">Cost Dashboard</strong>
            </el-col>
            <el-col :span="8" align="right">
              <el-date-picker
                v-model="monthRange"
                type="monthrange"
                size="small"
                range-separator="~"
                start-placeholder="Begin month"
                value-format="yyyy-MM"
                end-placeholder="End month"
                @change="changeMonthRange"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </nav>
        <div v-loading="costLoading" class="mt-15">
          <no-data v-if="tableData.length === 0" />
          <v-chart
            v-else
            ref="bar"
            style="height:380px;width:100%"
            theme="light"
            :options="barData"
            autoresize
          />
        </div>
        <div class="mt-15">
          <el-table
            v-loading="costLoading"
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="analysisType"
              label="Analysis Type"
              min-width="180"
            >
            </el-table-column>
            <el-table-column
            align="center"
              prop="type"
              label="Type"
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="fileCount"
              label="File count"
              align="center"
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
        </div>
      </section>
    </article>
  </div>
</template>
<script>
import Sider from '../../components/Sider'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import { barOption } from './constants'
import { GetBillingSummary, GetCostDashboard } from '@/api/user-page'
export default {
  name: '',
  components: {
    Sider,
    'v-chart': ECharts
  },
  props: {},
  data() {
    return {
      billingLoading: false,
      costLoading: false,
      barData: {},
      monthRange: [],
      totalCharges: 0,
      summaryData: [],
      tableData: [],
      dashboardData: {
        minYearMonth: '',
        maxYearMonth: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getBillingSummary()
    this.getCostDashboard()
  },
  beforeDestroy() {},
  methods: {
    changeMonthRange() {
      this.getBillingSummary()
      this.getCostDashboard()
    },
    openBillDetail() {
      this.$router.push('/user/billDetail')
    },
    getCostDashboard() {
      const params = {
        maxYearMonth:
          this.monthRange && this.monthRange.length > 0
            ? this.monthRange[1]
            : '',
        minYearMonth:
          this.monthRange && this.monthRange.length > 0
            ? this.monthRange[0]
            : ''
      }
      this.costLoading = true
      GetCostDashboard(params).then(res => {
        this.costLoading = false
        const resultData = res.data
        barOption.series[0].data = Object.values(resultData.spendingTrends)
        barOption.xAxis[0].data = Object.keys(resultData.spendingTrends)
        this.barData = barOption

        this.tableData = resultData.analysisCosts
      })
    },
    getBillingSummary() {
      this.billingLoading = true
      GetBillingSummary().then(res => {
        console.log(res)
        this.billingLoading = false
        const resultData = res.data
        this.totalCharges = resultData.totalCharges
        this.summaryData = [
          {
            name: 'Charges',
            cost: resultData.charges
          },
          {
            name: 'TAX*',
            cost: resultData.tax
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
