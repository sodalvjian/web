(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-959ba28c"],{1288:function(t,a,e){"use strict";e("5461")},"12aa":function(t,a,e){},"4e48":function(t,a,e){"use strict";e("12aa")},"4e73":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("sider"),t._v(" "),e("article",{staticClass:"user-container bg-color-white w"},[e("nav",{staticClass:"p15 bb-10 bt-10"},[e("strong",{staticClass:"f18 color-main"},[e("router-link",{staticClass:"color-main f19",attrs:{to:"/"}},[e("i",{staticClass:"mr-10 el-icon-arrow-left fb"})]),t._v("\n        Bills & Credits\n      ")],1)]),t._v(" "),e("el-row",[e("el-col",{attrs:{span:11}},[e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.couponLoading,expression:"couponLoading"}],staticClass:"p20 bill-top-content has-border"},[e("strong",{staticClass:"color-main f15"},[t._v(" Vouchers")]),t._v(" "),e("el-carousel",{attrs:{autoplay:!1,"indicator-position":"outside",arrow:"always",loop:!1,height:"125px"}},t._l(t.couponData,(function(a,s){return e("el-carousel-item",{key:s},[e("el-row",{staticClass:"mt-50",attrs:{gutter:10}},[e("el-col",{attrs:{span:4,align:"center"}},[e("svg",{staticClass:"icon f60",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-3"}})])]),t._v(" "),e("el-col",{attrs:{span:9}},[e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"f32 color-main"},[t._v("$ "+t._s(a.quota))])]),t._v(" "),e("div",{staticClass:"mt-10 color-8"},[t._v("\n                    Expiration date："+t._s(t._f("setNormalDate")(a.expireDate))+"\n                  ")])]),t._v(" "),e("el-col",{attrs:{span:4,align:"center"}},[e("svg",{staticClass:"icon f60",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-4"}})])]),t._v(" "),e("el-col",{attrs:{span:7}},[e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"f32 color-main"},[t._v("$ "+t._s(a.remaining))])]),t._v(" "),e("div",{staticClass:"mt-10 color-8"},[t._v("Remaining balance")])])],1)],1)})),1)],1)]),t._v(" "),e("el-col",{attrs:{span:13}},[e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.billingLoading,expression:"billingLoading"}],staticClass:"p20 bill-top-content"},[e("strong",{staticClass:"color-main f15 tl"},[t._v("\n            Month-to-Date Spend By Service")]),t._v(" "),e("el-row",{staticClass:"mt-20",attrs:{gutter:10}},[e("el-col",{attrs:{span:8}},[e("el-col",{attrs:{span:8,align:"center"}},[e("svg",{staticClass:"icon f60",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-5"}})])]),t._v(" "),e("el-col",{attrs:{span:16}},[e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"f32 color-main"},[t._v("$ "+t._s(t.summaryData.charges))])]),t._v(" "),e("div",{staticClass:"mt-10 color-8"},[t._v("\n                  Charges\n                ")])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-col",{attrs:{span:8,align:"center"}},[e("svg",{staticClass:"icon f60",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-2"}})])]),t._v(" "),e("el-col",{attrs:{span:16}},[e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"f32 color-main"},[t._v("$ "+t._s(t.summaryData.tax))])]),t._v(" "),e("div",{staticClass:"mt-10 color-8"},[t._v("TAX*")])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-col",{attrs:{span:8,align:"center"}},[e("svg",{staticClass:"icon f60",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-2"}})])]),t._v(" "),e("el-col",{attrs:{span:16}},[e("div",{staticClass:"mt-10"},[e("strong",{staticClass:"f32 color-main"},[t._v("$ "+t._s(t.summaryData.totalCharges))])]),t._v(" "),e("div",{staticClass:"mt-10 color-8"},[t._v("Summary")])])],1)],1)],1)])],1),t._v(" "),e("section",{staticClass:"p25 w"},[e("nav",{staticClass:"mt-40"},[e("el-row",{staticClass:"w"},[e("el-col",{attrs:{span:16}},[e("strong",{staticClass:"color-main f15"},[t._v("Bill History")])]),t._v(" "),e("el-col",{attrs:{span:8,align:"right"}},[e("el-date-picker",{attrs:{type:"monthrange",size:"small","range-separator":"~","start-placeholder":"Begin month","value-format":"yyyy-MM","end-placeholder":"End month","picker-options":t.pickerOptions},on:{change:t.changeMonthRange},model:{value:t.monthRange,callback:function(a){t.monthRange=a},expression:"monthRange"}})],1)],1)],1),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.costLoading,expression:"costLoading"}],staticClass:"mt-15"},[0===t.tableData.length?e("no-data"):e("v-chart",{ref:"bar",staticStyle:{height:"380px",width:"100%"},attrs:{theme:"light",options:t.barData,autoresize:""}})],1),t._v(" "),e("div",{staticClass:"mt-40"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.costLoading,expression:"costLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"analysisType",label:"Pipeline","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(t._f("emptyShow")(a.row.aliasPipeline))+"\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"type",label:"Type",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"fileCount",label:"Number of files",align:"center","min-width":"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"cost",label:"Cost",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" $ "+t._s(a.row.cost)+" ")]}}])})],1)],1)]),t._v(" "),e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.feeLoading,expression:"feeLoading"}],staticClass:"mt-30 p20",staticStyle:{"border-top":"10px solid #f5f7fe"}},[e("el-row",{staticClass:"mt-10",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-col",{attrs:{span:24,align:"center"}},[e("strong",{staticClass:"f16"},[t._v("Monthly maximum limit")]),e("i",{staticClass:"ml-10 el-icon-edit cp f18 color-light-blue",on:{click:t.handleConnect}})]),t._v(" "),e("el-col",{staticClass:"mt-20",attrs:{span:24,align:"center"}},[e("strong",{staticClass:"f26 color-main"},[t._v("$ "+t._s(t.quotaSetting.QUOTA.val))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-col",{attrs:{span:24,align:"center"}},[e("strong",{staticClass:"f16"},[t._v("Maximum single task limit")]),e("i",{staticClass:"ml-10 el-icon-edit cp f18 color-light-blue",on:{click:t.handleConnect}})]),t._v(" "),e("el-col",{staticClass:"mt-20",attrs:{span:24,align:"center"}},[e("strong",{staticClass:"f26 color-main"},[t._v("$ "+t._s(t.quotaSetting.TASK_QUOTA.val))])])],1)],1)],1)],1)],1)},n=[],o=e("4360"),i=e("bb58"),l=e("2a50"),r=(e("6722"),e("58f8"),e("f4b1"),[{top:"#3688FF",bottom:"#3688FF"},{top:"#3688FF",bottom:"#3688FF"}]),c={backgroundColor:"#fff",grid:{top:"15%",right:0,left:"60px",bottom:"12%"},tooltip:{trigger:"axis",padding:10},dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleStyle:{color:"#3693ff"}},{type:"inside",show:!0,height:15,start:10,end:80}],xAxis:[{type:"category",color:"#59588D",data:[],axisLabel:{margin:20,color:"#999",textStyle:{fontSize:14}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1}}],yAxis:[{min:0,axisLabel:{formatter:"${value}",color:"#999",textStyle:{fontSize:14}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(131,101,101,0.2)",type:"dashed"}}}],series:[{type:"bar",data:[],barWidth:"20px",itemStyle:{normal:{color:function(t){var a=r.length;return new l["a"].graphic.LinearGradient(0,0,0,1,[{offset:0,color:r[t.dataIndex%a].top},{offset:1,color:r[t.dataIndex%a].bottom}],!1)},barBorderRadius:[30,30,0,0]}},label:{normal:{show:!0,fontSize:14,fontWeight:"bold",formatter:"${c}",color:"#2B3067",position:"top"}}}]},d=e("caaf"),u=e.n(d),g=e("6455"),h={name:"",components:{Sider:i["a"],"v-chart":l["a"]},props:{},data:function(){return{pickerOptions:{shortcuts:[{text:"This month",onClick:function(t){t.$emit("pick",[new Date,new Date])}},{text:"This year",onClick:function(t){var a=new Date,e=new Date((new Date).getFullYear(),0);t.$emit("pick",[e,a])}},{text:"Last 6 months",onClick:function(t){var a=new Date,e=new Date;e.setMonth(e.getMonth()-6),t.$emit("pick",[e,a])}}]},billingLoading:!1,costLoading:!1,couponLoading:!1,userId:o["a"].getters.userInfo.userId,barData:{},monthRange:[u()().add(-1,"years").add(1,"months").format("yyyy-MM"),u()().format("yyyy-MM")],totalCharges:0,summaryData:{},tableData:[],dashboardData:{minYearMonth:"",maxYearMonth:""},couponData:[],feeLoading:!1,quotaSetting:{QUOTA:{},TASK_QUOTA:{},MAIL_TO_USER:{}}}},computed:{},watch:{},created:function(){},mounted:function(){this.getBillingSummary(),this.getCostDashboard(),this.getVoucher(),this.getVoucherPublic()},beforeDestroy:function(){},methods:{handleConnect:function(){this.$alert('\n        <div class="w100 tc">\n        <svg class="icon f60" aria-hidden="true">\n                    <use xlink:href="#icon-contact" />\n                  </svg>\n        </div>\n        <div class="w100 mt-15 mb-15">\n        <strong>To change your limit, contact us at <a class="color-light-blue" href=mailto:'.concat(this.quotaSetting.MAIL_TO_USER.val,">").concat(this.quotaSetting.MAIL_TO_USER.val,"</a></strong>\n        </div>\n        "),{center:!0,closeOnClickModal:!0,dangerouslyUseHTMLString:!0,customClass:"show-connect-info"})},getVoucherPublic:function(){var t=this;this.feeLoading=!0,Object(g["m"])().then((function(a){t.feeLoading=!1,200===a.code&&(t.quotaSetting=a.data)}))},changeMonthRange:function(){this.getBillingSummary(),this.getCostDashboard()},openBillDetail:function(){this.$router.push("/user/billDetail")},getVoucher:function(){var t=this,a={userId:this.userId};this.couponLoading=!0,Object(g["o"])(a).then((function(a){t.couponLoading=!1,200===a.code&&(t.couponData=a.data)}))},getCostDashboard:function(){var t=this,a={maxYearMonth:this.monthRange&&this.monthRange.length>0?this.monthRange[1]:"",minYearMonth:this.monthRange&&this.monthRange.length>0?this.monthRange[0]:""};this.costLoading=!0,Object(g["i"])(a).then((function(a){t.costLoading=!1;var e=a.data;c.series[0].data=Object.values(e.spendingTrends),c.xAxis[0].data=Object.keys(e.spendingTrends),t.barData=c,t.tableData=e.analysisCosts}))},getBillingSummary:function(){var t=this;this.billingLoading=!0,Object(g["h"])().then((function(a){t.billingLoading=!1;var e=a.data;t.summaryData=e}))}}},m=h,v=(e("4e48"),e("1288"),e("5d22")),p=Object(v["a"])(m,s,n,!1,null,"0e8cd5da",null);a["default"]=p.exports},5461:function(t,a,e){},"93be":function(t,a,e){},bb58:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("aside",{staticClass:"user-sider bg-color-white"},[e("ul",{staticClass:"user-sider-mean"},[e("router-link",{attrs:{to:"/user/cost"}},[e("li",{class:t.handleActive("cost")},[t._v("\n      Bills & Credits\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/orderInvoice"}},[e("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Payments\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/personalInfo"}},[e("li",{class:t.handleActive("personalInfo")},[t._v("\n      Payment Information\n    ")])]),t._v(" "),e("router-link",{attrs:{to:"/user/accountPassword"}},[e("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account Security\n    ")])])],1)])},n=[],o=e("4360"),i=e("690a"),l={name:"",components:{},props:{},data:function(){return{userName:o["a"].getters.userInfo.accountName,avatarSrc:o["a"].getters.userInfo.imagePath||i,feeLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var a=this.$route.name;return a===t?"active":""}}},r=l,c=(e("c120"),e("5d22")),d=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=d.exports},c120:function(t,a,e){"use strict";e("93be")}}]);