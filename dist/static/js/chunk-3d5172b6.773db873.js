(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d5172b6"],{2650:function(t,e,i){"use strict";i("a838")},"390b":function(t,e,i){},5609:function(t,e,i){},"6af6":function(t,e,i){"use strict";i("390b")},"742b":function(t,e,i){"use strict";i("c25b")},"943c":function(t,e,i){"use strict";i("5609")},a3bc:function(t,e,i){"use strict";i("edfc")},a838:function(t,e,i){},c25b:function(t,e,i){},cde7:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"vital-container realtime-top-content"},[i("nav",[i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:8}},[i("select-pipeline",{attrs:{size:"small"},on:{"get-complete-data":t.getCompleteData,"get-complete-options":t.getCompleteOptions},model:{value:t.formData.pipeline,callback:function(e){t.$set(t.formData,"pipeline",e)},expression:"formData.pipeline"}})],1),t._v(" "),i("el-col",{attrs:{span:16,align:"right"}},[i("el-button",{attrs:{size:"small"},on:{click:t.clearData}},[t._v("Clear")]),t._v(" "),i("el-button",{attrs:{loading:t.analysisLoading,size:"small",type:"primary",icon:"el-icon-data-line"},on:{click:function(e){return t.handleAnalysis(!1)}}},[t._v("Analyze")])],1)],1)],1),t._v(" "),i("section",{staticClass:"mt-15"},[i("el-input",{attrs:{type:"textarea","show-word-limit":"",maxlength:"4096",rows:12,placeholder:"Please enter"},model:{value:t.formData.text,callback:function(e){t.$set(t.formData,"text",e)},expression:"formData.text"}})],1),t._v(" "),i("analysis-result",{ref:"analysisResultRef"})],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"vital-container cb bb-1"},[i("strong",{staticClass:"fl f16"},[t._v("Real-Time analysis")])])}],s=(i("74df"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"mt-20"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("h3",[t._v("Analyze result")])]),t._v(" "),i("el-col",{attrs:{span:12,align:"right"}},[i("el-button",{staticClass:"mt-5",attrs:{type:"text",disabled:t.generalDisabled},on:{click:t.openSetting}},[t._v("Display Filter"),i("i",{staticClass:"el-icon-s-tools el-icon--right f18"})])],1)],1)],1),t._v(" "),i("section",{staticClass:"analysis-result-content mt-15"},[i("show-mark",{ref:"showMarkRef",on:{"set-nlp-data":t.setNlpData,"success-data":function(e){t.generalDisabled=!1}}})],1),t._v(" "),i("h3",{staticClass:"mt-40"},[t._v("Entities & Relations")]),t._v(" "),i("entity-relation",{ref:"entityRelationref"}),t._v(" "),i("el-dialog",{attrs:{title:"Select visable entities",center:"",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"mt-20 mb-30"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12,align:"center"}},[i("strong",[t._v("ALL")])]),t._v(" "),i("el-col",{attrs:{span:12,align:"center"}},[i("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:t.handleSelectAll},model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}})],1)],1),t._v(" "),t._l(t.bratData,(function(e,a){return i("el-row",{key:a,staticClass:"mt-25",attrs:{gutter:20}},[i("el-col",{attrs:{span:12,align:"center"}},[t._v("\n          "+t._s(e.type)+"\n        ")]),t._v(" "),i("el-col",{attrs:{span:12,align:"center"}},[i("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:t.handleSingle},model:{value:e.switch,callback:function(i){t.$set(e,"switch",i)},expression:"item.switch"}})],1)],1)})),t._v(" "),0===t.bratData.length?i("no-data"):t._e()],2),t._v(" "),0!==t.bratData.length?i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),i("el-button",{staticClass:"button-shadow",attrs:{size:"small",type:"primary"},on:{click:t.handleSetBrat}},[t._v("Confirm")])],1):t._e()])],1)}),o=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"mb-10 tr"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:10}},[i("el-input",{attrs:{size:"small",clearable:"",placeholder:"Search entities"},model:{value:t.tableSearchData,callback:function(e){t.tableSearchData=e},expression:"tableSearchData"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("el-col",{attrs:{span:4}},[i("el-select",{attrs:{clearable:"",size:"small"},on:{change:t.handleChangeType},model:{value:t.dataType,callback:function(e){t.dataType=e},expression:"dataType"}},[i("el-option",{attrs:{label:"All",value:""}}),t._v(" "),t._l(t.typeOptions,(function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})}))],2)],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("el-pagination",{attrs:{background:"","page-size":t.pageSize,"current-page":t.currentPage,layout:"prev, pager, next, total",total:t.total},on:{"current-change":t.handleCurrentPage}})],1)],1)],1),t._v(" "),i("el-table",{ref:"tableDataRef",staticClass:"relation-entity-table",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pageSize,t.currentPage*t.pageSize),height:"400","row-key":"dataId","tree-props":{children:"children"}}},[i("el-table-column",{attrs:{label:"Entity",width:"320","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"relation-data"},[t._v(t._s(e.row.relationData||""))]),t._v("\n        "+t._s(e.row.dataName)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"Type",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"mr-5 entity-type-round",style:t.setColor(e.row.semanticTag)}),t._v(t._s(e.row.semanticTag)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"address",label:"CUI"},scopedSlots:t._u([{key:"header",fn:function(e){return[i("span",{staticClass:"fl"},[t._v(" CUI")]),t._v(" "),i("a",{staticClass:"ml-5",attrs:{href:"https://www.nlm.nih.gov/research/umls/new_users/online_learning/Meta_005.html",target:"_blank"}},[i("i",{staticClass:"mt-3 ml-10 el-icon-info color-main f18 fl"})])]}},{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.cui)+"\n      ")]}}])})],1)],1)},r=[],c=i("ef87"),h=i("5c45"),u=h.v1,p={name:"",components:{},props:{},data:function(){return{bratData:[],relationsArr:[],bratFile:[],entitiesObj:{},bratText:"",tableData:[],copyTableData:[],pageSize:10,currentPage:1,total:0,tableSearchData:"",dataType:"",typeOptions:[]}},computed:{tableDataSlice:function(){var t=this,e=this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);return this.typeOptions=Object(c["e"])(e.map((function(t){return t.semanticTag}))),e.filter((function(e){return!t.dataType||e.semanticTag===t.dataType}))}},watch:{tableSearchData:function(t){var e=this;this.currentPage=1;var i=this.copyTableData.filter((function(t){return!e.tableSearchData||t.dataName.toLowerCase().includes(e.tableSearchData.toLowerCase())})).filter((function(t){return!e.dataType||t.semanticTag===e.dataType}));this.tableData=i,this.total=i.length}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleChangeType:function(){var t=this;this.currentPage=1;var e=this.copyTableData.filter((function(e){return!t.dataType||e.semanticTag===t.dataType})).filter((function(e){return!t.tableSearchData||e.dataName.toLowerCase().includes(t.tableSearchData.toLowerCase())}));this.tableData=e,this.total=e.length},handleCurrentPage:function(t){this.currentPage=t,this.$refs.tableDataRef.bodyWrapper.scrollTop=0},setDataEmpty:function(){this.tableData=[]},setData:function(t,e){var i=this;this.total=0,this.currentPage=1,this.tableData=[],this.tableSearchData="",this.dataType="";var a=JSON.parse(t.bratFile),n=JSON.parse(t.bratOut),s=JSON.parse(t.bratSem);if(this.bratText=a.text,e){var o=n.entities;for(var l in o)-1!==e.indexOf(o[l].semanticTag)&&delete o[l]}this.bratSem=s;var r=n.entities,h=n.relations,p=[];for(var f in r)r[f].keyName=f,r[f].dataId=u(),r[f].children=[],p.push(r[f]);var g=Object(c["b"])(p);h.map((function(t){g.map((function(e){t.fromEnt===e.keyName&&r[t.toEnt]&&(r[t.toEnt].dataId=u(),r[t.toEnt].relationData=t.semanticTag,e.children.push(r[t.toEnt]))}))})),g.map((function(t){t.dataName=i.findText(i.bratText,t.begin,t.end),t.children.length>0&&t.children.map((function(t){t.dataName=i.findText(i.bratText,t.begin,t.end)}))})),this.total=g.length,this.typeOptions=Object(c["e"])(g.map((function(t){return t.semanticTag}))),this.tableData=g,this.copyTableData=Object(c["b"])(g),this.$refs.tableDataRef.doLayout(),this.currentPage=1},setColor:function(t){var e={},i=this.bratSem.entity_types;return i.map((function(t){e[t.type]=t})),"background-color:".concat(e[t].bgColor)},findText:function(t,e,i){return t.substr(e,i-e)}}},f=p,g=(i("943c"),i("cba8")),d=Object(g["a"])(f,l,r,!1,null,null,null),m=d.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"root-show-mark"},[t.noDataShow?i("no-data",{staticClass:"mt-70"}):t._e(),t._v(" "),t.noDataShow?t._e():i("div",{staticClass:"xmi-container"},[i("iframe",{attrs:{id:"markBrat","data-mode":"mark",width:"1300",height:"1600",name:"markBrat",src:"/static/main_shen.htm"}}),t._v(" "),t.posiContent?i("div",{ref:"posiRef",staticClass:"posi-content",style:"top:"+(t.positionY-350)+"px;left:"+(t.positionX-180)+"px;"},[i("i",{staticClass:"el-icon-close",staticStyle:{float:"right",cursor:"pointer"},on:{click:t.closePosi}}),t._v(" "),i("div",[i("span",[t._v("startPos:"+t._s(t.startPos))]),t._v(" "),i("el-divider"),t._v(" "),i("span",[t._v("endPos:"+t._s(t.endPos))]),t._v(" "),i("el-divider"),t._v(" "),i("span",[t._v("semanticTag:"+t._s(t.semanticTag))]),t._v(" "),i("el-divider"),t._v(" "),i("span",[t._v("semanticText:"+t._s(t.semanticText))]),t._v(" "),i("el-divider")],1)]):t._e()]),t._v(" "),i("dialog-show-info",{ref:"dialogShowInfoRef"})],1)},b=[],_=i("d352"),v=_["a"],D=(i("742b"),Object(g["a"])(v,y,b,!1,null,"7d449804",null)),w=D.exports,S={name:"",components:{ShowMark:w,entityRelation:m},props:{},filter:{},data:function(){return{dialogVisible:!1,selectAll:!0,value:!1,generalDisabled:!0,bratSemData:[],bratFileData:[],originalBratData:{},originalBratDataAgain:{},bratData:[],tableData:[{name:"Disease (12)"},{name:"Determination (12)"}]}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{handleSelectAll:function(t){this.bratData.map((function(e){e.switch=t}))},handleSingle:function(t){var e=this.bratData.map((function(t){return t.switch})),i=e.indexOf(!1);this.selectAll=-1===i},openFile:function(t){var e=this,i=t.target,a=new FileReader;a.onload=function(){if(a.result){var t=JSON.parse(a.result);e.$refs.showMarkRef.setBratDataAgain(t),e.$refs.testInput.value=""}},a.readAsText(i.files[0])},setNlpData:function(t){localStorage.bratData=JSON.stringify(t),this.originalBratData=Object(c["b"])(t),this.originalBratDataAgain=Object(c["b"])(t);var e=[];this.bratSemData=JSON.parse(t.bratSem),this.bratSemData.entity_types.map((function(t){e.push({type:t.type,switch:!0})})),this.bratData=e,this.$refs.entityRelationref.setData(t)},handleSetBrat:function(){var t=this;this.bratSemData=JSON.parse(this.originalBratDataAgain.bratSem),this.bratFileData=JSON.parse(this.originalBratDataAgain.bratFile),JSON.parse(this.originalBratData.bratSem).entity_types.map((function(e,i){t.bratData[i].switch||t.bratSemData.entity_types.splice(i,1)}));var e=[];this.bratData.map((function(t){t.switch||e.push(t.type)})),this.bratFileData.entities.map((function(i,a){-1!==e.indexOf(i[1])&&delete t.bratFileData.entities[a]}));var i=[];this.bratFileData.entities.map((function(t){t&&i.push(t)})),this.bratFileData.entities=i,this.originalBratData.bratFile=JSON.stringify(this.bratFileData),this.$refs.showMarkRef.setBratDataAgain(this.originalBratData),this.$refs.entityRelationref.setData(this.originalBratData,e),this.dialogVisible=!1},getResult:function(t,e){this.generalDisabled=!0,this.$refs.entityRelationref.setDataEmpty(),this.$refs.showMarkRef.fetchData(t,e)},switchClick:function(){},openSetting:function(){this.dialogVisible=!0}}},T=S,C=(i("6af6"),Object(g["a"])(T,s,o,!1,null,"0fa6ab28",null)),L=C.exports,O=i("479d"),x=i("ab12"),k={name:"",components:{analysisResult:L},props:{},filter:{},data:function(){return{analysisTypeOptions:[],pipelineLoading:!1,analysisLoading:!1,selectPipeline:{},formData:{pipeline:"",text:x["b"]}}},computed:{},watch:{},created:function(){},mounted:function(){var t=this;this.handleAnalysis(!0),O["a"].$on("set-analysis-loading-false",(function(){t.analysisLoading=!1}))},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{getCompleteOptions:function(t){var e=t.map((function(t){return t.version})).flat(1/0);this.formData.pipeline=e[0].params,this.selectPipeline=e[0]},getCompleteData:function(t){this.selectPipeline=t},handleAnalysis:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.formData.text,i=this.selectPipeline.params;if(!i&&!t)return this.$message.warning("Please select pipeline."),!1;if(!e)return this.$message.warning("Please enter content."),!1;var a={pipeline:i,text:e,frontFlag:!0};this.analysisLoading=!0,this.$refs.analysisResultRef.getResult(a,t)},clearData:function(){this.formData.text=""}}},R=k,B=(i("2650"),i("a3bc"),Object(g["a"])(R,a,n,!1,null,"1d2dca9e",null));e["default"]=B.exports},d352:function(t,e,i){"use strict";(function(t){var a=i("52c1"),n=i("479d"),s=i("ab12"),o=i("f6a1"),l=i("2117"),r=i("7c98"),c=i.n(r);function h(t){return g(t)||f(t)||p(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function g(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"DatasourceFileShowMark",components:{DialogShowInfo:l["a"]},props:["id"],data:function(){return{startPos:"",endPos:"",semanticTag:"",semanticText:"",semanticCui:"",semanticList:[],positionX:null,positionY:null,posiContent:!1,type:"",showType:"xmi",loading:!1,noDataShow:!0,hasFinalized:1,entities:[],relations:[],entity_types:[],relation_types:[],sentence:null,token:null,typedef_entity_types:[],typedef_relation_types:[],_highLightTimeout:null,highLightDetail:{ids:0,label:"",text:"",assertion:"",umlsCui:"",umlsCuiDesc:""},typedef_entity_types_filter:[],typedef_entity_types_filter_copy:[],entitySearchKeyWord:"",relationSearchKeyWord:"",typedef_relation_types_filter:[],typedef_relation_types_filter_copy:[],entitySelection:"",entitySelectionId:null,relationSeletionId:null,data:null,relationLineCongfig:{},relationStartEntityId:null,relationEnd:null,waitingRelationEnd:!1,messageInstance:null,replaceEntityModalVisible:!1,entityReplaceRange:"only clicked",candidateEntityLabelsStr:"",disannotatePopoverVisible:!1,corpusConfig:{_entities:[],_relations:[],_entity_types:[],_relation_types:[],_sentence:{sentBratFile:{entities:[],relations:[]},sentBratSem:{}},_token:{},_typedef_entity_types:[],_typedef_relation_types:[],service:{},relationLineCongfig:{}}}},computed:y(y({},Object(a["d"])({allEntities:function(t){return t.projectEntities}})),Object(a["b"])(["sentenceRelations"])),watch:{corpusConfig:{handler:function(t){this.updateBrat()},deep:!0},waitingRelationEnd:function(t){t?this.messageInstance=this.$message({showClose:!1,message:"Relation-start selected, waiting for Relation-end...",type:"success",duration:0}):this.messageInstance.close()}},mounted:function(){this.messageInstance&&this.messageInstance.close(),this.waitingRelationEnd=!1,this.initData();window.onHightLightEntity=this.onHightLightEntity,window.onHightLightRelation=this.onHightLightRelation,window.unHighLight=this.unHighLight,window.getDatas=this.getDatas},destroyed:function(){t(document).off("click"),window.addRange=null,window.onEntitySelection=null,window.onHightLightEntity=null,window.onRelationSelection=null,window.onNewRelation=null,window.unHighLight=null},methods:y(y({closePosi:function(){this.posiContent=!1},getDatas:function(t,e,i){this.posiContent=!0;var a=JSON.parse(this.semanticList.bratOut);this.startPos=a.entities[t].begin,this.endPos=a.entities[t].end,this.semanticTag=a.entities[t].semanticTag,this.semanticText=a.entities[t].cui,this.positionX=e,this.positionY=i}},Object(a["c"])({setCorpusConfigAttr:"SET_CORPUSCONFIGATTR",setSentenceRelations:"SET_SENTENCERELATIONS"})),{},{initData:function(){this.type=this.$route.params.type},fetchData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i?(this.noDataShow=!1,setTimeout((function(){var t=s["a"];if(e.$emit("set-nlp-data",t.data),e.loading=!1,200===t.code){e.semanticList=t.data;var i=t.data;i?(e.$emit("success-data"),e.setBratData(i,!0)):e.$message.warning("数据为空")}setTimeout((function(){n["a"].$emit("set-analysis-loading-false")}),200)}),500)):(this.loading=!0,Object(o["c"])(t).then((function(t){if(e.$emit("set-nlp-data",t.data),e.loading=!1,e.noDataShow=!1,200===t.code){var i=t.data;i?(e.$emit("success-data"),e.setBratData(i,!0)):e.$message.warning("数据为空")}n["a"].$emit("set-analysis-loading-false")})).catch((function(t){n["a"].$emit("set-analysis-loading-false"),e.loading=!1})))},setBratDataAgain:function(t){this.setBratData(t,!0)},setBratData:function(e,i){for(var a=this.corpusConfig.relationLineCongfig||{},n=0;n<e.typeDefXml.relation_types.length;n++){var s="#"+Math.random().toString(16).slice(-6),o=e.typeDefXml.relation_types[n].type;a[o]||(a[o]=s)}window.localStorage.setItem("relationLineCongfig",JSON.stringify(a)),this.analysisResult(e);var l={entity_types:this.entity_types,entity_attribute_types:[],relation_types:[],event_types:[]},r={text:this.text,entities:this.entities,attributes:[],relations:this.relations},c=!1,h=document.getElementById("markBrat");h&&(h.contentWindow.location.reload(!0),h.onload=function(){t("#markBrat")[0].contentWindow.readyToEmbed(l,r,c)})},analysisResult:function(t){var e=this,i=JSON.parse(t.bratFile),a=(i.entities,JSON.parse(t.bratSem)),n=[],s=[],o=JSON.parse(t.bratFile),l=JSON.parse(t.bratSem);this.text=i.text,this.entities=i.entities,this.relations=i.relations,this.entity_types=a.entity_types,this.relation_types=a.relation_types;l.entity_types.length&&l.entity_types[0].bgColor,this.sentence={sentBratFile:o,sentBratSem:l},this.token={tokenBratFile:n,tokenBratSem:s},this.typedef_entity_types=t.typeDefXml.entity_types,this.typedef_relation_types=t.typeDefXml.relation_types;var r=c.a.chain(this.entities).map((function(t){return t[1]})).uniq().value(),h=(c.a.chain(this.entity_types).map((function(t){if(-1!=c.a.indexOf(r,t.type))return t.selected=!0,t.items=[],c.a.chain(e.entities).map((function(e){e[1]==t.type&&(e.push(!0),t.items.push(e))})).value(),t})).compact().value(),c.a.chain(this.relations).map((function(t){return t[1]})).uniq().value()),u=[];c.a.map(h,(function(t){u.push({type:t})}));c.a.chain(u).map((function(t){return t.selected=!0,t.items=[],c.a.chain(e.relations).map((function(e){e[1]==t.type&&(e.push(!0),t.items.push(e))})).value(),t})).compact().value()},changeModeType:function(t){this.showType=t},preLabeling:function(){var t=this;this.loading=!0,this.$http.get("task/prelabel/".concat(this.$route.params.id),{},(function(e){t.loading=!1,e.success?t.$message.success(e.msg):t.commonUtil.showAlert(e.msg),t.loading=!1}))},onHightLightEntity:function(e,i,a){var n=this;this._highLightTimeout=setTimeout((function(){if(clearTimeout(n._highLightTimeout),n._highLightTimeout=null,n.highLightDetail.ids="",c.a.chain(n.entities).map((function(t){t[0]==e&&(n.highLightDetail.ids=e,n.highLightDetail.label=t[1],n.highLightDetail.text=t[3],n.highLightDetail.assertion=t[4],n.highLightDetail.umlsCui=t[5],n.highLightDetail.umlsCuiDesc=t[6])})).value(),""==n.highLightDetail.ids){var s=n.token.tokenBratFile.entities;c.a.chain(s).map((function(t){t[0]==e&&(n.highLightDetail.ids=e,n.highLightDetail.label=t[1],n.highLightDetail.text=t[3],n.highLightDetail.assertion="",n.highLightDetail.umlsCui="",n.highLightDetail.umlsCuiDesc="")})).value()}if(""==n.highLightDetail.ids){var o=n.sentence.sentBratFile.entities;c.a.chain(o).map((function(t){t[0]==e&&(n.highLightDetail.ids=e,n.highLightDetail.label=t[1],n.highLightDetail.text=t[3],n.highLightDetail.assertion="",n.highLightDetail.umlsCui="",n.highLightDetail.umlsCuiDesc="")})).value()}t(".highlight-content").css("left",i+"px").css("top",a+"px").show()}),1e3)},onHightLightRelation:function(e,i,a){var n=this;this._highLightTimeout=setTimeout((function(){if(clearTimeout(n._highLightTimeout),n._highLightTimeout=null,n.highLightDetail.ids="",c.a.chain(n.relations).map((function(t){t[0]==e&&(n.highLightDetail.ids=e,n.highLightDetail.label=t[1],n.highLightDetail.text=t[3])})).value(),""==n.highLightDetail.ids){var s=n.sentence.sentBratFile.relations;c.a.chain(s).map((function(t){t[0]==e&&(n.highLightDetail.ids=e,n.highLightDetail.label=t[1],n.highLightDetail.text=t[3])})).value()}t(".highlight-content").css("left",i+"px").css("top",a+"px").show()}),1e3)},unHighLight:function(e,i){this._highLightTimeout&&(clearTimeout(this._highLightTimeout),this._highLightTimeout=null),t(".highlight-content").hide()},addRange:function(e,i,a,n,s,o){switch(this._highLightTimeout&&(clearTimeout(this._highLightTimeout),this._highLightTimeout=null),this.entitySelection={start:n,end:s,spanText:o},this.typedef_entity_types_filter=this.typedef_entity_types,this.typedef_entity_types_filter_copy=h(this.typedef_entity_types),this.entitySearchKeyWord="",e){case"suggestSpanTypes":this.typedef_entity_types_filter.length>0&&t(".entity-lib").css("left",i+"px").css("top",a+"px").show();break}},entitySearchKeyWordChange:function(t){var e=this;this.typedef_entity_types_filter_copy=this.typedef_entity_types_filter.filter((function(t){return-1!=t.labelsStr.indexOf(e.entitySearchKeyWord)}))},relationSearchKeyWordChange:function(t){var e=this;this.typedef_relation_types_filter_copy=this.typedef_relation_types_filter.filter((function(t){return-1!=t.type.indexOf(e.relationSearchKeyWord)}))},selectEntity:function(t){},onEntitySelection:function(t,e,i){},confirmReplaceEntityInAllTasks:function(){},confirmReplaceEntity:function(){var t,e=this;if("only clicked"==this.entityReplaceRange?t="one":"in all of your tasks"==this.entityReplaceRange&&(t="all"),"all"===t)return this.$message.error("批量替换尚未实现");this.loading=!0,this.$http.get("task/update/entity/".concat(this.id,"/").concat(this.entitySelectionId,"/").concat(this.candidateEntityLabelsStr),{},(function(t){e.loading=!1,t.success?(e.replaceEntityModalVisible=!1,e.$message.success(t.msg),e.analysisResult(t.data),e.updateBrat()):e.$message.error(t.msg)}))},disannotateTheEntity:function(){},disannotateEntityInFile:function(){},disannotateEntityByCate:function(){},onNewRelation:function(t,e,i,a){},onRelationStartSelected:function(t){},onRelationModalClose:function(){},onRelationSelection:function(t,e,i){},selectRelation:function(t){},deleteRelation:function(t){},updateBrat:function(){var e=this.corpusConfig._entity_types,i=this.corpusConfig._entities,a=this.corpusConfig._relations,n=(this.corpusConfig._typedef_relation_types,this.corpusConfig._token),s=this.corpusConfig._sentence;if(!t.isEmptyObject(this.token)){var o=c.a.get(n,"tokenBratSem.entity_types[0]"),l=o||[],r=n.tokenBratFile.entities,h=s.sentBratSem.entity_types,u=s.sentBratFile.relations,p=s.sentBratFile.entities,f=[],g=[],d=[],m=[];e=e.concat(h),e=e.concat(l),c.a.chain(i).map((function(t){1==t[7]&&f.push(t)})).value(),c.a.chain(a).map((function(t){1==t[4]&&g.push(t)})).value(),c.a.chain(r).map((function(t){1==t[4]&&d.push(t)})).value(),c.a.chain(u).map((function(t){if(1==t[4]){m.push(t);var e=t[2][0][1],i=t[2][1][1];c.a.chain(p).map((function(t){t[0]!=e&&t[0]!=i||f.push(t)})).value()}})).value(),f=f.concat(d),g=g.concat(m);var y={entity_types:e,entity_attribute_types:[],relation_types:[],event_types:[]},b={text:this.text,entities:f,attributes:[],relations:g};y=JSON.parse(JSON.stringify(y)),b=JSON.parse(JSON.stringify(b));var _=t("#markBrat")[0]?t("#markBrat")[0].contentWindow.document.documentElement.scrollLeft:"",v=t("#markBrat")[0]?t("#markBrat")[0].contentWindow.document.documentElement.scrollTop:"";t("#markBrat")[0]&&t("#markBrat")[0].contentWindow.updateEmbed(y,b),setTimeout((function(){t("#markBrat")[0].contentWindow.scrollTo(_,v)}),50)}},showIssue:function(t,e){var i="";"entity"==e?i=this.entitySelectionId:"relation"==e&&(i=this.relationSeletionId),this.Bus.$emit("barVisible",{show:!0,tabName:"Issue",issueType:e,targetId:i})}})}}).call(this,i("c65b"))},edfc:function(t,e,i){t.exports={menuText:"#2b3067",menuActiveText:"#2b3067",subMenuActiveText:"#2b3067",menuBg:"#fff",menuHover:"#e3ebfe",subMenuBg:"#e3ebfe",subMenuHover:"#e3ebfe",sideBarWidth:"210px",mainColor:"#2b3067"}}}]);