<template>
  <div v-if="bratData.length > 0">
    <nav class="pl-20 pr-20 bg-color-white mt-30">
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
              <!-- <el-switch active-color="#13ce66" v-model="item.switch">
              </el-switch> -->
            </el-col>
          </el-row>

          <!-- <el-table
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
          </el-table> -->
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
                  <!-- <el-col :span="8">
                    City name
                  </el-col>
                  <el-col :span="8">
                    0.234
                  </el-col> -->
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
                  <!-- <el-col :span="8">
                    City name
                  </el-col>
                  <el-col :span="8">
                    0.234
                  </el-col> -->
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      bratData: [],
      relationsArr: [],
      entitiesObj: {},
      afterData: [],
      tableData: [
        {
          name: 'Disease (12)'
        },
        {
          name: 'Determination (12)'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    setData(data, outputData) {
      this.bratData = data
      console.log('过来的值', outputData)

      this.entitiesObj = outputData.entities
      this.relationsArr = outputData.relations
      const relationData = []
      outputData.relations.map(item => {
        relationData.push({
          name: outputData.entities[item.fromEnt].semanticTag,
          child: outputData.entities[item.toEnt]
        })
      })
      console.log('relationData', relationData)
      const tempArr = []
      for (let i = 0; i < relationData.length; i++) {
        if (tempArr.indexOf(relationData[i].name) === -1) {
          this.afterData.push({
            name: relationData[i].name,
            origin: [relationData[i].child]
          })
          tempArr.push(relationData[i].name)
        } else {
          for (let j = 0; j < this.afterData.length; j++) {
            if (this.afterData[j].name == relationData[i].name) {
              this.afterData[j].origin.push(relationData[i].child)
              break
            }
          }
        }
      }
      console.log('afterData', this.afterData)
    }
  }
}
</script>
<style lang="scss" >
.relation-item {
  nav {
    padding: 10px 20px;
    background-color: #f8f8fa;
  }
  .relation-item-content {
    margin-top: 15px;
    padding: 10px 20px;
    margin-left: 40px;
    border: 1px solid #e9e9e9;
    position: relative;
    &:before {
      content: '';
      width: 40px;
      height: 1px;
      background-color: #e9e9e9;
      position: absolute;
      left: -40px;
      top: 18px;
    }
  }
}
</style>
