<template>
  <div>
    <el-table
      :data="tableData"
      class="relation-entity-table"
      ref="tableDataRef"
      style="width: 100%;margin-bottom: 20px;"
      row-key="dataId"
      :tree-props="{ children: 'children' }"
    >
      <el-table-column label="Entity" width="320">
        <template slot-scope="scope">
          {{ findText(bratText, scope.row.begin, scope.row.end) }}
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

    <!-- <nav class="pl-20 pr-20 bg-color-white mt-30">
      <el-row class="bb-1">
        <el-col :span="12">
          <h3>Entity</h3>
        </el-col>
        <el-col :span="12">
          <h3>Relation</h3>
        </el-col>
      </el-row>
    </nav>
    <section>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row
            v-for="(item, index) in bratData"
            :key="index"
            class="mt-15 pl-20"
            :gutter="20"
          >
            <el-col :span="12" align="left">
              {{ item.type }}
            </el-col>
            <el-col :span="12" align="center">
              <el-switch active-color="#13ce66" v-model="item.switch">
              </el-switch>
            </el-col>
          </el-row>

          <el-table
            :data="tableData"
            :height="300"
            stripe
            class="analysis-result-table pl-20 pr-20 pb-20 pt-5 bg-color-white"
            style="width: 100%"
          >
            <el-table-column type="expand">
              <template slot-scope="">
                <el-row class="pt-5 pb-10 bb-1">
                  <el-col :span="8">Shanghai</el-col>
                  <el-col class="pl-30" :span="8">City name</el-col>
                </el-row>
                <el-row class="pt-15 pb-5">
                  <el-col :span="8">Shanghai</el-col>
                  <el-col class="pl-30" :span="8">City name</el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column label="Entity concep">
              <template slot-scope="scoped">
                <strong>{{ scoped.row.name }}</strong>
              </template>
            </el-table-column>
            <el-table-column label="Entity concep"> </el-table-column>
            <el-table-column label="Other" align="center">
              <template> </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="">
          <div class="p20 bg-color-white">
            <div
              v-for="(item, index) in afterData"
              :key="index"
              class="relation-item bb-1 pb-20 mb-20"
            >
              <nav>
                <el-row :gutter="10">
                  <el-col :span="8">
                    {{ item.name }}
                  </el-col>
                </el-row>
              </nav>
              <div
                v-for="(child, num) in item.origin"
                :key="num"
                class="relation-item-content"
              >
                <el-row :gutter="10">
                  <el-col :span="8">
                    {{ child.semanticTag }}
                  </el-col>
                  <el-col :span="8"> begin: {{ child.begin }} </el-col>
                  <el-col :span="8"> end: {{ child.end }} </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section> -->
  </div>
</template>
<script>
const { v1: uuidv1, v4: uuidv4 } = require('uuid')
import { deepClone } from '@/utils/method'
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
      tableData: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    setDataEmpty() {
      this.tableData = []
    },
    setData(bratFile, outputData, bratSem) {
      console.log('bratFile', bratFile)
      this.bratText = bratFile.text
      console.log('过来的bratSem', bratSem)
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
            child.children.push(entitiesObj[item.toEnt])
          }
        })
      })

      console.log('entitiesData', copyEntitiesData)
      this.tableData = copyEntitiesData
      this.$refs.tableDataRef.doLayout()
    },
    setColor(type) {
      console.log('type啊啊啊', type)
      const colorObj = {}
      const entityTypes = this.bratSem.entity_types
      entityTypes.map(item => {
        colorObj[item.type] = item
      })
      console.log('colorObj', colorObj)
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
      &:before {
        border-left: 1px solid #a0a0a0;
        border-bottom: 1px solid #a0a0a0;
      }
    }
  }
}
</style>
