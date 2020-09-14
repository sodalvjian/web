<template>
  <el-dialog
    top="50px"
    :show-close="false"
    custom-class="print-dialog"
    :visible.sync="dialogVisible"
    width="80%"
  >
    <div slot="title">
      <el-row>
        <el-col :span="12">
          <strong class="f17">Invoice</strong>
        </el-col>
        <el-col :span="12" align="right">
          <el-button
            size="small"
            @click="dialogVisible = false"
          >Cancel</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-printer"
            :loading="btnLoading"
            @click="handlePrint"
          >Print</el-button>
        </el-col>
      </el-row>
    </div>
    <section
      id="export-content"
      ref="exportContent"
      v-loading="dialogLoading"
      class="p30"
    >
      <table data-sort="sortDisabled" style="width:100%;font-size:14px">
        <tbody>
          <tr class="firstRow">
            <td valign="top" width="312" align="left" height="35">
              <span style="color: rgb(89, 89, 89); font-size: 15px;">
                <strong>Account number:</strong>
              </span>
            </td>
            <td valign="top" height="35" rowspan="1" colspan="2">
              <span
                style="color: rgb(89, 89, 89); font-size: 15px;"
              ><strong>Melax Technologies,Inc</strong></span>
            </td>
          </tr>
          <tr>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              width="312"
              height="50"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89);">
                <strong>
                  <span style="color: rgb(89, 89, 89); font-size: 26px;">{{
                    printData.cardNumber
                  }}</span>
                </strong>
              </span>
            </td>
            <td
              valign="top"
              colspan="2"
              rowspan="1"
              height="50"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <span
                style="color: rgb(89, 89, 89); font-size: 13px;"
              >Email or talk to us about your account account or bill visit
                melaxtech.com/index. php/about-us/contact
              </span>
            </td>
          </tr>
          <tr>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              width="312"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255);"
            >
              <span style="color: rgb(89, 89, 89); font-size: 15px;">
                <strong>Bill to Address:</strong>
              </span>
            </td>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              width="485"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89); font-size: 15px;">
                <strong>Invoice Summary</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              colspan="1"
              rowspan="1"
              width="312"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89);">ATTN: Hua Xu</span>
            </td>
            <td
              valign="middle"
              colspan="1"
              rowspan="1"
              height="40"
              width="485"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              Invoice Number

              <span style="color: rgb(89, 89, 89);">:</span>

              <span
                style="font-size: 14px; background-color: rgb(255, 255, 255); color: rgb(89, 89, 89);"
              ></span>
            </td>
            <td
              valign="middle"
              colspan="1"
              rowspan="1"
              width="136"
              height="40"
              style="word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89);">{{
                printData.invoiceNumber
              }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              height="30"
              width="312"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255);"
            >
              <span style="color: rgb(89, 89, 89);">3023 Newbrook Dr</span>
            </td>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              height="30"
              width="486"
              style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89);">Invoice Date:</span>
            </td>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              height="30"
              width="136"
              style="word-break: break-all;"
            >
              <span style="color: rgb(89, 89, 89);">{{
                printData.invoiceDate | setDate
              }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="top"
              width="312"
              style="word-break: break-all; border-color: rgb(255, 255, 255);"
            >
              <span
                style="color: rgb(89, 89, 89);"
              >Pearland , TX , 77584 , US</span>
            </td>
            <td
              valign="top"
              width="486"
              style="border-color: rgb(255, 255, 255); word-break: break-all;"
            >
              <strong
                style="font-size:16px;text-transform:uppercase;"
              >TOTAL AMOUNT DUE ON
                {{ printData.invoiceDate | setDate }}</strong>
            </td>
            <td
              valign="top"
              colspan="1"
              rowspan="1"
              width="136"
              style="word-break: break-all;"
            >
              <strong
                style="font-size:16px"
              >${{ printData.totalCharge }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p style="text-align: center; margin-top:40px;font-size:15px">
        <strong>This invoice is for the billing period April 1 - April 30 ,
          2020</strong>
      </p>
      <p style="text-align: center; margin-top:20px">
        <span
          style="color: rgb(136, 136, 136); font-size: 13px; text-align: center; background-color: rgb(255, 255, 255);"
        >Greetings from Amazon Web Services, were writing to provide you with
          an electronic invoice for your use of AWS services.</span>
      </p>
      <p style="text-align: center;margin-top:-8px">
        <span
          style="color: rgb(136, 136, 136); font-size: 13px; text-align: center; background-color: rgb(255, 255, 255);"
        >
          Additional information about your bill, individual service charge
          details, and your account history are available on the Account
          Activity Page.</span>
      </p>
      <table
        data-sort="sortDisabled"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="width:100%;margin-top:30px;border:1px solid #ccc;font-size:14px"
      >
        <tbody>
          <tr class="firstRow">
            <td
              valign="middle"
              style="word-break: break-all; background-color: rgb(243, 243, 243);"
              height="45"
              align="left"
              width="671"
            >
              <span
                style="color: #000;padding:20px"
              ><strong>Summary</strong></span>
            </td>
            <td
              valign="middle"
              style="background-color: rgb(243, 243, 243); word-break: break-all; "
              height="40"
              align="left"
              width="320"
            ></td>
          </tr>
          <tr>
            <td
              valign="middle"
              style="word-break: break-all; "
              height="40"
              width="671"
            >
              <span style="padding:20px">Charges</span>
            </td>
            <td
              valign="middle"
              style="word-break: break-all; "
              align="right"
              height="40"
              width="320"
            >
              <span
                style="color: rgb(96, 98, 102);padding:20px"
              >${{ printData.charges }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              style="word-break: break-all; "
              height="40"
              width="671"
            >
              <span style="padding:20px">Credits</span>
            </td>
            <td
              valign="middle"
              style="word-break: break-all; "
              align="right"
              width="320"
            >
              <span
                style="color: rgb(96, 98, 102);padding:20px"
              >${{ printData.credits }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              style="word-break: break-all; "
              height="40"
              width="671"
            >
              <span style="padding:20px">TAX*</span>
            </td>
            <td
              valign="middle"
              style="word-break: break-all; "
              align="right"
              width="320"
            >
              <span
                style="color: rgb(96, 98, 102);padding:20px"
              >${{ printData.tax }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              align="left"
              colspan="1"
              rowspan="1"
              style="word-break: break-all; background-color: rgb(134, 143, 169); "
              height="45"
              width="671"
            >
              <span
                style="padding: 20px;color: #fff;font-weight: bold;"
              >Total for this invoice</span>
            </td>
            <td
              valign="middle"
              align="right"
              colspan="1"
              rowspan="1"
              height="45"
              style="background-color: rgb(134, 143, 169); "
              width="320"
            >
              <span
                style="color: #fff;font-weight: bold;padding:20px"
              >${{ printData.totalCharge }}</span>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              align="left"
              colspan="2"
              rowspan="1"
              style="word-break: break-all; background-color: rgb(249, 248, 253); "
            >
              <div
                style="color: rgb(96, 98, 102); padding:20px;line-height: 2;font-size:13px"
              >
                May include estimated US sales tax, VAT, ST GST an CT Amazon Web
                Services, Inc, is registered under the Sing apore GST Overseas
                Vendor Registration Pay-Only Regime and GST registration number
                is M903730 09E AWS, Inc is aRegistered Foreign Supplier under
                Jap anese Consumption Tax Law and therefore AWS Inc, is required
                to declare and pay consumption tax in respect of this
                transaction (as aDigital Service)o the Japan Tax Authority

                <p>
                  This is not a VAT. ST or GST invoice. Related ax invoices can
                  be accessed by going to le Bills page on your Billing
                  Management Cons ole **** Please reference the tax invoice for
                  a breakut of the Canadian taxes by pe Usage and recuming
                  charges for this statement perio amount of your actual charges
                  for this statement perioc may differ from the charges shown on
                  this will be charged on your next billing date. The page. The
                  charges shown on this page do not include Iny additional usage
                  charges accrued during this statement period after the date
                  you are viewing this pa ge. Also, one-time fees and
                  subscription charges are assessed separately, on the date that
                  they occur . All charges and prices are in US Dollars All AWS
                  Services are sold by Amazon Web Services.Inc.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </el-dialog>
</template>
<script>
import { GenerateSingleInvoice } from '@/api/user-page'
import { saveAs } from 'file-saver'
import moment from 'moment'
import axios from 'axios'
export default {
  name: '',
  components: {},
  filters: {
    setDate(val) {
      return moment(val).format('MMMM Do YYYY')
    }
  },
  props: {},
  data() {
    return {
      dialogLoading: false,
      dialogVisible: false,
      btnLoading: false,
      dialogForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      summaryData: [
        {
          name: 'Charges',
          cost: '$1,208.87'
        },
        {
          name: 'Credits',
          cost: '$0.00'
        },
        {
          name: 'TAX*',
          cost: '$62.33'
        }
      ],
      printData: {}
    }
  },

  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openDialog(id) {
      this.dialogVisible = true
      this.dialogLoading = true
      GenerateSingleInvoice(id).then(res => {
        this.printData = res.data
        this.dialogLoading = false
      })
    },
    handlePrint(formName) {
      this.btnLoading = true
      const htmlDom = this.$refs.exportContent
      const params = {
        content: `<html style="font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;">${htmlDom.innerHTML}</html>`
      }
      const downloadUrl = `/account/user/download/invoice/pdf`
      axios.defaults.headers.Authorization =
        'Bearer ' + this.$store.getters.token
      axios
        .post(downloadUrl, params, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
        .then(res => {
          saveAs(
            new Blob([res.data], {
              type:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
            }),
            `Order and invoice history.pdf`
          )
          this.btnLoading = false
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
.print-dialog {
  .el-dialog__header {
    background: #f1f1f1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .print-show-text {
    background-color: #f8f9fb;
    line-height: 2;
  }
}
</style>
