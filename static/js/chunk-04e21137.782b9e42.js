(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04e21137"],{"22ba":function(t,e,a){},"41b8":function(t,e,a){"use strict";var n=a("9c1c"),i=a.n(n);i.a},5777:function(t,e,a){"use strict";var n=a("22ba"),i=a.n(n);i.a},"5f8d":function(t,e,a){},"74df":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return c}));var n=a("b775");function i(t){return Object(n["a"])({url:"jobbizweb/jobbiz/stop/".concat(t.id),method:"DELETE"})}function o(t,e){return Object(n["a"])({url:"jobbizweb/jobbiz/".concat(t.page,"/").concat(t.pageSize),method:"POST",data:e})}function s(){return Object(n["a"])({url:"jobbizweb/pipeline",method:"get"})}function l(t){return Object(n["a"])({url:"jobbizweb/jobbiz",method:"POST",data:t})}function r(t){return Object(n["a"])({url:"jobbizweb/jobbiz/info",method:"POSt",data:t})}function c(t){return Object(n["a"])({url:"jobbizweb/getcost/".concat(t),method:"get"})}},"9c1c":function(t,e,a){},ebda:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.createStatus?t._e():a("job-list",{ref:"jobListRef",on:{createData:t.createData}}),t._v(" "),t.createStatus?a("job-create",{ref:"jobCreate",on:{"close-dialog":t.closeDialog}}):t._e()],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"vital-container cb bb-1"},[a("strong",{staticClass:"fl mt-10 f16"},[t._v("Job list")]),t._v(" "),a("div",{staticClass:"fr"},[a("el-button",{staticClass:"filter-item shadow",attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:t.createData}},[t._v("Job")])],1)]),t._v(" "),a("section",{staticClass:"p20"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table-content",staticStyle:{width:"100%"},attrs:{data:t.tableList,"highlight-current-row":""},on:{"row-click":t.viewDetail}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"No.",width:"80",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180px","show-overflow-tooltip":"",label:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px","show-overflow-tooltip":"",align:"left",label:"Type"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.pipeline))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250px",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",disabled:t.setTooltipDisabled(e.row),content:t.setTooltipContent(e.row),placement:"top"}},["STOPPED"===e.row.status?a("span",[t._v("--")]):"STARTED"===e.row.status||"STARTING"===e.row.status?a("div",{staticClass:"progress-running"},[a("el-progress",{attrs:{percentage:0,format:t.setFormat}}),a("i",{staticClass:"progress-running-icon el-icon-loading"})],1):a("el-progress",{attrs:{percentage:t.setPercent(e.row),status:t.setStatus(e.row)}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.status)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px",align:"center",label:"Create Time"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("setHourDate")(e.row.date)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160px",label:"Updated Time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("setHourDate")(e.row.update))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"Operation",fixed:"right",width:"90px"},scopedSlots:t._u([{key:"default",fn:function(e){return["STARTED"===e.row.status||"STARTING"===e.row.status?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Stop job",placement:"top"}},[a("i",{staticClass:"el-icon-remove color-red cp",on:{click:function(a){return a.stopPropagation(),t.stopData(e.row)}}})]):a("span",[t._v("--")])]}}])})],1),t._v(" "),a("div",{staticClass:"tr mt-25"},[a("el-pagination",{attrs:{background:"","page-size":10,"hide-on-single-page":"",layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},s=[],l=a("74df"),r={name:"InlineEditTable",filters:{},components:{},data:function(){return{tableList:[],setInterval:{},loading:!1,listLoading:!0,page:0,pageSize:10,total:0}},computed:{setFormat:function(){return""}},created:function(){var t=this;clearInterval(this.setInterval),this.getList(),this.setInterval=setInterval((function(){t.getList()}),6e4)},destroyed:function(){clearInterval(this.setInterval)},methods:{setTooltipDisabled:function(t){return!(t.processedErrCount>0)},setTooltipContent:function(t){if(t.processedErrCount>0)return"Error count: ".concat(t.processedErrCount)},progressFormat:function(t){return 100===t?"满":"".concat(t,"%")},setPercent:function(t){var e=t.processedSize/t.totalSize;return e?Math.round(100*e)>=100?100:Math.round(100*e):"FAILED"===t.status?100:0},setStatus:function(t){var e=t.processedSize/t.totalSize;return t.processedErrCount>0?"warning":e?Math.round(100*e)>=100?"success":"":"exception"},viewDetail:function(t,e,a){this.$router.push({path:"/jobDetails",query:{bizId:t.bizId}})},setRole:function(t){var e=t.roles.map((function(t){return t.name}));return e.join(",")},stopData:function(t){var e=this;this.$confirm("Are you sure you want to stop job?",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){Object(l["b"])(t).then((function(t){200===t.code&&(e.$message({type:"success",message:"Stop success."}),e.getList())}))})).catch((function(){}))},createData:function(){this.$emit("createData","create")},handleCurrentChange:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={page:this.page,pageSize:this.pageSize},a={name:this.$route.query.jobName||""};Object(l["f"])(e,a).then((function(e){200===e.code&&(t.tableList=e.data.content,t.listLoading=!1,t.total=e.data.totalElements)}))},resetForm:function(t){this.$refs[t].resetFields()}}},c=r,u=(a("5777"),a("9ca4")),p=Object(u["a"])(c,o,s,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vital-container"},[t._m(0),t._v(" "),a("el-form",{ref:"formData",attrs:{"label-position":"top",model:t.formData,"label-width":"80px"}},[a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray mt-20 bd-1"},[a("el-row",{staticClass:"p20",attrs:{gutter:15}},[a("el-col",{attrs:{span:8}},[a("strong",{staticClass:"f16"},[t._v("Job Setting")])])],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"Job name",prop:"name",rules:{required:!0}}},[a("el-input",{attrs:{placeholder:"Input your job name"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("div",{staticClass:"f13 lh1-5 mt-20"},[a("i",{staticClass:"el-icon-warning color-main f15"}),t._v(" Support for\n              letters, Numbers and their combinations 2.Please enter 6\n              characters to 256 characters\n            ")])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"Analysis Type",prop:"pipelineId",rules:{required:!0}}},[a("el-select",{staticClass:"w",attrs:{"popper-class":"",placeholder:"Please select…"},on:{change:t.changepipeline},model:{value:t.formData.pipelineId,callback:function(e){t.$set(t.formData,"pipelineId",e)},expression:"formData.pipelineId"}},t._l(t.analysisTypeOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.params,value:t.params}})})),1)],1)],1)])],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray mt-25 bd-1"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock"},[t._v("Input Data")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock fl"},[t._v("Output Data")]),t._v(" "),a("el-popover",{attrs:{placement:"top-end",trigger:"manual",width:"300"},model:{value:t.popoverVisible,callback:function(e){t.popoverVisible=e},expression:"popoverVisible"}},[a("el-radio-group",{staticClass:"w",model:{value:t.encryptionRadio,callback:function(e){t.encryptionRadio=e},expression:"encryptionRadio"}},[a("el-radio",{attrs:{label:"AES-256"}},[t._v("AES-256")]),t._v(" "),a("div",{staticClass:"encryption-handle mt-10"},[a("el-radio",{attrs:{label:""}}),t._v(" "),a("div",{staticClass:"encryption-input"},[a("el-input",{attrs:{clearable:"",placeholder:"Please enter secret key",size:"mini"},on:{change:t.handleEncryption},model:{value:t.encryptionHandle,callback:function(e){t.encryptionHandle=e},expression:"encryptionHandle"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"tr mt-20"},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.cancerPopoverVisible}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirmEncryption}},[t._v("Confirm")])],1),t._v(" "),a("el-switch",{staticClass:"fr mt-15 mr-20",attrs:{slot:"reference","active-color":"#13ce66","inactive-text":"Encryption"},on:{change:t.changeEncrytion},slot:"reference",model:{value:t.encryption,callback:function(e){t.encryption=e},expression:"encryption"}})],1)],1)],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"input",rules:{required:!0}}},[a("el-input",{attrs:{placeholder:"s3://mybucket/myinput"},model:{value:t.formData.input,callback:function(e){t.$set(t.formData,"input",e)},expression:"formData.input"}},[a("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.openBrowse("input",{label:t.inRegionLabel,value:t.inRegion})}},slot:"append"},[t._v("Region S3")])],1)],1),t._v(" "),a("div",{staticClass:"f13 lh1-5 mt-20"},[a("i",{staticClass:"el-icon-warning color-main f15"}),t._v(" Browse,type or\n              paste the URL of a bucket or folder location in S3, or select a\n              bucket or folder location in S3\n            ")]),t._v(" "),t.inRegionName?a("div",{staticClass:"f15 mt-15"},[t._v("\n              S3 region: "),a("strong",[t._v(t._s(t.inRegionName))])]):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"output",rules:{required:!0}}},[a("el-input",{attrs:{placeholder:"s3://mybucket/myoutput"},model:{value:t.formData.output,callback:function(e){t.$set(t.formData,"output",e)},expression:"formData.output"}},[a("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.openBrowse("output",{label:t.outRegionLabel,value:t.outRegion})}},slot:"append"},[t._v("Region S3\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"f13 lh1-5 mt-20"},[a("i",{staticClass:"el-icon-warning color-main f15"}),t._v(" Browse,type or\n              paste the URL of a bucket or folder location in S3, or select a\n              bucket or folder location in S3\n            ")]),t._v(" "),t.outRegionName?a("div",{staticClass:"f15 mt-15"},[t._v("\n              S3 region: "),a("strong",[t._v(t._s(t.outRegionName))])]):t._e()],1)])],1)],1),t._v(" "),a("el-form-item",{staticClass:"tc mt-40"},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"medium",type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("Confirm")])],1)],1),t._v(" "),a("section",{staticClass:"mt-40 tc"}),t._v(" "),a("choose-resource",{ref:"chooseResourceRef",on:{"select-s3":t.selectS3}}),t._v(" "),a("dialog-show-info",{ref:"dialogShowInfoRef"})],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"cb"},[a("strong",{staticClass:"fl nav-title mt-10 f16"},[a("span",{staticClass:"color-gray"},[t._v(" Job details > ")]),t._v(" "),a("small",[t._v("New job")])])])}],b=a("2117"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Choose resource",center:"",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("h3",[a("i",{staticClass:"el-icon-info"}),t._v(" S3")]),t._v(" "),a("el-table",{ref:"multipleTable",attrs:{"max-height":300,data:t.tableData.filter((function(e){return!t.search||e.label.toLowerCase().includes(t.search.toLowerCase())}))},on:{"selection-change":t.handleSelectionChange,select:t.select,"select-all":t.selectAll}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.label)+"\n      ")]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"fl"},[t._v(" Region ("+t._s(t.tableData.length)+") ")])])],2),t._v(" "),a("el-table-column",{attrs:{align:"right"}},[a("template",{slot:"header"},[a("el-input",{attrs:{size:"mini",placeholder:"Search folder name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"mt-20 mb-20"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.confirmData}},[t._v("Confirm")])],1)])],1)},h=[],g=[{label:"AWS GovCloud (US)",value:"us-gov-west-1"},{label:"AWS GovCloud (US-East)",value:"us-gov-east-1"},{label:"US East (N. Virginia)",value:"us-east-1"},{label:"US East (Ohio)",value:"us-east-2"},{label:"US West (N. California)",value:"us-west-1"},{label:"US West (Oregon)",value:"us-west-2"},{label:"EU (Ireland)",value:"eu-west-1"},{label:"EU (London)",value:"eu-west-2"},{label:"EU (Paris)",value:"eu-west-3"},{label:"EU (Frankfurt)",value:"eu-central-1"},{label:"EU (Stockholm)",value:"eu-north-1"},{label:"Asia Pacific (Hong Kong)",value:"ap-east-1"},{label:"Asia Pacific (Mumbai)",value:"ap-south-1"},{label:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{label:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{label:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{label:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{label:"South America (Sao Paulo)",value:"sa-east-1"},{label:"China (Beijing)",value:"cn-north-1"},{label:"China (Ningxia)",value:"cn-northwest-1"},{label:"Canada (Central)",value:"ca-central-1"},{label:"Middle East (Bahrain)",value:"me-south-1"}],y={name:"",components:{},props:{},data:function(){return{dialogVisible:!1,multipleSelection:[],tableData:g,search:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{confirmData:function(){if(0===this.multipleSelection.length)return this.$message.warning("Please select S3."),!1;var t={type:this.type,data:this.multipleSelection[0]};this.$emit("select-s3",t),this.dialogVisible=!1},handleSelectionChange:function(t){this.multipleSelection=t},select:function(t,e){if(t.length>1){var a=t.shift();this.$refs.multipleTable.toggleRowSelection(a,!1)}},selectAll:function(t){t.length>1&&(t.length=1)},handleEdit:function(t,e){},handleDelete:function(t,e){},openDialog:function(t,e){var a=this;this.dialogVisible=!0,this.type=t,e&&this.$nextTick((function(){a.$nextTick((function(){g.map((function(t){t.value===e.value&&a.$refs.multipleTable.toggleRowSelection(t,!0)}))}))}))}}},_=y,w=Object(u["a"])(_,v,h,!1,null,"58f1212a",null),S=w.exports,C=(a("5f8d"),a("4360")),D={name:"InlineEditTable",components:{chooseResource:S,DialogShowInfo:b["a"]},filters:{},data:function(){return{analysisTypeOptions:[],pageLoading:!1,encryptionRadio:"AES-256",encryptionHandle:"",userId:C["a"].getters.userInfo.userId,btnLoading:!1,popoverVisible:!1,encryption:!1,formData:{name:"",pipelineId:"",encryption:"",input:"",output:""},pipelineData:{},inRegionName:"",outRegionName:"",inRegion:"",outRegion:"",inRegionLabel:"",outRegionLabel:""}},created:function(){},mounted:function(){this.getAnalysisType()},methods:{cancerPopoverVisible:function(){this.popoverVisible=!1,this.encryption=!1},getCopyData:function(){var t=this,e=this.$route.query.copy,a=JSON.parse(sessionStorage.copyJobData),n=a.name,i=a.pipeline,o=a.encryption,s=a.input,l=a.output,r=a.inRegion,c=a.outRegion;if(e){var u=this.analysisTypeOptions.find((function(t){return t.params===i}));this.formData={name:n,pipelineId:u?u.id:"",encryption:o,input:s,output:l},this.pipelineData=this.analysisTypeOptions.find((function(e){return e.id===t.formData.pipelineId})),this.inRegion=r;var p=g.find((function(t){return r===t.value}));this.inRegionName="".concat(p.label,"(").concat(p.value,")"),this.inRegionLabel=p.label,this.outRegion=c;var d=g.find((function(t){return c===t.value}));this.outRegionName="".concat(d.label,"(").concat(d.value,")"),this.outRegionLabel=d.label,o?(this.popoverVisible=!0,"AES-256"===o?(this.encryptionRadio="AES-256",this.encryptionHandle=""):(this.encryptionRadio="",this.encryptionHandle=o),this.encryption=!0):this.encryption=!1}},confirmEncryption:function(){this.encryptionRadio?this.formData.encryption=this.encryptionRadio:this.formData.encryption=this.encryptionHandle,this.popoverVisible=!1},handleEncryption:function(){this.encryptionRadio=this.encryptionHandle?"":"AES-256"},changeEncrytion:function(){this.popoverVisible=this.encryption,this.encryption||(this.formData.encryption="")},changepipeline:function(){var t=this;this.pipelineData=this.analysisTypeOptions.find((function(e){return e.params===t.formData.pipelineId}))},onSubmit:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;if(!t.inRegion||!t.outRegion)return t.$message.warning("Please region S3."),!1;var a=t.formData,n=a.name,i=a.input,o=a.output,s=a.encryption,r={userId:t.userId,name:n,input:i,output:o,inRegion:t.inRegion,outRegion:t.outRegion,pipeline:t.pipelineData.params,encryption:s};t.btnLoading=!0,Object(l["a"])(r).then((function(e){200===e.code&&(t.$message.success(e.message),t.$emit("close-dialog"))})).catch((function(e){t.btnLoading=!1,800008===e.code&&(t.$refs.dialogShowInfoRef.openDialog("nlp"),t.loading=!1,t.noDataShow=!0)}))}))},selectS3:function(t){"input"===t.type?(this.inRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.inRegion=t.data.value):(this.outRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.outRegion=t.data.value)},openBrowse:function(t,e){this.$refs.chooseResourceRef.openDialog(t,e)},resetForm:function(t){this.$refs[t].resetFields()},getAnalysisType:function(){var t=this;this.pageLoading=!0,Object(l["c"])().then((function(e){200===e.code&&(t.analysisTypeOptions=e.data,t.getCopyData(),t.pageLoading=!1)}))}}},R=D,k=(a("41b8"),Object(u["a"])(R,f,m,!1,null,"22e71e65",null)),E=k.exports,L={name:"",components:{jobList:d,jobCreate:E},props:{},data:function(){return{createStatus:this.$route.query.createStatus}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$router.push("/annotateJobs")},createData:function(t){this.$router.push({path:"/annotateJobs",query:{createStatus:!0}})}},filter:{}},j=L,T=Object(u["a"])(j,n,i,!1,null,"44ae305c",null);e["default"]=T.exports}}]);