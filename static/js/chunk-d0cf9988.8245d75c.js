(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0cf9988"],{"74df":function(t,a,s){"use strict";s.d(a,"b",(function(){return i})),s.d(a,"f",(function(){return o})),s.d(a,"c",(function(){return c})),s.d(a,"a",(function(){return n})),s.d(a,"e",(function(){return r})),s.d(a,"d",(function(){return l}));var e=s("b775");function i(t){return Object(e["a"])({url:"jobbizweb/jobbiz/stop/".concat(t.id),method:"DELETE"})}function o(t,a){return Object(e["a"])({url:"jobbizweb/jobbiz/".concat(t.page,"/").concat(t.pageSize),method:"POST",data:a})}function c(){return Object(e["a"])({url:"jobbizweb/pipeline",method:"get"})}function n(t){return Object(e["a"])({url:"jobbizweb/jobbiz",method:"POST",data:t})}function r(t){return Object(e["a"])({url:"jobbizweb/jobbiz/info",method:"POSt",data:t})}function l(t){return Object(e["a"])({url:"jobbizweb/getcost/".concat(t),method:"get"})}},"996b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vital-container"},[s("nav",{staticClass:"cb"},[s("strong",{staticClass:"fl nav-title mt-10 f16"},[t._v("Job details")]),t._v(" "),s("div",{staticClass:"fr"},[s("el-button",{staticClass:"filter-item shadow",attrs:{type:"primary",size:"small",icon:"el-icon-document-copy"},on:{click:t.createJobAgain}},[t._v("Copy")])],1)]),t._v(" "),s("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray mt-15 bd-1"},[s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tc",attrs:{span:8}},[t._v("\n        Job Name: "),s("strong",[t._v(" "+t._s(t.detailData.name))])]),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[t._v("\n        Analysis Type:"),s("strong",[t._v(" "+t._s(t.detailData.pipeline))])]),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[t._v("\n        Job ID: "),s("strong",[t._v(t._s(t.detailData.bizId))])])],1),t._v(" "),s("el-divider",{staticClass:"m-0"}),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tc",attrs:{span:8}},[t._v("\n        Created Time: "),s("strong",[t._v(" "+t._s(t.detailData.date))])]),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:6,align:"right"}},[t._v("\n            Status:\n          ")]),t._v(" "),s("el-col",{attrs:{span:18}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.setTooltipContent,placement:"top"}},["STOPPED"===t.detailData.status?s("span",[t._v("--")]):"STARTED"===t.detailData.status||"STARTING"===t.detailData.status?s("div",{staticClass:"progress-running"},[s("el-progress",{staticClass:"w",attrs:{percentage:0}}),s("i",{staticClass:"progress-running-icon el-icon-loading",staticStyle:{right:"1%"}})],1):s("el-progress",{attrs:{percentage:t.progressNum,status:t.setStatus}})],1)],1)],1)],1),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[t._v("\n        Updated Time: "),s("strong",[t._v(" "+t._s(t.detailData.update))])])],1),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tc",attrs:{span:8}},[s("el-card",{attrs:{shadow:"never"}},[s("div",{staticClass:"f15"},[t._v("Number of ducuments")]),t._v(" "),s("div",{staticClass:"fb f32 mt-20"},[t._v(t._s(t.detailData.processedCount))])])],1),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[s("el-card",{attrs:{shadow:"never"}},[s("div",{staticClass:"f15"},[t._v("Number of Entity")]),t._v(" "),s("div",{staticClass:"fb f32 mt-20"},[t._v(t._s(t.detailData.processedEntities))])])],1),t._v(" "),s("el-col",{staticClass:"tc",attrs:{span:8}},[s("el-card",{attrs:{shadow:"never"}},[s("div",{staticClass:"f15"},[t._v("Number of relation")]),t._v(" "),s("div",{staticClass:"fb f32 mt-20"},[t._v(t._s(t.detailData.processedRelations))])])],1)],1),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tl",attrs:{span:24}},[t._v("\n        Input location:\n        "),s("strong",[t._v(" "+t._s(t.detailData.input))]),t._v(" "),s("span",[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detailData.input,expression:"detailData.input",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"el-icon-document-copy cp ml-5"})])])],1),t._v(" "),s("el-divider",{staticClass:"m-0"}),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tl",attrs:{span:24}},[t._v("\n        Output location:\n        "),s("strong",[t._v(" "+t._s(t.detailData.output))]),t._v(" "),s("span",[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detailData.output,expression:"detailData.output",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"el-icon-document-copy cp ml-5"})])])],1),s("el-divider",{staticClass:"m-0"}),t._v(" "),s("el-row",{staticClass:"p20",attrs:{gutter:15}},[s("el-col",{staticClass:"tl",attrs:{span:24}},[t._v("\n        Cost:\n        "),s("strong",{staticClass:"f20 color-main"},[t._v(" "+t._s(t.costData))]),t._v(" "),s("small",[t._v(" $")])])],1)],1),t._v(" "),s("section",{staticClass:"mt-40"},[s("h3",{staticClass:"mb-0"},[t._v("Application integration")]),t._v(" "),s("div",{staticClass:"mt-10"},[t._v("\n      We create a font convention to ensure the best presentation across\n      different platforms.\n    ")]),t._v(" "),s("el-divider"),t._v(" "),s("el-row",{attrs:{gutter:30}},[s("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],attrs:{span:12}},[s("div",{staticClass:"cb"},[s("div",{staticClass:"fl fb mt-8"},[t._v("\n            API call\n          ")]),t._v(" "),s("div",{staticClass:"fr"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.apiCallData,expression:"apiCallData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"filter-item shadow",attrs:{type:"primary",size:"mini",icon:"el-icon-document-copy"}},[t._v("Copy")])],1)]),t._v(" "),s("div",{staticClass:"mt-10"},[s("codemirror",{attrs:{options:t.cmOptions},model:{value:t.apiCallData,callback:function(a){t.apiCallData=a},expression:"apiCallData"}})],1)]),t._v(" "),s("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],attrs:{span:12}},[s("div",{staticClass:"cb"},[s("div",{staticClass:"fl fb mt-8"},[t._v("\n            API response\n          ")]),t._v(" "),s("div",{staticClass:"fr"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.apiResponseData,expression:"apiResponseData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"filter-item shadow",attrs:{type:"primary",size:"mini",icon:"el-icon-document-copy"}},[t._v("Copy")])],1)]),t._v(" "),s("div",{staticClass:"mt-10"},[s("codemirror",{ref:"jsonEditor",attrs:{options:t.cmOptions},model:{value:t.apiResponseData,callback:function(a){t.apiResponseData=a},expression:"apiResponseData"}})],1)])],1)],1)])},i=[],o=s("74df"),c=s("8a2b"),n=(s("5f8d"),s("500c"),{name:"InlineEditTable",components:{codemirror:c["codemirror"]},filters:{},data:function(){return{pageLoading:!1,detailData:{},sqlData:"",apiCallData:"",apiResponseData:"",costData:"",cmOptions:{tabSize:4,lineWrapping:!0,mode:"json",lineNumbers:!0}}},computed:{progressNum:function(){var t=this.detailData.processedSize/this.detailData.totalSize;return t?Math.round(100*t)>=100?100:Math.round(100*t):"FAILED"===this.detailData.status?100:0},setStatus:function(){var t=this.detailData.processedSize/this.detailData.totalSize;return this.detailData.processedErrCount>0?"warning":t?Math.round(100*t)>=100?"success":"":"exception"},setTooltipContent:function(){return this.detailData.processedErrCount>0?"Error count: ".concat(this.detailData.processedErrCount):this.detailData.status},codemirror:function(){return this.$refs.jsonEditor.codemirror}},mounted:function(){this.getData(),this.getCostData()},methods:{createJobAgain:function(){this.$router.push({path:"/annotateJobs",query:{createStatus:!0,copy:!0}}),sessionStorage.copyJobData=this.apiResponseData},copySuccess:function(){this.$message.success("Copy success!")},getCostData:function(){var t=this,a=this.$route.query.bizId;Object(o["d"])(a).then((function(a){t.costData=a.data||0}))},getData:function(){var t=this,a={bizId:this.$route.query.bizId};this.pageLoading=!0,Object(o["e"])(a).then((function(s){200===s.code&&(t.pageLoading=!1,t.detailData=s.data,t.apiCallData=JSON.stringify(a),t.apiResponseData=JSON.stringify(s.data),t.$nextTick((function(){t.codemirror.setValue(JSON.stringify(JSON.parse(t.apiResponseData),null,2))})))}))}}}),r=n,l=s("9ca4"),p=Object(l["a"])(r,e,i,!1,null,"8561e168",null);a["default"]=p.exports}}]);