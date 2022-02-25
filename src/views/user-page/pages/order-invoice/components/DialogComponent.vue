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
          <el-button size="small" @click="dialogVisible = false"
            >Cancel</el-button
          >
          <el-button
            size="small"
            type="primary"
            icon="el-icon-printer"
            :loading="btnLoading"
            @click="handlePrint"
            >Print</el-button
          >
        </el-col>
      </el-row>
    </div>
    <section
      id="export-content"
      ref="exportContent"
      v-loading="dialogLoading"
      class="p30"
    >
      <div v-if="!mutliStatus">
        <table data-sort="sortDisabled" style="width:100%;font-size:14px">
          <tbody>
            <tr class="firstRow">
              <td valign="top" width="312" align="left" height="35">
                <span style="color: rgb(89, 89, 89); font-size: 15px;">
                  <strong>Account:</strong>
                </span>
              </td>
              <td valign="top" height="35" rowspan="1" colspan="2">
                <span style="color: rgb(89, 89, 89); font-size: 15px;"
                  ><strong>Melax Technologies, Inc</strong></span
                >
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
            </tr>
            <tr>
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
                width="486"
                style="border-color: rgb(255, 255, 255); word-break: break-all;"
              >
                <strong style="font-size:16px;text-transform:uppercase;"
                  >TOTAL AMOUNT DUE ON
                  {{ printData.invoiceDate | setDate }}</strong
                >
              </td>
              <td
                valign="top"
                colspan="1"
                rowspan="1"
                width="136"
                style="word-break: break-all;"
              >
                <strong style="font-size:16px"
                  >${{ printData.totalCharge }}</strong
                >
              </td>
            </tr>
          </tbody>
        </table>

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
                <span style="color: #000;padding:20px"
                  ><strong>Summary</strong></span
                >
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
                <span style="color: rgb(96, 98, 102);padding:20px"
                  >${{ printData.charges }}</span
                >
              </td>
            </tr>
            <tr>
              <td
                valign="middle"
                style="word-break: break-all; "
                height="40"
                width="671"
              >
                <span style="padding:20px">Voucher</span>
              </td>
              <td
                valign="middle"
                style="word-break: break-all; "
                align="right"
                width="320"
              >
                <span style="color: rgb(96, 98, 102);padding:20px"
                  >${{ printData.credits }}</span
                >
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
                <span style="color: rgb(96, 98, 102);padding:20px"
                  >${{ printData.tax }}</span
                >
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
                <span style="padding: 20px;color: #fff;font-weight: bold;"
                  >Total for this invoice</span
                >
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
                <span style="color: #fff;font-weight: bold;padding:20px"
                  >${{ printData.totalCharge }}</span
                >
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
                  style="color: rgb(96, 98, 102); padding:20px;line-height: 1.6;font-size:13px"
                >
                  Visit your Account Settings page to manage your billing
                  details. See the Meric NLP Terms of Service for the terms
                  that apply to your purchase. All fees are listed in USD and
                  are subject to Sales Tax (as applicable). If you have any
                  questions , please contact us at contact@melaxtech.com.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- mutli data -->
      <div v-else>
        <table style="width:100%;font-size:14px;">
          <tbody>
            <tr>
              <td
                valign="middle"
                colspan="1"
                rowspan="1"
                width="512"
                style="word-break: break-all;"
              ></td>
              <td valign="middle" colspan="2" rowspan="1" height="40">
                <strong
                  ><span style='color:#333333;font-family:"font-size:18px;'
                    >Name</span
                  >: </strong
                ><span style='color:#333333;font-family:"font-size:18px;'></span
                >{{ printData.firstname | emptyShow }}
                {{ printData.lastname | emptyShow }}
              </td>
            </tr>
            <tr>
              <td valign="top" colspan="1" rowspan="1" height="30" width="512">
                <span style='color:#333333;font-family:"font-size:18px;'
                  ><strong>Print Date</strong>:
                  {{ new Date() | setHourDate }}</span
                >
              </td>
              <td valign="top" colspan="2" rowspan="1" height="30">
                <span style="color:#595959;"
                  ><span style='color:#333333;font-family:"font-size:18px;'
                    ><strong>Account number</strong>:
                    {{
                      printData.accountNumber
                        ? printData.accountNumber.join(', ')
                        : ''
                    }}</span
                  ></span
                >
              </td>
            </tr>
          </tbody>
        </table>
        <table
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="border: 1px solid rgb(204, 204, 204);margin-top:25px; width:100%;font-size:14px"
        >
          <tbody>
            <tr class="firstRow">
              <td
                valign="middle"
                style="background-color: rgb(243, 243, 243); word-break: break-all;"
                height="45"
                align="left"
                width="146"
              >
                <span style="color:#000;padding-left:20px"
                  ><strong>Payment Date</strong></span
                >
              </td>
              <td
                width="146"
                style="word-break: break-all; background-color: rgb(243, 243, 243);"
              >
                <strong>Invoice ID</strong>
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all; background-color: rgb(243, 243, 243);"
              >
                <strong
                  style="font-size: 14px; white-space: normal; background-color: rgb(243, 243, 243);"
                  >Payment Instrument</strong
                >
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all; background-color: rgb(243, 243, 243);"
              >
                <strong>Transaction Type</strong>
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all; background-color: rgb(243, 243, 243);"
              >
                <strong>Payment Method</strong>
              </td>
              <td
                valign="middle"
                style="background-color: rgb(243, 243, 243); word-break: break-all;"
                height="40"
                align="left"
                width="146"
              >
                <strong>Amount</strong>
              </td>
            </tr>
            <tr v-for="(item, index) in printData.invoiceList" :key="index">
              <td
                valign="middle"
                height="40"
                width="146"
                style="word-break: break-all;padding-left:20px"
              >
                {{ item.paymentDate }}
              </td>
              <td width="146" style="word-break: break-all;">
                {{ item.invoiceID }}
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                {{ item.paymentInstruction }}
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                {{ item.transactionType }}
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                {{ item.paymentMethod }}
              </td>
              <td
                valign="middle"
                align="left"
                height="40"
                width="146"
                style="word-break: break-all;"
              >
                {{ item.transactionAmount }}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td
                colspan="1"
                rowspan="1"
                width="614"
                style="word-break: break-all;line-height: 2;"
              >
                <span style='color: rgb(51, 51, 51); "font-size:18px;";'></span>
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
                <span style='color: rgb(51, 51, 51); "font-size:18px;";'></span>
              </td>
              <td
                valign="top"
                colspan="2"
                rowspan="1"
                height="40"
                style="word-break: break-all;padding-left:20px"
                width="341"
                align="left"
              >
                <strong
                  ><span
                    style='color: rgb(51, 51, 51); "font-size:17px;";'
                  ></span
                ></strong>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 17px;"
                    >Service Provider:</span
                  >
                </p>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 17px;"
                    ><span style="color: rgb(51, 51, 51);font-size: 17px;"
                      >(Not to be used for payment remittance)</span
                    ></span
                  >
                </p>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 17px;"
                    ><span
                      style="color: rgb(51, 51, 51);font-size: 17px;"
                    ></span
                  ></span>
                </p>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 17px;"
                    ><span style="color: rgb(51, 51, 51);font-size: 17px;"
                      ><span
                        style="color: rgb(51, 51, 51);  font-size: 17px; font-weight: 700;"
                        >Melax Technologies,Inc</span
                      ></span
                    ></span
                  >
                </p>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 18px;"
                    ><span
                      style="color: rgb(51, 51, 51);font-size: 18px;"
                    ></span
                  ></span>
                </p>
                <p>
                  <span style="color: rgb(51, 51, 51);font-size: 18px;"
                    ><span style="color: rgb(51, 51, 51);font-size: 18px;"
                      ><span style="color: rgb(85, 85, 85);font-size: 17px;"
                        >7000 Fannin St #1950d, Houston, TX 77030</span
                      ></span
                    ></span
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </el-dialog>
</template>
<script>
import { GenerateSingleInvoice, GenerateMultiInvoice } from '@/api/user-page'
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
      mutliStatus: false,
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
      printData: {
        invoiceList: []
      }
    }
  },

  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openDialog(ids) {
      this.dialogVisible = true
      this.dialogLoading = true
      this.mutliStatus = ids.length > 1
      const RequestFunction =
        ids.length > 1 ? GenerateMultiInvoice : GenerateSingleInvoice
      RequestFunction(ids).then(res => {
        this.printData = res.data
        this.dialogLoading = false
      })
    },
    handlePrint(formName) {
      this.btnLoading = true
      const htmlDom = this.$refs.exportContent
      const params = {
        content: `<html style="font-family:Microsoft YaHei, Arial, sans-serif;">${
          htmlDom.innerHTML
        }</html>`
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
            `Order and Payment history.pdf`
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
