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
            prop="name"
            align="center"
            label="Pipeline"
            min-width="180"
          >
            <template slot-scope="scope">
              <span :class="scope.row.type === 'COUPON' ? 'color-red' : ''">
                {{ scope.row.name | emptyShow }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="type" align="center" label="Type" width="100">
            <template slot-scope="scope">
              <span :class="scope.row.type === 'COUPON' ? 'color-red' : ''">
                {{ scope.row.type }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="count" align="center" label="Number of files" width="150">
            
          </el-table-column>
          <el-table-column
            prop="amount"
            align="center"
            label="Amount"
            min-width="180"
          >
            <template slot-scope="scope">
              <span :class="scope.row.type === 'COUPON' ? 'color-red' : ''">
                $
                {{
                  scope.row.type === 'COUPON'
                    ? `- ${scope.row.amount}`
                    : scope.row.amount
                }}
              </span>
            </template>
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
        console.log('couponData', couponData)
        const totalData = resultData.concat(couponData)
        this.tableData = totalData
        // // this.tableCouponData = couponData
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
