(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49fbf0b9"],{6455:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"n",(function(){return o})),a.d(e,"j",(function(){return s})),a.d(e,"i",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"l",(function(){return i})),a.d(e,"m",(function(){return l})),a.d(e,"p",(function(){return d})),a.d(e,"f",(function(){return f})),a.d(e,"e",(function(){return m})),a.d(e,"a",(function(){return p})),a.d(e,"g",(function(){return b})),a.d(e,"d",(function(){return v})),a.d(e,"h",(function(){return h})),a.d(e,"o",(function(){return w})),a.d(e,"c",(function(){return g}));var r=a("b775");function n(t){return Object(r["a"])({url:"account/user/update/personal/info",method:"post",data:t})}function o(){return Object(r["a"])({url:"account/user/get/personal/info",method:"get"})}function s(){return Object(r["a"])({url:"account/user/get/billing/summary",method:"get"})}function c(t){return Object(r["a"])({url:"account/user/get/bill/details",method:"post",data:t})}function u(t){return Object(r["a"])({url:"account/user/get/cost/dashboard",method:"post",data:t})}function i(t){return Object(r["a"])({url:"account/user/get/order/invoice",method:"post",data:t})}function l(){return Object(r["a"])({url:"account/user/get/payment/due",method:"get"})}function d(t){return Object(r["a"])({url:"account/user/update/password",method:"post",data:t})}function f(t){return Object(r["a"])({url:"account/user/generate/single/invoice/".concat(t[0]),method:"get"})}function m(t){return Object(r["a"])({url:"account/user/generate/multi/invoice",method:"post",data:t})}function p(t){return Object(r["a"])({url:"account/user/add/card",method:"post",data:t})}function b(t){return Object(r["a"])({url:"account/user/card/details/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"account/user/update/card",method:"post",data:t})}function h(t){return Object(r["a"])({url:"account/user/list/card/".concat(t),method:"get"})}function w(t){return Object(r["a"])({url:"account/user/update/default/payment/".concat(t.defaultPayment,"/").concat(t.customerPaymentProfileId),method:"get"})}function g(t){return Object(r["a"])({url:"account/user/delete/card/".concat(t.customerPaymentProfileId),method:"get"})}},"82b9":function(t,e,a){},b75b:function(t,e,a){"use strict";var r=a("82b9"),n=a.n(r);n.a},bb58:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"user-sider br-1 bg-color-white"},[a("nav",{staticClass:"tc bb-1 p20"},[a("el-avatar",{attrs:{shape:"circle",size:80,src:t.avatarSrc}}),t._v(" "),a("div",{staticClass:"mt-10"},[a("strong",{staticClass:"color-black f16"},[t._v(t._s(t.userName)+" ")])])],1),t._v(" "),a("ul",{staticClass:"user-sider-mean"},[a("router-link",{attrs:{to:"/user/cost"}},[a("li",{class:t.handleActive("cost")},[t._v("\n      Billing & Cost Management\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/personalInfo"}},[a("li",{class:t.handleActive("personalInfo")},[t._v("\n      Personal Information& credit card\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/accountPassword"}},[a("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account and password\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/orderInvoice"}},[a("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Order and invoice\n    ")])])],1)])},n=[],o=a("4360"),s=a("690a"),c={name:"",components:{},props:{},data:function(){return{userName:o["a"].getters.userInfo.accountName,avatarSrc:o["a"].getters.userInfo.imagePath||s}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var e=this.$route.name;return e===t?"active":""}}},u=c,i=a("9ca4"),l=Object(i["a"])(u,r,n,!1,null,"348e4bc6",null);e["a"]=l.exports},e310:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("sider"),t._v(" "),a("article",{staticClass:"user-container bg-color-white w"},[t._m(0),t._v(" "),a("section",{staticClass:"p25 mt-10 w"},[a("el-form",{ref:"formData",staticClass:"user-account-form",attrs:{model:t.formData,"auto-complete":"on","label-width":"150px","label-position":"right"}},[a("el-form-item",{attrs:{prop:"account",label:"Account:"}},[a("el-input",{ref:"account",attrs:{placeholder:"Account",size:"medium",disabled:"",type:"text"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"oldPassword",label:"Primary password:",rules:{required:!0,message:"Please enter primary password."}}},[a("el-input",{attrs:{placeholder:"Primary password",size:"medium",type:"password",autocomplete:"off"},model:{value:t.formData.oldPassword,callback:function(e){t.$set(t.formData,"oldPassword",e)},expression:"formData.oldPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password",label:"New password:",rules:{validator:t.validatePass}}},[a("el-input",{attrs:{placeholder:"Password",size:"medium",type:"password",autocomplete:"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{staticClass:"mt-30",attrs:{prop:"checkPass",label:"Password again:",rules:{validator:t.validateCheckPass}}},[a("el-input",{attrs:{type:"password",size:"medium",placeholder:"Confirm password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(e){t.$set(t.formData,"checkPass",e)},expression:"formData.checkPass"}})],1),t._v(" "),a("el-form-item",{attrs:{align:"left"}},[a("el-button",{staticClass:"mt-10",attrs:{loading:t.loading,size:"small",type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleSave(e)}}},[t._v("Save")])],1)],1)],1)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"p25 bb-1"},[a("span",{staticClass:"f18 color-black"},[t._v("\n        Account and password\n      ")])])}],o=a("bb58"),s=a("4360"),c=a("6455"),u=a("ef87"),i={name:"",components:{Sider:o["a"]},props:{},filter:{},data:function(){var t=this,e=function(e,a,r){""===a?r(new Error("Please enter the password")):u["c"].test(a)?(""!==t.formData.checkPass&&t.$refs.formData.validateField("checkPass"),r()):r(new Error(u["b"]))},a=function(e,a,r){""===a?r(new Error("Please enter the password again")):a!==t.formData.password?r(new Error("The two passwords are inconsistent!")):r()};return{validatePass:e,validateCheckPass:a,loading:!1,formData:{account:s["a"].getters.userInfo.accountName,oldPassword:"",password:"",checkPass:"",verificationCode:""}}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{handleSave:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;var a=t.formData,r=a.oldPassword,n=a.password,o={oldPassword:r,password:n,userId:s["a"].getters.userInfo.userId};t.loading=!0,Object(c["p"])(o).then((function(e){t.loading=!1,t.$message.success(e.msg),setTimeout((function(){t.$store.dispatch("user/logout"),location.href="/login"}),1e3)})).catch((function(){t.loading=!1}))}))}}},l=i,d=(a("b75b"),a("9ca4")),f=Object(d["a"])(l,r,n,!1,null,"5807d919",null);e["default"]=f.exports},ef87:function(t,e,a){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return c}));var n=function t(e){if(Array.isArray(e))return e.map(t);if(e&&"object"===r(e)){for(var a={},n=Object.keys(e),o=0,s=n.length;o<s;o++){var c=n[o];a[c]=t(e[c])}return a}return e},o=function(t){if(Array.isArray(t))return Array.from(new Set(t))},s=(function(){var t=0}(),/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,16}$/),c="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "}}]);