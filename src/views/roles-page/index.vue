<template>
  <div>
    <nav class="vital-container cb">
      <strong class="fl nav-title mt-10 f16">Roles</strong>
      <div class="fr">
        <el-input
          v-model="searchData.name"
          size="medium"
          clearable
          class="radius-input search-input mr-15"
          placeholder="Please enter the keyword"
          @keyup.enter.native="RolesaerchBtn"
        >
          <i
            slot="suffix"
            title="Search"
            class="el-input__icon el-icon-search cp"
            @click="RolesaerchBtn"
          ></i>
        </el-input>
        <el-button
          class="filter-item shadow"
          type="primary"
          size="medium"
          icon="el-icon-plus"
          @click="addRoleBtn"
        >Add</el-button>
      </div>
    </nav>
    <el-table
      v-loading="listLoading"
      class="mt-20"
      :data="list"
      fit
      highlight-current-row
      style="width: 100%"
    >
      <no-data-table slot="empty"></no-data-table>
      <el-table-column align="center" label="No." width="80" type="index">
      </el-table-column>

      <!-- <el-table-column width="180px" align="center" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column> -->
      <el-table-column min-width="150px" label="Name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Edit" width="250px">
        <template slot-scope="scope">
          <i
            title="Edit"
            class="iconfont el-icon-edit color-main cp mr-10"
            @click.stop="changeUserBtn(scope.row)"
          ></i>
          <i
            title="Delete"
            class="iconfont icon-shanchu color-red cp"
            @click.stop="delData(scope.row)"
          ></i>
          <!-- <el-button type="text" @click="changeUserBtn(scope.row)"
            >Edit</el-button
          >
          <el-button type="text" @click="delData(scope.row)">Delete</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="tr mt-25">
      <el-pagination
        background
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <!-- 查看用户 -->
    <el-dialog title="查看用户" :visible.sync="viewUserDialog" width="30%">
      <div class="mb-20">
        <div class="cb">
          <div class="fl w30 tr pr-10">
            登录名：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.userLoginName }}
          </div>
        </div>
        <div class="cb mt-30">
          <div class="fl w30 tr pr-10">
            用户名：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.name }}
          </div>
        </div>
        <div class="cb mt-30">
          <div class="fl w30 tr pr-10">
            邮箱：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.userEmail ? viewUserData.userEmail : '--' }}
          </div>
        </div>
        <div class="cb mt-30">
          <div class="fl w30 tr pr-10">
            手机：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.userPhone ? viewUserData.userPhone : '--' }}
          </div>
        </div>
        <div class="cb mt-30">
          <div class="fl w30 tr pr-10">
            归属单位：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.belongUnit }}
          </div>
        </div>
        <div class="cb mt-30">
          <div class="fl w30 tr pr-10">
            角色：
          </div>
          <div class="fl w70 pl-25">
            {{ viewUserData.userRoleNames }}
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增/修改用户 -->
    <el-dialog :visible.sync="roleCreatNew" width="55%">
      <span slot="title">{{ roleEidtStatus ? 'Edit Role' : 'Add Role' }}</span>
      <el-form
        ref="addRole"
        :model="addRole"
        label-width="100px"
        :rules="userRules"
      >
        <el-row :gutter="20">
          <el-col :span="22">
            <el-form-item label="Role name:" prop="name">
              <el-input
                v-model="addRole.name"
                placeholder="Please enter role name"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item
              v-loading="rolesLoading"
              label="Privileges:"
              prop="privileges"
            >
              <el-checkbox
                v-model="checkAllAdmin"
                :indeterminate="isIndeterminateAdmin"
                @change="handleCheckAllChangeAdmin"
              >Select All</el-checkbox>
              <el-checkbox-group
                v-model="addRole.privilegesAdmin"
                @change="handleCheckedAdminChange"
              >
                <el-checkbox
                  v-for="(item, index) in rolesDataAdmin"
                  :key="index"
                  :label="item.name"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-loading="rolesLoading">
              <el-checkbox
                v-model="checkAllNormal"
                :indeterminate="isIndeterminateNormal"
                @change="handleCheckAllChangeNormal"
              >Select All</el-checkbox>
              <el-checkbox-group
                v-model="addRole.privilegesNormal"
                @change="handleCheckedNormalChange"
              >
                <el-checkbox
                  v-for="(item, index) in rolesDataNormal"
                  :key="index"
                  :label="item.name"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-orange shadow"
          type="primary"
          @click="saveUserBtn('addRole')"
        >
          <i class="iconfont icon-save f14 mr-5"></i>Save</el-button>
        <el-button class="btn-white shadow" @click="resetForm('addRole')">
          <i class="iconfont icon-reset mr-5 f14"></i>Reset</el-button>
      </span>
    </el-dialog>
    <!-- 导入excel -->
    <el-dialog title="花名册导入" :visible.sync="uploadExcelDialog" width="40%">
      <div class="tc">
        <!-- <div class="tl color-blue f14 mb-25 cp" @click='downloadExcel'></div> -->
        <div class="tl mb-10 mt-10 f16">请导入对应格式的Excel文件</div>
        <input
          id="excel-upload-input"
          ref="excel-upload-input"
          type="file"
          accept=".xlsx, .xls"
          @change="handleClick"
        />
        <div
          id="drop"
          @drop="handleDrop"
          @dragover="handleDragover"
          @dragenter="handleDragover"
        >
          将文件拖到此处或点击上传
          <el-button
            :loading="loading"
            style="margin-left:15px;"
            size="mini"
            type="success"
            @click="handleUpload"
          >
            上传Excel</el-button>
        </div>
        <!-- <el-button @click="uploadExcelBtn" type="success" size="medium" icon="el-icon-upload2" circle></el-button>
        <input accept=".xlsx,.xls" id="upload-excel" style="display:none" type="file"> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  GET_LIST,
  GET_PRIVILEGES,
  DELETE_DATA,
  SAVE_DATA,
  CHANGE_DATA
} from './js/api'
export default {
  name: 'InlineEditTable',
  filters: {
    statusFilter(status) {
      if (status === '停用') {
        return 'danger'
      } else if (status === '启用') {
        return 'success'
      }
    }
  },
  data() {
    return {
      isIndeterminateAdmin: false,
      isIndeterminateNormal: false,
      checkAllAdmin: false,
      checkAllNormal: false,
      roleCreatNew: false,
      roleEidtStatus: false,
      uploadExcelDialog: false,
      rolesLoading: false,
      databaseShow: false,
      rolesDataAdmin: [],
      rolesDataNormal: [],
      addRole: {
        name: '',
        privilegesAdmin: [],
        privilegesNormal: []
      },
      rolesOptions: [],
      userRules: {
        name: [
          {
            required: true,
            message: 'Please enter name',
            trigger: 'blur'
          }
        ]
      },
      changeUser: {
        name: '',
        loginName: '',
        tel: '',
        department: '',
        email: '',
        roles: [],
        roleId: [],
        id: ''
      },
      list: [],
      loading: false,
      listLoading: true,
      viewUserData: {},
      viewUserDialog: false,
      page: 0,
      total: 0,
      searchData: {
        userLoginName: '',
        name: '',
        userRoleName: '',
        Rolestatus: ''
      }
    }
  },
  created() {
    this.getList()
    // this.getRolesList()
  },
  methods: {
    handleCheckedNormalChange(value) {
      const checkedCount = value.length
      this.checkAllNormal = checkedCount === this.rolesDataNormal.length
      this.isIndeterminateNormal =
        checkedCount > 0 && checkedCount < this.rolesDataNormal.length
    },
    handleCheckAllChangeNormal(val) {
      this.addRole.privilegesNormal = val
        ? this.rolesDataNormal.map(item => {
          return item.name
        })
        : []
      console.log(
        ' this.addRole.privilegesNormal',
        this.addRole.privilegesNormal
      )
      this.isIndeterminateNormal = false
    },
    handleCheckedAdminChange(value) {
      const checkedCount = value.length
      this.checkAllAdmin = checkedCount === this.rolesDataAdmin.length
      this.isIndeterminateAdmin =
        checkedCount > 0 && checkedCount < this.rolesDataAdmin.length
    },
    handleCheckAllChangeAdmin(val) {
      this.addRole.privilegesAdmin = val
        ? this.rolesDataAdmin.map(item => {
          return item.name
        })
        : []
      console.log(' this.addRole.privilegesAdmin', this.addRole.privilegesAdmin)
      this.isIndeterminateAdmin = false
    },
    selectType() {
      if (this.addRole.value === 'Local File') {
        this.databaseShow = false
      } else {
        this.databaseShow = true
      }
    },
    uploadExcel(type) {
      this.uploadExcelDialog = true
    },
    changeUserBtn(row) {
      this.roleEidtStatus = true
      this.roleCreatNew = true
      this.getRolesData()
      this.addRole.name = row.name
      this.addRole.id = row.id
      this.addRole.privileges = row.privileges.map(item => {
        return item.name
      })
      const rolesDataAdmin = []
      const rolesDataNormal = []
      const rolesData = row.privileges
      rolesData.map(item => {
        if (item.name.indexOf('Admin') !== -1) {
          rolesDataAdmin.push(item.name)
        } else if (item.name.indexOf('Normal') !== -1) {
          rolesDataNormal.push(item.name)
        }
      })
      this.addRole.privilegesAdmin = rolesDataAdmin
      this.addRole.privilegesNormal = rolesDataNormal
    },
    getRolesData() {
      this.rolesLoading = true
      const params = {
        page: 0,
        size: 1000
      }

      GET_PRIVILEGES(params).then(res => {
        if (res.code === 200) {
          console.log('privileges', res.data)
          this.rolesLoading = false
          const rolesDataAdmin = []
          const rolesDataNormal = []
          const rolesData = res.data.content
          rolesData.map(item => {
            if (item.name.indexOf('Admin') !== -1) {
              rolesDataAdmin.push(item)
            } else if (item.name.indexOf('Normal') !== -1) {
              rolesDataNormal.push(item)
            }
          })
          this.rolesDataAdmin = rolesDataAdmin
          this.rolesDataNormal = rolesDataNormal
        }
      })
      // this.pubFun.httpRequest(
      //   'get',
      //   `api/privileges`,
      //   null,
      //   data => {
      //     console.log('privileges', data)
      //     this.rolesLoading = false
      //     const rolesDataAdmin = []
      //     const rolesDataNormal = []
      //     const rolesData = data.content
      //     rolesData.map(item => {
      //       if (item.name.indexOf('Admin') !== -1) {
      //         rolesDataAdmin.push(item)
      //       } else if (item.name.indexOf('Normal') !== -1) {
      //         rolesDataNormal.push(item)
      //       }
      //     })
      //     this.rolesDataAdmin = rolesDataAdmin
      //     this.rolesDataNormal = rolesDataNormal
      //   },
      //   params
      // )
    },
    delData(row) {
      this.$confirm('Are you sure you want to delete data?', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          DELETE_DATA(row.id).then(res => {
            if (res.code === 200) {
              this.$message({
                type: 'success',
                message: 'Delete success!'
              })
              this.getList()
            }
          })
          // this.pubFun.httpRequest(
          //   'delete',
          //   `api/roles/${row.id}`,
          //   null,
          //   data => {
          //     this.$message({
          //       type: 'success',
          //       message: 'Delete success!'
          //     })
          //     this.getList()
          //   }
          // )
        })
        .catch(() => {})
    },
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error(
          'Only supports upload .xlsx, .xls, .csv suffix files'
        )
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      document.getElementById('excel-upload-input').click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel

      this.readerData(rawFile)
      // if (!this.beforeUpload) {
      //   this.readerData(rawFile)
      //   return
      // }
      // const before = this.beforeUpload(rawFile)
      // if (before) {
      //   this.readerData(rawFile)
      // }
    },
    RolesaerchBtn() {
      this.searchData.name = this.searchData.name
        ? this.searchData.name.trim()
        : null
      this.searchData.userLoginName = this.searchData.userLoginName
        ? this.searchData.userLoginName.trim()
        : null
      this.userPage = 1
      this.getList()
    },
    saveUserBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const rolesArrAdmin = []
          this.addRole.privilegesAdmin.map(item => {
            this.rolesDataAdmin.map(ele => {
              if (item === ele.name) {
                rolesArrAdmin.push(ele)
              }
            })
          })
          const rolesArrNormal = []
          this.addRole.privilegesNormal.map(item => {
            this.rolesDataNormal.map(ele => {
              if (item === ele.name) {
                rolesArrNormal.push(ele)
              }
            })
          })
          const rolesTotal = rolesArrAdmin.concat(rolesArrNormal)

          if (rolesTotal.length === 0) {
            this.$message({
              type: 'error',
              message: 'Please select a privilege.'
            })
          } else {
            if (this.roleEidtStatus) {
              const roleAddData = {
                name: this.addRole.name,
                privileges: rolesTotal,
                id: this.addRole.id
              }
              CHANGE_DATA(this.addRole.id, roleAddData).then(res => {
                if (res.code === 200) {
                  this.$message({
                    type: 'success',
                    message: 'Update success!'
                  })
                  this.roleCreatNew = false
                  this.resetForm('addRole')
                  this.getList()
                }
              })
              // this.pubFun.httpRequest(
              //   'put',
              //   `api/roles/${this.addRole.id}`,
              //   roleAddData,
              //   data => {
              //     this.$message({
              //       type: 'success',
              //       message: 'Update success!'
              //     })
              //     this.roleCreatNew = false
              //     this.resetForm('addRole')
              //     this.getList()
              //   }
              // )
            } else {
              const roleAddData = {
                name: this.addRole.name,
                privileges: rolesTotal
              }

              SAVE_DATA(roleAddData).then(res => {
                if (res.code === 200) {
                  this.$message({
                    type: 'success',
                    message: 'Add success!'
                  })
                  this.roleCreatNew = false
                  this.resetForm('addRole')
                  this.getList()
                }
              })

              // this.pubFun.httpRequest(
              //   'post',
              //   'api/roles',
              //   roleAddData,
              //   data => {
              //     this.$message({
              //       type: 'success',
              //       message: 'Add success!'
              //     })
              //     this.roleCreatNew = false
              //     this.resetForm('addRole')
              //     this.getList()
              //   }
              // )
            }
          }
        } else {
          return false
        }
      })
    },
    addRoleBtn() {
      this.roleCreatNew = true
      this.roleEidtStatus = false
      this.getRolesData()
      this.resetForm('addRole')
      this.addRole.name = ''
      this.addRole.privilegesAdmin = []
      this.addRole.privilegesNormal = []
    },
    viewUserBtn(row) {
      this.viewUserDialog = true
      this.viewUserData = {
        belongUnit: row.belongUnit,
        userEmail: row.userEmail,
        userLoginName: row.userLoginName,
        name: row.name,
        userPassword: row.userPassword,
        userPhone: row.userPhone,
        userRoleNames: row.userRoleNames
      }
    },
    changeUserRole(value) {
      this.changeUser.roleId = []
      value.forEach(item => {
        this.rolesOptions.forEach(child => {
          if (item === child.roleName) {
            this.changeUser.roleId.push(child.id)
          }
        })
      })
    },
    handleCurrentChange(val) {
      this.page = val - 1
      this.getList()
    },
    handleFilter() {
      // this.listQuery.page = 1;
      this.getList()
    },
    getList() {
      this.listLoading = false
      this.listLoading = true
      const params = {
        page: this.page,
        size: 10,
        name: this.searchData.name
      }
      GET_LIST(params).then(res => {
        if (res.code === 200) {
          this.list = res.data.content
          this.listLoading = false
          this.total = res.data.totalElements
        }
      })
      // this.pubFun.httpRequest(
      //   'get',
      //   `api/roles/byName`,
      //   null,
      //   data => {
      //     this.list = data.content
      //     this.listLoading = false
      //     this.total = data.totalElements
      //   },
      //   params
      // )
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.addRole.privilegesAdmin = []
      this.addRole.privilegesNormal = []
    }
  }
}
</script>

<style lang="scss" scoped></style>
