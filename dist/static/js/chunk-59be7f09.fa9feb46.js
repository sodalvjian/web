(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59be7f09"],{"30ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"bg-color-white w"},[a("nav",{staticClass:"p25 bb-1"},[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:8}},[a("strong",{staticClass:"f18 color-black"},[a("router-link",{staticClass:"color-main f19",attrs:{to:"/user/cost"}},[a("i",{staticClass:"el-icon-arrow-left mr-5"}),t._v("Personal\n            center")]),t._v("\n          / Bill Details\n        ")],1)]),t._v(" "),a("el-col",{attrs:{span:16,align:"right"}},[a("span",{staticClass:"mr-5"},[t._v("Recent")]),t._v(" "),a("el-select",{attrs:{clearable:"",size:"small",placeholder:"Please select"},on:{change:t.handleSearch},model:{value:t.filterForm.recentMonth,callback:function(e){t.$set(t.filterForm,"recentMonth",e)},expression:"filterForm.recentMonth"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-date-picker",{attrs:{size:"small",type:"daterange","value-format":"yyyy-MM-dd","range-separator":"~","start-placeholder":"Begin time","end-placeholder":"End time"},on:{change:t.handleSearch},model:{value:t.filterForm.dateRange,callback:function(e){t.$set(t.filterForm,"dateRange",e)},expression:"filterForm.dateRange"}})],1)],1)],1),t._v(" "),a("section",{staticClass:"p25 w"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{prop:"serialNumber",label:"Serial number",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"analysisType",align:"center",label:"Pipeline","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",align:"center",label:"Type",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"Create Time",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("setHourDate")(e.row.cDate))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"fieldNumber",align:"center",label:"Number of field","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cost",label:"Cost",align:"center","min-width":"180"}})],1),t._v(" "),a("div",{staticClass:"tr mt-20"},[a("el-pagination",{attrs:{"page-size":t.pageSize,background:"","hide-on-single-page":!0,layout:"prev, pager, next,jumper",total:t.total,"current-page":t.page},on:{"current-change":t.handleCurrentChange}})],1)],1)])},r=[],o=a("6455"),l={name:"",components:{},props:{},data:function(){return{tableLoading:!1,dateData:[],filterForm:{recentMonth:0,dateRange:[]},options:[{value:0,label:"Current month"},{value:1,label:"1 month"},{value:2,label:"2 month"},{value:3,label:"3 month"},{value:4,label:"4 month"},{value:5,label:"5 month"},{value:6,label:"6 month"}],tableData:[],value:"",total:0,pageSize:10,page:1}},computed:{},watch:{},created:function(){},mounted:function(){this.getData()},beforeDestroy:function(){},methods:{handleCurrentChange:function(t){this.page=t,this.getData()},handleSearch:function(){this.page=1,this.getData()},getData:function(){var t=this,e={countPerPage:this.pageSize,endDate:this.filterForm.dateRange?this.filterForm.dateRange[1]:"",jobName:"",page:this.page,recentMonth:this.filterForm.recentMonth,startDate:this.filterForm.dateRange?this.filterForm.dateRange[0]:""};this.tableLoading=!0,Object(o["i"])(e).then((function(e){t.tableLoading=!1;var a=e.data;t.tableData=a.billDetailList,t.total=a.totalCount}))}}},c=l,u=a("5d22"),i=Object(u["a"])(c,n,r,!1,null,"d724a128",null);e["default"]=i.exports},6455:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"o",(function(){return o})),a.d(e,"j",(function(){return l})),a.d(e,"i",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"l",(function(){return i})),a.d(e,"m",(function(){return s})),a.d(e,"r",(function(){return d})),a.d(e,"f",(function(){return m})),a.d(e,"e",(function(){return f})),a.d(e,"a",(function(){return b})),a.d(e,"g",(function(){return h})),a.d(e,"d",(function(){return p})),a.d(e,"h",(function(){return g})),a.d(e,"q",(function(){return v})),a.d(e,"c",(function(){return j})),a.d(e,"n",(function(){return w})),a.d(e,"p",(function(){return y}));var n=a("b775");function r(t){return Object(n["a"])({url:"account/user/update/personal/info",method:"post",data:t})}function o(){return Object(n["a"])({url:"account/user/get/personal/info",method:"get"})}function l(){return Object(n["a"])({url:"account/user/get/billing/summary",method:"get"})}function c(t){return Object(n["a"])({url:"account/user/get/bill/details",method:"post",data:t})}function u(t){return Object(n["a"])({url:"account/user/get/cost/dashboard",method:"post",data:t})}function i(t){return Object(n["a"])({url:"account/user/get/order/invoice",method:"post",data:t})}function s(){return Object(n["a"])({url:"account/user/get/payment/due",method:"get"})}function d(t){return Object(n["a"])({url:"account/user/update/password",method:"post",data:t})}function m(t){return Object(n["a"])({url:"account/user/generate/single/invoice/".concat(t[0]),method:"get"})}function f(t){return Object(n["a"])({url:"account/user/generate/multi/invoice",method:"post",data:t})}function b(t){return Object(n["a"])({url:"account/user/add/card",method:"post",data:t})}function h(t){return Object(n["a"])({url:"account/user/card/details/".concat(t),method:"get"})}function p(t){return Object(n["a"])({url:"account/user/update/card",method:"post",data:t})}function g(t){return Object(n["a"])({url:"account/user/list/card/".concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"account/user/update/default/payment/".concat(t.defaultPayment,"/").concat(t.customerPaymentProfileId),method:"get"})}function j(t){return Object(n["a"])({url:"account/user/delete/card/".concat(t.customerPaymentProfileId),method:"get"})}function w(){return Object(n["a"])({url:"jobbizweb/quotasettings",method:"get"})}function y(t){return Object(n["a"])({url:"jobbizweb/voucher",method:"get",params:t})}}}]);