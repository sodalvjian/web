(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de6225b","chunk-2d0b9034"],{"21a6":function(t,e,a){(function(a){var n,o,i;(function(a,r){o=[],n=r,i="function"===typeof n?n.apply(e,o):n,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,a){var s=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?i(l):o(l.href)?n(t,e,a):i(l,l.target="_blank")):(l.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,r){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),a);else if(o(t))n(t,a,r);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){i(s)}))}}:function(t,e,a,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var i="application/octet-stream"===t.type,l=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},d.readAsDataURL(t)}else{var p=r.URL||r.webkitURL,g=p.createObjectURL(t);o?o.location=g:location.href=g,o=null,setTimeout((function(){p.revokeObjectURL(g)}),4e4)}});r.saveAs=l.saveAs=l,t.exports=l}))}).call(this,a("c8ba"))},"30ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Bill Details",visible:t.dialogVisible,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("article",{staticClass:"bg-color-white w"},[a("section",{staticClass:"w",staticStyle:{padding:"10px 10px 25px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"Pipeline","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"COUPON"===e.row.type?"color-red":""},[t._v("\n              "+t._s(t._f("emptyShow")(e.row.name))+"\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"type",align:"center",label:"Type",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"COUPON"===e.row.type?"color-red":""},[t._v("\n              "+t._s(e.row.type)+"\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"count",align:"center",label:"Number of files",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",align:"center",label:"Cost","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"COUPON"===e.row.type?"color-red":""},[t._v("\n              $\n              "+t._s("COUPON"===e.row.type?"- "+e.row.amount:e.row.amount)+"\n            ")])]}}])})],1)],1)])])},o=[],i=a("6455"),r={name:"",components:{},props:{},data:function(){return{tableLoading:!1,dialogVisible:!1,tableData:[],tableCouponData:[]}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleCurrentChange:function(t){this.page=t,this.getData()},handleSearch:function(){this.page=1,this.getData()},getData:function(t){var e=this;this.dialogVisible=!0,this.tableLoading=!0,Object(i["g"])(t.invoiceID).then((function(t){e.tableLoading=!1;var a=[],n=[];t.data.map((function(t){"COUPON"===t.type?n.push(t):a.push(t)}));var o=a.concat(n);e.tableData=o}))}}},s=r,l=a("2877"),c=Object(l["a"])(s,n,o,!1,null,"7deff056",null);e["default"]=c.exports},5641:function(t,e,a){},"975c":function(t,e,a){"use strict";a("5641")},b18c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("sider"),t._v(" "),a("article",{staticClass:"user-container bg-color-white w"},[a("nav",{staticClass:"p15 bb-10 bt-10"},[a("strong",{staticClass:"f17 color-main"},[a("router-link",{staticClass:"color-main f19",attrs:{to:"/realtimeAnalysis"}},[a("i",{staticClass:"mr-10 el-icon-arrow-left fb"})]),t._v("\n        Payments\n      ")],1)]),t._v(" "),a("section",{staticClass:"mt-10 p25 w"},[a("nav",[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:16}},[a("strong",{staticClass:"color-black f15"},[t._v("Payment Due")])])],1)],1),t._v(" "),a("div",{staticClass:"mt-15"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.paymentLoading,expression:"paymentLoading"}],staticClass:"bd-1",staticStyle:{width:"100%"},attrs:{data:t.summaryData}},[a("el-table-column",{attrs:{prop:"invoiceDate",label:"Invoice Date",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"Invoice ID",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"color-light-blue",staticStyle:{"text-decoration":"underline"},attrs:{type:"text"},on:{click:function(a){return t.openInvoice(e.row)}}},[t._v(t._s(e.row.invoiceID))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"Type",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dueDate",label:"Due Date",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Status","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"Amount",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actions",label:"Actions",width:"180"}},[[a("router-link",{attrs:{to:"/user/personalInfo"}},[a("el-button",{staticClass:"color-red",attrs:{size:"medium",type:"text"}},[t._v("Update payment")])],1)]],2)],1)],1),t._v(" "),a("nav",{staticClass:"mt-40"},[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:6}},[a("strong",{staticClass:"color-black f15"},[t._v("Order and Payment History\n            ")])]),t._v(" "),a("el-col",{attrs:{span:18,align:"right"}},[a("el-date-picker",{staticClass:"mr-5",attrs:{type:"daterange",size:"small","range-separator":"~","start-placeholder":"Begin time","end-placeholder":"End time"},on:{change:t.changeMonthRange},model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}}),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",type:"primary",icon:"el-icon-download",loading:t.btnLoading,disabled:t.btnDisabled},on:{click:t.downloadCSV}},[t._v("Download CSV")]),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",type:"primary",disabled:t.btnDisabled,icon:"el-icon-printer"},on:{click:t.openPrint}},[t._v("Print")])],1)],1)],1),t._v(" "),a("div",{staticClass:"mt-15"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.historyLoading,expression:"historyLoading"}],ref:"invoicetableDataRef",staticStyle:{width:"100%"},attrs:{data:t.tableDataSlice,border:""},on:{"selection-change":t.handleSelectionChange}},[a("no-data-table",{attrs:{slot:"empty"},slot:"empty"}),t._v(" "),a("el-table-column",{attrs:{align:"center",type:"selection",fixed:"",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentDate",label:"Payment Date","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",[t._v(t._s(e.row.paymentDate))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"invoiceID",label:"Invoice/Receipt ID",align:"center","min-width":"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"color-light-blue",staticStyle:{"text-decoration":"underline"},attrs:{type:"text"},on:{click:function(a){return t.openInvoice(e.row)}}},[t._v(t._s(e.row.invoiceID))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentInstruction",label:"Payment Period",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"transactionType",label:"Transaction Type",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paymentMethod",label:"Payment Method",align:"center","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"transactionAmount",fixed:"right",label:"Amount",align:"center","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              $ "+t._s(e.row.transactionAmount)+"\n            ")]}}])})],1)],1),t._v(" "),a("div",{staticClass:"mt-20 tr"},[a("el-pagination",{attrs:{"page-size":t.invoicePageSize,background:"",layout:"prev, pager, next","hide-on-single-page":"","current-page":t.invoiceCurrentPage,total:t.tableData.length},on:{"current-change":t.handleInvoiceCurrentPage}})],1)])]),t._v(" "),a("dialog-component",{ref:"dialogComponentref"}),t._v(" "),a("bill-detail",{ref:"billDetail"})],1)},o=[],i=a("21a6"),r=a("bb58"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{top:"50px","show-close":!1,"custom-class":"print-dialog",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("strong",{staticClass:"f17"},[t._v("Invoice")])]),t._v(" "),a("el-col",{attrs:{span:12,align:"right"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-printer",loading:t.btnLoading},on:{click:t.handlePrint}},[t._v("Print")])],1)],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],ref:"exportContent",staticClass:"p30",attrs:{id:"export-content"}},[t.mutliStatus?a("div",[a("table",{staticStyle:{width:"100%","font-size":"14px"}},[a("tbody",[a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",width:"512"}}),t._v(" "),a("td",{attrs:{valign:"middle",colspan:"2",rowspan:"1",height:"40"}},[a("strong",[a("span",{staticStyle:{color:"#333333","font-family":'"font-size:18px'}},[t._v("Name")]),t._v(": ")]),a("span",{staticStyle:{color:"#333333","font-family":'"font-size:18px'}}),t._v(t._s(t._f("emptyShow")(t.printData.firstname))+"\n              "+t._s(t._f("emptyShow")(t.printData.lastname))+"\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"512"}},[a("span",{staticStyle:{color:"#333333","font-family":'"font-size:18px'}},[a("strong",[t._v("Print Date")]),t._v(":\n                "+t._s(t._f("setHourDate")(new Date)))])]),t._v(" "),a("td",{attrs:{valign:"top",colspan:"2",rowspan:"1",height:"30"}},[a("span",{staticStyle:{color:"#595959"}},[a("span",{staticStyle:{color:"#333333","font-family":'"font-size:18px'}},[a("strong",[t._v("Account number")]),t._v(":\n                  "+t._s(t.printData.accountNumber?t.printData.accountNumber.join(", "):""))])])])])])]),t._v(" "),a("table",{staticStyle:{border:"1px solid rgb(204, 204, 204)","margin-top":"25px",width:"100%","font-size":"14px"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",{staticClass:"firstRow"},[a("td",{staticStyle:{"background-color":"rgb(243, 243, 243)","word-break":"break-all"},attrs:{valign:"middle",height:"45",align:"left",width:"146"}},[a("span",{staticStyle:{color:"#000","padding-left":"20px"}},[a("strong",[t._v("Payment Date")])])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{width:"146"}},[a("strong",[t._v("Invoice ID")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[a("strong",{staticStyle:{"font-size":"14px","white-space":"normal","background-color":"rgb(243, 243, 243)"}},[t._v("Payment Instrument")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[a("strong",[t._v("Transaction Type")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[a("strong",[t._v("Payment Method")])]),t._v(" "),a("td",{staticStyle:{"background-color":"rgb(243, 243, 243)","word-break":"break-all"},attrs:{valign:"middle",height:"40",align:"left",width:"146"}},[a("strong",[t._v("Amount")])])]),t._v(" "),t._l(t.printData.invoiceList,(function(e,n){return a("tr",{key:n},[a("td",{staticStyle:{"word-break":"break-all","padding-left":"20px"},attrs:{valign:"middle",height:"40",width:"146"}},[t._v("\n              "+t._s(e.paymentDate)+"\n            ")]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{width:"146"}},[t._v("\n              "+t._s(e.invoiceID)+"\n            ")]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[t._v("\n              "+t._s(e.paymentInstruction)+"\n            ")]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[t._v("\n              "+t._s(e.transactionType)+"\n            ")]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{colspan:"1",rowspan:"1",valign:"null",width:"146"}},[t._v("\n              "+t._s(e.paymentMethod)+"\n            ")]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"left",height:"40",width:"146"}},[t._v("\n              "+t._s(e.transactionAmount)+"\n            ")])])}))],2)]),t._v(" "),a("table",[a("tbody",[a("tr",[a("td",{staticStyle:{"word-break":"break-all","line-height":"2"},attrs:{colspan:"1",rowspan:"1",width:"614"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)",'"font-size':"18px"}}),t._v(" "),a("p",[t._v("\n                This is not a VAT. ST or GST invoice. Related ax invoices can\n                be accessed by going to le Bills page on your Billing\n                Management Cons ole **** Please reference the tax invoice for\n                a breakut of the Canadian taxes by pe Usage and recuming\n                charges for this statement perio amount of your actual charges\n                for this statement perioc may differ from the charges shown on\n                this will be charged on your next billing date. The page. The\n                charges shown on this page do not include Iny additional usage\n                charges accrued during this statement period after the date\n                you are viewing this pa ge. Also, one-time fees and\n                subscription charges are assessed separately, on the date that\n                they occur . All charges and prices are in US Dollars All AWS\n                Services are sold by Amazon Web Services.Inc.\n              ")]),t._v(" "),a("span",{staticStyle:{color:"rgb(51, 51, 51)",'"font-size':"18px"}})]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all","padding-left":"20px"},attrs:{valign:"top",colspan:"2",rowspan:"1",height:"40",width:"341",align:"left"}},[a("strong",[a("span",{staticStyle:{color:"rgb(51, 51, 51)",'"font-size':"17px"}})]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[t._v("Service Provider:")])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[t._v("(Not to be used for payment remittance)")])])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}})])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"17px","font-weight":"700"}},[t._v("Melax Technologies,Inc")])])])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"18px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"18px"}})])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"18px"}},[a("span",{staticStyle:{color:"rgb(51, 51, 51)","font-size":"18px"}},[a("span",{staticStyle:{color:"rgb(85, 85, 85)","font-size":"17px"}},[t._v("7000 Fannin St #1950d, Houston, TX 77030")])])])])])])])])]):a("div",[a("table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{"data-sort":"sortDisabled"}},[a("tbody",[a("tr",{staticClass:"firstRow"},[a("td",{attrs:{valign:"top",width:"312",align:"left",height:"35"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Account number:")])])]),t._v(" "),a("td",{attrs:{valign:"top",height:"35",rowspan:"1",colspan:"2"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Melax Technologies,Inc")])])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"312",height:"50"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[a("strong",[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"26px"}},[t._v(t._s(t.printData.cardNumber))])])])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"2",rowspan:"1",height:"50"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"13px"}},[t._v("Email or talk to us about your account or bill visit\n                melaxtech.com/index.php/about-us/contact\n              ")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Bill to Address:")])])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"485"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)","font-size":"15px"}},[a("strong",[t._v("Invoice Summary")])])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v("ATTN: "+t._s(t.printData.firstname)+"\n                "+t._s(t.printData.lastname))])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",height:"40",width:"485"}},[t._v("\n              Invoice Number\n\n              "),a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(":")]),t._v(" "),a("span",{staticStyle:{"font-size":"14px","background-color":"rgb(255, 255, 255)",color:"rgb(89, 89, 89)"}})]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",colspan:"1",rowspan:"1",width:"136",height:"40"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.invoiceNumber))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.apartment||"--")+"\n                "+t._s(t.printData.street||"--"))])]),t._v(" "),a("td",{staticStyle:{"border-left-color":"rgb(255, 255, 255)","border-top-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"486"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v("Invoice Date:")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",height:"30",width:"136"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t._f("setDate")(t.printData.invoiceDate)))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","border-color":"rgb(255, 255, 255)"},attrs:{valign:"top",width:"312"}},[a("span",{staticStyle:{color:"rgb(89, 89, 89)"}},[t._v(t._s(t.printData.city)+" , "+t._s(t.printData.state)+" ,\n                "+t._s(t.printData.countryRegion))])]),t._v(" "),a("td",{staticStyle:{"border-color":"rgb(255, 255, 255)","word-break":"break-all"},attrs:{valign:"top",width:"486"}},[a("strong",{staticStyle:{"font-size":"16px","text-transform":"uppercase"}},[t._v("TOTAL AMOUNT DUE ON\n                "+t._s(t._f("setDate")(t.printData.invoiceDate)))])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"top",colspan:"1",rowspan:"1",width:"136"}},[a("strong",{staticStyle:{"font-size":"16px"}},[t._v("$"+t._s(t.printData.totalCharge))])])])])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"40px","font-size":"15px"}},[a("strong",[t._v("This invoice is for the billing period\n          "+t._s(t._f("setDate")(t.printData.periodEndDate))+"\n        ")])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("span",{staticStyle:{color:"rgb(136, 136, 136)","font-size":"13px","text-align":"center","background-color":"rgb(255, 255, 255)"}},[t._v("Greetings from Amazon Web Services, were writing to provide you\n          with an electronic invoice for your use of AWS services.")])]),t._v(" "),a("p",{staticStyle:{"text-align":"center","margin-top":"-8px"}},[a("span",{staticStyle:{color:"rgb(136, 136, 136)","font-size":"13px","text-align":"center","background-color":"rgb(255, 255, 255)"}},[t._v("\n          Additional information about your bill, individual service charge\n          details, and your account history are available on the Account\n          Activity Page.")])]),t._v(" "),a("table",{staticStyle:{width:"100%","margin-top":"30px",border:"1px solid #ccc","font-size":"14px"},attrs:{"data-sort":"sortDisabled",border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",{staticClass:"firstRow"},[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(243, 243, 243)"},attrs:{valign:"middle",height:"45",align:"left",width:"671"}},[a("span",{staticStyle:{color:"#000",padding:"20px"}},[a("strong",[t._v("Summary")])])]),t._v(" "),a("td",{staticStyle:{"background-color":"rgb(243, 243, 243)","word-break":"break-all"},attrs:{valign:"middle",height:"40",align:"left",width:"320"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("Charges")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",height:"40",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.charges))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("Credits")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.credits))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",height:"40",width:"671"}},[a("span",{staticStyle:{padding:"20px"}},[t._v("TAX*")])]),t._v(" "),a("td",{staticStyle:{"word-break":"break-all"},attrs:{valign:"middle",align:"right",width:"320"}},[a("span",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px"}},[t._v("$"+t._s(t.printData.tax))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(134, 143, 169)"},attrs:{valign:"middle",align:"left",colspan:"1",rowspan:"1",height:"45",width:"671"}},[a("span",{staticStyle:{padding:"20px",color:"#fff","font-weight":"bold"}},[t._v("Total for this invoice")])]),t._v(" "),a("td",{staticStyle:{"background-color":"rgb(134, 143, 169)"},attrs:{valign:"middle",align:"right",colspan:"1",rowspan:"1",height:"45",width:"320"}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold",padding:"20px"}},[t._v("$"+t._s(t.printData.totalCharge))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"word-break":"break-all","background-color":"rgb(249, 248, 253)"},attrs:{valign:"middle",align:"left",colspan:"2",rowspan:"1"}},[a("div",{staticStyle:{color:"rgb(96, 98, 102)",padding:"20px","line-height":"1.6","font-size":"13px"}},[t._v("\n                May include estimated US sales tax, VAT, ST GST an CT Amazon\n                Web Services, Inc, is registered under the Sing apore GST\n                Overseas Vendor Registration Pay-Only Regime and GST\n                registration number is M903730 09E AWS, Inc is aRegistered\n                Foreign Supplier under Jap anese Consumption Tax Law and\n                therefore AWS Inc, is required to declare and pay consumption\n                tax in respect of this transaction (as aDigital Service)o the\n                Japan Tax Authority\n\n                "),a("p",[t._v("\n                  This is not a VAT. ST or GST invoice. Related ax invoices\n                  can be accessed by going to le Bills page on your Billing\n                  Management Cons ole **** Please reference the tax invoice\n                  for a breakut of the Canadian taxes by pe Usage and recuming\n                  charges for this statement perio amount of your actual\n                  charges for this statement perioc may differ from the\n                  charges shown on this will be charged on your next billing\n                  date. The page. The charges shown on this page do not\n                  include Iny additional usage charges accrued during this\n                  statement period after the date you are viewing this pa ge.\n                  Also, one-time fees and subscription charges are assessed\n                  separately, on the date that they occur . All charges and\n                  prices are in US Dollars All AWS Services are sold by Amazon\n                  Web Services.Inc.\n                ")])])])])])])])])])},l=[],c=a("6455"),d=a("c1df"),p=a.n(d),g=a("bc3a"),u=a.n(g),b={name:"",components:{},filters:{setDate:function(t){return p()(t).format("MMMM Do YYYY")}},props:{},data:function(){return{dialogLoading:!1,dialogVisible:!1,btnLoading:!1,mutliStatus:!1,dialogForm:{pass:"",checkPass:"",age:""},summaryData:[{name:"Charges",cost:"$1,208.87"},{name:"Credits",cost:"$0.00"},{name:"TAX*",cost:"$62.33"}],printData:{invoiceList:[]}}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{openDialog:function(t){var e=this;this.dialogVisible=!0,this.dialogLoading=!0,this.mutliStatus=t.length>1;var a=t.length>1?c["d"]:c["e"];a(t).then((function(t){e.printData=t.data,e.dialogLoading=!1}))},handlePrint:function(t){var e=this;this.btnLoading=!0;var a=this.$refs.exportContent,n={content:'<html style="font-family:Microsoft YaHei, Arial, sans-serif;">'.concat(a.innerHTML,"</html>")},o="/account/user/download/invoice/pdf";u.a.defaults.headers.Authorization="Bearer "+this.$store.getters.token,u.a.post(o,n,{responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(t){Object(i["saveAs"])(new Blob([t.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),"Order and Payment history.pdf"),e.btnLoading=!1}))},resetForm:function(t){this.$refs[t].resetFields()}}},v=b,h=(a("975c"),a("2877")),f=Object(h["a"])(v,s,l,!1,null,null,null),m=f.exports,y=a("30ab"),w={name:"",components:{Sider:r["a"],DialogComponent:m,billDetail:y["default"]},props:{},data:function(){return{paymentLoading:!1,historyLoading:!1,btnDisabled:!0,btnLoading:!1,monthRange:[p()().startOf("year"),p()()],summaryData:[],tableData:[],multipleSelection:[],invoiceCurrentPage:1,invoicePageSize:12}},computed:{tableDataSlice:function(){return this.tableData.slice((this.invoiceCurrentPage-1)*this.invoicePageSize,this.invoiceCurrentPage*this.invoicePageSize)}},watch:{},created:function(){},mounted:function(){this.getOrderAndInvoiceHistory(),this.getPaymentDue()},beforeDestroy:function(){},methods:{openInvoice:function(t){this.$refs.billDetail.getData(t)},handleInvoiceCurrentPage:function(t){this.invoiceCurrentPage=t,this.$refs.invoicetableDataRef.bodyWrapper.scrollTop=0},changeMonthRange:function(){this.getOrderAndInvoiceHistory()},downloadCSV:function(){var t=this,e=this.multipleSelection.map((function(t){return t.invoiceID}));this.btnLoading=!0;var a=e,n="/account/user/download/invoice/csv";u.a.defaults.headers.Authorization="Bearer "+this.$store.getters.token,u.a.post(n,a,{responseType:"blob"}).then((function(e){t.btnLoading=!1;var a=p.a.utc(),n=p()(a).local(),o=n.format("YY-MM-DD-HH-mm-ss");Object(i["saveAs"])(new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),"Order and Payment history ".concat(o,".csv"))}))},handleSelectionChange:function(t){this.multipleSelection=t,this.btnDisabled=0===t.length},openPrint:function(){var t=this.multipleSelection.map((function(t){return t.invoiceID}));this.$refs.dialogComponentref.openDialog(t)},getOrderAndInvoiceHistory:function(){var t=this,e={endDate:this.monthRange&&this.monthRange.length>0?this.monthRange[1]:"",startDate:this.monthRange&&this.monthRange.length>0?this.monthRange[0]:""};this.historyLoading=!0,Object(c["j"])(e).then((function(e){t.historyLoading=!1,t.tableData=e.data}))},getPaymentDue:function(){var t=this;this.paymentLoading=!0,Object(c["k"])().then((function(e){t.paymentLoading=!1,t.summaryData=e.data}))}}},_=w,S=Object(h["a"])(_,n,o,!1,null,"565c736d",null);e["default"]=S.exports},bb58:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"user-sider bg-color-white"},[a("ul",{staticClass:"user-sider-mean"},[a("router-link",{attrs:{to:"/user/cost"}},[a("li",{class:t.handleActive("cost")},[t._v("\n      Bills & Credits\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/orderInvoice"}},[a("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Payments\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/personalInfo"}},[a("li",{class:t.handleActive("personalInfo")},[t._v("\n      Payment Information\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/accountPassword"}},[a("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account Security\n    ")])])],1)])},o=[],i=a("4360"),r=a("690a"),s={name:"",components:{},props:{},data:function(){return{userName:i["a"].getters.userInfo.accountName,avatarSrc:i["a"].getters.userInfo.imagePath||r,feeLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var e=this.$route.name;return e===t?"active":""}}},l=s,c=(a("c120"),a("2877")),d=Object(c["a"])(l,n,o,!1,null,null,null);e["a"]=d.exports},c120:function(t,e,a){"use strict";a("f7a1")},f7a1:function(t,e,a){}}]);