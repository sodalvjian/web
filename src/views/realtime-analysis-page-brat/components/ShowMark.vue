<template>
  <div v-loading="loading" class="root-show-mark">
    <no-data v-if="noDataShow" style="padding-top:12.5%" />
    <div v-if="!noDataShow" class="xmi-container">
      <iframe
        id="markBrat"
        data-mode="mark"
        width="1300"
        height="1600"
        name="markBrat"
        src="/static/main_shen.htm"
      ></iframe>
    </div>
    <!-- info message -->
    <dialog-show-info ref="dialogShowInfoRef" />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import * as types from '@/store/mutation-types';
import { globalBus } from '@/utils/globalBus'
import { demoResult } from '@/utils/demo-text'
import { GetBratForTest } from '@/api/realtime-analysis-page'
import DialogShowInfo from '@/components/DialogShowInfo'
import _ from 'lodash'
export default {
  name: 'DatasourceFileShowMark',
  components: { DialogShowInfo },
  props: ['id'],
  data() {
    return {
      type: '',
      showType: 'xmi',
      loading: false,
      noDataShow: true,
      hasFinalized: 1,
      entities: [],
      relations: [],
      entity_types: [],
      relation_types: [],
      sentence: null,
      token: null,
      typedef_entity_types: [],
      typedef_relation_types: [],
      _highLightTimeout: null,
      highLightDetail: {
        // 高亮内容
        ids: 0,
        label: '',
        text: '',
        assertion: '',
        umlsCui: '',
        umlsCuiDesc: ''
      },
      typedef_entity_types_filter: [],
      typedef_entity_types_filter_copy: [], // 这是typedef_entity_types_filter数组的filter arr
      entitySearchKeyWord: '',
      relationSearchKeyWord: '',
      typedef_relation_types_filter: [],
      typedef_relation_types_filter_copy: [],
      entitySelection: '', // 被选中文本
      entitySelectionId: null, // 被选中实体id，用于删除实体
      relationSeletionId: null, // 被选中关系id，用于删除关系
      data: null,
      relationLineCongfig: {},
      relationStartEntityId: null,
      relationEnd: null,
      waitingRelationEnd: false,
      messageInstance: null,

      replaceEntityModalVisible: false,
      entityReplaceRange: 'only clicked',
      candidateEntityLabelsStr: '',
      disannotatePopoverVisible: false,
      corpusConfig: {
        _entities: [],
        _relations: [],
        _entity_types: [],
        _relation_types: [],
        _sentence: {
          sentBratFile: {
            entities: [],
            relations: []
          },
          sentBratSem: {}
        },
        _token: {},
        _typedef_entity_types: [],
        _typedef_relation_types: [],
        service: {},
        relationLineCongfig: {}
      }
    }
  },
  computed: {
    ...mapState({
      allEntities(state) {
        return state.projectEntities
      }
      // projectRelations:'projectRelations',
      // projectEntities:'projectEntities',
    }),
    ...mapGetters(['sentenceRelations']) // corpusConfig.relationLineCongfig
  },
  watch: {
    corpusConfig: {
      handler: function(val) {
        this.updateBrat()
      },
      deep: true
    },

    waitingRelationEnd: function(n) {
      if (n) {
        this.messageInstance = this.$message({
          showClose: false,
          message: 'Relation-start selected, waiting for Relation-end...',
          // type: 'warning',
          type: 'success',
          duration: 0
        })
      } else {
        this.messageInstance.close()
      }
    }
  },
  mounted() {
    console.log('mounted!')
    if (this.messageInstance) {
      this.messageInstance.close()
    }
    this.waitingRelationEnd = false

    this.initData()
    const vm = this
    // window.readyToEmbed = function() {
    //   vm.fetchData()
    // }
    window.onHightLightEntity = this.onHightLightEntity // 悬停
    window.onHightLightRelation = this.onHightLightRelation // 悬停
    window.unHighLight = this.unHighLight
    // window.addRange = this.addRange; //选中
    // window.onEntitySelection = this.onEntitySelection;
    // window.onNewRelation = this.onNewRelation;
    // window.onRelationSelection = this.onRelationSelection;

    // window.onRelationStartSelected = this.onRelationStartSelected
    // window.onRelationModalClose = this.onRelationModalClose

    // 监听鼠标按下，隐藏菜单
    // $(document).on('click', e => {
    //   // console.log(e.target.tagName);
    //   if (e.target.tagName === 'LI') {
    //     $('.absolute-menu').hide();
    //   }
    // });
    // $($('#markBrat')[0].contentWindow).on('mousedown', document, () => {
    //   $('.absolute-menu').hide();
    // });
  },
  destroyed() {
    $(document).off('click')
    // $($("#markBrat")[0].contentWindow).off("mousedown");
    window.addRange = null
    window.onEntitySelection = null
    window.onHightLightEntity = null
    window.onRelationSelection = null
    window.onNewRelation = null
    window.unHighLight = null
  },
  methods: {
    ...mapMutations({
      setCorpusConfigAttr: 'SET_CORPUSCONFIGATTR',
      setSentenceRelations: 'SET_SENTENCERELATIONS'
    }),
    initData() {
      this.type = this.$route.params.type
    },
    fetchData(params, loadType = false) {
      if (loadType) {
        this.noDataShow = false
        setTimeout(() => {
          const res = demoResult
          this.$emit('set-nlp-data', res.data) // 把获取的值传到外面
          this.loading = false

          if (res.code === 200) {
            const data = res.data
            if (data) {
              this.$emit('success-data')
              this.setBratData(data, true)
            } else {
              this.$message.warning('数据为空')
              // this.$emit('setNext', null);
              // this.$emit('setPre', null);
            }
          }
          setTimeout(() => {
            globalBus.$emit('set-analysis-loading-false')
          }, 200)
        }, 500)
      } else {
        this.loading = true
        //      GET /tagged/label/{fileId}
        // const url = `tagged/label/${this.id}`
        GetBratForTest(params)
          .then(res => {
            this.$emit('set-nlp-data', res.data) // 把获取的值传到外面
            this.loading = false
            this.noDataShow = false
            if (res.code === 200) {
              const data = res.data
              if (data) {
                this.$emit('success-data')
                this.setBratData(data, true)
              } else {
                this.$message.warning('数据为空')
                // this.$emit('setNext', null);
                // this.$emit('setPre', null);
              }
            }
            globalBus.$emit('set-analysis-loading-false')
          })
          .catch(res => {
            // if (res.code === 800008) {
            //   this.$refs.dialogShowInfoRef.openDialog('nlp')
            //   this.loading = false
            //   this.noDataShow = true
            // }
            globalBus.$emit('set-analysis-loading-false')
            this.loading = false
          })
      }
    },
    setBratDataAgain(data) {
      this.setBratData(data, true)
    },
    setBratData(data, judge) {
      // 前端模拟生成关系线条颜色
      const config = this.corpusConfig.relationLineCongfig || {}

      for (let n = 0; n < data.typeDefXml.relation_types.length; n++) {
        const randomColor_16 =
          '#' +
          Math.random()
            .toString(16)
            .slice(-6)
        const relationType = data.typeDefXml.relation_types[n].type
        if (!config[relationType]) {
          config[relationType] = randomColor_16
        }
      }
      // this.setCorpusConfigAttr({
      //   attr: 'relationLineCongfig',
      //   value: config
      // })
      window.localStorage.setItem('relationLineCongfig', JSON.stringify(config))

      this.analysisResult(data)

      const collData = {
        entity_types: this.entity_types,
        entity_attribute_types: [],
        relation_types: [],
        event_types: []
      }
      const docData = {
        text: this.text,
        entities: this.entities,
        attributes: [],
        relations: this.relations
      }
      // datasource的文本不要显示实体右侧的菜单
      const drawDelCircle = false
      var iframe = document.getElementById('markBrat')
      if (iframe) {
        console.log(
          '$("#mainfrm")[0].contentWindow',
          $('#markBrat')[0].contentWindow.Window.readyToEmbed
        )
        iframe.contentWindow.location.reload(true)
        iframe.onload = function() {
          $('#markBrat')[0].contentWindow.readyToEmbed(
            collData,
            docData,
            drawDelCircle
          )
        }
      }
    },
    analysisResult(originData) {
      // 加载brat显示数据
      const bratFile = JSON.parse(originData.bratFile)

      const entities = bratFile.entities

      const bratSem = JSON.parse(originData.bratSem)
      const tokenBratFile = []
      const tokenBratSem = []
      // 原先的
      // const sentBratFile = JSON.parse(originData.sentBratFile)
      // const sentBratSem = JSON.parse(originData.sentBratSem)
      const sentBratFile = JSON.parse(originData.bratFile)
      const sentBratSem = JSON.parse(originData.bratSem)
      this.text = bratFile.text
      this.entities = bratFile.entities
      // console.log('bratFile.entities:');
      // console.log(bratFile.entities);

      this.relations = bratFile.relations
      this.entity_types = bratSem.entity_types
      this.relation_types = bratSem.relation_types

      let bgColor = ''
      if (sentBratSem.entity_types.length) {
        bgColor = sentBratSem.entity_types[0].bgColor
      }
      // this.setSentenceRelations({
      //   relations: sentBratFile.relations,
      //   bgColor: bgColor
      // })
      this.sentence = {
        sentBratFile: sentBratFile,
        sentBratSem: sentBratSem
      }
      this.token = {
        tokenBratFile: tokenBratFile,
        tokenBratSem: tokenBratSem
      }
      this.typedef_entity_types = originData.typeDefXml.entity_types
      this.typedef_relation_types = originData.typeDefXml.relation_types

      const distinctEntities = _.chain(this.entities)
        .map(item => {
          return item[1]
        })
        .uniq()
        .value()
      const currentEntityTypes = _.chain(this.entity_types)
        .map(item => {
          if (_.indexOf(distinctEntities, item.type) != -1) {
            item.selected = true
            // 将entities push进去
            item.items = []
            _.chain(this.entities)
              .map(item1 => {
                if (item1[1] == item.type) {
                  item1.push(true)
                  item.items.push(item1)
                }
              })
              .value()
            return item
          }
        })
        .compact()
        .value()
      // console.log("this.relations:");
      // console.log(this.relations);

      const distinctRelationsName = _.chain(this.relations)
        .map(item => {
          return item[1]
        })
        .uniq()
        .value()
      const distinctRelations = []
      _.map(distinctRelationsName, item => {
        distinctRelations.push({ type: item })
      })
      const currentRelationTypes = _.chain(distinctRelations)
        .map(item => {
          item.selected = true
          // 将entities push进去
          item.items = []
          _.chain(this.relations)
            .map(item1 => {
              if (item1[1] == item.type) {
                item1.push(true)
                item.items.push(item1)
              }
            })
            .value()
          return item
        })
        .compact()
        .value()
      // this.setCorpusConfigAttr({
      //   attr: '_entity_types',
      //   value: currentEntityTypes
      // })

      // this.setCorpusConfigAttr({
      //   attr: '_relation_types',
      //   value: currentRelationTypes
      // })

      // this.setCorpusConfigAttr({ attr: '_entities', value: this.entities })
      // this.setCorpusConfigAttr({ attr: '_relations', value: this.relations })
      // this.setCorpusConfigAttr({ attr: '_sentence', value: this.sentence })
      // this.setCorpusConfigAttr({ attr: '_token', value: this.token })
    },
    changeModeType(type) {
      this.showType = type // xmi,ori
    },
    preLabeling() {
      this.loading = true
      // console.log('子组件 执行预标注:');
      this.$http.get(`task/prelabel/${this.$route.params.id}`, {}, res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          // this.fetchData()
          // window.readyToEmbed()
          // this.router.go(0)
        } else {
          this.commonUtil.showAlert(res.msg)
        }
        this.loading = false
      })
    },

    // 高亮某实体
    onHightLightEntity(id, mouseX, mouseY) {
      // console.log("onHightLightEntity", id, mouseX, mouseY);
      this._highLightTimeout = setTimeout(() => {
        clearTimeout(this._highLightTimeout)
        this._highLightTimeout = null
        // 获取显示的具体项目
        this.highLightDetail.ids = ''
        _.chain(this.entities)
          .map(item => {
            if (item[0] == id) {
              this.highLightDetail.ids = id
              this.highLightDetail.label = item[1]
              this.highLightDetail.text = item[3]
              this.highLightDetail.assertion = item[4]
              this.highLightDetail.umlsCui = item[5]
              this.highLightDetail.umlsCuiDesc = item[6]
            }
          })
          .value()
        if (this.highLightDetail.ids == '') {
          const tokenEntities = this.token.tokenBratFile.entities
          _.chain(tokenEntities)
            .map(item => {
              if (item[0] == id) {
                this.highLightDetail.ids = id
                this.highLightDetail.label = item[1]
                this.highLightDetail.text = item[3]
                this.highLightDetail.assertion = ''
                this.highLightDetail.umlsCui = ''
                this.highLightDetail.umlsCuiDesc = ''
              }
            })
            .value()
        }
        if (this.highLightDetail.ids == '') {
          const sentenceEntities = this.sentence.sentBratFile.entities
          _.chain(sentenceEntities)
            .map(item => {
              if (item[0] == id) {
                this.highLightDetail.ids = id
                this.highLightDetail.label = item[1]
                this.highLightDetail.text = item[3]
                this.highLightDetail.assertion = ''
                this.highLightDetail.umlsCui = ''
                this.highLightDetail.umlsCuiDesc = ''
              }
            })
            .value()
        }
        $('.highlight-content')
          .css('left', mouseX + 'px')
          .css('top', mouseY + 'px')
          .show()
      }, 1000)
    },
    // 高亮关系
    onHightLightRelation(id, mouseX, mouseY) {
      // console.log("onHightLightRelation", id, mouseX, mouseY);
      this._highLightTimeout = setTimeout(() => {
        clearTimeout(this._highLightTimeout)
        this._highLightTimeout = null
        // 获取显示的具体项目
        this.highLightDetail.ids = ''
        _.chain(this.relations)
          .map(item => {
            if (item[0] == id) {
              this.highLightDetail.ids = id
              this.highLightDetail.label = item[1]
              this.highLightDetail.text = item[3]
              // console.log(item);
            }
          })
          .value()
        if (this.highLightDetail.ids == '') {
          const sentenceRelations = this.sentence.sentBratFile.relations
          _.chain(sentenceRelations)
            .map(item => {
              if (item[0] == id) {
                this.highLightDetail.ids = id
                this.highLightDetail.label = item[1]
                this.highLightDetail.text = item[3]
              }
            })
            .value()
        }
        $('.highlight-content')
          .css('left', mouseX + 'px')
          .css('top', mouseY + 'px')
          .show()
      }, 1000)
    },
    // 取消高亮
    unHighLight(mouseX, mouseY) {
      if (this._highLightTimeout) {
        clearTimeout(this._highLightTimeout)
        this._highLightTimeout = null
      }
      $('.highlight-content').hide()
    },
    // 选择文本范围
    addRange(action, mouseX, mouseY, start, end, spanText) {
      // console.log(action, mouseX, mouseY, start, end, spanText);
      // console.log('start, end:');
      // console.log(start, end);

      if (this._highLightTimeout) {
        clearTimeout(this._highLightTimeout)
        this._highLightTimeout = null
      }

      this.entitySelection = {
        start: start,
        end: end,
        spanText: spanText
      }
      this.typedef_entity_types_filter = this.typedef_entity_types
      this.typedef_entity_types_filter_copy = [...this.typedef_entity_types]
      this.entitySearchKeyWord = ''
      // 展开选择性
      switch (action) {
        case 'suggestSpanTypes':
          // 判断是否有可显示的，若无，则不显示
          if (this.typedef_entity_types_filter.length > 0) {
            $('.entity-lib')
              .css('left', mouseX + 'px')
              .css('top', mouseY + 'px')
              .show()
          }
          break
      }
    },
    // 筛选过滤实体
    entitySearchKeyWordChange(e) {
      this.typedef_entity_types_filter_copy = this.typedef_entity_types_filter.filter(
        v => v.labelsStr.indexOf(this.entitySearchKeyWord) != -1
      )
    },
    relationSearchKeyWordChange(e) {
      this.typedef_relation_types_filter_copy = this.typedef_relation_types_filter.filter(
        v => v.type.indexOf(this.relationSearchKeyWord) != -1
      )
    },
    // 添加实体(划词 标实体)
    selectEntity(e) {},
    // 单击实体，出现 菜单（现在其实是单击右侧的小菜单【灰色圆形背景中间三条横线】）
    onEntitySelection(id, mouseX, mouseY) {},
    // 确认替换所有task中的实体
    confirmReplaceEntityInAllTasks() {},
    // 确认替换单个实体
    confirmReplaceEntity() {
      console.log(this.entityReplaceRange)
      let relacementRange
      if (this.entityReplaceRange == 'only clicked') {
        relacementRange = 'one'
      } else if (this.entityReplaceRange == 'in all of your tasks') {
        relacementRange = 'all'
      }
      if (relacementRange === 'all') {
        return this.$message.error('批量替换尚未实现')
      }
      // console.log(this.candidateEntityLabelsStr);
      // GET /task/update/entity/{fileId}/{entityId}/{newSem}
      this.loading = true
      this.$http.get(
        `task/update/entity/${this.id}/${this.entitySelectionId}/${
          this.candidateEntityLabelsStr
        }`,
        {},
        res => {
          this.loading = false
          if (res.success) {
            this.replaceEntityModalVisible = false
            this.$message.success(res.msg)
            this.analysisResult(res.data)
            this.updateBrat()
          } else {
            this.$message.error(res.msg)
          }
        }
      )
    },
    // 取消已标注实体
    disannotateTheEntity() {},

    // 取消全篇已标注的特定实体
    disannotateEntityInFile() {},
    // 取消全篇的某类实体标注
    disannotateEntityByCate() {},
    // 新建关系
    onNewRelation(from, to, mouseX, mouseY) {},
    onRelationStartSelected(startEntityId) {},
    onRelationModalClose() {},
    // 选择关系,记录id为删除做准备
    onRelationSelection(id, mouseX, mouseY) {},
    // 添加关系
    selectRelation(e, dataType = null) {},
    // 删除关系
    deleteRelation(e) {},
    // 更新
    updateBrat() {
      let entityTypes = this.corpusConfig._entity_types
      const entities = this.corpusConfig._entities
      const relations = this.corpusConfig._relations
      const _typedef_relation_types = this.corpusConfig._typedef_relation_types
      const token = this.corpusConfig._token
      const sentence = this.corpusConfig._sentence
      if ($.isEmptyObject(this.token)) {
        return
      }
      const entity_types0 = _.get(token, 'tokenBratSem.entity_types[0]')
      const tokenEntityType = entity_types0 || []
      const tokenEntities = token.tokenBratFile.entities

      const sentenceEntityTypes = sentence.sentBratSem.entity_types
      const sentenceRelations = sentence.sentBratFile.relations
      const sentenceEntities = sentence.sentBratFile.entities
      let entitiesToBrat = []
      let relationsToBrat = []
      const tokensToBrat = []
      const sentenceToBrat = []
      // 将sentence中的start和end对应的entity加入到entityTypes中
      entityTypes = entityTypes.concat(sentenceEntityTypes)
      // 将token中的entity加入到entityTypes中
      entityTypes = entityTypes.concat(tokenEntityType)
      // 判断entities是否已选择
      _.chain(entities)
        .map(item => {
          if (item[7] == true) {
            entitiesToBrat.push(item)
          }
        })
        .value()
      // 判断relations是否已选择
      _.chain(relations)
        .map(item => {
          if (item[4] == true) {
            relationsToBrat.push(item)
          }
        })
        .value()
      // 判断token是否已选择
      _.chain(tokenEntities)
        .map(item => {
          if (item[4] == true) {
            tokensToBrat.push(item)
          }
        })
        .value()
      // 判断sentence是否已选择
      _.chain(sentenceRelations)
        .map(item => {
          if (item[4] == true) {
            sentenceToBrat.push(item)
            const from = item[2][0][1]
            const to = item[2][1][1]
            _.chain(sentenceEntities)
              .map(item1 => {
                if (item1[0] == from || item1[0] == to) {
                  entitiesToBrat.push(item1)
                }
              })
              .value()
          }
        })
        .value()
      entitiesToBrat = entitiesToBrat.concat(tokensToBrat)
      relationsToBrat = relationsToBrat.concat(sentenceToBrat)

      let collData = {
        entity_types: entityTypes,
        entity_attribute_types: [],
        relation_types: [],
        event_types: []
      }
      let docData = {
        text: this.text,
        entities: entitiesToBrat,
        attributes: [],
        relations: relationsToBrat
      }
      collData = JSON.parse(JSON.stringify(collData))
      docData = JSON.parse(JSON.stringify(docData))
      const xpos = $('#markBrat')[0]
        ? $('#markBrat')[0].contentWindow.document.documentElement.scrollLeft
        : ''
      const ypos = $('#markBrat')[0]
        ? $('#markBrat')[0].contentWindow.document.documentElement.scrollTop
        : ''
      if ($('#markBrat')[0]) {
        $('#markBrat')[0].contentWindow.updateEmbed(collData, docData)
      }
      setTimeout(() => {
        $('#markBrat')[0].contentWindow.scrollTo(xpos, ypos)
      }, 50)
    },

    showIssue(e, type) {
      let id = ''
      if (type == 'entity') {
        id = this.entitySelectionId
      } else if (type == 'relation') {
        id = this.relationSeletionId
      }
      console.log(type, id)
      this.Bus.$emit('barVisible', {
        show: true,
        tabName: 'Issue',
        issueType: type,
        targetId: id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.root-show-mark {
  position: relative;
}
.root-show-mark,
.root-show-mark .xmi-container {
  width: 100%;
  height: 100%;
}
.root-show-mark iframe {
  width: 100%;
  height: 100%;
  border: 0;
  // overflow: auto;
}

.root-show-mark .absolute-menu {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 36px;
  max-height: 200px;
  overflow: auto;
  display: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  // box-shadow: 0 0 2px 1px #ccc;
  box-shadow: 2px 5px 6px 2px #ddd;

  background-color: #fff;
}

.root-show-mark .absolute-menu li {
  padding: 0 10px;
  height: 26px;
  margin: 0;
  line-height: 26px;
  cursor: pointer;
  white-space: nowrap;
}
.root-show-mark .absolute-menu li:hover {
  background: #ccc;
  color: #fff;
}

.highlight-content {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #fff;
}
.highlight-content > div {
  margin: 5px 10px;
}
.highlight-content > div > label {
  width: 60px;
  text-align: justify;
  display: inline-block;
  text-align-last: justify;
}
.highlight-content > div > span {
  margin: 0 4px;
}
.highlight-content > div > span.value {
  margin: 0;
  font-size: 13px;
}

.selection-lib {
  padding: 5px;
  .entitySearch {
    width: 120px;
  }
  ul li {
    padding: 3px 0 3px 3px;
    cursor: pointer;
  }
  ul li:hover {
    background-color: #1989fa22;
    color: #1989fa;
  }
}
.btns {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.6;
  }
  .l {
    background-color: #df456b;
  }
  .r {
    background-color: #1c9261;
  }
  .l:hover {
    background-color: #b33857;
  }
  .r:hover {
    background-color: #146644;
  }
}
.btns:hover > div {
  opacity: 1;
}
</style>
