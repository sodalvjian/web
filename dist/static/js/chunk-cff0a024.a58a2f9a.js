(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cff0a024"],{"30ef":function(t,e,a){"use strict";a("3f82")},"3f82":function(t,e,a){},"93be":function(t,e,a){},bb58:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"user-sider bg-color-white"},[a("ul",{staticClass:"user-sider-mean"},[a("router-link",{attrs:{to:"/user/cost"}},[a("li",{class:t.handleActive("cost")},[t._v("\n      Bills & Credits\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/orderInvoice"}},[a("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Payments\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/personalInfo"}},[a("li",{class:t.handleActive("personalInfo")},[t._v("\n      Payment Information\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/accountPassword"}},[a("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account Security\n    ")])])],1)])},o=[],s=a("4360"),n=a("690a"),c={name:"",components:{},props:{},data:function(){return{userName:s["a"].getters.userInfo.accountName,avatarSrc:s["a"].getters.userInfo.imagePath||n,feeLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var e=this.$route.name;return e===t?"active":""}}},i=c,l=(a("c120"),a("5d22")),u=Object(l["a"])(i,r,o,!1,null,null,null);e["a"]=u.exports},c120:function(t,e,a){"use strict";a("93be")},e310:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("sider"),t._v(" "),a("article",{staticClass:"user-container bg-color-white w"},[a("nav",{staticClass:"p25 bb-1"},[a("strong",{staticClass:"f18 color-black"},[a("router-link",{staticClass:"color-main f19",attrs:{to:"/"}},[a("i",{staticClass:"mr-10 el-icon-arrow-left fb"})]),t._v("\n        Account Security\n      ")],1)]),t._v(" "),a("section",{staticClass:"mt-10 p25 w"},[a("el-form",{ref:"formData",staticClass:"user-account-form",attrs:{model:t.formData,"auto-complete":"on","label-width":"150px","label-position":"right"}},[a("el-form-item",{attrs:{prop:"account",label:"Username:"}},[a("el-input",{ref:"account",attrs:{placeholder:"Account",size:"medium",disabled:"",type:"text"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"oldPassword",label:"Current password:",rules:{required:!0,message:"Please enter current password."}}},[a("el-input",{attrs:{placeholder:"Current password",size:"medium",type:"password",autocomplete:"off"},model:{value:t.formData.oldPassword,callback:function(e){t.$set(t.formData,"oldPassword",e)},expression:"formData.oldPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password",label:"New password:",rules:{validator:t.validatePass}}},[a("el-input",{attrs:{placeholder:"Password",size:"medium",type:"password",autocomplete:"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{staticClass:"mt-30",attrs:{prop:"checkPass",label:"Confirm password:",rules:{validator:t.validateCheckPass}}},[a("el-input",{attrs:{type:"password",size:"medium",placeholder:"Confirm password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(e){t.$set(t.formData,"checkPass",e)},expression:"formData.checkPass"}})],1),t._v(" "),a("el-form-item",{attrs:{align:"left"}},[a("el-button",{staticClass:"mt-10",attrs:{loading:t.loading,size:"small",type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleSave(e)}}},[t._v("Save")])],1)],1)],1)])],1)},o=[],s=a("bb58"),n=a("4360"),c=a("6455"),i=a("ef87"),l={name:"",components:{Sider:s["a"]},props:{},filter:{},data:function(){var t=this,e=function(e,a,r){""===a?r(new Error("Please enter the password")):i["d"].test(a)?(""!==t.formData.checkPass&&t.$refs.formData.validateField("checkPass"),r()):r(new Error(i["c"]))},a=function(e,a,r){""===a?r(new Error("Please enter the password again")):a!==t.formData.password?r(new Error("The two passwords are inconsistent!")):r()};return{validatePass:e,validateCheckPass:a,loading:!1,formData:{account:n["a"].getters.userInfo.accountName,oldPassword:"",password:"",checkPass:"",verificationCode:""}}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{handleSave:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;var a=t.formData,r=a.oldPassword,o=a.password,s={oldPassword:r,password:o,userId:n["a"].getters.userInfo.userId};t.loading=!0,Object(c["q"])(s).then((function(e){t.loading=!1,t.$message.success(e.msg),setTimeout((function(){t.$store.dispatch("user/logout"),location.reload()}),1e3)})).catch((function(){t.loading=!1}))}))}}},u=l,f=(a("30ef"),a("5d22")),d=Object(f["a"])(u,r,o,!1,null,"8ffc1a08",null);e["default"]=d.exports},ef87:function(t,e,a){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}a.d(e,"b",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return i}));var o=function t(e){if(Array.isArray(e))return e.map(t);if(e&&"object"===r(e)){for(var a={},o=Object.keys(e),s=0,n=o.length;s<n;s++){var c=o[s];a[c]=t(e[c])}return a}return e},s=function(t){if(Array.isArray(t))return Array.from(new Set(t))},n=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}(),c=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/,i="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "}}]);