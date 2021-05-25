(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56ad9fb7"],{6604:function(t,a,s){},"996b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vital-container"},[s("nav",{staticClass:"cb"},[s("strong",{staticClass:"fl nav-title f16"},[t._v("Job details")]),t._v(" "),s("div",{staticClass:"fr"},[s("el-button",{staticClass:"shadow filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-document-copy"},on:{click:t.createJobAgain}},[t._v("Clone job")])],1)]),t._v(" "),s("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray mt-15 bd-1"},[s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{attrs:{span:6,align:"left"}},[t._v("\n        Job Name: "),s("strong",[t._v(" "+t._s(t.detailData.name))])]),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[t._v("\n        Pipeline:"),s("strong",[t._v(" "+t._s(t.detailData.pipeline))])]),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[t._v("\n        Job ID: "),s("strong",[t._v(t._s(t.detailData.bizId))])])],1),t._v(" "),s("el-divider",{staticClass:"m-0"}),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{attrs:{span:6,align:"left"}},[t._v("\n        Created Time: "),s("strong",[t._v(" "+t._s(t._f("setHourDate")(t.detailData.date)))])]),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5,align:"right"}},[t._v("\n            Status:\n          ")]),t._v(" "),s("el-col",{attrs:{span:17}},["STOPPED"===t.detailData.status||"STOPPED"===t.detailData.reqStatus||"STOPPING"===t.detailData.reqStatus?s("el-tooltip",{staticClass:"cp",attrs:{content:t.setTooltipContent,placement:"top"}},["FAILED_TASK_LIMIT"===t.detailData.subStatus||"FAILED_QUOTA_LIMIT"===t.detailData.subStatus?s("span",[s("i",{staticClass:"el-icon-warning color-yellow f18"})]):s("span",[t._v("--")])]):"STARTED"===t.detailData.status||"STARTING"===t.detailData.status?s("el-tooltip",{staticClass:"cp",attrs:{effect:"dark",content:t.setTooltipContent,placement:"top"}},[s("div",{staticClass:"progress-running"},[s("el-progress",{staticClass:"w",attrs:{"stroke-width":8,percentage:t.setProcessData(t.detailData)}}),s("i",{staticClass:"progress-running-icon el-icon-loading",staticStyle:{right:"1%"}})],1)]):s("el-progress",{attrs:{percentage:t.progressNum,"stroke-width":8,status:t.setStatus}})],1),t._v(" "),s("el-col",{attrs:{span:2}},[t.detailData.passFileCount?s("el-tooltip",{attrs:{placement:"top",content:t.detailData.passFileCount+" file"+(1!==t.detailData.passFileCount?"s":"")+" exceeded the limit"}},[s("i",{staticClass:"el-icon-info f17 color-yellow"})]):t._e()],1)],1)],1),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[t._v("\n        Updated Time: "),s("strong",[t._v(" "+t._s(t._f("setHourDate")(t.detailData.update)))])])],1),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{attrs:{span:6,align:"left"}},[s("el-card",{staticClass:"job-detail-count",attrs:{shadow:"never"}},[s("div",{staticClass:"f18"},[t._v("Ducuments")]),t._v(" "),s("div",{staticClass:"mt-20 fb f32"},[t._v(t._s(t.detailData.processedCount))])])],1),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[s("el-card",{staticClass:"job-detail-entities",attrs:{shadow:"never"}},[s("div",{staticClass:"f18"},[t._v("Entities")]),t._v(" "),s("div",{staticClass:"mt-20 fb f32"},[t._v(t._s(t.detailData.processedEntities))])])],1),t._v(" "),s("el-col",{attrs:{span:6,align:"left"}},[s("el-card",{staticClass:"job-detail-relations",attrs:{shadow:"never"}},[s("div",{staticClass:"f18"},[t._v("Relations")]),t._v(" "),s("div",{staticClass:"mt-20 fb f32"},[t._v(t._s(t.detailData.processedRelations))])])],1)],1),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tl",attrs:{span:24}},[t._v("\n        Input location:\n        "),s("strong",{staticClass:"job-detail-location"},[t._v(" "+t._s(t.detailData.input))]),t._v(" "),s("span",[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detailData.input,expression:"detailData.input",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"ml-5 el-icon-document-copy cp color-light-blue"})])])],1),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tl",attrs:{span:24}},[t._v("\n        Output location:\n        "),s("strong",{staticClass:"job-detail-location"},[t._v(" "+t._s(t.detailData.output))]),t._v(" "),s("span",[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detailData.output,expression:"detailData.output",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"ml-5 el-icon-document-copy cp color-light-blue"})])])],1)],1),t._v(" "),s("div",{staticClass:"mt-20"},[t._v("\n    Cost:\n    "),s("strong",{staticClass:"f20 color-light-blue"},[s("small",[t._v(" $")]),t._v(" "+t._s(t.costData))])])])},i=[],l=s("74df"),o={name:"InlineEditTable",components:{},filters:{},data:function(){return{pageLoading:!1,detailData:{},sqlData:"",apiCallData:"",apiResponseData:"",costData:"",cmOptions:{tabSize:4,lineWrapping:!0,mode:"json",lineNumbers:!0}}},computed:{progressNum:function(){var t=this.detailData.processedSize/this.detailData.totalSize;return t?Math.round(100*t)>=100?100:Math.round(100*t):"FAILED"===this.detailData.status||"COMPLETED"===this.detailData.status?100:0},setStatus:function(){var t=this.detailData.processedSize/this.detailData.totalSize;return 0===this.detailData.totalSize&&0===this.detailData.processedCount?"success":this.detailData.processedErrCount>0?"warning":t?Math.round(100*t)>=100?"success":"":"exception"},setTooltipContent:function(){var t=this.detailData.processedSize/this.detailData.totalSize;return this.detailData.processedErrCount>0?"Error count: ".concat(this.detailData.processedErrCount):"FAILED_TASK_LIMIT"===this.detailData.subStatus||"FAILED_QUOTA_LIMIT"===this.detailData.subStatus?"Out of limit, please contact us.":"STARTED"===this.detailData.status||"STARTING"===this.detailData.status?(t?Math.round(100*t):0)+"%":this.detailData.status}},mounted:function(){this.getData(),this.getCostData()},methods:{setProcessData:function(t){return parseInt(t.processedSize/t.totalSize*100)||0},createJobAgain:function(){this.$router.push({path:"/annotateJobs",query:{createStatus:!0,copy:!0}}),sessionStorage.copyJobData=this.apiResponseData},copySuccess:function(){this.$message.success("Copy success!")},getCostData:function(){var t=this,a=this.$route.query.bizId;Object(l["e"])(a).then((function(a){t.costData=a.data||0}))},getData:function(){var t=this,a={bizId:this.$route.query.bizId};this.pageLoading=!0,Object(l["f"])(a).then((function(s){200===s.code&&(t.pageLoading=!1,t.detailData=s.data,t.apiCallData=JSON.stringify(a),t.apiResponseData=JSON.stringify(s.data))}))}}},n=o,c=(s("c7df"),s("2877")),r=Object(c["a"])(n,e,i,!1,null,"2ad88727",null);a["default"]=r.exports},c7df:function(t,a,s){"use strict";s("6604")}}]);