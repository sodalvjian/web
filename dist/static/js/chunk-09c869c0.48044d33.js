(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09c869c0"],{"5d8d":function(e,t,a){"use strict";a("8d1b")},"6f59":function(e,t,a){"use strict";a("b34e")},"8d1b":function(e,t,a){},a17d:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return c}));var s=a("b775");function r(e){return Object(s["a"])({url:"account/user/send/verification/code/signup",method:"post",data:e})}function n(e){return Object(s["a"])({url:"acc/addition",method:"post",data:e})}function o(e){return Object(s["a"])({url:"acc/resetpwd",method:"post",data:e})}function i(e){return Object(s["a"])({url:"account/user/forgot/verification/code",method:"post",data:e})}function c(e){return Object(s["a"])({url:"acc/verify-reset",method:"post",data:e})}},b34e:function(e,t,a){},c743:function(e,t,a){e.exports=a.p+"static/img/Group.564be7cf.png"},cc91:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forget-password-container"},[a("div",{staticClass:"forget-content"},[e._m(0),e._v(" "),a("div",{staticClass:"register-content p30 bg-color-white"},[2===e.step?a("section",{staticClass:"tc p30"},[a("div",{staticClass:"f24"},[e._v("Message sent")]),e._v(" "),a("div",{staticClass:"mt-20 f13 p20 lh1-5"},[e._v("\n          Email has been sent to your email\n          "),a("span",{staticClass:"color-light-blue"},[e._v(e._s(e.formData.email))]),a("br"),e._v(" Check the\n          mail\n        ")]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"mt-40 color-light-blue cp tc f13"},[a("router-link",{attrs:{to:"/"}},[e._v("Back to login")])],1)]):a("section",[a("nav",{staticClass:"f22 forget-header-title fb color-main"},[1===e.step?a("span",[e._v("Request Password Reset")]):e._e(),e._v(" "),3===e.step?a("span",[e._v("Password Reset")]):e._e()]),e._v(" "),a("section",{staticClass:"pb-30"},[a("nav",{staticClass:"mt-20 f13 color-gray"},[1===e.step?a("span",[e._v("\n              Please enter the email address associated with your\n              account.")]):e._e(),e._v(" "),2===e.step?a("span",[e._v("\n              If you no longer use the email address associated with your\n              account. Please contact customer service\n              "),a("a",{attrs:{href:"mailto:mercurynlp@melaxtech.com"}},[e._v("mercurynlp@melaxtech.com")]),e._v("\n              to help restore access to your account.\n            ")]):e._e(),e._v(" "),3===e.step?a("span",[e._v("\n              Please set a new password. It is recommended to use a\n              combination of numbers, letters and characters to improve the\n              password security.\n            ")]):e._e()]),e._v(" "),a("el-form",{ref:"formData",staticClass:"register-form mt-50",attrs:{model:e.formData,"auto-complete":"on",align:"left","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[1===e.step?a("el-form-item",{attrs:{prop:"email",rules:[{required:!0,message:"Please enter email."},{type:"email",message:"Please enter the correct email address",trigger:["blur","change"]}]}},[a("el-input",{ref:"email",attrs:{placeholder:"Email address",name:"email",type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1):e._e(),e._v(" "),2===e.step?a("el-form-item",{attrs:{prop:"verificationCode",rules:[{required:!0,message:"Please enter verification code."}]}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{placeholder:"Verification code case sensitive",type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.verificationCode,callback:function(t){e.$set(e.formData,"verificationCode",t)},expression:"formData.verificationCode"}})],1)],1)],1):e._e(),e._v(" "),3===e.step?a("el-form-item",{attrs:{prop:"password",rules:{validator:e.validatePass}}},[a("el-input",{attrs:{placeholder:"Password",type:"password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1):e._e(),e._v(" "),3===e.step?a("el-form-item",{staticClass:"mt-35",attrs:{prop:"checkPass",rules:{validator:e.validateCheckPass}}},[a("el-input",{attrs:{type:"password",placeholder:"Confirm password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNext(t)}},model:{value:e.formData.checkPass,callback:function(t){e.$set(e.formData,"checkPass",t)},expression:"formData.checkPass"}})],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"mt-5",staticStyle:{width:"100%",height:"40px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleNext(t)}}},[e._v(e._s(3===e.step?"Confirm":"Next"))])],1)],1),e._v(" "),a("div",{staticClass:"color-light-blue cp tc f13"},[a("router-link",{attrs:{to:"/"}},[e._v("Back to login")])],1),e._v(" "),1===e.step?a("div",{staticClass:"f13 mt-50 color-gray lh1-5"},[e._v("\n            If you no longer use the email address associated with your\n            account. Please contact customer service <\n            "),a("a",{staticClass:"color-light-blue",attrs:{href:"mailto:mercurynlp@melaxtech.com"}},[e._v("mercurynlp@melaxtech.com")]),e._v("\n            > to help restore access to your account.\n          ")]):e._e()],1)])])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"tl cb"},[s("div",{staticClass:"fl"},[s("img",{attrs:{width:"90px",src:a("c743"),alt:""}})]),e._v(" "),s("a",{staticClass:"mt-20 ml-20 fl",attrs:{href:"/"}},[s("img",{attrs:{src:a("e1e9"),width:"200px",alt:""}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-30 w p15 color-white bg-color-main"},[e._v("\n          Message sent "),a("i",{staticClass:"el-icon-check"})])}],n=a("a17d"),o=a("ef87"),i={name:"Login",data:function(){var e=this,t=function(t,a,s){""===a?s(new Error("Please enter the password")):o["d"].test(a)?(""!==e.formData.checkPass&&e.$refs.formData.validateField("checkPass"),s()):s(new Error(o["c"]))},a=function(t,a,s){""===a?s(new Error("Please enter the password again")):a!==e.formData.password?s(new Error("The two passwords are inconsistent!")):s()};return{getCodeText:"Get Code",getCodeDisable:!1,step:1,btnLoading:!1,codeCount:30,validatePass:t,validateCheckPass:a,formData:{email:"",accountName:"",password:"",checkPass:"",verificationCode:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,uid:this.$route.query.uid,token:this.$route.query.token}},watch:{$route:{handler:function(e){this.uid&&(this.step=3)},immediate:!0}},methods:{getCode:function(){var e=this,t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!this.formData.email)return this.$message.warning("Please enter email"),!1;if(!t.test(this.formData.email))return this.$message.warning("Please enter the correct email address"),!1;var a={email:this.formData.email};this.btnLoading=!0,Object(n["b"])(a).then((function(t){if(setTimeout((function(){e.btnLoading=!1}),1e3),t.success){var a=setInterval((function(){e.codeCount<1?(e.getCodeDisable=!1,e.getCodeText="Get Code",e.codeCount=30,clearInterval(a)):(e.getCodeDisable=!0,e.getCodeText=e.codeCount--+" s")}),1e3);e.$message.success(t.msg)}})).catch((function(){e.btnLoading=!1}))},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){this.$router.push("/login")},handleNext:function(){var e=this;this.$refs.formData.validate((function(t){if(!t)return!1;if(1===e.step){var a={email:e.formData.email};e.loading=!0,Object(n["d"])(a).then((function(t){200===t.code&&(e.loading=!1,e.step=2)})).catch((function(){e.loading=!1}))}else if(2===e.step){var s={email:e.formData.email,verificationCode:e.formData.verificationCode};e.loading=!0,Object(n["a"])(s).then((function(t){t.success&&(e.loading=!1,e.step=3)})).catch((function(){e.loading=!1}))}else if(3===e.step){var r={password:e.formData.password,token:e.token,uid:e.uid};e.loading=!0,Object(n["e"])(r).then((function(t){e.loading=!1,200===t.code&&(e.$message.success(t.message),setTimeout((function(){e.$router.push("/login")}),1e3))})).catch((function(){e.loading=!1}))}}))}}},c=i,l=(a("6f59"),a("5d8d"),a("2877")),u=Object(l["a"])(c,s,r,!1,null,"0455d2b7",null);t["default"]=u.exports},e1e9:function(e,t,a){e.exports=a.p+"static/img/logo_color.1cc67895.png"},ef87:function(e,t,a){"use strict";function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}a.d(t,"b",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c}));var r=function e(t){if(Array.isArray(t))return t.map(e);if(t&&"object"===s(t)){for(var a={},r=Object.keys(t),n=0,o=r.length;n<o;n++){var i=r[n];a[i]=e(t[i])}return a}return t},n=function(e){if(Array.isArray(e))return Array.from(new Set(e))},o=function(){var e=0;return function(t,a){clearTimeout(e),e=setTimeout(t,a)}}(),i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/,c="At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ "}}]);