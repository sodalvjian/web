<template>
  <div class="">
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p25 bb-1">
        <strong class="f18 color-black">
          Billing & Cost Management
        </strong>
      </nav>
      <section class="p25 mt-10 w">
        <nav>
          <el-row class="w">
            <el-col :span="16">
              <strong class="color-black f15"
                >Month-to-Date Spend By Service</strong
              >
            </el-col>
            <el-col :span="8" align="right">
              <strong class="color-black mr-15 f15"
                >$ {{ totalCharges }}</strong
              >
              <el-button size="small" type="primary" @click="openBillDetail"
                >Bill Details</el-button
              >
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
        <nav class="mt-30">
          <el-row class="w">
            <el-col :span="16">
              <strong class="color-black f15"> Coupon</strong>
            </el-col>
          </el-row>
        </nav>
        <div class="mt-15 coupon-container" v-loading="couponLoading">
          <div
            v-if="couponData.length === 0"
            class="pt-50 mt-20 mb-40 tc color-hui bbs-1 bts-1 pb-50"
          >
            No Coupon
          </div>
          <div v-else>
            <el-card
              v-for="(item, index) in couponData"
              :key="index"
              shadow="hover"
              class="mt-20"
            >
              <el-row :gutter="10">
                <el-col :span="2">
                  <i class="el-icon-s-ticket color-main f40"></i>
                </el-col>
                <el-col :span="10">
                  <div class=" mt-3">
                    <strong class="f24">$ {{ item.quota }}</strong>
                  </div>

                  <div class="mt-10 color-8">
                    Expiry Date：{{ item.expireDate }}
                  </div>
                </el-col>
                <el-col :span="9">
                  <div class=" mt-3">
                    <strong class="f24">$ {{ item.remaining }}</strong>
                  </div>

                  <div class="mt-10 color-8">Reminding amount</div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </div>
        <nav class="mt-30">
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
              label="Pipeline"
              min-width="180"
            >
              <template slot-scope="scope">
                {{
                  scope.row.aliasPipeline && scope.row.aliasPipelinev
                    ? `${scope.row.aliasPipeline} (${scope.row.aliasPipelinev})`
                    : scope.row.analysisType
                }}
              </template>
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
import store from '@/store'
import Sider from '../../components/Sider'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import { barOption } from './constants'
import {
  GetBillingSummary,
  GetCostDashboard,
  GetVoucher
} from '@/api/user-page'
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
      couponLoading: false,
      userId: store.getters.userInfo.userId,
      barData: {},
      monthRange: [],
      totalCharges: 0,
      summaryData: [],
      tableData: [],
      dashboardData: {
        minYearMonth: '',
        maxYearMonth: ''
      },
      couponData: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getBillingSummary()
    this.getCostDashboard()
    this.getVoucher()
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
    getVoucher() {
      const params = { userId: this.userId }
      this.couponLoading = true
      GetVoucher(params).then(res => {
        this.couponLoading = false
        if (res.code === 200) {
          this.couponData = res.data
        }
      })
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
<style lang="scss" scoped>
.coupon-container {
  min-height: 150px;
}
</style>
