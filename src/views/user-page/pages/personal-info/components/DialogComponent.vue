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
            <stripe-save-card />
            <!-- <el-input
              v-model="dialogForm.cardNumber"
              type="test"
              :disabled="editStatus"
              placeholder="Card Number"
              autocomplete="off"
            ></el-input> -->
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
        <el-button size="small" @click="dialogVisible = false"
          >Cancel</el-button
        >
        <el-button
          size="small"
          :loading="btnLoading"
          type="primary"
          @click="submitForm('dialogForm')"
          >Confirm</el-button
        >
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
          this.dialogForm.cardNumber = `${res.data.cardNumber}`
          this.dialogForm.securityCode = '●●●●'
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
