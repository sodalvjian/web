(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5dac8d8"],{"1a8a":function(t,e,a){},"26e6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-container"},[a("div",{staticClass:"register-content"},[a("div",{staticClass:"register-content-left p30"}),t._v(" "),a("div",{staticClass:"register-content-right"},[a("el-form",{ref:"formData",staticClass:"register-form",attrs:{model:t.formData,align:"left","auto-complete":"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("nav",{staticClass:"title"},[t._v("Create a Mercury NLP account")])]),t._v(" "),a("el-form-item",{attrs:{prop:"email",rules:[{validator:t.validateEmail,trigger:["blur","change"]}]}},[a("el-input",{ref:"email",attrs:{placeholder:"Email address",name:"email",type:"text"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"verificationCode"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-button",{staticClass:"w",attrs:{disabled:t.getCodeDisable,loading:t.btnLoading,type:"danger"},on:{click:t.getCode}},[t._v(t._s(t.getCodeText))])],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{placeholder:"Verification code case sensitive",type:"text"},model:{value:t.formData.verificationCode,callback:function(e){t.$set(t.formData,"verificationCode",e)},expression:"formData.verificationCode"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"password",rules:{validator:t.validatePass}}},[a("el-input",{attrs:{placeholder:"Password",type:"password",autocomplete:"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{staticClass:"mt-35",attrs:{prop:"checkPass",rules:{validator:t.validateCheckPass}}},[a("el-input",{attrs:{type:"password",placeholder:"Confirm password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(e){t.$set(t.formData,"checkPass",e)},expression:"formData.checkPass"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"accountName",rules:{required:!0,message:"Please enter account"}}},[a("el-input",{attrs:{placeholder:"Account name",type:"text"},model:{value:t.formData.accountName,callback:function(e){t.$set(t.formData,"accountName",e)},expression:"formData.accountName"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"invitationCode"}},[a("el-input",{attrs:{maxlength:64,placeholder:"Invitation code",type:"text"},model:{value:t.formData.invitationCode,callback:function(e){t.$set(t.formData,"invitationCode",e)},expression:"formData.invitationCode"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"mt-25",staticStyle:{width:"100%",height:"40px"},attrs:{loading:t.loading,disabled:!t.formData.verificationCode,type:"success"},nativeOn:{click:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t._v("Sign up")])],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"w",attrs:{plain:"",type:"primary"},on:{click:t.handleLogin}},[t._v("Sign in to an exiting account")])],1),t._v(" "),a("el-row",{staticClass:"f12 register-content-right-footer",attrs:{gutter:10}},[a("el-col",{staticClass:"color-main",attrs:{span:24,align:"right"}},[a("span",{staticClass:" cp",on:{click:t.openPrivacyPolicy}},[t._v("Privacy Policy")])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"register-left"}),t._v(" "),a("div",{staticClass:"register-right"}),t._v(" "),a("privacy-policy",{ref:"privacyPolicy"})],1)},o=[],i=a("b9b3"),n=a("a17d"),s=a("ef87"),c=/^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,l={name:"Login",components:{PrivacyPolicy:i["a"]},data:function(){var t=this,e=function(e,a,r){""===a?r(new Error("Please enter the password")):s["d"].test(a)?(""!==t.formData.checkPass&&t.$refs.formData.validateField("checkPass"),r()):r(new Error(s["c"]))},a=function(e,a,r){""===a?r(new Error("Please enter the password again")):a!==t.formData.password?r(new Error("The two passwords are inconsistent!")):r()},r=function(t,e,a){""===e?a(new Error("Please enter email.")):(""!==e&&(c.test(e)||a(new Error("Please enter the correct email address."))),a())};return{passwordReg:s["d"],passwordMsg:s["c"],validateEmail:r,getCodeText:"Get Code",getCodeDisable:!1,btnLoading:!1,codeCount:30,validatePass:e,validateCheckPass:a,formData:{email:"",accountName:"",invitationCode:"",password:"",checkPass:"",verificationCode:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",pattern:s["d"],message:s["c"],validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{openPrivacyPolicy:function(){this.$refs.privacyPolicy.openDialog()},getCode:function(){var t=this;if(!this.formData.email)return this.$message.warning("Please enter email"),!1;if(!c.test(this.formData.email))return this.$message.warning("Please enter the correct email address"),!1;var e={email:this.formData.email};this.btnLoading=!0,Object(n["b"])(e).then((function(e){if(setTimeout((function(){t.btnLoading=!1}),1e3),e.success){var a=setInterval((function(){t.codeCount<1?(t.getCodeDisable=!1,t.getCodeText="Get Code",t.codeCount=30,clearInterval(a)):(t.getCodeDisable=!0,t.getCodeText=t.codeCount--+" s")}),1e3);t.$message.success(e.msg)}})).catch((function(){t.btnLoading=!1}))},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){this.$router.push("/login")},handleRegister:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;t.loading=!0;var a=Object.assign(t.formData);Object(n["c"])(a).then((function(e){t.$router.push("/")})).catch((function(){t.loading=!1}))}))}}},u=l,d=(a("f53e"),a("df81"),a("5d22")),f=Object(d["a"])(u,r,o,!1,null,"61b3b9ae",null);e["default"]=f.exports},"380c":function(t,e,a){},a17d:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return c}));var r=a("b775");function o(t){return Object(r["a"])({url:"account/user/send/verification/code/signup",method:"post",data:t})}function i(t){return Object(r["a"])({url:"account/user/addition",method:"post",data:t})}function n(t){return Object(r["a"])({url:"account/user/send/verification/code/password",method:"post",data:t})}function s(t){return Object(r["a"])({url:"account/user/forgot/verification/code",method:"post",data:t})}function c(t){return Object(r["a"])({url:"account/user/forgot/update/password",method:"post",data:t})}},b9b3:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Privacy Policy",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("p",[t._v("This is Privacy Policy")])])},o=[],i={name:"",props:{},components:{},data:function(){return{dialogVisible:!1}},computed:{},watch:{},methods:{openDialog:function(){this.dialogVisible=!0}},created:function(){},mounted:function(){},beforeDestroy:function(){}},n=i,s=a("5d22"),c=Object(s["a"])(n,r,o,!1,null,"7b80060c",null);e["a"]=c.exports},df81:function(t,e,a){"use strict";a("1a8a")},ef87:function(t,e,a){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}a.d(e,"b",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return c}));var o=function t(e){if(Array.isArray(e))return e.map(t);if(e&&"object"===r(e)){for(var a={},o=Object.keys(e),i=0,n=o.length;i<n;i++){var s=o[i];a[s]=t(e[s])}return a}return e},i=function(t){if(Array.isArray(t))return Array.from(new Set(t))},n=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}(),s=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/,c="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "},f53e:function(t,e,a){"use strict";a("380c")}}]);