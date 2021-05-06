<template>
  <div>
    <nav class="mt-20">
      <el-row>
        <el-col :span="12">
          <h3>Visualization</h3>
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
          >Display Filter<i class="el-icon-s-tools el-icon--right f18"></i></el-button>
        </el-col>
      </el-row>
    </nav>
    <section class="analysis-result-content mt-15">
      <show-mark
        ref="showMarkRef"
        @set-nlp-data="setNlpData"
        @success-data="generalDisabled = false"
      />
    </section>
    <h3 class="mt-40">Results</h3>

    <entity-relation ref="entityRelationref" />
    <!-- General Settings dialog -->
    <el-dialog
      title="Select visable entities"
      center
      :visible.sync="dialogVisible"
      width="38%"
    >
      <div class="mt-20 mb-30">
        <el-row>
          <el-col :span="12" align="center">
            <strong>ALL</strong>
          </el-col>
          <el-col :span="12" align="center">
            <el-switch
              v-model="selectAll"
              active-color="#13ce66"
              @change="handleSelectAll"
            >
            </el-switch>
          </el-col>
        </el-row>
        <el-scrollbar
          class="visable-entities-container mt-5"
          style="height: 380px; overflow: visible; overflow-x: hidden"
        >
          <section>
            <el-row
              v-for="(item, index) in bratData"
              :key="index"
              class="mt-25"
            >
              <el-col :span="12" align="center">
                {{ item.type }}
              </el-col>
              <el-col :span="12" align="center">
                <el-switch
                  v-model="item.switch"
                  active-color="#13ce66"
                  @change="handleSingle"
                >
                </el-switch>
              </el-col>
            </el-row>
          </section>
        </el-scrollbar>

        <no-data v-if="bratData.length === 0" />
      </div>
      <span v-if="bratData.length !== 0" slot="footer" class="dialog-footer">
        <el-button
          size="small"
          @click="dialogVisible = false"
        >Cancel</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleSetBrat"
        >Confirm</el-button>
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
      selectAll: true, // 选中全部
      value: false,
      generalDisabled: true,
      bratSemData: [],
      bratFileData: [],
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
    handleSelectAll(val) {
      console.log('val', val)
      this.bratData.map(item => {
        item.switch = val
      })
    },
    handleSingle(val) {
      const selectSwitch = this.bratData.map(item => item.switch)
      console.log('selectSwitch', selectSwitch)
      const selectSwitchBooble = selectSwitch.indexOf(false)
      console.log('selectSwitchBooble', selectSwitchBooble)
      if (selectSwitchBooble !== -1) {
        this.selectAll = false
      } else {
        this.selectAll = true
      }
    },
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
      console.log('bratFile', JSON.parse(data.bratFile))

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

      this.$refs.entityRelationref.setData(data)
    },
    handleSetBrat() {
      this.bratSemData = JSON.parse(this.originalBratDataAgain.bratSem)
      this.bratFileData = JSON.parse(this.originalBratDataAgain.bratFile)
      // console.log(this.bratSemData, this.bratData)
      JSON.parse(this.originalBratData.bratSem).entity_types.map(
        (item, index) => {
          if (!this.bratData[index].switch) {
            this.bratSemData.entity_types.splice(index, 1)
          }
        }
      )
      console.log(
        'this.originalBratData.bratFile',
        JSON.parse(this.originalBratData.bratFile).entities
      )

      const selectDataArr = []
      this.bratData.map(child => {
        // console.log('child', child)
        if (!child.switch) {
          selectDataArr.push(child.type)
        }
      })

      console.log('selectData', selectDataArr)

      this.bratFileData.entities.map((item, index) => {
        if (selectDataArr.indexOf(item[1]) !== -1) {
          delete this.bratFileData.entities[index]
        }
      })
      const temporaryArr = []
      this.bratFileData.entities.map(item => {
        if (item) {
          temporaryArr.push(item)
        }
      })
      this.bratFileData.entities = temporaryArr

      // this.bratSemData.entity_types = this.bratSemData.entity_types
      // this.bratFileData.entities = this.bratFileData.entities
      console.log('this.bratFileData.entities', this.bratFileData.entities)
      // this.originalBratData.bratSem = JSON.stringify(this.bratSemData)
      this.originalBratData.bratFile = JSON.stringify(this.bratFileData)
      // console.log('this.bratSemData', this.originalBratData)
      this.$refs.showMarkRef.setBratDataAgain(this.originalBratData)
      this.$refs.entityRelationref.setData(this.originalBratData, selectDataArr)
      this.dialogVisible = false
    },
    getResult(params, loadType) {
      this.generalDisabled = true
      this.$refs.entityRelationref.setDataEmpty()
      this.$refs.showMarkRef.fetchData(params, loadType)
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
.visable-entities-container {
  height: 400px;
}
</style>
<style lang="scss">
.visable-entities-container {
  .el-scrollbar__wrap {
    overflow: auto;
  }
}
</style>
