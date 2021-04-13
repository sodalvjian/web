(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b7bc2a"],{"0959":function(t,e,a){},"1a34":function(t,e,a){"use strict";a("a13c")},5777:function(t,e,a){"use strict";a("c1fb")},"660b":function(t,e,a){"use strict";a("c0c8")},a13c:function(t,e,a){},c0c8:function(t,e,a){},c1fb:function(t,e,a){},e8da:function(t,e,a){"use strict";a("0959")},ebda:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.createStatus?t._e():a("job-list",{ref:"jobListRef",on:{createData:t.createData}}),t._v(" "),t.createStatus?a("job-create",{ref:"jobCreate",on:{"close-dialog":t.closeDialog}}):t._e()],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"vital-container cb bb-1"},[a("strong",{staticClass:"fl f16 mt-10 w50"},[t._v("Job list")]),t._v(" "),a("div",{staticClass:"fr w50 tl"},[a("el-button",{staticClass:"filter-item shadow",staticStyle:{"margin-left":"-71px"},attrs:{type:"primary",size:"medium",icon:"el-icon-plus"},on:{click:t.createData}},[t._v("Create a job")])],1)]),t._v(" "),a("section",{staticClass:"p20"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table-list-content",staticStyle:{width:"100%"},attrs:{data:t.tableList,"highlight-current-row":""},on:{"row-click":t.viewDetail,"sort-change":t.changeTableSort}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"No.",width:"60",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"170px","show-overflow-tooltip":"",sortable:"custom",label:"Name",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"240px","show-overflow-tooltip":"",align:"left",sortable:"custom",label:"Type Pipeline",prop:"pipeline"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.pipeline))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250px",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-col",{style:e.row.passFileCount?"padding-top:4px":"",attrs:{span:22}},[a("el-tooltip",{staticClass:"cp",attrs:{effect:"dark",disabled:t.setTooltipDisabled(e.row),content:t.setTooltipContent(e.row),placement:"top"}},["STOPPED"===e.row.status||"STOPPED"===e.row.reqStatus||"STOPPING"===e.row.reqStatus?a("span",["FAILED_TASK_LIMIT"===e.row.subStatus||"FAILED_QUOTA_LIMIT"===e.row.subStatus?a("span",[a("i",{staticClass:"el-icon-warning color-yellow f18"})]):a("span",[t._v("--")])]):"STARTED"===e.row.status||"STARTING"===e.row.status?a("div",{staticClass:"progress-running"},[a("el-progress",{staticClass:"w",attrs:{"stroke-width":7,percentage:t.setProcessData(e.row)}}),a("i",{staticClass:"progress-running-icon el-icon-loading",staticStyle:{right:"14%"}})],1):a("el-progress",{attrs:{"stroke-width":7,percentage:t.setPercent(e.row),status:t.setStatus(e.row)}})],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[e.row.passFileCount?a("el-tooltip",{attrs:{placement:"top",content:e.row.passFileCount+" files exceeded the limit"}},[a("i",{staticClass:"el-icon-info f15 color-yellow",staticStyle:{"margin-left":"-5px","margin-top":"2px"}})]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120px",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("UNKNOWN"!==e.row.reqStatus&&e.row.reqStatus?e.row.reqStatus:e.row.status)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"190px",align:"center",sortable:"custom",label:"Create Time",prop:"date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("setHourDate")(e.row.date)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"190px",sortable:"custom",label:"Updated Time",prop:"update"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("setHourDate")(e.row.update))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"Operation",fixed:"right",width:"90px"},scopedSlots:t._u([{key:"default",fn:function(e){return["STARTED"===e.row.status||"STARTING"===e.row.status?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Stop job",placement:"top"}},[a("i",{staticClass:"el-icon-remove color-red cp",on:{click:function(a){return a.stopPropagation(),t.stopData(e.row)}}})]):a("span",[t._v("--")])]}}])})],1),t._v(" "),a("div",{staticClass:"tr mt-25"},[a("el-pagination",{attrs:{background:"","page-size":10,"hide-on-single-page":"",layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},s=[],r=a("74df"),l={name:"InlineEditTable",filters:{},components:{},data:function(){return{tableList:[],setInterval:{},loading:!1,listLoading:!0,page:0,pageSize:10,total:0,propData:"date",orderData:"desc"}},computed:{},created:function(){var t=this;clearInterval(this.setInterval),this.getList(),this.setInterval=setInterval((function(){t.getList(!1)}),45e3)},destroyed:function(){clearInterval(this.setInterval)},methods:{setProcessData:function(t){return t.processedSize/t.totalSize?parseInt(t.processedSize/t.totalSize*100):0},changeTableSort:function(t){this.propData=t.order?t.prop:"date",this.orderData=t.order?"descending"===t.order?"desc":"asc":"desc",this.getList()},setTooltipDisabled:function(t){return!(t.processedErrCount>0)&&("STARTED"!==t.status&&"STARTING"!==t.status&&("FAILED_TASK_LIMIT"!==t.subStatus&&"FAILED_QUOTA_LIMIT"!==t.subStatus))},setTooltipContent:function(t){var e=t.processedSize/t.totalSize;return t.processedErrCount>0?"Error count: ".concat(t.processedErrCount):"STARTED"===t.status||"STARTING"===t.status?(e?Math.round(100*e):0)+"%":"FAILED_TASK_LIMIT"===t.subStatus||"FAILED_QUOTA_LIMIT"===t.subStatus?"Out of limit, please contact us.":void 0},setPercent:function(t){var e=t.processedSize/t.totalSize;return e?Math.round(100*e)>=100?100:Math.round(100*e):"FAILED"===t.status||"COMPLETED"===t.status?100:0},setStatus:function(t){var e=t.processedSize/t.totalSize;return 0===t.totalSize&&0===t.processedCount?"success":t.processedErrCount>0?"warning":e?Math.round(100*e)>=100?"success":"":"exception"},viewDetail:function(t,e,a){this.$router.push({path:"/jobDetails",query:{bizId:t.bizId}})},setRole:function(t){var e=t.roles.map((function(t){return t.name}));return e.join(",")},stopData:function(t){var e=this;this.$confirm("Are you sure you want to stop job?",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){Object(r["c"])(t).then((function(t){200===t.code&&(e.$message({type:"success",message:"Stop success."}),e.getList())}))})).catch((function(){}))},createData:function(){this.$emit("createData","create")},handleCurrentChange:function(t){this.page=t,this.getList()},getList:function(t){var e=this;t||(this.listLoading=!0);var a={page:this.page,pageSize:this.pageSize,propData:this.propData,orderData:this.orderData},i={name:this.$route.query.jobName||""};Object(r["g"])(a,i).then((function(t){200===t.code&&(e.tableList=t.data.content,e.listLoading=!1,e.total=t.data.totalElements)})).catch((function(){e.listLoading=!1}))},resetForm:function(t){this.$refs[t].resetFields()}}},c=l,u=(a("5777"),a("5d22")),p=Object(u["a"])(c,o,s,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vital-container"},[t._m(0),t._v(" "),a("el-form",{ref:"formData",attrs:{"label-position":"top",model:t.formData,"label-width":"80px"}},[a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"mt-20 bg-color-gray bd-1"},[a("el-row",{staticClass:"p20",attrs:{gutter:15}},[a("el-col",{attrs:{span:8}},[a("strong",{staticClass:"f16"},[t._v("Job Setting")])])],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"Job name",prop:"name",rules:t.projectNameRules}},[a("el-input",{attrs:{minlength:"6",maxlength:"256",placeholder:"Input your job name"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"Type pipeline",prop:"pipelineId",rules:{required:!0}}},[a("select-pipeline",{attrs:{size:"big","fetch-list":""},on:{"get-complete-options":t.getCompleteOptions},model:{value:t.formData.pipelineId,callback:function(e){t.$set(t.formData,"pipelineId",e)},expression:"formData.pipelineId"}})],1)],1)])],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"bg-color-gray project-create-section mt-25 bd-1"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock"},[t._v("Input Data")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("strong",{staticClass:"f16 p20 disinblock fl"},[t._v("Output Data")]),t._v(" "),a("el-popover",{attrs:{placement:"top-end",trigger:"manual",width:"300"},model:{value:t.popoverVisible,callback:function(e){t.popoverVisible=e},expression:"popoverVisible"}},[a("el-radio-group",{staticClass:"w",model:{value:t.encryptionRadio,callback:function(e){t.encryptionRadio=e},expression:"encryptionRadio"}},[a("el-radio",{attrs:{label:"AES-256"}},[t._v("AES-256")]),t._v(" "),a("div",{staticClass:"mt-10 encryption-handle"},[a("el-radio",{attrs:{label:""}}),t._v(" "),a("div",{staticClass:"encryption-input"},[a("el-input",{attrs:{clearable:"",placeholder:"Please enter kms key",size:"mini"},on:{change:t.handleEncryption},model:{value:t.encryptionHandle,callback:function(e){t.encryptionHandle=e},expression:"encryptionHandle"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"mt-20 tr"},[a("el-button",{staticClass:"encryption-close-button",attrs:{size:"mini",type:"text",icon:"el-icon-error"},on:{click:function(e){t.popoverVisible=!1}}}),t._v(" "),a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"mini"},on:{click:t.cancerPopoverVisible}},[t._v("Close")]),t._v(" "),a("el-button",{staticClass:"color-green",attrs:{type:"text",size:"mini"},on:{click:t.confirmEncryption}},[t._v("Confirm")])],1),t._v(" "),a("el-switch",{staticClass:"mr-20 fr mt-15 job-create-switch",attrs:{slot:"reference","active-color":"#13ce66","inactive-text":"Encryption",disabled:""},on:{change:t.changeEncrytion},nativeOn:{click:function(e){t.popoverVisible=!0}},slot:"reference",model:{value:t.encryption,callback:function(e){t.encryption=e},expression:"encryption"}})],1)],1)],1),t._v(" "),a("el-divider",{staticClass:"m-0"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"br-1",attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"input",rules:t.s3Rules}},[a("el-col",{staticClass:"pl-0",attrs:{span:18}},[a("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.inputCheckLoading,expression:"inputCheckLoading"}],staticClass:"job-create-input-read",attrs:{placeholder:"s3://mybucket/myinput"},nativeOn:{keyup:function(e){return t.verityhandle("read")}},model:{value:t.formData.input,callback:function(e){t.$set(t.formData,"input",e)},expression:"formData.input"}})],1),t._v(" "),t.needAuthor?a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{loading:t.inputAuthorizeLoading,type:"warning",size:"medium"},on:{click:function(e){return t.authorizeS3Data("read")}}},[t._v("\n                  Authorize\n                ")])],1):t._e()],1),t._v(" "),a("div",{staticClass:"mt-20 f13 lh1-5"},[a("i",{staticClass:"el-icon-warning color-main f15"}),t._v("\n              Example: s3://mybucket/my_input_folder\n              ")])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"p20"},[a("el-form-item",{attrs:{label:"S3 location:",prop:"output"}},[a("el-col",{staticClass:"pl-0",attrs:{span:24}},[a("el-input",{attrs:{disabled:""},model:{value:t.formData.output,callback:function(e){t.$set(t.formData,"output",e)},expression:"formData.output"}})],1)],1)],1)])],1)],1),t._v(" "),a("el-form-item",{staticClass:"mt-40 tc"},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"medium",type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("Confirm")])],1)],1),t._v(" "),a("section",{staticClass:"mt-40 tc"}),t._v(" "),a("choose-resource",{ref:"chooseResourceRef",on:{"select-s3":t.selectS3}}),t._v(" "),a("dialog-show-info",{ref:"dialogShowInfoRef"}),t._v(" "),a("show-s3-info",{ref:"showS3InfoRef"})],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"cb"},[a("strong",{staticClass:"mt-10 fl nav-title f16"},[a("span",{staticClass:"color-gray"},[t._v(" Job details > ")]),t._v(" "),a("small",[t._v("New job")])])])}],m=a("2117"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Choose resource",center:"",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("h3",[a("i",{staticClass:"el-icon-info"}),t._v(" S3")]),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"choose-resource-table",attrs:{"max-height":300,data:t.tableData.filter((function(e){return!t.search||e.label.toLowerCase().includes(t.search.toLowerCase())}))},on:{"selection-change":t.handleSelectionChange,select:t.select,"select-all":t.selectAll}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.label)+"\n      ")]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"fl"},[t._v(" Region ("+t._s(t.tableData.length)+") ")])])],2),t._v(" "),a("el-table-column",{attrs:{align:"right"}},[a("template",{slot:"header"},[a("el-input",{attrs:{size:"mini",placeholder:"Search folder name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"mt-20 mb-20"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.confirmData}},[t._v("Confirm")])],1)])],1)},g=[],b=[{label:"AWS GovCloud (US)",value:"us-gov-west-1"},{label:"AWS GovCloud (US-East)",value:"us-gov-east-1"},{label:"US East (N. Virginia)",value:"us-east-1"},{label:"US East (Ohio)",value:"us-east-2"},{label:"US West (N. California)",value:"us-west-1"},{label:"US West (Oregon)",value:"us-west-2"},{label:"EU (Ireland)",value:"eu-west-1"},{label:"EU (London)",value:"eu-west-2"},{label:"EU (Paris)",value:"eu-west-3"},{label:"EU (Frankfurt)",value:"eu-central-1"},{label:"EU (Stockholm)",value:"eu-north-1"},{label:"Asia Pacific (Hong Kong)",value:"ap-east-1"},{label:"Asia Pacific (Mumbai)",value:"ap-south-1"},{label:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{label:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{label:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{label:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{label:"South America (Sao Paulo)",value:"sa-east-1"},{label:"China (Beijing)",value:"cn-north-1"},{label:"China (Ningxia)",value:"cn-northwest-1"},{label:"Canada (Central)",value:"ca-central-1"},{label:"Middle East (Bahrain)",value:"me-south-1"}],y={name:"",components:{},props:{},data:function(){return{dialogVisible:!1,multipleSelection:[],tableData:b,search:""}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{confirmData:function(){if(0===this.multipleSelection.length)return this.$message.warning("Please select S3."),!1;var t={type:this.type,data:this.multipleSelection[0]};this.$emit("select-s3",t),this.dialogVisible=!1},handleSelectionChange:function(t){this.multipleSelection=t},select:function(t,e){if(t.length>1){var a=t.shift();this.$refs.multipleTable.toggleRowSelection(a,!1)}},selectAll:function(t){t.length>1&&(t.length=1)},handleEdit:function(t,e){},handleDelete:function(t,e){},openDialog:function(t,e){var a=this;this.dialogVisible=!0,this.type=t,e&&this.$nextTick((function(){a.$nextTick((function(){b.map((function(t){t.value===e.value&&a.$refs.multipleTable.toggleRowSelection(t,!0)}))}))}))}}},S=y,w=(a("e8da"),Object(u["a"])(S,v,g,!1,null,null,null)),_=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Verity S3",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("article",[a("el-row",{attrs:{gutter:15}},t._l(t.verityList,(function(e,i){return a("el-col",{key:i,attrs:{span:24}},[a("header",[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._v("\n            Please copy the information to\n            "),a("a",{staticClass:"color-main",attrs:{href:e.url,target:"_blank"}},[a("u",[t._v(" S3 authorization")])])]),t._v(" "),a("div",[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.temp,expression:"item.temp",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"filter-item shadow",attrs:{type:"primary",size:"mini",icon:"el-icon-document-copy"}},[t._v("Copy")])],1)]),t._v(" "),a("section",{staticClass:"mt-20 pb-20"},[a("codemirror",{ref:"jsonEditor",refInFor:!0,attrs:{options:t.cmOptions},model:{value:e.temp,callback:function(a){t.$set(e,"temp",a)},expression:"item.temp"}})],1)])})),1)],1)])},D=[],I=a("8a2b"),T=(a("493e"),a("6de1"),{name:"",components:{codemirror:I["codemirror"]},filters:{},props:{},data:function(){return{dialogVisible:!1,doubleShow:!1,readStatus:!1,whiteStatus:!1,verityList:[],title:"",cmOptions:{tabSize:4,lineWrapping:!0,mode:"json",lineNumbers:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{setTitle:function(t,e){return t.length>1?0===e?"Input":"Output":1===t.length?this.readStatus?"Output":"Input":void 0},openDialog:function(t,e){this.readStatus=t.read,this.whiteStatus=t.write,this.doubleShow=!t.read&&!t.write,this.dialogVisible=!0,this.title="read"===e?"Input":"Output",this.verityList=t.list},copySuccess:function(){this.$message.success("Copy success!")}}}),L=T,k=Object(u["a"])(L,C,D,!1,null,"7c8921de",null),A=k.exports,E=a("ef87"),$=a("4360"),x=/^s3:\/(\/\w+){2,}\/?$/,R=/^[A-Za-z0-9](?!.*[.-]{2})[A-Za-z0-9\-.]{1,61}[A-Za-z0-9]$/,O={name:"InlineEditTable",components:{ChooseResource:_,DialogShowInfo:m["a"],ShowS3Info:A},filters:{},data:function(){var t=function(t,e,a){e.length<6||e.length>256?a(new Error("Please enter 6 characters to 256 characters")):a()},e=function(t,e,a){if(""===e)a(new Error("Please enter s3 location."));else{if(""!==e)if(x.test(e)){var i=e.replace(/^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1"),n=i.split("/")[0];R.test(n)||a(new Error("Please enter the correct s3 name."))}else a(new Error('Please enter the correct s3 location,like:"s3://xxx/xxx".'));a()}};return{analysisTypeOptions:[],analysisChildTypeOptions:[],pageLoading:!1,verityInput:!1,verityOutput:!1,inputHasVerity:!1,outputHasVerity:!1,verityInputData:{},verityOutputData:{},encryptionRadio:"AES-256",encryptionHandle:"",userId:$["a"].getters.userInfo.userId,btnLoading:!1,popoverVisible:!1,encryption:!1,inputCheckLoading:!1,outputCheckLoading:!1,inputAuthorizeLoading:!1,outputAuthorizeLoading:!1,btnOutputLoading:!1,needAuthor:!1,projectNameRules:[{required:!0},{validator:t}],s3Rules:[{required:!0},{validator:e}],formData:{name:"",pipelineId:"",encryption:"",input:"",output:""},pipelineData:{},inRegionName:"",outRegionName:"",inRegion:"",outRegion:"",inRegionLabel:"",outRegionLabel:""}},created:function(){},mounted:function(){},methods:{verityhandle:function(t){var e=this;Object(E["a"])((function(){var a=e.formData.input.replace(/^.+?\/\/([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1"),i=a.split("/")[0];"read"===t&&x.test(e.formData.input)&&R.test(i)?(e.verityInput=!1,e.verifyS3Data("read")):"write"===t&&x.test(e.formData.output)&&(e.verityOutput=!1,e.verifyS3Data("write"))}),800)},authorizeS3Data:function(t){"read"===t?this.verityInput?this.$message.success("Verify success."):this.inputHasVerity?this.$refs.showS3InfoRef.openDialog(this.verityInputData,"read"):this.$message.warning("Please validate first."):this.verityOutput?this.$message.success("Verify success."):this.outputHasVerity?this.$refs.showS3InfoRef.openDialog(this.verityOutputData,"write"):this.$message.warning({message:"Please validate first.",duration:0})},verifyS3Data:function(t){var e=this,a="read"===t?this.formData.input:this.formData.output;this.inputCheckLoading=!0;var i={input:a};Object(r["b"])(i).then((function(t){e.inputCheckLoading=!1,e.inputHasVerity=!0,t.data&&t.data.pass?(e.verityInput=!0,e.$message.success("Verify input success."),e.needAuthor=!1,e.formData.output=t.data.output):(e.formData.output=t.data.output,e.verityInput=!1,e.verityInputData=t.data,200!==t.code?e.$message.warning(t.message):(e.$message.warning("Verity failed, Please authorize."),e.needAuthor=!0))})).catch((function(t){e.inputCheckLoading=!1}))},cancerPopoverVisible:function(){this.popoverVisible=!1,this.encryption=!1},getCopyData:function(){var t=this,e=this.$route.query.copy,a=JSON.parse(sessionStorage.copyJobData),i=a.name,n=a.pipeline,o=a.encryption,s=a.input,r=a.output,l=a.inRegion,c=a.outRegion;if(e){var u=this.analysisChildTypeOptions.find((function(t){return t.params===n}));this.formData={name:i,pipelineId:u?u.params:"",encryption:o,input:s,output:r},this.pipelineData=u?this.analysisChildTypeOptions.find((function(t){return t.params===u.params})):{},this.inRegion=l;var p=b.find((function(t){return l===t.value}));this.inRegionName="".concat(p.label,"(").concat(p.value,")"),this.inRegionLabel=p.label,this.outRegion=c;var d=b.find((function(t){return c===t.value}));this.outRegionName="".concat(d.label,"(").concat(d.value,")"),this.outRegionLabel=d.label,o?("AES-256"===o?(this.encryptionRadio="AES-256",this.encryptionHandle=""):(this.encryptionRadio="",this.encryptionHandle=o),this.encryption=!0):this.encryption=!1,this.$nextTick((function(){t.verifyS3Data("read")}))}},confirmEncryption:function(){this.encryptionRadio?this.formData.encryption=this.encryptionRadio:this.formData.encryption=this.encryptionHandle,this.encryption=!0,this.popoverVisible=!1},handleEncryption:function(){this.encryptionRadio=this.encryptionHandle?"":"AES-256"},changeEncrytion:function(){this.popoverVisible=this.encryption,this.encryption||(this.formData.encryption="")},changepipeline:function(){var t=this;this.pipelineData=this.analysisChildTypeOptions.find((function(e){return e.params===t.formData.pipelineId}))},onSubmit:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;var a=t.formData,i=a.name,n=a.input,o=a.output,s=a.encryption;if(t.verityInput){t.btnLoading=!0;var l={userId:t.userId,name:i,input:n,output:o,pipeline:"string"===typeof t.formData.pipelineId?t.formData.pipelineId:t.formData.pipelineId[1],encryption:s};Object(r["a"])(l).then((function(e){200===e.code&&(t.$message.success(e.message),t.$emit("close-dialog"))})).catch((function(e){t.btnLoading=!1,800008===e.code&&(t.$refs.dialogShowInfoRef.openDialog("nlp"),t.loading=!1,t.noDataShow=!0)}))}else t.$message.warning("Please verity the input data.")}))},selectS3:function(t){"input"===t.type?(this.inRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.inRegion=t.data.value):(this.outRegionName="".concat(t.data.label,"(").concat(t.data.value,")"),this.outRegion=t.data.value)},openBrowse:function(t,e){this.$refs.chooseResourceRef.openDialog(t,e)},resetForm:function(t){this.$refs[t].resetFields()},getCompleteOptions:function(t){this.analysisTypeOptions=t,this.analysisChildTypeOptions=t.map((function(t){return t.version})).flat(1/0),this.formData.pipelineId=this.analysisChildTypeOptions[0].params;var e=this.$route.query.copy;e&&this.getCopyData(),this.pageLoading=!1},getAnalysisType:function(){var t=this;this.pageLoading=!0,Object(r["d"])().then((function(e){if(200===e.code){t.analysisTypeOptions=e.data,t.analysisChildTypeOptions=e.data.map((function(t){return t.version})).flat(1/0),t.formData.pipelineId=t.analysisChildTypeOptions[0].params;var a=t.$route.query.copy;a&&t.getCopyData(),t.pageLoading=!1}}))}}},z=O,j=(a("660b"),a("1a34"),Object(u["a"])(z,f,h,!1,null,"ae40feb8",null)),P=j.exports,V={name:"",components:{jobList:d,jobCreate:P},props:{},data:function(){return{createStatus:this.$route.query.createStatus}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$router.push("/annotateJobs")},createData:function(t){this.$router.push({path:"/annotateJobs",query:{createStatus:!0}})}},filter:{}},N=V,U=Object(u["a"])(N,i,n,!1,null,"d5d04ad0",null);e["default"]=U.exports},ef87:function(t,e,a){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return l}));var n=function t(e){if(Array.isArray(e))return e.map(t);if(e&&"object"===i(e)){for(var a={},n=Object.keys(e),o=0,s=n.length;o<s;o++){var r=n[o];a[r]=t(e[r])}return a}return e},o=function(t){if(Array.isArray(t))return Array.from(new Set(t))},s=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}(),r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,16}$/,l="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "}}]);