(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55dfc250"],{"065f":function(e,t,a){"use strict";a("d952")},5409:function(e,t,a){},"8cf5":function(e,t,a){"use strict";a("5409")},a17d:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return c}));var r=a("b775");function s(e){return Object(r["a"])({url:"account/user/send/verification/code/signup",method:"post",data:e})}function n(e){return Object(r["a"])({url:"account/user/addition",method:"post",data:e})}function o(e){return Object(r["a"])({url:"account/user/send/verification/code/password",method:"post",data:e})}function i(e){return Object(r["a"])({url:"account/user/forgot/verification/code",method:"post",data:e})}function c(e){return Object(r["a"])({url:"account/user/forgot/update/password",method:"post",data:e})}},cc91:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forget-password-container"},[a("div",{staticClass:"register-content bg-color-white"},[e._m(0),e._v(" "),a("nav",{staticClass:"f18 forget-header-title p20 fb"},[1===e.step?a("span",[e._v("Enter associated account")]):e._e(),e._v(" "),2===e.step?a("span",[e._v("E-mail verification")]):e._e(),e._v(" "),3===e.step?a("span",[e._v("Password reset")]):e._e()]),e._v(" "),a("section",{staticClass:"w60 bc pb-70"},[a("nav",{staticClass:"mt-50 f15 lh1-5"},[1===e.step?a("span",[e._v("\n          Please enter the email address associated with your account.")]):e._e(),e._v(" "),2===e.step?a("span",[e._v("\n          If you no longer use the email address associated with your account.\n          Please contact customer service\n          "),a("a",{attrs:{href:"mailto:support@melaxtech.com"}},[e._v("support@melaxtech.com")]),e._v("\n          to help restore access to your account.\n        ")]):e._e(),e._v(" "),3===e.step?a("span",[e._v("\n          Please set a new password. It is recommended to use a combination of\n          Numbers,letters ande characters to improve the password security\n          level,\n        ")]):e._e()]),e._v(" "),a("el-form",{ref:"formData",staticClass:"register-form mt-50",attrs:{model:e.formData,"auto-complete":"on",align:"left","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[1===e.step?a("el-form-item",{attrs:{prop:"email",rules:[{required:!0,message:"Please enter email."},{type:"email",message:"Please enter the correct email address",trigger:["blur","change"]}]}},[a("el-input",{ref:"email",attrs:{placeholder:"Email address",name:"email",type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1):e._e(),e._v(" "),2===e.step?a("el-form-item",{attrs:{prop:"verificationCode",rules:[{required:!0,message:"Please enter verification code."}]}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{placeholder:"Verification code case sensitive",type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.verificationCode,callback:function(t){e.$set(e.formData,"verificationCode",t)},expression:"formData.verificationCode"}})],1)],1)],1):e._e(),e._v(" "),3===e.step?a("el-form-item",{attrs:{prop:"password",rules:{validator:e.validatePass}}},[a("el-input",{attrs:{placeholder:"Password",type:"password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1):e._e(),e._v(" "),3===e.step?a("el-form-item",{staticClass:"mt-35",attrs:{prop:"checkPass",rules:{validator:e.validateCheckPass}}},[a("el-input",{attrs:{type:"password",placeholder:"Confirm password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.checkPass,callback:function(t){e.$set(e.formData,"checkPass",t)},expression:"formData.checkPass"}})],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"mt-5",staticStyle:{width:"100%",height:"40px"},attrs:{loading:e.loading,disabled:!e.formData.email,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleNext(t)}}},[e._v(e._s(3===e.step?"Confirm":"Next"))])],1)],1),e._v(" "),1===e.step?a("div",{staticClass:"f13 mt-50 lh2"},[e._v("\n        If you no longer use the email address associated with your account.\n        Please contact customer service <\n        "),a("a",{staticClass:"color-main",attrs:{href:"mailto:support@melaxtech.com"}},[e._v("support@melaxtech.com")]),e._v("\n        > to help restore access to your account.\n      ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"register-left"}),e._v(" "),a("div",{staticClass:"register-right"})])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"tl cb p20"},[r("img",{staticClass:"fl",attrs:{src:a("706c"),width:"250px",alt:""}}),e._v(" "),r("div",{staticClass:"fl mt-20 f18"},[r("span",[e._v(" |    ")]),e._v(" "),r("strong",[e._v("Password reset")])])])}],n=a("a17d"),o=a("ef87"),i={name:"Login",data:function(){var e=this,t=function(t,a,r){""===a?r(new Error("Please enter the password")):o["d"].test(a)?(""!==e.formData.checkPass&&e.$refs.formData.validateField("checkPass"),r()):r(new Error(o["c"]))},a=function(t,a,r){""===a?r(new Error("Please enter the password again")):a!==e.formData.password?r(new Error("The two passwords are inconsistent!")):r()};return{getCodeText:"Get Code",getCodeDisable:!1,step:1,btnLoading:!1,codeCount:30,validatePass:t,validateCheckPass:a,formData:{email:"",accountName:"",password:"",checkPass:"",verificationCode:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{getCode:function(){var e=this,t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!this.formData.email)return this.$message.warning("Please enter email"),!1;if(!t.test(this.formData.email))return this.$message.warning("Please enter the correct email address"),!1;var a={email:this.formData.email};this.btnLoading=!0,Object(n["b"])(a).then((function(t){if(setTimeout((function(){e.btnLoading=!1}),1e3),t.success){var a=setInterval((function(){e.codeCount<1?(e.getCodeDisable=!1,e.getCodeText="Get Code",e.codeCount=30,clearInterval(a)):(e.getCodeDisable=!0,e.getCodeText=e.codeCount--+" s")}),1e3);e.$message.success(t.msg)}})).catch((function(){e.btnLoading=!1}))},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){this.$router.push("/login")},handleNext:function(){var e=this;this.$refs.formData.validate((function(t){if(!t)return!1;if(1===e.step){var a={email:e.formData.email};e.loading=!0,Object(n["d"])(a).then((function(t){t.success&&(e.loading=!1,e.step=2)})).catch((function(){e.loading=!1}))}else if(2===e.step){var r={email:e.formData.email,verificationCode:e.formData.verificationCode};e.loading=!0,Object(n["a"])(r).then((function(t){t.success&&(e.loading=!1,e.step=3)})).catch((function(){e.loading=!1}))}else if(3===e.step){var s={password:e.formData.password,email:e.formData.email,verificationCode:e.formData.verificationCode};e.loading=!0,Object(n["e"])(s).then((function(t){t.success&&(e.$message.success(t.msg),setTimeout((function(){e.$router.push("/login")}),1e3))})).catch((function(){e.loading=!1}))}}))}}},c=i,l=(a("8cf5"),a("065f"),a("2877")),u=Object(l["a"])(c,r,s,!1,null,"206ab188",null);t["default"]=u.exports},d952:function(e,t,a){},ef87:function(e,t,a){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c}));var s=function e(t){if(Array.isArray(t))return t.map(e);if(t&&"object"===r(t)){for(var a={},s=Object.keys(t),n=0,o=s.length;n<o;n++){var i=s[n];a[i]=e(t[i])}return a}return t},n=function(e){if(Array.isArray(e))return Array.from(new Set(e))},o=function(){var e=0;return function(t,a){clearTimeout(e),e=setTimeout(t,a)}}(),i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/,c="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "}}]);