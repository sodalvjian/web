(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78703a35"],{"04c2":function(t,e,a){"use strict";var s=a("cfcf"),n=a.n(s);n.a},"6c60":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"vital-container cb"},[a("strong",{staticClass:"fl nav-title f16"},[t._v(t._s(t.settingType))])]),t._v(" "),t.textHandleTextShow?a("div",{staticClass:"mt-20"},[a("el-input",{staticClass:"text-handle",attrs:{type:"textarea",rows:18,maxlength:"10000","show-word-limit":"",placeholder:"Please enter the content"},model:{value:t.textHandleData,callback:function(e){t.textHandleData=e},expression:"textHandleData"}}),t._v(" "),a("div",{staticClass:"mt-50 tc mb-50"},[a("el-button",{staticClass:"mr-10",attrs:{loading:t.htmlLoading,type:"primary",icon:"el-icon-caret-right"},on:{click:t.runClamp}},[t._v("Run CLAMP")]),t._v(" "),a("el-button",{attrs:{type:"info",icon:"el-icon-refresh-right"},on:{click:t.clearText}},[t._v("Clear")])],1)],1):t._e(),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:t.textHandleShow,expression:"textHandleShow"},{name:"loading",rawName:"v-loading",value:t.resultLoading,expression:"resultLoading"}],staticClass:"filter-container mt-20 search-content bg-color-white",style:t.currentHeight,attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("el-tabs",{staticClass:"nlp-result",attrs:{lazy:!0},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"Results.xmi",name:"first"}},[a("div",{staticClass:"mt-20"},[a("iframe",{ref:"resultShow",style:t.currentIframeHeight,attrs:{scrolling:"yes",width:"100%",src:t.searchResultPage,frameborder:"0"}})])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Results.txt",name:"second"}},[a("el-table",{staticClass:"table-data mt-20 tree-content",staticStyle:{width:"100%"},style:t.currentIframeHeight,attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"start",label:"Start",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"end",label:"End",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{width:"100",prop:"semantic",label:"Semantic"}}),t._v(" "),a("el-table-column",{attrs:{label:"CUI",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.cui?e.row.cui:"--")+"\n              ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",prop:"assertion",label:"Assertion"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"200",prop:"entity",label:"Entity"}})],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-tree",{ref:"keysTree",staticClass:"p20 tree-content",style:t.currentTreeHeight,attrs:{data:t.selectData,"show-checkbox":"","default-expand-all":"","node-key":"type",props:t.defaultProps,"check-on-click-node":!1},on:{check:t.selectKeys},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var s=e.data;return a("span",{staticClass:"custom-tree-node w"},[a("span",{staticClass:"fl",class:{"mt-8":!s.children}},[t._v(t._s(s.type))]),t._v(" "),s.children?t._e():a("span",{staticClass:"fr mt-3"},[a("el-color-picker",{attrs:{size:"small"},on:{change:function(e){return t.changeColor(s)}},model:{value:s.bgColor,callback:function(e){t.$set(s,"bgColor",e)},expression:"data.bgColor"}})],1)])}}])})],1)],1)],1)},n=[];function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var l={name:"InlineEditTable",components:{},data:function(){return{activeName:"first",resultLoading:!0,currentHeight:"height:"+(document.body.clientHeight-170)+"px",currentTreeHeight:"height:"+(document.body.clientHeight-230)+"px",currentIframeHeight:"height:"+(document.body.clientHeight-320)+"px",textHandleData:"Admission Date: [**2151-7-16**] Discharge Date: [**2151-8-4**]\nService:\nADDENDUM:\nRADIOLOGIC STUDIES: Radiologic studies also included a chest\nCT, which confirmed cavitary lesions in the left lung apex\nconsistent with infectious process/tuberculosis. This also\nmoderate-sized left pleural effusion.\nHEAD CT: Head CT showed no intracranial hemorrhage or mass\neffect, but old infarction consistent with past medical\nhistory.\nABDOMINAL CT: Abdominal CT showed lesions of\nT10 and sacrum most likely secondary to osteoporosis. These can\nbe followed by repeat imaging as an outpatient.\n[**First Name8 (NamePattern2) **] [**First Name4 (NamePattern1) 1775**] [**Last Name (NamePattern1) **], M.D. [**MD Number(1) 1776**]\nDictated By:[**Hospital 1807**]\nMEDQUIST36\nD: [**2151-8-5**] 12:11\nT: [**2151-8-5**] 12:21\nJOB#: [**Job Number 1808**]",htmlLoading:!1,searchResultId:this.$route.query.id,searchUrl:this.$route.query.url,searchResultPage:"",selectData:[],tableData:[],docentiryData:[],defaultProps:{children:"children",label:"type"},resultData:{},keywordsData:[],userCreatNew:!1,userEidtStatus:!1,settingType:"NLP Result",temporary:[],textHandleShow:!0,textHandleTextShow:!1,loading:!1,listLoading:!0,page:1,total:0}},mounted:function(){this.textHandleEvent()},methods:{setDefaultColor:function(){this.$refs.keysTree.setCheckedNodes([{type:"problem"},{type:"treatment"},{type:"test"},{type:"drug"}])},clearText:function(){this.textHandleShow=!1,this.textHandleData=""},runClamp:function(){var t=this;if(this.textHandleData){this.$refs.resultShow.contentWindow;this.textHandleShow=!0,this.htmlLoading=!0,this.tableData=[],setTimeout((function(){window.scrollTo(0,document.documentElement.clientHeight),t.sendIframeMessage("handleHtml",t.textHandleData)}),10)}else this.$message.error("Please enter content")},textHandleEvent:function(){this.searchResultId?(this.getSearchResult(),this.searchResultPage="static/brat/index.html?resultId=".concat(this.searchResultId,"&url=").concat(this.searchUrl),this.textHandleShow=!0,this.textHandleTextShow=!1,this.settingType="NLP Result"):(this.getSearchResult(),this.searchResultPage="static/brat/index.html",this.textHandleShow=!1,this.textHandleTextShow=!0,this.settingType="Text Handle")},handleClick:function(){"first"==this.activeName&&this.changeColor()},changeColor:function(t){this.sendIframeMessage("changeColor",this.resultData)},resize:function(){},selectKeys:function(t){var e=this.$refs.keysTree.getCheckedKeys(!0),a=this.deepCopy(this.resultData.bratFile.entities),s=[];0===e.length?s=[]:e.length===this.resultData.bratFile.entities.length?s=this.resultData.bratFile.entities:a.forEach((function(t,a){e.forEach((function(e){t[1]===e&&s.push(t)}))})),this.sendIframeMessage("changeShow",s),this.setTableData(s)},setTableData:function(t){var e=this,a=[];t.forEach((function(t){e.docentiryData.forEach((function(e){if(t[2][0][0]==e.startPos&&t[2][0][1]==e.endPos){var s={start:t[2][0][0],end:t[2][0][1],semantic:t[1],cui:e.code,assertion:e.seert,entity:e.entText};a.push(s)}}))})),this.tableData=a},getSearchResult:function(){window.addEventListener("message",this.handleMessage)},handleMessage:function(t){var e=this,a=t.data;switch(a.cmd){case"getResultFromIframe":this.resultData.bratFile=JSON.parse(a.bratFile),this.resultData.bratSem=JSON.parse(a.bratSem),this.docentiryData=a.docentiry;var s=this.resultData.bratSem.entity_types;this.selectData=[{children:s,type:"all"}],this.resultLoading=!1,this.htmlLoading=!1,setTimeout((function(){e.setDefaultColor(),e.selectKeys()}),800);break}},sendIframeMessage:function(t,e){var a=this.$refs.resultShow.contentWindow;a.postMessage({cmd:t,params:{resultData:e}},"*")},deepCopy:function(t){var e=Array.isArray(t)?[]:{};for(var a in t)t.hasOwnProperty(a)&&("object"===i(t[a])?e[a]=this.deepCopy(t[a]):e[a]=t[a]);return e}}},r=l,o=(a("04c2"),a("4023")),c=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports},cfcf:function(t,e,a){}}]);