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
                pattern: /^[1-9]\d{15}$/,
                message: 'Please input legal bank card number'
              }
            ]"
          >
            <el-input
              v-model="dialogForm.cardNumber"
              type="test"
              placeholder="Card Number"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="Card holder Name"
            prop="firstname"
            :rules="[
              {
                required: true,
                message: 'Please input card holder Name'
              }
            ]"
          >
            <el-input
              v-model="dialogForm.firstname"
              type="test"
              placeholder="First name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label=" " prop="lastname">
            <el-input
              v-model="dialogForm.lastname"
              placeholder="Last name"
              type="test"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="Expiration Date"
            prop="pass"
            class="dialog-item-required"
          >
            <el-row>
              <el-col :span="11">
                <el-select v-model="expirationMonth" placeholder="MM">
                  <el-option
                    v-for="(item, index) in monthList"
                    :key="index"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="2" align="center">/</el-col>
              <el-col :span="11">
                <el-select v-model="expirationYear" placeholder="YY">
                  <el-option
                    v-for="(item, index) in yearList"
                    :key="index"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="Security Code"
            prop="securityCode"
            :rules="[
              {
                required: true,
                message: 'Please input security code'
              }
            ]"
          >
            <el-input
              v-model="dialogForm.securityCode"
              placeholder="Security Code"
              type="test"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item
            label="Country/Region"
            prop="countryRegion"
            :rules="[
              {
                required: true,
                message: 'Please select country/region'
              }
            ]"
          >
            <el-select
              v-model="dialogForm.countryRegion"
              class="w"
              filterable
              clearable
              placeholder="Select and Search"
            >
              <el-option
                v-for="(item, index) in countryList"
                :key="index"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item
            label="Billing Address"
            prop="address"
            :rules="[
              {
                required: true,
                message: 'Please enter billing address'
              }
            ]"
          >
            <el-input
              v-model="dialogForm.address"
              placeholder="Address"
              type="test"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="City and State"
            prop="city"
            :rules="[
              {
                required: true,
                message: 'Please enter city'
              }
            ]"
          >
            <el-input
              v-model="dialogForm.city"
              placeholder="City"
              type="test"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label=" " prop="state">
            <el-input
              v-model="dialogForm.state"
              placeholder="State"
              type="test"
              autocomplete="off"
            ></el-input>
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
      <div class="mt-40 tc mb-20">
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
import { AddBankCard, EditBankCard, GetBankCardDetails } from '@/api/user-page'
import { monthList, yearList, countryList } from '../constants'
import store from '@/store'
export default {
  name: '',
  components: {},
  props: {},
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
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openDialog(item) {
      this.dialogVisible = true
      this.editStatus = false
      if (item) {
        this.editStatus = true
        this.pageLoading = true
        GetBankCardDetails(item.customerPaymentProfileId).then(res => {
          console.log('银行卡信息', res)
          this.pageLoading = false
          this.dialogForm = res.data
        })
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            ...this.dialogForm
          }
          params.expirationDate = `${this.expirationMonth}/${this.expirationYear}`
          console.log('params', params)
          const RequestFunction = this.editStatus ? EditBankCard : AddBankCard
          this.btnLoading = true
          RequestFunction(params)
            .then(res => {
              if (res.success) {
                this.$message.success(res.msg)
                this.$emit('get-card')
                this.resetForm()
              }
              this.btnLoading = false
            })
            .catch(() => {
              this.btnLoading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs.dialogForm.resetFields()
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>
<style lang="scss" scoped></style>
