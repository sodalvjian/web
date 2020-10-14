<template>
  <div class="">
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p25 bb-1">
        <span class="f18 color-black">
          Orders and invoices
        </span>
      </nav>
      <section class="p25 mt-10 w">
        <nav>
          <el-row class="w">
            <el-col :span="16">
              <strong class="color-black f15">Payment Due</strong>
            </el-col>
          </el-row>
        </nav>
        <div class="mt-15">
          <el-table
            v-loading="paymentLoading"
            :data="summaryData"
            class="bd-1"
            style="width: 100%"
          >
            <el-table-column
              prop="invoiceDate"
              label="Invoice Date"
              width="180"
            >
            </el-table-column>
            <el-table-column label="Invoice ID" width="100">
              <template slot-scope="scope">
                {{ scope.invoiceID | emptyShow }}
              </template>
            </el-table-column>
            <el-table-column prop="type" label="Type" width="100">
            </el-table-column>
            <el-table-column prop="dueDate" label="Due Date" width="180">
            </el-table-column>
            <el-table-column prop="status" label="Status" min-width="100">
            </el-table-column>
            <el-table-column prop="amount" label="Amount" width="120">
            </el-table-column>
            <el-table-column prop="actions" label="Actions" width="180">
              <template>
                <el-button size="medium" class="color-red" type="text"
                  >Contact us</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <nav class="mt-40">
          <el-row class="w">
            <el-col :span="6">
              <strong class="color-black f15"
                >Order and invoice history ({{ tableData.length }})</strong
              >
            </el-col>
            <el-col :span="18" align="right">
              <el-date-picker
                v-model="monthRange"
                type="daterange"
                class="mr-5"
                size="small"
                range-separator="~"
                start-placeholder="Begin time"
                end-placeholder="End time"
                @change="changeMonthRange"
              >
              </el-date-picker>
              <!-- <el-button size="small" type="primary">Filter</el-button> -->
              <el-button
                size="small"
                plain
                type="primary"
                icon="el-icon-download"
                :loading="btnLoading"
                :disabled="btnDisabled"
                @click="downloadCSV"
                >Download CSV</el-button
              >
              <el-button
                size="small"
                plain
                type="primary"
                :disabled="btnDisabled"
                icon="el-icon-printer"
                @click="openPrint"
                >Print</el-button
              >
            </el-col>
          </el-row>
        </nav>
        <div class="mt-15">
          <el-table
            ref="invoicetableDataRef"
            v-loading="historyLoading"
            :data="tableDataSlice"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column align="center" type="selection" fixed width="45">
            </el-table-column>
            <el-table-column
              prop="paymentDate"
              label="Payment Date"
              min-width="180"
            >
            </el-table-column>
            <el-table-column
              prop="invoiceID"
              label="Invoice/Receipt ID"
              align="center"
              min-width="280"
            >
            </el-table-column>
            <el-table-column
              prop="paymentInstruction"
              label="Payment instruction"
              align="center"
              min-width="180"
            >
            </el-table-column>
            <el-table-column
              prop="transactionType"
              label="Transaction Type"
              align="center"
              min-width="180"
            >
            </el-table-column>
            <el-table-column
              prop="paymentMethod"
              label="Payment Method"
              align="center"
              min-width="180"
            >
            </el-table-column>
            <el-table-column
              prop="transactionAmount"
              fixed="right"
              label="Transaction Amount"
              align="center"
              min-width="180"
            >
            </el-table-column>
          </el-table>
        </div>
        <div class="tr mt-20">
          <el-pagination
            :page-size="invoicePageSize"
            background
            layout="prev, pager, next"
            hide-on-single-page
            :current-page="invoiceCurrentPage"
            :total="tableData.length"
            @current-change="handleInvoiceCurrentPage"
          >
          </el-pagination>
        </div>
      </section>
    </article>
    <!-- print dialog -->
    <dialog-component ref="dialogComponentref" />
  </div>
</template>
<script>
import { saveAs } from 'file-saver'
import Sider from '../../components/Sider'
import DialogComponent from './components/DialogComponent'
import { GetOrderAndInvoiceHistory, GetPaymentDue } from '@/api/user-page'
import moment from 'moment'
import axios from 'axios'
export default {
  name: '',
  components: {
    Sider,
    DialogComponent
  },
  props: {},
  data() {
    return {
      paymentLoading: false,
      historyLoading: false,
      btnDisabled: true,
      btnLoading: false,
      monthRange: [],
      summaryData: [],
      tableData: [],
      multipleSelection: [],
      invoiceCurrentPage: 1,
      invoicePageSize: 12
    }
  },
  computed: {
    tableDataSlice() {
      return this.tableData.slice(
        (this.invoiceCurrentPage - 1) * this.invoicePageSize,
        this.invoiceCurrentPage * this.invoicePageSize
      )
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.getOrderAndInvoiceHistory()
    this.getPaymentDue()
  },
  beforeDestroy() {},
  methods: {
    handleInvoiceCurrentPage(val) {
      this.invoiceCurrentPage = val
      this.$refs.invoicetableDataRef.bodyWrapper.scrollTop = 0
    },
    changeMonthRange() {
      this.getOrderAndInvoiceHistory()
    },
    downloadCSV() {
      const transactionIdList = this.multipleSelection.map(
        item => item.invoiceID
      )
      this.btnLoading = true
      const params = transactionIdList
      const downloadUrl = `/account/user/download/invoice/csv`
      axios.defaults.headers.Authorization =
        'Bearer ' + this.$store.getters.token
      axios
        .post(downloadUrl, params, {
          responseType: 'blob'
        })
        .then(res => {
          this.btnLoading = false
          const testDateUtc = moment.utc()
          const localDate = moment(testDateUtc).local()
          const nowTime = localDate.format('YY-MM-DD-HH-mm-ss')
          saveAs(
            new Blob([res.data], {
              type:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
            }),
            `Order and invoice history ${nowTime}.csv`
          )
        })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val

      this.btnDisabled = val.length === 0
    },
    openPrint() {
      const invoiceID = this.multipleSelection.map(item => item.invoiceID)
      this.$refs.dialogComponentref.openDialog(invoiceID)
    },
    getOrderAndInvoiceHistory() {
      console.log(this.monthRange)
      const params = {
        endDate:
          this.monthRange && this.monthRange.length > 0
            ? this.monthRange[1]
            : '',
        startDate:
          this.monthRange && this.monthRange.length > 0
            ? this.monthRange[0]
            : ''
      }
      this.historyLoading = true
      GetOrderAndInvoiceHistory(params).then(res => {
        console.log('GetOrderAndInvoiceHistory', res)
        this.historyLoading = false
        this.tableData = res.data
      })
    },
    getPaymentDue() {
      this.paymentLoading = true
      GetPaymentDue().then(res => {
        this.paymentLoading = false
        this.summaryData = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
