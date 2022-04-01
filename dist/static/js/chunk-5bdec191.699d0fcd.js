(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bdec191"],{"3ede":function(t,e,a){"use strict";a("ecd3")},"4bd2":function(t,e,a){},5777:function(t,e,a){"use strict";a("6b01")},"660b":function(t,e,a){"use strict";a("4bd2")},"6b01":function(t,e,a){},bbfb:function(t,e,a){},e8da:function(t,e,a){"use strict";a("bbfb")},ebda:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.createStatus?t._e():a("job-list",{ref:"jobListRef",on:{createData:t.createData}}),t._v(" "),t.createStatus?a("job-create",{ref:"jobCreate",on:{"close-dialog":t.closeDialog}}):t._e()],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"vital-container cb bb-1"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("strong",{staticClass:"f17 color-main"},[t._v("\n          Batch Analysis")])]),t._v(" "),a("el-col",{attrs:{span:18,align:"right"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{size:"small",placeholder:"Search for a job"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleCurrentChange(1)}},model:{value:t.filterData.name,callback:function(e){t.$set(t.filterData,"name",e)},expression:"filterData.name"}},[a("i",{staticClass:"el-input__icon el-icon-search cp",attrs:{slot:"suffix"},on:{click:function(e){return t.handleCurrentChange(1)}},slot:"suffix"})]),t._v(" "),a("el-button",{staticClass:"button-shadow filter-item ml-10",attrs:{type:"primary",size:"small",icon:"el-icon-circle-plus"},on:{click:t.createData}},[t._v("Create a job")])],1)],1)],1),t._v(" "),a("section",{staticClass:"p20"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table-list-content",staticStyle:{width:"100%"},attrs:{data:t.tableList,"highlight-current-row":""},on:{"row-click":t.viewDetail,"sort-change":t.changeTableSort}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"No.",width:"60",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"170px","show-overflow-tooltip":"",sortable:"custom",label:"Name",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"200px","show-overflow-tooltip":"",align:"left",sortable:"custom",label:"Pipeline",prop:"pipeline"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("emptyShow")(e.row.aliasPipeline)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120px",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("UNKNOWN"!==e.row.reqStatus&&e.row.reqStatus?e.row.reqStatus:e.row.status)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"190px",align:"center",sortable:"custom",label:"Created Time",prop:"date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("setHourDate")(e.row.date)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"190px",sortable:"custom",label:"Updated Time",prop:"update"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("setHourDate")(e.row.update))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250px",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-col",{style:e.row.passFileCount?"padding-top:4px":"",attrs:{span:22}},[a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:"STOPPED"===e.row.status||"CANCELED"===e.row.status||"STOPPED"===e.row.reqStatus||"STOPPING"===e.row.reqStatus,expression:"\n                scope.row.status === 'STOPPED' ||\n                  scope.row.status === 'CANCELED' ||\n                  scope.row.reqStatus === 'STOPPED' ||\n                  scope.row.reqStatus === 'STOPPING'\n              "}],staticClass:"cp",attrs:{content:t.setTooltipContent(e.row),placement:"top"}},["FAILED_TASK_LIMIT"===e.row.subStatus||"FAILED_QUOTA_LIMIT"===e.row.subStatus?a("span",[a("i",{staticClass:"el-icon-warning color-yellow f18"})]):a("span",[t._v("--")])]),t._v(" "),a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:"STARTED"===e.row.status||"STARTING"===e.row.status,expression:"\n                scope.row.status === 'STARTED' ||\n                  scope.row.status === 'STARTING'\n              "}],staticClass:"cp",attrs:{effect:"dark",content:t.setTooltipContent(e.row),placement:"top"}},[a("div",{staticClass:"progress-running"},[a("el-progress",{staticClass:"w",attrs:{"stroke-width":8,percentage:t.setProcessData(e.row)}}),a("i",{staticClass:"progress-running-icon el-icon-loading",staticStyle:{right:"1%"}})],1)]),t._v(" "),a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:"COMPLETED"===e.row.status||"FAILED"===e.row.status,expression:"\n                scope.row.status === 'COMPLETED' ||\n                  scope.row.status === 'FAILED'\n              "}],staticClass:"cp",attrs:{content:t.setTooltipContent(e.row),placement:"top"}},[a("el-progress",{attrs:{percentage:t.progressNum(e.row),"stroke-width":8,status:t.setStatus(e.row)}})],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[e.row.passFileCount?a("el-tooltip",{attrs:{placement:"top",content:e.row.passFileCount+" file"+(1!==e.row.passFileCount?"s":"")+" exceeded the limit"}},[a("i",{staticClass:"el-icon-info f15 color-yellow",staticStyle:{"margin-left":"-5px","margin-top":"2px"}})]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"Action",fixed:"right",width:"90px"},scopedSlots:t._u([{key:"default",fn:function(e){return["STARTED"===e.row.status||"STARTING"===e.row.status?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Stop job",placement:"top"}},[a("i",{staticClass:"el-icon-remove color-red cp",on:{click:function(a){return a.stopPropagation(),t.stopData(e.row)}}})]):a("span",[t._v("--")])]}}])})],1),t._v(" "),a("div",{staticClass:"tr mt-25"},[a("el-pagination",{attrs:{background:"","page-size":10,"hide-on-single-page":"",layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},o=[],r=a("52c1"),l=a("74df");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={name:"InlineEditTable",filters:{},components:{},data:function(){return{tableList:[],setInterval:{},loading:!1,listLoading:!0,page:0,pageSize:10,total:0,propData:"date",orderData:"desc",filterData:{name:""}}},computed:u(u({},Object(r["b"])(["sidebar","avatar"])),{},{router:function(){return this.$route.path}}),created:function(){var t=this;clearInterval(this.setInterval),this.getList(),this.setInterval=setInterval((function(){t.getList(!1)}),45e3)},destroyed:function(){clearInterval(this.setInterval)},methods:{progressNum:function(t){var e=t.processedSize/t.totalSize;return e?Math.round(100*e)>=100?100:Math.round(100*e):"FAILED"===t.status||"COMPLETED"===t.status?100:0},toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")},setProcessData:function(t){return t.processedSize/t.totalSize?parseInt(t.processedSize/t.totalSize*100):0},changeTableSort:function(t){this.propData=t.order?t.prop:"date",this.orderData=t.order?"descending"===t.order?"desc":"asc":"desc",this.getList()},setTooltipDisabled:function(t){return!(t.processedErrCount>0)&&("STARTED"!==t.status&&"STARTING"!==t.status&&("FAILED_TASK_LIMIT"!==t.subStatus&&"FAILED_QUOTA_LIMIT"!==t.subStatus))},setTooltipContent:function(t){var e=t.processedSize/t.totalSize;return t.processedErrCount>0?"Error count: ".concat(t.processedErrCount):"FAILED_TASK_LIMIT"===t.subStatus||"FAILED_QUOTA_LIMIT"===t.subStatus?"You have exceeded your account limit, please contact us.":"STARTED"===t.status||"STARTING"===t.status?(e?Math.round(100*e):0)+"%":t.status},setPercent:function(t){var e=t.processedSize/t.totalSize;return e?Math.round(100*e)>=100?100:Math.round(100*e):"FAILED"===t.status||"COMPLETED"===t.status?100:0},setStatus:function(t){var e=t.processedSize/t.totalSize;return 0===t.totalSize&&0===t.processedCount?"success":t.processedErrCount>0?"warning":e?Math.round(100*e)>=100?"success":null:"exception"},viewDetail:function(t,e,a){this.$router.push({path:"/jobDetails",query:{bizId:t.bizId}})},setRole:function(t){var e=t.roles.map((function(t){return t.name}));return e.join(",")},stopData:function(t){var e=this;this.$confirm("Are you sure you want to stop job?",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){Object(l["c"])(t).then((function(t){200===t.code&&(e.$message({type:"success",message:"Stop success."}),e.getList())}))})).catch((function(){}))},createData:function(){this.$emit("createData","create")},handleCurrentChange:function(t){this.page=t,this.getList()},getList:function(t){var e=this;t||(this.listLoading=!0);var a={page:this.page,pageSize:this.pageSize,propData:this.propData,orderData:this.orderData},n={name:this.filterData.name};Object(l["g"])(a,n).then((function(t){200===t.code&&(e.tableList=t.data.content,e.listLoading=!1,e.total=t.data.totalElements)})).catch((function(){e.listLoading=!1}))},resetForm:function(t){this.$refs[t].resetFields()}}},f=d,h=(a("5777"),a("cba8")),m=Object(h["a"])(f,i,o,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vital-container"},[a("nav",{staticClass:"cb"},[a("div",{staticClass:"f17 color-main"},[a("router-link",{staticClass:"color-main f17",attrs:{to:"/annotateJobs"}},[a("i",{staticClass:"el-icon-arrow-left fb"}),t._v(" "),a("span",{staticClass:"color-hui"},[t._v("Batch Analysis")])]),t._v(" "),a("span",{staticClass:"ml-5 mr-5"},[t._v("/")]),t._v(" New job\n    ")],1)]),t._v(" "),a("el-form",{ref:"formData",attrs:{"label-position":"top","status-icon":!t.needAuthor,model:t.formData,"label-width":"80px"}},[a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"mt-20 bg-color-gray bd-1"},[a("el-row",{staticClass:"p20",attrs:{gutter:15}},[a("el-col",{attrs:{span:8}},[a("strong",{staticClass:"f16"},[t._v("Job Setting")])])],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"Job name",prop:"name",rules:t.projectNameRules}},[a("el-input",{attrs:{minlength:"1",maxlength:"256",placeholder:"Input your job name"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Select NLP Pipeline",prop:"pipelineId",rules:{required:!0}}},[a("select-pipeline-split",{ref:"selectPipelineSplitRef",staticClass:"mt-15",attrs:{size:"big","fetch-list":""},on:{"get-complete-data":t.getCompleteData,"get-complete-options":t.getCompleteOptions},model:{value:t.formData.pipelineId,callback:function(e){t.$set(t.formData,"pipelineId",e)},expression:"formData.pipelineId"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"p20"})])],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray project-create-section mt-25 bd-1"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock"},[t._v("Input Data")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock fl"},[t._v("Output Data")]),t._v(" "),a("el-switch",{staticClass:"mr-20 fr mt-15 job-create-switch",attrs:{"active-color":"#409EFF","inactive-text":"Encryption"},model:{value:t.formData.encryption,callback:function(e){t.$set(t.formData,"encryption",e)},expression:"formData.encryption"}})],1)],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:15}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"input",rules:t.s3Rules}},[a("el-col",{staticClass:"pl-0",attrs:{span:14}},[a("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.inputCheckLoading,expression:"inputCheckLoading"}],staticClass:"job-create-input-read",attrs:{placeholder:"s3://mybucket"},nativeOn:{paste:function(e){return t.verityhandle("read")},keyup:function(e){return t.verityhandle("read")}},model:{value:t.formData.input,callback:function(e){t.$set(t.formData,"input",e)},expression:"formData.input"}})],1),t._v(" "),t.needAuthor?a("el-col",{attrs:{span:10}},[a("el-button",{attrs:{loading:t.inputAuthorizeLoading,type:"warning",size:"medium"},on:{click:function(e){return t.authorizeS3Data("read")}}},[t._v("\n                  Authorize\n                ")]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Verify again",placement:"top"}},[a("el-button",{attrs:{loading:t.inputAuthorizeLoading,type:"primary",size:"medium",icon:"el-icon-key"},on:{click:function(e){return t.verityhandle("read")}}})],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"mt-20 f13 lh1-5"},[a("i",{staticClass:"el-icon-warning color-main f15"}),t._v("\n              Example: s3://mybucket/my_input_folder\n            ")])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"output"}},[a("el-col",{staticClass:"pl-0",attrs:{span:24}},[a("el-input",{attrs:{disabled:""},model:{value:t.formData.output,callback:function(e){t.$set(t.formData,"output",e)},expression:"formData.output"}})],1)],1)],1)])],1)],1),t._v(" "),a("el-form-item",{staticClass:"mt-40 tc"},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("Cancel")]),t._v(" "),a("el-button",{staticClass:"button-shadow",attrs:{size:"medium",type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("Confirm")])],1)],1),t._v(" "),a("section",{staticClass:"mt-40 tc"}),t._v(" "),a("choose-resource",{ref:"chooseResourceRef",on:{"select-s3":t.selectS3}}),t._v(" "),a("dialog-show-info",{ref:"dialogShowInfoRef"}),t._v(" "),a("show-s3-info",{ref:"showS3InfoRef"})],1)},b=[],y=a("2117"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Choose resource",center:"",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("h3",[a("i",{staticClass:"el-icon-info"}),t._v(" S3")]),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"choose-resource-table",attrs:{"max-height":300,data:t.tableData.filter((function(e){return!t.search||e.label.toLowerCase().includes(t.search.toLowerCase())}))},on:{"selection-change":t.handleSelectionChange,select:t.select,"select-all":t.selectAll}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.label)+"\n      ")]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"fl"},[t._v(" Region ("+t._s(t.tableData.length)+") ")])])],2),t._v(" "),a("el-table-column",{attrs:{align:"right"}},[a("template",{slot:"header"},[a("el-input",{attrs:{size:"mini",placeholder:"Search folder name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"mt-20 mb-20"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.confirmData}},[t._v("Confirm")])],1)])],1)},S=[],D=[{label:"AWS GovCloud (US)",value:"us-gov-west-1"},{label:"AWS GovCloud (US-East)",value:"us-gov-east-1"},{label:"US East (N. Virginia)",value:"us-east-1"},{label:"US East (Ohio)",value:"us-east-2"},{label:"US West (N. California)",value:"us-west-1"},{label:"US West (Oregon)",value:"us-west-2"},{label:"EU (Ireland)",value:"eu-west-1"},{label:"EU (London)",value:"eu-west-2"},{label:"EU (Paris)",value:"eu-west-3"},{label:"EU (Frankfurt)",value:"eu-central-1"},{label:"EU (Stockholm)",value:"eu-north-1"},{label:"Asia Pacific (Hong Kong)",value:"ap-east-1"},{label:"Asia Pacific (Mumbai)",value:"ap-south-1"},{label:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{label:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{label:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{label:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{label:"South America (Sao Paulo)",value:"sa-east-1"},{label:"China (Beijing)",value:"cn-north-1"},{label:"China (Ningxia)",value:"cn-northwest-1"},{label:"Canada (Central)",value:"ca-central-1"},{label:"Middle East (Bahrain)",value:"me-south-1"}],C={name:"",components:{},props:{},data:function(){return{dialogVisible:!1,multipleSelection:[],tableData:D,search:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{confirmData:function(){if(0===this.multipleSelection.length)return this.$message.warning("Please select S3."),!1;var t={type:this.type,data:this.multipleSelection[0]};this.$emit("select-s3",t),this.dialogVisible=!1},handleSelectionChange:function(t){this.multipleSelection=t},select:function(t,e){if(t.length>1){var a=t.shift();this.$refs.multipleTable.toggleRowSelection(a,!1)}},selectAll:function(t){t.length>1&&(t.length=1)},handleEdit:function(t,e){},handleDelete:function(t,e){},openDialog:function(t,e){var a=this;this.dialogVisible=!0,this.type=t,e&&this.$nextTick((function(){a.$nextTick((function(){D.map((function(t){t.value===e.value&&a.$refs.multipleTable.toggleRowSelection(t,!0)}))}))}))}}},_=C,I=(a("e8da"),Object(h["a"])(_,w,S,!1,null,null,null)),L=I.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Verify S3",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("article",[a("el-row",{attrs:{gutter:15}},t._l(t.verityList,(function(e,n){return a("el-col",{key:n,attrs:{span:24}},[a("header",[a("p",[t._v("\n            Please copy the following configuration information and paste it\n            to your\n            "),a("a",{staticClass:"color-main",attrs:{href:e.url,target:"_blank"}},[a("u",[t._v(" AWS S3 Bucket policy")])]),t._v(".\n          ")]),t._v(" "),a("div",[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.temp,expression:"item.temp",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"filter-item shadow",attrs:{type:"primary",size:"mini",icon:"el-icon-document-copy"}},[t._v("Copy")])],1)]),t._v(" "),a("section",{staticClass:"mt-20 pb-20"},[a("codemirror",{ref:"jsonEditor",refInFor:!0,attrs:{options:t.cmOptions},model:{value:e.temp,callback:function(a){t.$set(e,"temp",a)},expression:"item.temp"}})],1)])})),1)],1)])},E=[],T=a("8a2b"),O=(a("1ac7"),a("1beb"),{name:"",components:{codemirror:T["codemirror"]},filters:{},props:{},data:function(){return{dialogVisible:!1,doubleShow:!1,readStatus:!1,whiteStatus:!1,verityList:[],title:"",cmOptions:{tabSize:4,lineWrapping:!0,mode:"json",lineNumbers:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{setTitle:function(t,e){return t.length>1?0===e?"Input":"Output":1===t.length?this.readStatus?"Output":"Input":void 0},openDialog:function(t,e){this.readStatus=t.read,this.whiteStatus=t.write,this.doubleShow=!t.read&&!t.write,this.dialogVisible=!0,this.title="read"===e?"Input":"Output",this.verityList=t.list},copySuccess:function(){this.$message.success("S3 Bucket policy successfully copied.")}}}),A=O,$=Object(h["a"])(A,k,E,!1,null,"aff23234",null),x=$.exports,P=a("ef87"),R=a("4360"),z=/^s3:\/(\/\w+){1,}\/?$/,j=/(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/,N={name:"InlineEditTable",components:{ChooseResource:L,DialogShowInfo:y["a"],ShowS3Info:x},filters:{},data:function(){var t=function(t,e,a){e.length<1||e.length>100?a(new Error("Please enter 1 characters to 100 characters")):a()},e=function(t,e,a){if(""===e)a(new Error("Please enter s3 location."));else{if(""!==e)if(z.test(e)){var n=e.replace(/^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1"),s=n.split("/")[0];j.test(s)||a(new Error("Please enter the correct S3 URI."))}else a(new Error('Please enter the correct s3 location,like:"s3://xxx".'));a()}};return{analysisTypeOptions:[],analysisChildTypeOptions:[],pageLoading:!1,verityInput:!1,verityOutput:!1,inputHasVerity:!1,outputHasVerity:!1,verityInputData:{},verityOutputData:{},encryptionRadio:"AES-256",encryptionHandle:"",userId:R["a"].getters.userInfo.userId,btnLoading:!1,popoverVisible:!1,encryption:!1,inputCheckLoading:!1,outputCheckLoading:!1,inputAuthorizeLoading:!1,outputAuthorizeLoading:!1,btnOutputLoading:!1,needAuthor:!1,selectPipeline:{},projectNameRules:[{required:!0,message:"Job name is required"},{validator:t}],s3Rules:[{required:!0,message:"S3 location is required"},{validator:e}],formData:{name:"",pipelineId:"",encryption:!1,input:"",output:""},pipelineData:{},inRegionName:"",outRegionName:"",inRegion:"",outRegion:"",inRegionLabel:"",outRegionLabel:"",messageData:""}},created:function(){},mounted:function(){this.showIconStatus=!0,this.messageData="";var t=this.$route.query.copy;t&&this.getCopyData()},methods:{verityhandle:function(t){var e=this;Object(P["a"])((function(){var a=e.formData.input.replace(/^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1"),n=a.split("/")[0];"read"===t&&z.test(e.formData.input)&&j.test(n)?(e.verityInput=!1,e.verifyS3Data("read")):"write"===t&&z.test(e.formData.output)&&(e.verityOutput=!1,e.verifyS3Data("write"))}),800)},authorizeS3Data:function(t){"read"===t?this.verityInput?this.$message.success("Verify success."):this.inputHasVerity?this.$refs.showS3InfoRef.openDialog(this.verityInputData,"read"):this.$message.warning("Please validate first."):this.verityOutput?this.$message.success("Verify success."):this.outputHasVerity?this.$refs.showS3InfoRef.openDialog(this.verityOutputData,"write"):this.$message.warning({message:"Please validate first.",duration:0})},verifyS3Data:function(t){var e=this,a="read"===t?this.formData.input:this.formData.output;this.inputCheckLoading=!0;var n={input:a};Object(l["b"])(n).then((function(t){e.inputCheckLoading=!1,e.inputHasVerity=!0,e.messageData="",t.data&&t.data.pass?(e.verityInput=!0,e.$message.success("Authorization checks successfully completed."),e.needAuthor=!1,e.formData.output=t.data.output):(200!==t.code?(e.$message.warning(t.message),e.needAuthor=!1,e.messageData=t.message):(e.$message.warning("Authorization error. Please check the path of your S3 folder and grant Meric NLP permissions to verify your S3 Bucket."),e.needAuthor=!0),e.formData.output=t.data?t.data.output:"",e.verityInput=!1,e.verityInputData=t.data||{})})).catch((function(t){e.messageData="",e.inputCheckLoading=!1,e.verityInput=!1,e.needAuthor=!0}))},cancerPopoverVisible:function(){this.popoverVisible=!1,this.encryption=!1},getCopyData:function(){var t=this,e=this.$route.query.copy,a=JSON.parse(sessionStorage.copyJobData),n=a.name,s=a.pipeline,i=a.encryption,o=a.input,r=a.output,l=a.inRegion,c=a.outRegion;e&&(this.$nextTick((function(){t.formData={name:n,pipelineId:s,encryption:!!i,input:o,output:r},t.inRegion=l;var e=D.find((function(t){return l===t.value}));t.inRegionName="".concat(e.label,"(").concat(e.value,")"),t.inRegionLabel=e.label,t.outRegion=c;var a=D.find((function(t){return c===t.value}));t.outRegionName="".concat(a.label,"(").concat(a.value,")"),t.outRegionLabel=a.label,i?("AES-256"===i?(t.encryptionRadio="AES-256",t.encryptionHandle=""):(t.encryptionRadio="",t.encryptionHandle=i),t.encryption=!0):t.encryption=!1,t.$refs.selectPipelineSplitRef.getData(s)})),this.$nextTick((function(){t.verifyS3Data("read")})))},confirmEncryption:function(){this.encryptionRadio?this.formData.encryption=this.encryptionRadio:this.formData.encryption=this.encryptionHandle,this.encryption=!0,this.popoverVisible=!1},onSubmit:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;var a=t.formData,n=a.name,s=a.input,i=a.output,o=a.encryption;if(t.verityInput){t.btnLoading=!0;var r={userId:t.userId,name:n,input:s,output:i,pipeline:"string"===typeof t.formData.pipelineId?t.formData.pipelineId:t.formData.pipelineId[1],encryption:o?"AES-256":""};Object(l["a"])(r).then((function(e){200===e.code&&(t.$message.success("Batch Analysis <".concat(n,"> started")),t.$emit("close-dialog"))})).catch((function(e){t.btnLoading=!1,800008===e.code&&(t.$refs.dialogShowInfoRef.openDialog("job"),t.loading=!1,t.noDataShow=!0)}))}else t.$message.warning(t.messageData||"Please verify the input data.")}))},selectS3:function(t){"input"===t.type?(this.inRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.inRegion=t.data.value):(this.outRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.outRegion=t.data.value)},openBrowse:function(t,e){this.$refs.chooseResourceRef.openDialog(t,e)},resetForm:function(t){this.$refs[t].resetFields()},getCompleteData:function(t){this.selectPipeline=t},getCompleteOptions:function(t){this.analysisTypeOptions=t,this.analysisChildTypeOptions=t.map((function(t){return t.version})).flat(1/0),this.pageLoading=!1}}},V=N,F=(a("660b"),a("3ede"),Object(h["a"])(V,v,b,!1,null,"f408cb5e",null)),M=F.exports,U={name:"",components:{jobList:g,jobCreate:M},props:{},data:function(){return{createStatus:this.$route.query.createStatus}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$router.push("/annotateJobs")},createData:function(t){this.$router.push({path:"/annotateJobs",query:{createStatus:!0}})}},filter:{}},q=U,B=Object(h["a"])(q,n,s,!1,null,"4b745824",null);e["default"]=B.exports},ecd3:function(t,e,a){}}]);