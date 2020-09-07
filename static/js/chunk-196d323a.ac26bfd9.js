(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196d323a"],{"0761":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-content"},[s("div",{staticClass:"login-content-left p30"}),t._v(" "),s("div",{staticClass:"login-content-right"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("nav",{staticClass:"title"},[t._v("Welcome to Mercury NLP")])]),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{ref:"username",attrs:{placeholder:"Email address or account name",name:"username",type:"text",tabindex:"1","auto-complete":"off"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"off"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),s("el-form-item",[s("el-button",{staticClass:"mt-25",staticStyle:{width:"100%",height:"40px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("Sign in")])],1),t._v(" "),s("el-form-item",[s("el-button",{staticClass:"w",attrs:{plain:"",type:"primary"},on:{click:t.handleRegister}},[t._v("Create a new account")])],1),t._v(" "),s("el-row",{staticClass:"f12 login-content-right-footer",attrs:{gutter:10}},[s("el-col",{staticClass:"color-main",attrs:{span:12,align:"left"}},[s("router-link",{attrs:{to:"/forgetPassword"}},[t._v("Forget password")])],1),t._v(" "),s("el-col",{staticClass:"color-main",attrs:{span:12,align:"right"}},[t._v("\n            Privacy Policy\n          ")])],1)],1)],1)]),t._v(" "),s("div",{staticClass:"login-left"}),t._v(" "),s("div",{staticClass:"login-right"})])},n=[],r=s("8c92"),a=s.n(r),i={name:"Login",data:function(){var t=function(t,e,s){e.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},mounted:function(){a.a.set("userRoles","undefined")},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleRegister:function(){this.$router.push({path:"/register"})},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0;var s={password:t.loginForm.password,loginName:t.loginForm.username};t.$store.dispatch("user/login",s).then((function(e){t.$router.push({path:"/"}),t.loading=!1})).catch((function(e){404===e.code&&t.$message.error(e.msg),t.$router.push({path:"/"}),t.loading=!1}))}))}}},l=i,c=(s("dbe3"),s("f20b"),s("9ca4")),d=Object(c["a"])(l,o,n,!1,null,"18fc976d",null);e["default"]=d.exports},"209c":function(t,e,s){},dbe3:function(t,e,s){"use strict";var o=s("edb2"),n=s.n(o);n.a},edb2:function(t,e,s){},f20b:function(t,e,s){"use strict";var o=s("209c"),n=s.n(o);n.a}}]);