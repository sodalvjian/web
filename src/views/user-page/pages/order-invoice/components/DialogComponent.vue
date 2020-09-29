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
                  <strong>Account number:</strong>
                </span>
              </td>
              <td valign="top" height="35" rowspan="1" colspan="2">
                <span style="color: rgb(89, 89, 89); font-size: 15px;"
                  ><strong>Melax Technologies,Inc</strong></span
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
              <td
                valign="top"
                colspan="2"
                rowspan="1"
                height="50"
                style="border-left-color: rgb(255, 255, 255); border-top-color: rgb(255, 255, 255); word-break: break-all;"
              >
                <span style="color: rgb(89, 89, 89); font-size: 13px;"
                  >Email or talk to us about your account or bill visit
                  melaxtech.com/index.php/about-us/contact
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
                <span style="color: rgb(89, 89, 89);"
                  >ATTN: {{ printData.firstname }}
                  {{ printData.lastname }}</span
                >
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
                <span style="color: rgb(89, 89, 89);"
                  >{{ printData.apartment || '--' }}
                  {{ printData.street || '--' }}</span
                >
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
                <span style="color: rgb(89, 89, 89);"
                  >{{ printData.city }} , {{ printData.state }} ,
                  {{ printData.countryRegion }}</span
                >
              </td>
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
        <p style="text-align: center; margin-top:40px;font-size:15px">
          <strong
            >This invoice is for the billing period
            {{ printData.periodEndDate | setDate }}
          </strong>
        </p>
        <p style="text-align: center; margin-top:20px">
          <span
            style="color: rgb(136, 136, 136); font-size: 13px; text-align: center; background-color: rgb(255, 255, 255);"
            >Greetings from Amazon Web Services, were writing to provide you
            with an electronic invoice for your use of AWS services.</span
          >
        </p>
        <p style="text-align: center;margin-top:-8px">
          <span
            style="color: rgb(136, 136, 136); font-size: 13px; text-align: center; background-color: rgb(255, 255, 255);"
          >
            Additional information about your bill, individual service charge
            details, and your account history are available on the Account
            Activity Page.</span
          >
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
                <span style="padding:20px">Credits</span>
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
                  May include estimated US sales tax, VAT, ST GST an CT Amazon
                  Web Services, Inc, is registered under the Sing apore GST
                  Overseas Vendor Registration Pay-Only Regime and GST
                  registration number is M903730 09E AWS, Inc is aRegistered
                  Foreign Supplier under Jap anese Consumption Tax Law and
                  therefore AWS Inc, is required to declare and pay consumption
                  tax in respect of this transaction (as aDigital Service)o the
                  Japan Tax Authority

                  <p>
                    This is not a VAT. ST or GST invoice. Related ax invoices
                    can be accessed by going to le Bills page on your Billing
                    Management Cons ole **** Please reference the tax invoice
                    for a breakut of the Canadian taxes by pe Usage and recuming
                    charges for this statement perio amount of your actual
                    charges for this statement perioc may differ from the
                    charges shown on this will be charged on your next billing
                    date. The page. The charges shown on this page do not
                    include Iny additional usage charges accrued during this
                    statement period after the date you are viewing this pa ge.
                    Also, one-time fees and subscription charges are assessed
                    separately, on the date that they occur . All charges and
                    prices are in US Dollars All AWS Services are sold by Amazon
                    Web Services.Inc.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- mutli data -->
      <div v-else>
        <table style="width:100%;font-size:14px;" data-sort="sortDisabled">
          <tbody>
            <tr class="firstRow">
              <td
                valign="middle"
                colspan="1"
                rowspan="1"
                width="312"
                style="word-break: break-all;"
              ></td>
              <td valign="middle" colspan="2" rowspan="1" height="40">
                <strong
                  ><span style='color:#333333;font-family:"font-size:18px;'
                    >Name</span
                  >: </strong
                ><span style='color:#333333;font-family:"font-size:18px;'></span
                >Xu hong
              </td>
            </tr>
            <tr>
              <td valign="top" colspan="1" rowspan="1" height="30" width="312">
                <span style='color:#333333;font-family:"font-size:18px;'
                  ><strong>Print Date</strong>：09:00 2020-07-09</span
                >
              </td>
              <td valign="top" colspan="2" rowspan="1" height="30">
                <span style="color:#595959;"
                  ><span style='color:#333333;font-family:"font-size:18px;'
                    ><strong>Account number&nbsp;</strong>: 582103370404</span
                  ></span
                >
              </td>
            </tr>
          </tbody>
        </table>
        <p style="text-align:center;font-size:15px;">
          <br />
        </p>
        <p>
          <br />
        </p>
        <table
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="border: 1px solid rgb(204, 204, 204); font-size: 14px;"
          class="ke-zeroborder"
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
                <span style="color:#000;"><strong>Payment Date</strong></span>
              </td>
              <td
                width="146"
                style="word-break: break-all; background-color: rgb(243, 243, 243);"
              >
                <strong>Invoice ID</strong><br />
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
                <strong>Transaction Amount</strong>
              </td>
            </tr>
            <tr>
              <td
                valign="middle"
                height="40"
                width="146"
                style="word-break: break-all;"
              >
                1
              </td>
              <td width="146" style="word-break: break-all;">
                2
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                3
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                4
              </td>
              <td
                colspan="1"
                rowspan="1"
                valign="null"
                width="146"
                style="word-break: break-all;"
              >
                5
              </td>
              <td
                valign="middle"
                align="right"
                height="40"
                width="146"
                style="word-break: break-all;"
              >
                6
              </td>
            </tr>
          </tbody>
        </table>
        <span style="font-size: 14px;"></span>
        <p>
          <br />
        </p>
        <table data-sort="sortDisabled">
          <tbody>
            <tr class="firstRow">
              <td
                valign="middle"
                colspan="1"
                rowspan="1"
                width="614"
                style="word-break: break-all;"
              >
                <span
                  style='color: rgb(51, 51, 51); font-family: "font-size:18px;";'
                ></span>
                <p>
                  This&nbsp;is&nbsp;not&nbsp;a&nbsp;VAT.&nbsp;ST&nbsp;or&nbsp;GST&nbsp;invoice.&nbsp;Related&nbsp;ax&nbsp;invoices
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;can&nbsp;be&nbsp;accessed&nbsp;by&nbsp;going&nbsp;to&nbsp;le&nbsp;Bills&nbsp;page&nbsp;on&nbsp;your&nbsp;Billing
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Management&nbsp;Cons&nbsp;ole&nbsp;****&nbsp;Please&nbsp;reference&nbsp;the&nbsp;tax&nbsp;invoice
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;a&nbsp;breakut&nbsp;of&nbsp;the&nbsp;Canadian&nbsp;taxes&nbsp;by&nbsp;pe&nbsp;Usage&nbsp;and&nbsp;recuming
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;charges&nbsp;for&nbsp;this&nbsp;statement&nbsp;perio&nbsp;amount&nbsp;of&nbsp;your&nbsp;actual
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;charges&nbsp;for&nbsp;this&nbsp;statement&nbsp;perioc&nbsp;may&nbsp;differ&nbsp;from&nbsp;the
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;charges&nbsp;shown&nbsp;on&nbsp;this&nbsp;will&nbsp;be&nbsp;charged&nbsp;on&nbsp;your&nbsp;next&nbsp;billing
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date.&nbsp;The&nbsp;page.&nbsp;The&nbsp;charges&nbsp;shown&nbsp;on&nbsp;this&nbsp;page&nbsp;do&nbsp;not
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;include&nbsp;Iny&nbsp;additional&nbsp;usage&nbsp;charges&nbsp;accrued&nbsp;during&nbsp;this
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statement&nbsp;period&nbsp;after&nbsp;the&nbsp;date&nbsp;you&nbsp;are&nbsp;viewing&nbsp;this&nbsp;pa&nbsp;ge.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also,&nbsp;one-time&nbsp;fees&nbsp;and&nbsp;subscription&nbsp;charges&nbsp;are&nbsp;assessed
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;separately,&nbsp;on&nbsp;the&nbsp;date&nbsp;that&nbsp;they&nbsp;occur&nbsp;.&nbsp;All&nbsp;charges&nbsp;and
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prices&nbsp;are&nbsp;in&nbsp;US&nbsp;Dollars&nbsp;All&nbsp;AWS&nbsp;Services&nbsp;are&nbsp;sold&nbsp;by&nbsp;Amazon
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web&nbsp;Services.Inc.
                </p>
                <span
                  style='color: rgb(51, 51, 51); font-family: "font-size:18px;";'
                ></span>
              </td>
              <td
                valign="top"
                colspan="2"
                rowspan="1"
                height="40"
                style="word-break: break-all;"
                width="341"
                align="left"
              >
                <strong
                  ><span
                    style='color: rgb(51, 51, 51); font-family: "font-size:18px;";'
                  ></span
                ></strong>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    >Service Provider:</span
                  >
                </p>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    ><span
                      style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                      >(Not to be used for payment remittance)</span
                    ></span
                  >
                </p>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    ><span
                      style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                      ><br /></span
                  ></span>
                </p>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    ><span
                      style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                      ><span
                        style='color: rgb(51, 51, 51); font-family: "Arial Negreta", "Arial Normal", Arial, sans-serif; font-size: 18px; font-weight: 700;'
                        >Melax Technologies,Inc</span
                      ></span
                    ></span
                  >
                </p>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    ><span
                      style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                      ><br /></span
                  ></span>
                </p>
                <p>
                  <span
                    style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                    ><span
                      style='color: rgb(51, 51, 51); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                      ><span
                        style='color: rgb(85, 85, 85); font-family: "Arial Normal", Arial, sans-serif; font-size: 18px;'
                        >7000 Fannin St #1950d, Houston, TX 77030</span
                      ></span
                    ></span
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center; font-size: 15px;">
          <br style="white-space: normal;" />
        </p>
        <p>
          <span style="font-size: 14px;"><br /></span><br />
        </p>
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
      printData: {}
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
