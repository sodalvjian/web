<template>
  <div class="">
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p25 bb-1">
        <span class="f18 color-black">
          Personal information
        </span>
      </nav>
      <section class="p25 mt-10 w">
        <el-form
          ref="formData"
          :model="formData"
          label-position="top"
          size="small"
          status-icon
          class="user-form"
        >
          <div v-loading="personalLoading">
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="Picture" label-width="100px" prop="pass">
                  <div class="cb mb-20">
                    <el-avatar
                      shape="circle"
                      :size="100"
                      class="personal-info-avatar"
                      :src="avatarSrc"
                    ></el-avatar>

                    <el-button
                      class="personal-info-avatar-button"
                      type="primary"
                      plain
                      @click="editAvatar"
                      >Edit</el-button
                    >
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="First name" prop="firstname">
                  <el-input
                    v-model="formData.firstname"
                    type="test"
                    placeholder="First name"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Last name" prop="lastname">
                  <el-input
                    v-model="formData.lastname"
                    placeholder="Last name"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Company name" prop="companyName">
                  <el-input
                    v-model="formData.companyName"
                    type="test"
                    placeholder="Please input"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Phone Number" prop="phoneNum">
                  <el-input
                    v-model="formData.phoneNum"
                    placeholder="Please input"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Email" prop="email">
                  <el-input
                    v-model="formData.email"
                    disabled
                    placeholder="Email"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Country/Region" prop="countryRegion">
                  <el-select
                    v-model="formData.countryRegion"
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
              <el-col :span="12">
                <el-form-item label="Address" prop="street">
                  <el-input
                    v-model="formData.street"
                    placeholder="Street，P.O.Box,Company Name,c/o"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label=" " prop="apartment">
                  <el-input
                    v-model="formData.apartment"
                    placeholder="Apartment,suite,unit,building,floor,etc"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="City" prop="city">
                  <el-input
                    v-model="formData.city"
                    placeholder="Please input"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="State/Province or region" prop="state">
                  <el-input
                    v-model="formData.state"
                    placeholder="Please input"
                    type="test"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Postal Code" prop="postalCode">
                  <el-input-number
                    v-model="formData.postalCode"
                    :controls="false"
                    placeholder="Please input"
                  ></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item class="mt-40 mb-50 disinblock">
              <el-button
                type="primary"
                :loading="btnLoading"
                @click="submitForm('formData')"
                >Confirm</el-button
              >
              <el-button @click="resetForm('formData')">Reset</el-button>
            </el-form-item>
          </div>

          <el-divider></el-divider>
          <nav class="mt-40">
            <el-row class="w">
              <el-col :span="16">
                <strong class="color-black f15">Credit Card</strong>
              </el-col>
            </el-row>
          </nav>
          <div v-loading="cardLoading">
            <el-row :gutter="20" class="user-card-content">
              <el-col
                v-for="(item, index) in cardList"
                :key="index"
                :span="12"
                class="mt-20 user-card-item"
              >
                <el-form-item>
                  <el-card
                    class="user-card"
                    shadow="hover"
                    :body-style="{ padding: '0' }"
                  >
                    <el-row :gutter="10" class="p15">
                      <el-col :span="16">
                        <!-- <strong>{{ item.bankName }}</strong> -->
                        <strong>{{ item.cardType }}</strong>
                      </el-col>
                      <el-col :span="8" align="right">
                        <small
                          v-if="item.defaultPayment"
                          class="user-card-defult"
                          >defult</small
                        >
                      </el-col>
                    </el-row>
                    <div class="user-card-line"></div>
                    <div class="user-card-chip"><span>CREDIT</span></div>
                    <div class="f16 colof-white p15">
                      {{ item.cardNumber }}
                    </div>
                    <div class="operation-content">
                      <el-button type="danger" @click="deleteCard(item)"
                        >Delete</el-button
                      >
                      <el-button type="warning" @click="handleEdit(item)"
                        >Edit</el-button
                      >
                      <el-button
                        type="success"
                        @click="setDefultPayment(item, index)"
                        >Defult</el-button
                      >
                    </div>
                  </el-card>
                </el-form-item>
              </el-col>
              <el-col :span="12" class="mt-20">
                <el-form-item>
                  <el-card
                    shadow="hover"
                    class="card-add-btn cp"
                    @click.native="handleAddCard"
                  >
                    <div class="tc mt-50">
                      <i class="el-icon-circle-plus-outline f22"></i>
                    </div>
                    <div class="tc color-gray card-add-btn-text">
                      Add bank card
                    </div>
                  </el-card>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </section>
    </article>
    <!-- add card dialog -->
    <add-card ref="addCardRef" @get-card="getCardList" />
    <!-- edit avatar -->
    <upload-avatar ref="uploadAvatarRef" @get-avatar="getAvatar" />
  </div>
</template>
<script>
import store from '@/store'
import Sider from '../../components/Sider'
import addCard from './components/DialogComponent'
import UploadAvatar from './components/UploadAvatar'
import { countryList } from './constants'
const defaultAvatar = require('@/assets/img/avatar.png')
import {
  AddUserInfo,
  GetUserInfo,
  GetBankCardList,
  UpdateDefaultPayment,
  DeleteBankCard
} from '@/api/user-page'
export default {
  name: '',
  components: {
    Sider,
    addCard,
    UploadAvatar
  },
  props: {},
  data() {
    return {
      dateData: [],
      countryList, // country list
      avatarSrc: store.getters.userInfo.imagePath || defaultAvatar,
      btnLoading: false,
      personalLoading: false,
      cardLoading: false,
      cardList: [],
      formData: {
        userId: store.getters.userInfo.userId,
        imagePath: '',
        firstname: '',
        lastname: '',
        companyName: '',
        phoneNum: '',
        email: store.getters.userInfo.email,
        countryRegion: '',
        areaCode: '',
        street: '',
        city: '',
        state: '',
        postalCode: null
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getUserInfo()
    this.getCardList()
  },
  beforeDestroy() {},
  methods: {
    handleEdit(item) {
      this.$refs.addCardRef.openDialog(item)
    },
    deleteCard(item) {
      this.$confirm('Are you sure to delete?', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          const params = {
            customerPaymentProfileId: item.customerPaymentProfileId
          }
          this.cardLoading = true
          DeleteBankCard(params).then(res => {
            this.cardLoading = false
            if (res.success) {
              this.$message.success(res.msg)
              this.getCardList()
            }
          })
        })
        .catch(() => {
          this.cardLoading = false
        })
    },
    setDefultPayment(item) {
      this.$confirm('Set this card as default?', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          const params = {
            customerPaymentProfileId: item.customerPaymentProfileId,
            defaultPayment: 1
          }
          this.cardLoading = true
          UpdateDefaultPayment(params)
            .then(res => {
              this.cardLoading = false
              if (res.success) {
                this.$message.success(res.msg)
                this.getCardList()
              }
            })
            .catch(() => {
              this.cardLoading = false
            })
        })
        .catch(() => {})
    },
    getCardList() {
      const params = store.getters.userInfo.userId
      this.cardLoading = true
      GetBankCardList(params)
        .then(res => {
          this.cardLoading = false
          if (res.success) {
            console.log('银行卡', res.data)
            this.cardList = res.data
          }
        })
        .catch(() => {
          this.cardLoading = false
        })
    },
    getUserInfo() {
      this.personalLoading = true
      GetUserInfo()
        .then(res => {
          this.formData = res.data
          this.personalLoading = false
        })
        .catch(() => {
          this.personalLoading = false
        })
    },
    getAvatar(val, base64) {
      console.log('获取头像', val)
      this.avatarSrc = base64
      this.formData.imagePath = val
    },
    editAvatar() {
      this.$refs.uploadAvatarRef.openDialog()
    },
    handleAddCard() {
      this.$refs.addCardRef.openDialog()
    },
    openBillDetail() {
      this.$router.push('/user/billDetail')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            ...this.formData
          }
          this.btnLoading = true
          AddUserInfo(params)
            .then(res => {
              this.btnLoading = false
              if (res.success) {
                this.$message.success(res.msg)
                setTimeout(() => {
                  location.reload()
                }, 800)
              }
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
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.user-form {
  width: 60%;
  min-width: 500px;
}
.user-card-content {
  .user-card-item {
    &:nth-child(even) {
      .user-card {
        background-color: #ff7e84;
      }
    }
  }
}
.user-card {
  color: #fff;
  background-color: #8c7eff;
  border: none;
  border-radius: 5px;
  max-height: 195px;

  &:hover {
    .operation-content {
      display: block;
    }
  }
  .operation-content {
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 100%;
    bottom: 0;
    display: none;
    transition: all 0.5s;
    padding: 15px;
    text-align: right;
  }
  .user-card-defult {
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 3px 10px;
    opacity: 0.7;
  }
  .user-card-line {
    background-color: rgba(255, 255, 255, 0.3);
    height: 20px;
  }
  .user-card-chip {
    font-size: 14px;
    position: relative;
    padding-left: 70px;
    margin-top: 20px;
    span {
      opacity: 0.7;
    }
    &::before {
      content: '';
      width: 40px;
      height: 30px;
      border-radius: 5px;
      background: #ffbb00;
      left: 15px;
      position: absolute;
    }
  }
}
.card-add-btn {
  background-color: #f5f5f5;
  height: 197px;
  width: 100%;
  .card-add-btn-text {
    margin-top: -10px;
  }
}
.personal-info-avatar {
  float: left;
}
.personal-info-avatar-button {
  float: left;
  margin-top: 40px;
  margin-left: 30px;
}
</style>
