<template>
  <div>
    <nav class="mt-20">
      <el-row>
        <el-col :span="12">
          <h3>Analysis result</h3>
        </el-col>
        <el-col :span="12" align="right">
          <!-- <input
            ref="testInput"
            type="file"
            accept="text/plain"
            @change="openFile($event)"
          /> -->
          <el-button
            type="text"
            :disabled="generalDisabled"
            class="mt-5"
            @click="openSetting"
            >General Settings<i class="el-icon-s-tools el-icon--right f18"></i
          ></el-button>
        </el-col>
      </el-row>
    </nav>
    <section class="analysis-result-content">
      <show-mark
        ref="showMarkRef"
        @set-nlp-data="setNlpData"
        @success-data="generalDisabled = false"
      />
    </section>
    <!-- Entity & Relation -->
    <entity-relation ref="entityRelationref" />
    <!-- General Settings dialog -->
    <el-dialog
      title="Select visible columns"
      center
      :visible.sync="dialogVisible"
      width="25%"
    >
      <div class="mb-30 mt-20">
        <el-row
          v-for="(item, index) in bratData"
          :key="index"
          class="mt-15"
          :gutter="20"
        >
          <el-col :span="12" align="center">
            {{ item.type }}
          </el-col>
          <el-col :span="12" align="center">
            <el-switch v-model="item.switch" active-color="#13ce66">
            </el-switch>
          </el-col>
        </el-row>
        <!-- <el-table
          :data="tableData"
          class="analysis-result-table"
          :show-header="false"
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="">
              <el-row class="pt-5 pb-10 bb-1">
                <el-col :span="8">Shanghai</el-col>
                <el-col class="pl-30" :span="8">City name</el-col>
                <el-col class=" pb-5" :span="8" align="center"
                  ><el-switch v-model="value" active-color="#13ce66">
                  </el-switch
                ></el-col>
              </el-row>
              <el-row class="pt-15 pb-5">
                <el-col :span="8">Shanghai</el-col>
                <el-col class="pl-30" :span="8">City name</el-col>
                <el-col :span="8" align="center"
                  ><el-switch v-model="value" active-color="#13ce66">
                  </el-switch
                ></el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scoped">
              <strong>{{ scoped.row.name }}</strong>
            </template>
          </el-table-column>
          <el-table-column> </el-table-column>
          <el-table-column label="" align="center">
            <template>
              <el-switch v-model="value" active-color="#13ce66"> </el-switch>
            </template>
          </el-table-column>
        </el-table> -->
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false"
          >Cancel</el-button
        >
        <el-button size="small" type="primary" @click="handleSetBrat"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import entityRelation from './EntityRelation'
import { deepClone } from '@/utils/method'
import ShowMark from './ShowMark'
export default {
  name: '',
  components: {
    ShowMark,
    entityRelation
  },
  props: {},
  filter: {},
  data() {
    return {
      dialogVisible: false,
      value: false,
      generalDisabled: true,
      bratSemData: [],
      originalBratData: {},
      originalBratDataAgain: {},
      bratData: [],
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
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    // 上传文件
    openFile($event) {
      console.log('$event', $event)
      var input = $event.target
      var reader = new FileReader()
      reader.onload = () => {
        if (reader.result) {
          // 显示文件内容
          // console.log('文本', reader.result)
          const resultData = JSON.parse(reader.result)
          console.log('结果', resultData)
          // const postData = {
          //   bratFile
          // }
          this.$refs.showMarkRef.setBratDataAgain(resultData)
          this.$refs.testInput.value = ''
        }
      }
      reader.readAsText(input.files[0])
    },
    setNlpData(data) {
      console.log('data数据', data)
      localStorage.bratData = JSON.stringify(data)
      console.log('output', JSON.parse(data.output))
      const outputData = JSON.parse(data.output)

      this.originalBratData = deepClone(data)
      this.originalBratDataAgain = deepClone(data)
      const bratData = []
      this.bratSemData = JSON.parse(data.bratSem)
      this.bratSemData.entity_types.map(item => {
        bratData.push({
          type: item.type,
          switch: true
        })
      })
      this.bratData = bratData

      this.$refs.entityRelationref.setData(bratData, outputData)
    },
    handleSetBrat() {
      this.bratSemData = JSON.parse(this.originalBratDataAgain.bratSem)
      console.log(this.bratSemData, this.bratData)
      JSON.parse(this.originalBratData.bratSem).entity_types.map(
        (item, index) => {
          if (!this.bratData[index].switch) {
            this.bratSemData.entity_types.splice(index, 1)
          }
        }
      )
      this.bratSemData.entity_types = this.bratSemData.entity_types
      this.originalBratData.bratSem = JSON.stringify(this.bratSemData)
      console.log('this.bratSemData', this.originalBratData)
      this.$refs.showMarkRef.setBratDataAgain(this.originalBratData)
      this.dialogVisible = false
    },
    getResult(params) {
      this.generalDisabled = true
      this.$refs.showMarkRef.fetchData(params)
    },
    switchClick() {
      console.log()
    },
    openSetting() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.analysis-result-content {
  height: 400px;
  background-color: #fff;
}
</style>
