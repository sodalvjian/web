<template>
  <el-dialog
    title="Choose resource"
    center
    :visible.sync="dialogVisible"
    width="40%"
  >
    <h3><i class="el-icon-info"></i> S3</h3>
    <el-table
      ref="multipleTable"
      :max-height="300"
      :data="
        tableData.filter(
          data =>
            !search || data.label.toLowerCase().includes(search.toLowerCase())
        )
      "
      class="choose-resource-table"
      @selection-change="handleSelectionChange"
      @select="select"
      @select-all="selectAll"
    >
      <no-data-table slot="empty"></no-data-table>
      <el-table-column align="center" type="selection" width="45">
      </el-table-column>
      <el-table-column align="left">
        <template slot="header" slot-scope="">
          <span class="fl"> Region ({{ tableData.length }}) </span>
          <!-- <i class="el-icon-refresh color-main f18 fl mt-3 ml-10 fb cp"></i> -->
        </template>
        <template slot-scope="scope">
          {{ scope.row.label }}
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Search folder name"
          />
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer">
      <div class="mt-20 mb-20">
        <el-button size="small" @click="dialogVisible = false"
          >Cancel</el-button
        >
        <el-button type="primary" size="small" @click="confirmData"
          >Confirm</el-button
        >
      </div>
    </span>
  </el-dialog>
</template>
<script>
import { s3List } from '../constants'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      multipleSelection: [],
      tableData: s3List,
      search: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    confirmData() {
      if (this.multipleSelection.length === 0) {
        this.$message.warning('Please select S3.')
        return false
      }
      const s3Data = {
        type: this.type,
        data: this.multipleSelection[0]
      }
      this.$emit('select-s3', s3Data)
      this.dialogVisible = false
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    select(selection, row) {
      if (selection.length > 1) {
        const del_row = selection.shift()
        this.$refs.multipleTable.toggleRowSelection(del_row, false)
      }
    },
    selectAll(selection) {
      if (selection.length > 1) {
        selection.length = 1
      }
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    openDialog(type, data) {
      this.dialogVisible = true
      this.type = type
      if (data) {
        console.log('选中的值', data)
        this.$nextTick(() => {
          this.$nextTick(() => {
            s3List.map(item => {
              if (item.value === data.value) {
                this.$refs.multipleTable.toggleRowSelection(item, true)
              }
            })
          })
        })
      }
    }
  }
}
</script>
<style lang="scss">
.choose-resource-table {
  .el-table__header-wrapper {
    .el-checkbox {
      visibility: hidden;
    }
  }
}
</style>
