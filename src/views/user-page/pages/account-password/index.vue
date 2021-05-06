<template>
  <div>
    <sider />
    <article class="user-container bg-color-white w">
      <nav class="p25 bb-1">
        <strong class="f18 color-black">
          <router-link
            to="/"
            class="color-main f19"
          ><i class="mr-10 el-icon-arrow-left fb"></i></router-link>
          Account Security
        </strong>
      </nav>
      <section class="mt-10 p25 w">
        <el-form
          ref="formData"
          :model="formData"
          class="user-account-form"
          auto-complete="on"
          label-width="150px"
          label-position="right"
        >
          <el-form-item prop="account" label="Account:">
            <el-input
              ref="account"
              v-model="formData.account"
              placeholder="Account"
              size="medium"
              disabled
              type="text"
            />
          </el-form-item>
          <el-form-item
            prop="oldPassword"
            label="Primary password:"
            :rules="{
              required: true,
              message: 'Please enter primary password.'
            }"
          >
            <el-input
              v-model="formData.oldPassword"
              placeholder="Primary password"
              size="medium"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="New password:"
            :rules="{ validator: validatePass }"
          >
            <el-input
              v-model="formData.password"
              placeholder="Password"
              size="medium"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="checkPass"
            class="mt-30"
            label="Password again:"
            :rules="{ validator: validateCheckPass }"
          >
            <el-input
              v-model="formData.checkPass"
              type="password"
              size="medium"
              placeholder="Confirm password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item align="left">
            <el-button
              :loading="loading"
              class="mt-10"
              size="small"
              type="primary"
              @click.native.prevent="handleSave"
            >Save</el-button>
          </el-form-item>
        </el-form>
      </section>
    </article>
  </div>
</template>

<script>
import Sider from '../../components/Sider'
import store from '@/store'
import { UpdatePassword } from '@/api/user-page'
import { passwordReg, passwordMsg } from '@/utils/method'
export default {
  name: '',
  components: {
    Sider
  },
  props: {},
  filter: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter the password'))
      } else if (!passwordReg.test(value)) {
        callback(new Error(passwordMsg))
      } else {
        if (this.formData.checkPass !== '') {
          this.$refs.formData.validateField('checkPass')
        }
        callback()
      }
    }
    var validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter the password again'))
      } else if (value !== this.formData.password) {
        callback(new Error('The two passwords are inconsistent!'))
      } else {
        callback()
      }
    }
    return {
      validatePass,
      validateCheckPass,
      loading: false,
      formData: {
        account: store.getters.userInfo.accountName,
        oldPassword: '',
        password: '',
        checkPass: '',
        verificationCode: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    handleSave() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          const { oldPassword, password } = this.formData
          const params = {
            oldPassword: oldPassword,
            password: password,
            userId: store.getters.userInfo.userId
          }
          this.loading = true
          UpdatePassword(params)
            .then(res => {
              this.loading = false
              this.$message.success(res.msg)
              setTimeout(() => {
                this.$store.dispatch('user/logout')
                location.reload()
              }, 1000)
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-account-form {
  width: 500px;
  margin-left: 20px;
  .el-button {
    width: 30%;
  }
}
</style>
