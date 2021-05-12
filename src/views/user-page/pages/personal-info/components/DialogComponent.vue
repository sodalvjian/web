<template>
  <el-dialog
    :title="editStatus ? 'Edit credit card' : 'Add credit card'"
    align="center"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="40%"
    @close="resetForm"
  >
    <el-form
      ref="dialogForm"
      v-loading="pageLoading"
      :model="dialogForm"
      class="tl mt-30"
      label-position="top"
      size="small"
      status-icon
    >
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item
            label="Card Number"
            prop="cardNumber"
            :rules="[
              {
                required: true,
                message: 'Please input legal bank card number'
              }
            ]"
          >
            <div class="sr-payment-form">
              <div class="sr-form-row">
                <div
                  id="card-element"
                  class="sr-input sr-element sr-card-element"
                >
                  <!-- A Stripe card Element will be inserted here. -->
                </div>
              </div>
              <div id="card-errors" class="sr-field-error" role="alert"></div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Default payment" prop="defaultPayment">
            <el-switch
              v-model="dialogForm.defaultPayment"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="mt-40 mb-20 tc">
        <el-button
          size="small"
          @click="dialogVisible = false"
        >Cancel</el-button>
        <el-button
          size="small"
          :loading="btnLoading"
          type="primary"
          @click="submitForm('dialogForm')"
        >Confirm</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>
<script>
import { UpdateDefaultPayment } from '@/api/user-page'
import { monthList, yearList, countryList } from '../constants'
import store from '@/store'
export default {
  name: '',
  components: {},
  props: {
    publicKey: {
      type: String,
      default: ''
    },
    setupIntent: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      countryList,
      dialogVisible: false,
      editStatus: false,
      pageLoading: false,
      btnLoading: false,
      monthList,
      yearList,
      expirationMonth: '',
      expirationYear: '',
      dialogForm: {
        cardNumber: '',
        firstname: '',
        lastname: '',
        expirationDate: '',
        securityCode: '',
        countryRegion: '',
        address: '',
        city: '',
        state: '',
        defaultPayment: 1,
        userId: store.getters.userInfo.userId
      },
      // Stripe绑卡
      cardData: {},
      email: store.getters.userInfo.email,
      stripeFun: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    submitCard() {
      // var email = document.getElementById('email').value
      // eslint-disable-next-line no-undef
      console.log('this.card', this.cardData, this.setupIntent)
      this.stripeFun
        .confirmCardSetup(this.setupIntent.client_secret, {
          payment_method: {
            card: this.cardData,
            billing_details: { email: this.email }
          }
        })
        .then(result => {
          if (result.error) {
            this.$message.warning(result.error.message)
            this.btnLoading = false
          } else {
            console.log('result', result)
            this.$message.success('Add card success.')
            this.complateCard(result.setupIntent)
          }
        })
    },

    stripeElements(publicKey, setupIntent) {
      // eslint-disable-next-line no-undef
      this.stripeFun = Stripe(publicKey)
      console.log('stripe', this.stripeFun)
      var elements = this.stripeFun.elements()

      // Element styles
      var style = {
        base: {
          fontSize: '16px',
          color: '#32325d',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: 'rgba(0,0,0,0.4)'
          }
        }
      }
      var card = elements.create('card', { style: style })

      card.mount('#card-element')

      // Element focus ring
      card.on('focus', function() {
        var el = document.getElementById('card-element')
        el.classList.add('focused')
      })

      card.on('blur', () => {
        var el = document.getElementById('card-element')
        el.classList.remove('focused')
      })
      this.cardData = card
    },
    complateCard(result) {
      this.btnLoading = false
      if (this.dialogForm.defaultPayment) {
        const params = {
          id: result.payment_method
        }
        this.cardLoading = true
        UpdateDefaultPayment(params)
          .then(res => {
            this.cardLoading = false
            if (res.code === 200) {
              this.dialogVisible = false
              this.$emit('get-card')
              this.$emit('get-public-key')
            }
          })
          .catch(() => {
            this.cardLoading = false
          })
      } else {
        this.dialogVisible = false
        this.$emit('get-card')
        this.$emit('get-public-key')
      }
    },
    openDialog(item) {
      this.dialogVisible = true
      this.editStatus = false
      this.$nextTick(() => {
        this.stripeElements(this.publicKey, this.setupIntent)
      })

      // if (item) {
      //   this.editStatus = true
      //   this.pageLoading = true
      //   GetBankCardDetails(item.customerPaymentProfileId).then(res => {
      //     console.log('银行卡信息', res)
      //     this.pageLoading = false
      //     this.dialogForm = res.data
      //     this.dialogForm.cardNumber = `${res.data.cardNumber}`
      //     this.dialogForm.securityCode = '●●●●'
      //   })
      // }
    },
    submitForm(formName) {
      this.btnLoading = true
      this.submitCard()
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     const params = {
      //       ...this.dialogForm
      //     }
      //     params.expirationDate = `${this.expirationMonth}/${this.expirationYear}`
      //     console.log('params', params)
      //     const RequestFunction = this.editStatus ? EditBankCard : AddBankCard
      //     this.btnLoading = true
      //     RequestFunction(params)
      //       .then(res => {
      //         if (res.success) {
      //           this.$message.success(res.msg)
      //           this.$emit('get-card')
      //           this.resetForm()
      //         }
      //         this.btnLoading = false
      //       })
      //       .catch(() => {
      //         this.btnLoading = false
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/stripe.css';
</style>
