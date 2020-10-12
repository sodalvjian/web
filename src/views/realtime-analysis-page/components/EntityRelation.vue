<template>
  <div>
    <nav class="tr mb-10">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            v-model="tableSearchData"
            size="small"
            clearable
            placeholder="Find entities"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-select
            v-model="dataType"
            clearable
            size="small"
            @change="handleChangeType"
          >
            <el-option label="All" value=""> </el-option>
            <el-option
              v-for="(item, index) in typeOptions"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-pagination
            background
            :page-size="pageSize"
            :current-page="currentPage"
            layout="prev, pager, next, total"
            :total="total"
            @current-change="handleCurrentPage"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </nav>
    <el-table
      ref="tableDataRef"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      class="relation-entity-table"
      height="400"
      style="width: 100%;margin-bottom: 20px;"
      row-key="dataId"
      :tree-props="{ children: 'children' }"
    >
      <el-table-column label="Entity" width="320">
        <template slot-scope="scope">
          <span class="relation-data">{{ scope.row.relationData || '' }}</span>
          {{ scope.row.dataName }}
        </template>
      </el-table-column>
      <el-table-column label="Type" width="180">
        <template slot-scope="scope">
          <i
            :style="setColor(scope.row.semanticTag)"
            class="mr-5 entity-type-round"
          ></i
          >{{ scope.row.semanticTag }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="CUI">
        <template slot-scope="scope">
          {{ scope.row.cui }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
const { v1: uuidv1 } = require('uuid')
import { deepClone, unique } from '@/utils/method'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      bratData: [],
      relationsArr: [],
      bratFile: [],
      entitiesObj: {},
      bratText: '',
      tableData: [],
      copyTableData: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      tableSearchData: '',
      dataType: '',
      typeOptions: []
    }
  },
  computed: {
    tableDataSlice() {
      const handleTableData = this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.typeOptions = unique(handleTableData.map(item => item.semanticTag))
      return handleTableData.filter(
        data => !this.dataType || data.semanticTag === this.dataType
      )
    }
  },
  watch: {
    tableSearchData(val) {
      console.log('输入', val)
      this.currentPage = 1
      const filterTable = this.copyTableData
        .filter(
          data =>
            !this.tableSearchData ||
            data.dataName
              .toLowerCase()
              .includes(this.tableSearchData.toLowerCase())
        )
        .filter(data => !this.dataType || data.semanticTag === this.dataType)

      console.log('filterTable', filterTable)

      this.tableData = filterTable
      this.total = filterTable.length
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleChangeType() {
      this.currentPage = 1
      const filterTable = this.copyTableData
        .filter(data => !this.dataType || data.semanticTag === this.dataType)
        .filter(
          data =>
            !this.tableSearchData ||
            data.dataName
              .toLowerCase()
              .includes(this.tableSearchData.toLowerCase())
        )

      console.log('filterTable', filterTable)

      this.tableData = filterTable
      this.total = filterTable.length
    },
    handleCurrentPage(val) {
      this.currentPage = val
      this.$refs.tableDataRef.bodyWrapper.scrollTop = 0
    },
    setDataEmpty() {
      this.tableData = []
    },
    setData(bratData, selectDataArr) {
      this.total = 0
      this.currentPage = 1
      this.tableData = []
      
      const bratFile = JSON.parse(bratData.bratFile)
      const outputData = JSON.parse(bratData.output)
      const bratSem = JSON.parse(bratData.bratSem)

      this.bratText = bratFile.text
      console.log('bratFile', bratFile)
      console.log('outputData', outputData)
      console.log('bratSem', bratSem)
      if (selectDataArr) {
        console.log('selectDataArr', selectDataArr)
        const entitiesObj = outputData.entities
        console.log('处理前', entitiesObj)
        for (const i in entitiesObj) {
          if (selectDataArr.indexOf(entitiesObj[i].semanticTag) !== -1) {
            delete entitiesObj[i]
          }
        }
        // entitiesArr.map((item, index) => {
        //   if (selectDataArr.indexOf(item.semanticTag) !== -1) {
        //     delete entitiesArr[index]
        //   }
        // })
        console.log('处理后', entitiesObj)
      }

      this.bratSem = bratSem

      const entitiesObj = outputData.entities
      const relationsArr = outputData.relations

      // 将entity取出
      const entitiesData = []
      for (const i in entitiesObj) {
        entitiesObj[i].keyName = i
        entitiesObj[i].dataId = uuidv1()
        entitiesObj[i].children = []
        entitiesData.push(entitiesObj[i])
      }
      const copyEntitiesData = deepClone(entitiesData)
      relationsArr.map(item => {
        copyEntitiesData.map(child => {
          if (item.fromEnt === child.keyName) {
            entitiesObj[item.toEnt].dataId = uuidv1()
            entitiesObj[item.toEnt].relationData = item.semanticTag
            child.children.push(entitiesObj[item.toEnt])
          }
        })
      })

      console.log('entitiesData', copyEntitiesData)
      copyEntitiesData.map(item => {
        item.dataName = this.findText(this.bratText, item.begin, item.end)
        if (item.children.length > 0) {
          item.children.map(child => {
            child.dataName = this.findText(
              this.bratText,
              child.begin,
              child.end
            )
          })
        }
      })

      this.total = copyEntitiesData.length
      this.typeOptions = unique(copyEntitiesData.map(item => item.semanticTag))
      this.tableData = copyEntitiesData
      this.copyTableData = deepClone(copyEntitiesData)
      this.$refs.tableDataRef.doLayout()
      this.currentPage = 1
    },
    setColor(type) {
      const colorObj = {}
      const entityTypes = this.bratSem.entity_types
      entityTypes.map(item => {
        colorObj[item.type] = item
      })
      return `background-color:${colorObj[type].bgColor}`
    },
    findText(str, begin, end) {
      return str.substr(begin, end - begin)
    }
  }
}
</script>
<style lang="scss">
.entity-type-round {
  float: left;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 7px;
  margin-right: 7px;
}
.relation-entity-table {
  .relation-data {
    font-size: 12px;
    position: absolute;
    transition: all 0.8s;
    left: 10px;
    transform: scale(0.85);
    top: 24px;
  }
  .el-table__expand-icon {
    margin-left: -6px;
  }
  .el-table__row--level-1 {
    .el-table_1_column_1 {
      &:before {
        transition: all 0.5s;
        content: '';
        position: absolute;
        left: 14px;
        width: 25px;
        top: -12px;
        height: 37px;
        border-left: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
      }
    }
    .el-table_1_column_1:hover {
      .relation-data {
        font-size: 13px;
      }
      &:before {
        border-left: 1px solid #a0a0a0;
        border-bottom: 1px solid #a0a0a0;
      }
    }
  }
}
</style>
