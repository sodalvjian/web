<template>
  <div class="">
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p15 bb-10 bt-10">
        <strong class="f17 color-main">
          <router-link to="/realtimeAnalysis" class="color-main f19"
            ><i class="mr-10 el-icon-arrow-left fb"></i
          ></router-link>
          Bills & Credits
        </strong>
      </nav>
      <el-row>
        <el-col :span="11">
          <section
            v-loading="billingLoading"
            class="p20 bill-top-content has-border"
          >
            <strong class="color-main f15 tl"> Month-to-Date Spend</strong>
            <el-row :gutter="10" class="mt-25">
              <!-- <el-col :span="8">
                <el-col :span="9" align="center">
                  <svg class="icon f60" aria-hidden="true">
                    <use xlink:href="#icon-3" />
                  </svg>
                </el-col>
                <el-col :span="15">
                  <div class="mt-10">
                    <strong class="f32 color-main"
                      >$ {{ summaryData.charges }}</strong
                    >
                  </div>

                  <div class="mt-10 color-8">
                    Charges
                  </div>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="9" align="center">
                  <svg class="icon f60" aria-hidden="true">
                    <use xlink:href="#icon-4" />
                  </svg>
                </el-col>
                <el-col :span="15">
                  <div class="mt-10">
                    <strong class="f32 color-main"
                      >$ {{ summaryData.tax }}</strong
                    >
                  </div>

                  <div class="mt-10 color-8">TAX*</div>
                </el-col>
              </el-col> -->
              <el-col :span="24">
                <el-col :span="5" align="center">
                  <svg class="icon f60" aria-hidden="true">
                    <use xlink:href="#icon-5" />
                  </svg>
                </el-col>
                <el-col :span="15">
                  <div class="mt-10">
                    <strong class="f32 color-main"
                      >$ {{ summaryData.totalCharges }}</strong
                    >
                  </div>

                  <div class="mt-10 color-8">Total</div>
                </el-col>
              </el-col>
            </el-row>
          </section>
        </el-col>
        <el-col :span="13">
          <section v-loading="couponLoading" class="p20 bill-top-content">
            <strong class="color-main f15"> Vouchers</strong>
            <el-carousel
              :autoplay="false"
              arrow="never"
              :loop="false"
              height="150px"
            >
              <div v-if="couponData.length === 0" class="pt-40 tc">
                <img width="100px" src="@/assets/img/no_data.png" alt="" />
                <div class="mt-10 color-hui">No data</div>
              </div>
              <el-carousel-item
                v-for="(item, index) in couponData"
                :key="index"
                :label="index + 1"
              >
                <el-row :gutter="10" class="mt-55">
                  <el-col :span="4" align="center">
                    <svg class="icon f60" aria-hidden="true">
                      <use xlink:href="#icon-1" />
                    </svg>
                  </el-col>
                  <el-col :span="9">
                    <div class="mt-10">
                      <strong class="f32 color-main">$ {{ item.quota }}</strong>
                    </div>

                    <div class="mt-10 color-8">
                      Expiration date：{{ item.expireDate | setNormalDate }}
                    </div>
                  </el-col>
                  <!-- <el-col :span="4" align="center">
                    <svg class="icon f60" aria-hidden="true">
                      <use xlink:href="#icon-4" />
                    </svg>
                  </el-col>
                  <el-col :span="7">
                    <div class="mt-10">
                      <strong
                        class="f32 color-main"
                      >$ {{ item.remaining }}</strong>
                    </div>

                    <div class="mt-10 color-8">Remaining balance</div>
                  </el-col> -->
                </el-row>
              </el-carousel-item>
            </el-carousel>
          </section>
        </el-col>
      </el-row>

      <section class="p25 w">
        <nav>
          <el-row class="w">
            <el-col :span="16">
              <strong class="color-main f15">Bill History</strong>
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
                :picker-options="pickerOptions"
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
        <div class="mt-50">
          <el-table
            v-loading="costLoading"
            :data="tableData"
            border
            style="width: 100%"
          >
            <no-data-table slot="empty"></no-data-table>
            <el-table-column
              prop="analysisType"
              label="Pipeline"
              min-width="180"
            >
              <template slot-scope="scope">
                {{ scope.row.aliasPipeline | emptyShow }}
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
              label="Number of unit"
              align="center"
              min-width="180"
            >
              <template slot-scope="scope">
                {{ scope.row.total ? (scope.row.total / 100).toFixed(2) : 0 }}
              </template>
            </el-table-column>
            <el-table-column
              prop="cost"
              label="Cost"
              align="center"
              min-width="180"
            >
              <template slot-scope="scope">
                $ {{ scope.row.cost }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </section>
      <section
        v-loading="feeLoading"
        class="mb-20 mt-30 p20"
        style="border-top: 10px solid #f5f7fe;"
      >
        <el-row :gutter="20" class="mt-10">
          <el-col :span="12">
            <el-col :span="24" align="center">
              <strong class="f16">Monthly maximum limit</strong
              ><i
                class="ml-10 el-icon-info cp f18 color-light-blue"
                @click="handleConnect"
              ></i>
            </el-col>

            <el-col :span="24" class="mt-20" align="center">
              <strong class="f26 color-main"
                >$ {{ quotaSetting.QUOTA.val }}</strong
              >
            </el-col>
          </el-col>
          <el-col :span="12">
            <el-col :span="24" align="center">
              <strong class="f16">Maximum single task limit</strong
              ><i
                class="ml-10 el-icon-info cp f18 color-light-blue"
                @click="handleConnect"
              ></i>
            </el-col>

            <el-col :span="24" class="mt-20" align="center">
              <strong class="f26 color-main"
                >$ {{ quotaSetting.TASK_QUOTA.val }}</strong
              >
            </el-col>
          </el-col>
        </el-row>
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
import moment from 'moment'
import {
  GetBillingSummary,
  GetCostDashboard,
  GetVoucher,
  GetQuotaSettings
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
      pickerOptions: {
        shortcuts: [
          {
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()])
            }
          },
          {
            text: 'This year',
            onClick(picker) {
              const end = new Date()
              const start = new Date(new Date().getFullYear(), 0)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 5)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      billingLoading: false,
      costLoading: false,
      couponLoading: false,
      userId: store.getters.userInfo.userId,
      barData: {},
      monthRange: [
        moment()
          .add(-1, 'years')
          .add(1, 'months')
          .format('yyyy-MM'),
        moment().format('yyyy-MM')
      ],
      totalCharges: 0,
      summaryData: {},
      tableData: [],
      dashboardData: {
        minYearMonth: '',
        maxYearMonth: ''
      },
      couponData: [],
      feeLoading: false,
      quotaSetting: {
        QUOTA: {},
        TASK_QUOTA: {},
        MAIL_TO_USER: {}
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getBillingSummary()
    this.getCostDashboard()
    this.getVoucher()
    this.getVoucherPublic()
  },
  beforeDestroy() {},
  methods: {
    handleConnect() {
      this.$alert(
        `
        <div class="w100 tc">
        <svg class="icon f60" aria-hidden="true">
                    <use xlink:href="#icon-contact" />
                  </svg>
        </div>
        <div class="w100 mt-15 mb-15">
        <strong>To change your limit, contact us at <a class="color-light-blue" href=mailto:${
          this.quotaSetting.MAIL_TO_USER.val
        }>${this.quotaSetting.MAIL_TO_USER.val}</a></strong>
        </div>
        `,
        {
          center: true,
          showConfirmButton: false,
          closeOnClickModal: true,
          dangerouslyUseHTMLString: true,
          customClass: 'show-connect-info'
        }
      )
    },
    getVoucherPublic() {
      this.feeLoading = true
      GetQuotaSettings().then(res => {
        this.feeLoading = false
        if (res.code === 200) {
          this.quotaSetting = res.data
        }
      })
    },
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
          // this.couponData = []
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
        this.summaryData = resultData
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
<style lang="scss">
.bill-top-content {
  height: 170px;
  border-bottom: 10px solid #f4f7fe;
  .el-carousel {
    margin-top: -30px;
    .el-carousel__indicators--labels {
      bottom: auto;
      top: 7px;
      text-align: right;
    }
    .el-carousel__button {
      padding: 3px !important;
      background-color: #628afa !important;
      color: #fff;
      width: 18px;
      height: 18px;
      line-height: 12px;
      border-radius: 50%;
    }
  }
  .el-carousel__arrow {
    height: 20px !important;
    width: 20px !important;
  }
  .el-carousel__arrow--left {
    right: 40px !important;
    left: auto !important;
    top: 20px !important;
  }
  .el-carousel__arrow--right {
    right: 10px !important;
    left: auto !important;
    top: 20px !important;
  }
  &.has-border {
    border-right: 10px solid #f4f7fe;
  }
}
</style>
