(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b64b29a2"],{"4c60":function(t,e,a){},6455:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"m",(function(){return r})),a.d(e,"i",(function(){return i})),a.d(e,"h",(function(){return s})),a.d(e,"j",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"l",(function(){return d})),a.d(e,"o",(function(){return u})),a.d(e,"e",(function(){return p})),a.d(e,"a",(function(){return g})),a.d(e,"f",(function(){return b})),a.d(e,"d",(function(){return h})),a.d(e,"g",(function(){return v})),a.d(e,"n",(function(){return f})),a.d(e,"c",(function(){return m}));var n=a("b775");function o(t){return Object(n["a"])({url:"account/user/update/personal/info",method:"post",data:t})}function r(){return Object(n["a"])({url:"account/user/get/personal/info",method:"get"})}function i(){return Object(n["a"])({url:"account/user/get/billing/summary",method:"get"})}function s(t){return Object(n["a"])({url:"account/user/get/bill/details",method:"post",data:t})}function l(t){return Object(n["a"])({url:"account/user/get/cost/dashboard",method:"post",data:t})}function c(t){return Object(n["a"])({url:"account/user/get/order/invoice",method:"post",data:t})}function d(){return Object(n["a"])({url:"account/user/get/payment/due",method:"get"})}function u(t){return Object(n["a"])({url:"account/user/update/password",method:"post",data:t})}function p(t){return Object(n["a"])({url:"account/user/generate/single/invoice/".concat(t),method:"get"})}function g(t){return Object(n["a"])({url:"account/user/add/card",method:"post",data:t})}function b(t){return Object(n["a"])({url:"account/user/card/details/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"account/user/update/card",method:"post",data:t})}function v(t){return Object(n["a"])({url:"account/user/list/card/".concat(t),method:"get"})}function f(t){return Object(n["a"])({url:"account/user/update/default/payment/".concat(t.defaultPayment,"/").concat(t.customerPaymentProfileId),method:"get"})}function m(t){return Object(n["a"])({url:"account/user/delete/card/".concat(t.customerPaymentProfileId),method:"get"})}},"975c":function(t,e,a){"use strict";var n=a("4c60"),o=a.n(n);o.a},b18c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("sider"),t._v(" "),a("article",{staticClass:"user-container bg-color-white w"},[t._m(0),t._v(" "),a("section",{staticClass:"p25 mt-10 w"},[a("nav",[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:16}},[a("strong",{staticClass:"color-black f15"},[t._v("Payment Due")])])],1)],1),t._v(" "),a("div",{staticClass:"mt-15"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.paymentLoading,expression:"paymentLoading"}],staticClass:"bd-1",staticStyle:{width:"100%"},attrs:{data:t.summaryData}},[a("el-table-column",{attrs:{prop:"invoiceDate",label:"Invoice Date",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"invoiceId",label:"Invoice ID",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"Type",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dueDate",label:"Due Date",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Status","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"Amount",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actions",label:"Actions",width:"180"}},[[a("el-button",{staticClass:"color-red",attrs:{size:"medium",type:"text"}},[t._v("Contact us")])]],2)],1)],1),t._v(" "),a("nav",{staticClass:"mt-40"},[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:6}},[a("strong",{staticClass:"color-black f15"},[t._v("Order and invoice history ("+t._s(t.tableData.length)+")")])]),t._v(" "),a("el-col",{attrs:{span:18,align:"right"}},[a("el-date-picker",{staticClass:"mr-5",attrs:{type:"daterange",size:"small","range-separator":"~","start-placeholder":"Begin time","end-placeholder":"End time"},on:{change:t.changeMonthRange},model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}}),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",type:"primary",icon:"el-icon-download",loading:t.btnLoading,disabled:t.btnDisabled},on:{click:t.downloadCSV}},[t._v("Download CSV")]),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",type:"primary",disabled:t.btnDisabled,icon:"el-icon-printer"},on:{click:t.openPrint}},[t._v("Print")])],1)],1)],1),t._v(" "),a("div",{staticClass:"mt-15"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.historyLoading,expression:"historyLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentDate",label:"Payment Date","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"invoiceID",label:"Invoice/Receipt ID",align:"center","min-width":"280"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentInstruction",label:"Payment instruction",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"transactionType",label:"Transaction Type",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentMethod",label:"Payment Method",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"transactionAmount",label:"Transaction Amount",align:"center","min-width":"180"}})],1)],1)])]),t._v(" "),a("dialog-component",{ref:"dialogComponentref"})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"p25 bb-1"},[a("span",{staticClass:"f18 color-black"},[t._v("\n        Orders and invoices\n      ")])])}],r=a("ecc0"),i=a("bb58"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{top:"50px","show-close":!1,"custom-class":"print-dialog",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("strong",{staticClass:"f17"},[t._v("Invoice")])]),t._v(" "),a("el-col",{attrs:{span:12,align:"right"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-printer",loading:t.btnLoading},on:{click:t.handlePrint}},[t._v("Print")])],1)],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],ref:"exportContent",staticClass:"p30",attrs:{id:"export-content"}},[a("table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{"data-sort":"sortDisabled"}},[a("tbody",[a("tr",{staticClass:"firstRow"},[a("td",{attrs:{valign:"top",width:"312",align:"left",height:"35"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Account number:")])])]),t._v(" "),a("td",{attrs:{valign:"top",height:"35",rowspan:"1",colspan:"2"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Melax Technologies,Inc")])])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"312",height:"50"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[a("strong",[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"26px"}},[t._v(t._s(t.printData.cardNumber))])])])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"2",rowspan:"1",height:"50"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"13px"}},[t._v("Email or talk to us about your account or bill visit\n              melaxtech.com/index. php/about-us/contact\n            ")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Bill to Address:")])])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"485"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Invoice Summary")])])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v("ATTN: "+t._s(t.printData.firstname)+" "+t._s(t.printData.lastname))])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",height:"40",width:"485"}},[t._v("\n            Invoice Number\n\n            "),a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(":")]),t._v(" "),a("span",{staticStyle:{"font-size":"14px","background-color":"rgb(255, 255, 255)",color:"rgb(89, 89, 89)"}})]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",width:"136",height:"40"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.invoiceNumber))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.apartment||"--")+"\n              "+t._s(t.printData.street||"--"))])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"486"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v("Invoice Date:")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"136"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t._f("setDate")(t.printData.invoiceDate)))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","border-color":"rgb(255, 255, 255)"},attrs:{valign:"top",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.city)+" , "+t._s(t.printData.state)+" ,\n              "+t._s(t.printData.countryRegion))])]),t._v(" "),a("td",{staticStyle:{"border-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",width:"486"}},[a("strong",{staticStyle:{"font-size":"16px","text-transform":"uppercase"}},[t._v("TOTAL AMOUNT DUE ON\n              "+t._s(t._f("setDate")(t.printData.invoiceDate)))])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"136"}},[a("strong",{staticStyle:{"font-size":"16px"}},[t._v("$"+t._s(t.printData.totalCharge))])])])])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"40px","font-size":"15px"}},[a("strong",[t._v("This invoice is for the billing period April 1 - April 30 ,\n        2020")])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("span",{staticStyle:{color:"rgb(136, 136, 136)","font-size":"13px","text-align":"center","background-color":"rgb(255, 255, 255)"}},[t._v("Greetings from Amazon Web Services, were writing to provide you with\n        an electronic invoice for your use of AWS services.")])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"-8px"}},[a("span",{staticStyle:{color:"rgb(136, 136, 136)","font-size":"13px","text-align":"center","background-color":"rgb(255, 255, 255)"}},[t._v("\n        Additional information about your bill, individual service charge\n        details, and your account history are available on the Account\n        Activity Page.")])]),t._v(" "),a("table",{staticStyle:{width:"100%","margin-top":"30px",border:"1px solid #ccc","font-size":"14px"},attrs:{"data-sort":"sortDisabled",border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",{staticClass:"firstRow"},[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{valign:"middle",height:"45",align:"left",width:"671"}},[a("span",{staticStyle:{color:"#000",padding:"20px"}},[a("strong",[t._v("Summary")])])]),t._v(" "),a("td",{staticStyle:{"background-color":"rgb(243, 243, 243)","word-break":"break-all"},attrs:{valign:"middle",height:"40",align:"left",width:"320"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("Charges")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",height:"40",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.charges))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("Credits")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.credits))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("TAX*")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.tax))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(134, 143, 169)"},attrs:{valign:"middle",align:"left",colspan:"1",rowspan:"1",height:"45",width:"671"}},[a("span",{staticStyle:{padding:"20px",color:"#fff","font-weight":"bold"}},[t._v("Total for this invoice")])]),t._v(" "),a("td",{staticStyle:{"background-color":"rgb(134, 143, 169)"},attrs:{valign:"middle",align:"right",colspan:"1",rowspan:"1",height:"45",width:"320"}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold",padding:"20px"}},[t._v("$"+t._s(t.printData.totalCharge))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(249, 248, 253)"},attrs:{valign:"middle",align:"left",colspan:"2",rowspan:"1"}},[a("div",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px","line-height":"1.6","font-size":"13px"}},[t._v("\n              May include estimated US sales tax, VAT, ST GST an CT Amazon Web\n              Services, Inc, is registered under the Sing apore GST Overseas\n              Vendor Registration Pay-Only Regime and GST registration number\n              is M903730 09E AWS, Inc is aRegistered Foreign Supplier under\n              Jap anese Consumption Tax Law and therefore AWS Inc, is required\n              to declare and pay consumption tax in respect of this\n              transaction (as aDigital Service)o the Japan Tax Authority\n\n              "),a("p",[t._v("\n                This is not a VAT. ST or GST invoice. Related ax invoices can\n                be accessed by going to le Bills page on your Billing\n                Management Cons ole **** Please reference the tax invoice for\n                a breakut of the Canadian taxes by pe Usage and recuming\n                charges for this statement perio amount of your actual charges\n                for this statement perioc may differ from the charges shown on\n                this will be charged on your next billing date. The page. The\n                charges shown on this page do not include Iny additional usage\n                charges accrued during this statement period after the date\n                you are viewing this pa ge. Also, one-time fees and\n                subscription charges are assessed separately, on the date that\n                they occur . All charges and prices are in US Dollars All AWS\n                Services are sold by Amazon Web Services.Inc.\n              ")])])])])])])])])},l=[],c=a("6455"),d=a("3ed0"),u=a.n(d),p=a("f753"),g=a.n(p),b={name:"",components:{},filters:{setDate:function(t){return u()(t).format("MMMM Do YYYY")}},props:{},data:function(){return{dialogLoading:!1,dialogVisible:!1,btnLoading:!1,dialogForm:{pass:"",checkPass:"",age:""},summaryData:[{name:"Charges",cost:"$1,208.87"},{name:"Credits",cost:"$0.00"},{name:"TAX*",cost:"$62.33"}],printData:{}}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{openDialog:function(t){var e=this;this.dialogVisible=!0,this.dialogLoading=!0,Object(c["e"])(t).then((function(t){e.printData=t.data,e.dialogLoading=!1}))},handlePrint:function(t){var e=this;this.btnLoading=!0;var a=this.$refs.exportContent,n={content:'<html style="font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;">'.concat(a.innerHTML,"</html>")},o="/account/user/download/invoice/pdf";g.a.defaults.headers.Authorization="Bearer "+this.$store.getters.token,g.a.post(o,n,{responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(t){Object(r["saveAs"])(new Blob([t.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),"Order and invoice history.pdf"),e.btnLoading=!1}))},resetForm:function(t){this.$refs[t].resetFields()}}},h=b,v=(a("975c"),a("9ca4")),f=Object(v["a"])(h,s,l,!1,null,null,null),m=f.exports,y={name:"",components:{Sider:i["a"],DialogComponent:m},props:{},data:function(){return{paymentLoading:!1,historyLoading:!1,btnDisabled:!0,btnLoading:!1,monthRange:[],summaryData:[],tableData:[],multipleSelection:[]}},computed:{},watch:{},created:function(){},mounted:function(){this.getOrderAndInvoiceHistory(),this.getPaymentDue()},beforeDestroy:function(){},methods:{changeMonthRange:function(){this.getOrderAndInvoiceHistory()},downloadCSV:function(){var t=this,e=this.multipleSelection.map((function(t){return t.invoiceID}));this.btnLoading=!0;var a=e,n="/account/user/download/invoice/csv";g.a.defaults.headers.Authorization="Bearer "+this.$store.getters.token,g.a.post(n,a,{responseType:"blob"}).then((function(e){t.btnLoading=!1,Object(r["saveAs"])(new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),"Order and invoice history.csv")}))},handleSelectionChange:function(t){this.multipleSelection=t,this.btnDisabled=1!==t.length},openPrint:function(){var t=this.multipleSelection[0].invoiceID;this.$refs.dialogComponentref.openDialog(t)},getOrderAndInvoiceHistory:function(){var t=this,e={endDate:this.monthRange&&this.monthRange.length>0?this.monthRange[1]:"",startDate:this.monthRange&&this.monthRange.length>0?this.monthRange[0]:""};this.historyLoading=!0,Object(c["k"])(e).then((function(e){t.historyLoading=!1,t.tableData=e.data}))},getPaymentDue:function(){var t=this;this.paymentLoading=!0,Object(c["l"])().then((function(e){t.paymentLoading=!1,t.summaryData=e.data}))}}},w=y,_=Object(v["a"])(w,n,o,!1,null,"504d4344",null);e["default"]=_.exports},bb58:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"user-sider br-1 bg-color-white"},[a("nav",{staticClass:"tc bb-1 p20"},[a("el-avatar",{attrs:{shape:"circle",size:80,src:t.avatarSrc}}),t._v(" "),a("div",{staticClass:"mt-10"},[a("strong",{staticClass:"color-black f16"},[t._v(t._s(t.userName)+" ")]),a("i",{staticClass:"iconfont iconpro1 "})])],1),t._v(" "),a("ul",{staticClass:"user-sider-mean"},[a("router-link",{attrs:{to:"/user/cost"}},[a("li",{class:t.handleActive("cost")},[t._v("\n      Billing & Cost Management\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/personalInfo"}},[a("li",{class:t.handleActive("personalInfo")},[t._v("\n      Personal Information& credit card\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/accountPassword"}},[a("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account and password\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/orderInvoice"}},[a("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Order and invoice\n    ")])])],1)])},o=[],r=a("4360"),i=a("690a"),s={name:"",components:{},props:{},data:function(){return{userName:r["a"].getters.userInfo.accountName,avatarSrc:r["a"].getters.userInfo.imagePath||i}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var e=this.$route.name;return e===t?"active":""}}},l=s,c=a("9ca4"),d=Object(c["a"])(l,n,o,!1,null,"af8b35b8",null);e["a"]=d.exports},ecc0:function(t,e,a){(function(a){var n,o,r;(function(a,i){o=[],n=i,r="function"===typeof n?n.apply(e,o):n,void 0===r||(t.exports=r)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){s(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,a){var s=i.URL||i.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?r(l):o(l.href)?n(t,e,a):r(l,l.target="_blank")):(l.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),a);else if(o(t))n(t,a,i);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){r(s)}))}}:function(t,e,a,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var r="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&s)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,u=d.createObjectURL(t);o?o.location=u:location.href=u,o=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});i.saveAs=s.saveAs=s,t.exports=s}))}).call(this,a("66fa"))}}]);