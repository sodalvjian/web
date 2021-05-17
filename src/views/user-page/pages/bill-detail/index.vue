<template>
  <el-dialog title="Bill Details" :visible.sync="dialogVisible" width="70%">
    <article class="bg-color-white w">
      <section class="w" style="padding:10px 10px 25px">
        <el-table
          v-loading="tableLoading"
          :data="tableData"
          border
          style="width: 100%"
        >
          <no-data-table slot="empty"></no-data-table>
          <el-table-column
            prop="aliasPipeline"
            align="center"
            label="Pipeline"
            min-width="180"
          >
          </el-table-column>
          <el-table-column prop="type" align="center" label="Type" width="100">
          </el-table-column>

          <el-table-column
            prop="amount"
            align="center"
            label="Amount"
            min-width="180"
          >
            <template slot-scope="scope"> $ {{ scope.row.amount }} </template>
          </el-table-column>
        </el-table>
        <el-table
          v-if="tableCouponData.length > 0"
          v-loading="tableLoading"
          :data="tableCouponData"
          border
          class="mt-20"
          style="width: 100%"
        >
          <no-data-table slot="empty"></no-data-table>
          <el-table-column
            prop="name"
            align="center"
            label="Pipeline"
            min-width="180"
          >
          </el-table-column>
          <el-table-column prop="type" align="center" label="Type" width="100">
          </el-table-column>

          <el-table-column
            prop="amount"
            align="center"
            label="Amount"
            min-width="180"
          >
            <template slot-scope="scope"> $ {{ scope.row.amount }} </template>
          </el-table-column>
        </el-table>
      </section>
    </article>
  </el-dialog>
</template>
<script>
import { GetBillDetails } from '@/api/user-page'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableLoading: false,
      dialogVisible: false,

      tableData: [],
      tableCouponData: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.page = val
      this.getData()
    },
    handleSearch() {
      this.page = 1
      this.getData()
    },
    getData(row) {
      this.dialogVisible = true
      this.tableLoading = true
      GetBillDetails(row.invoiceID).then(res => {
        this.tableLoading = false
        const resultData = []
        const couponData = []

        res.data.map(item => {
          if (item.type === 'COUPON') {
            couponData.push(item)
          } else {
            resultData.push(item)
          }
        })
        this.tableData = resultData
        this.tableCouponData = couponData
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
