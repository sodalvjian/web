(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9cd2cb0"],{"4e73":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("sider"),t._v(" "),e("article",{staticClass:"user-container bg-color-white w"},[t._m(0),t._v(" "),e("section",{staticClass:"p25 mt-10 w"},[e("nav",[e("el-row",{staticClass:"w"},[e("el-col",{attrs:{span:16}},[e("strong",{staticClass:"color-black f15"},[t._v("Month-to-Date Spend By Service")])]),t._v(" "),e("el-col",{attrs:{span:8,align:"right"}},[e("strong",{staticClass:"color-black mr-15 f15"},[t._v("$ "+t._s(t.totalCharges))]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.openBillDetail}},[t._v("Bill Details")])],1)],1)],1),t._v(" "),e("div",{staticClass:"mt-15"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.billingLoading,expression:"billingLoading"}],staticStyle:{width:"100%"},attrs:{data:t.summaryData,border:""}},[e("el-table-column",{attrs:{prop:"name",label:"Summary",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{align:"right",label:"","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"mr-30"},[t._v(t._s(a.row.cost))])]}}])})],1)],1),t._v(" "),e("nav",{staticClass:"mt-40"},[e("el-row",{staticClass:"w"},[e("el-col",{attrs:{span:16}},[e("strong",{staticClass:"color-black f15"},[t._v("Cost Dashboard")])]),t._v(" "),e("el-col",{attrs:{span:8,align:"right"}},[e("el-date-picker",{attrs:{type:"monthrange",size:"small","range-separator":"~","start-placeholder":"Begin month","end-placeholder":"End month"},on:{change:t.changeMonthRange},model:{value:t.monthRange,callback:function(a){t.monthRange=a},expression:"monthRange"}})],1)],1)],1),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.costLoading,expression:"costLoading"}],staticClass:"mt-15"},[e("v-chart",{ref:"bar",staticStyle:{height:"380px",width:"100%"},attrs:{theme:"light",options:t.barData,autoresize:""}})],1),t._v(" "),e("div",{staticClass:"mt-15"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.costLoading,expression:"costLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"analysisType",label:"Analysis Type","min-width":"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"callTimes",label:"Call times",align:"center","min-width":"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"cost",label:"Cost",align:"center","min-width":"180"}})],1)],1)])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"p25 bb-1"},[e("span",{staticClass:"f18 color-black"},[t._v("\n        Billing & Cost Management\n      ")])])}],r=e("bb58"),s=e("2a50"),i=(e("2fe8"),e("ff7b"),e("c230"),[{top:"#8080ff",bottom:"#8080ff"},{top:"#f75a7f",bottom:"#f75a7f"}]),c={backgroundColor:"#fff",grid:{top:"15%",right:"10%",left:"60px",bottom:"12%"},xAxis:[{type:"category",color:"#59588D",data:[],axisLabel:{margin:20,color:"#999",textStyle:{fontSize:14}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1}}],yAxis:[{min:0,axisLabel:{formatter:"{value}",color:"#999",textStyle:{fontSize:14}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(131,101,101,0.2)",type:"dashed"}}}],series:[{type:"bar",data:[],barWidth:"20px",itemStyle:{normal:{color:function(t){var a=i.length;return new s["a"].graphic.LinearGradient(0,0,0,1,[{offset:0,color:i[t.dataIndex%a].top},{offset:1,color:i[t.dataIndex%a].bottom}],!1)},barBorderRadius:[30,30,0,0]}},label:{normal:{show:!0,fontSize:14,fontWeight:"bold",color:"#333",position:"top"}}}]},l=e("6455"),u={name:"",components:{Sider:r["a"],"v-chart":s["a"]},props:{},data:function(){return{billingLoading:!1,costLoading:!1,barData:{},monthRange:[],totalCharges:0,summaryData:[],tableData:[],dashboardData:{minYearMonth:"",maxYearMonth:""}}},computed:{},watch:{},created:function(){},mounted:function(){this.getBillingSummary(),this.getCostDashboard()},beforeDestroy:function(){},methods:{changeMonthRange:function(){this.getCostDashboard()},openBillDetail:function(){this.$router.push("/user/billDetail")},getCostDashboard:function(){var t=this,a={maxYearMonth:this.monthRange&&this.monthRange.length>0?this.monthRange[1]:"",minYearMonth:this.monthRange&&this.monthRange.length>0?this.monthRange[0]:""};this.costLoading=!0,Object(l["j"])(a).then((function(a){t.costLoading=!1;var e=a.data;c.series[0].data=Object.values(e.spendingTrends),c.xAxis[0].data=Object.keys(e.spendingTrends),t.barData=c,t.tableData=e.analysisCosts}))},getBillingSummary:function(){var t=this;this.billingLoading=!0,Object(l["i"])().then((function(a){t.billingLoading=!1;var e=a.data;t.totalCharges=e.totalCharges,t.summaryData=[{name:"General Pipeline",cost:e.charges},{name:"TAX*",cost:e.tax}]}))}}},d=u,m=e("9ca4"),h=Object(m["a"])(d,n,o,!1,null,"e125f756",null);a["default"]=h.exports},6455:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"m",(function(){return r})),e.d(a,"i",(function(){return s})),e.d(a,"h",(function(){return i})),e.d(a,"j",(function(){return c})),e.d(a,"k",(function(){return l})),e.d(a,"l",(function(){return u})),e.d(a,"o",(function(){return d})),e.d(a,"e",(function(){return m})),e.d(a,"a",(function(){return h})),e.d(a,"f",(function(){return g})),e.d(a,"d",(function(){return f})),e.d(a,"g",(function(){return b})),e.d(a,"n",(function(){return p})),e.d(a,"c",(function(){return v}));var n=e("b775");function o(t){return Object(n["a"])({url:"account/user/update/personal/info",method:"post",data:t})}function r(){return Object(n["a"])({url:"account/user/get/personal/info",method:"get"})}function s(){return Object(n["a"])({url:"account/user/get/billing/summary",method:"get"})}function i(t){return Object(n["a"])({url:"account/user/get/bill/details",method:"post",data:t})}function c(t){return Object(n["a"])({url:"account/user/get/cost/dashboard",method:"post",data:t})}function l(t){return Object(n["a"])({url:"account/user/get/order/invoice",method:"post",data:t})}function u(){return Object(n["a"])({url:"account/user/get/payment/due",method:"get"})}function d(t){return Object(n["a"])({url:"account/user/update/password",method:"post",data:t})}function m(t){return Object(n["a"])({url:"account/user/generate/single/invoice/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"account/user/add/card",method:"post",data:t})}function g(t){return Object(n["a"])({url:"account/user/card/details/".concat(t),method:"get"})}function f(t){return Object(n["a"])({url:"account/user/update/card",method:"post",data:t})}function b(t){return Object(n["a"])({url:"account/user/list/card/".concat(t),method:"get"})}function p(t){return Object(n["a"])({url:"account/user/update/default/payment/".concat(t.defaultPayment,"/").concat(t.customerPaymentProfileId),method:"get"})}function v(t){return Object(n["a"])({url:"account/user/delete/card/".concat(t.customerPaymentProfileId),method:"get"})}},bb58:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("aside",{staticClass:"user-sider br-1 bg-color-white"},[e("nav",{staticClass:"tc bb-1 p20"},[e("el-avatar",{attrs:{shape:"circle",size:80,src:t.avatarSrc}}),t._v(" "),e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"color-black f16"},[t._v(t._s(t.userName)+" ")]),e("i",{staticClass:"iconfont iconpro1 "})])],1),t._v(" "),e("ul",{staticClass:"user-sider-mean"},[e("router-link",{attrs:{to:"/user/cost"}},[e("li",{class:t.handleActive("cost")},[t._v("\n      Billing & Cost Management\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/personalInfo"}},[e("li",{class:t.handleActive("personalInfo")},[t._v("\n      Personal Information& credit card\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/accountPassword"}},[e("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account and password\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/orderInvoice"}},[e("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Order and invoice\n    ")])])],1)])},o=[],r=e("4360"),s=e("690a"),i={name:"",components:{},props:{},data:function(){return{userName:r["a"].getters.userInfo.accountName,avatarSrc:r["a"].getters.userInfo.imagePath||s}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var a=this.$route.name;return a===t?"active":""}}},c=i,l=e("9ca4"),u=Object(l["a"])(c,n,o,!1,null,"30d8ca4e",null);a["a"]=u.exports}}]);