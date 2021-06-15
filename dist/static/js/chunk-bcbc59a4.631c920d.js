(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcbc59a4"],{"26e6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-container pr"},[i("div",{staticClass:"login-content pr"},[i("img",{staticClass:"mt-20 top-icon",attrs:{src:a("c743"),alt:""}}),t._v(" "),i("img",{staticClass:"mt-20 bottom-icon",attrs:{src:a("9a0e"),alt:""}}),t._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form",{ref:"formData",staticClass:"login-form",attrs:{model:t.formData,align:"left","auto-complete":"on","label-position":"left"}},[i("div",[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{width:"45px",src:a("eba9"),alt:""}})])],1),t._v(" "),i("div",{staticClass:"mt-40 title-container"},[i("nav",{staticClass:"title color-main fb f24"},[t._v("Welcome to Mercury NLP")]),t._v(" "),i("div",{staticClass:"mt-10 color-gray f13"},[t._v("\n              Fast, secure, cloud-based clinical NLP with high precision and\n              accuracy based on the award-winning CLAMP system from Melax\n              Technologies!\n            ")]),t._v(" "),i("h2",{staticClass:"mt-30 color-main pr"},[t._v("\n              Sign up\n              "),i("img",{staticClass:"nlp-img-icon",attrs:{src:a("6646"),alt:""}})])]),t._v(" "),i("el-form-item",{attrs:{prop:"email",label:"Email address",rules:[{required:!0,validator:t.validateEmail,trigger:["blur","change"]}]}},[i("el-input",{ref:"email",attrs:{placeholder:"Email address",name:"email",type:"text"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"password",label:"Password",rules:{required:!0,validator:t.validatePass}}},[i("el-input",{attrs:{placeholder:"Password",type:"password",autocomplete:"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),i("el-form-item",{staticClass:"mt-40",attrs:{prop:"checkPass",rules:{validator:t.validateCheckPass}}},[i("el-input",{attrs:{type:"password",placeholder:"Confirm password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(e){t.$set(t.formData,"checkPass",e)},expression:"formData.checkPass"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"Account name",prop:"accountName",rules:{required:!0,message:"Please enter an account name"}}},[i("el-input",{attrs:{placeholder:"Account name",type:"text"},model:{value:t.formData.accountName,callback:function(e){t.$set(t.formData,"accountName",e)},expression:"formData.accountName"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"invitationCode",label:"Invitation code"}},[i("el-input",{attrs:{maxlength:64,placeholder:"Invitation code ( optional )",type:"text"},model:{value:t.formData.invitationCode,callback:function(e){t.$set(t.formData,"invitationCode",e)},expression:"formData.invitationCode"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"invitationCode",label:""}},[i("el-checkbox",{staticClass:"mr-5",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),i("span",{staticClass:"ml-10"},[t._v("I agree with the\n              "),i("span",{staticClass:"cp",staticStyle:{"text-decoration":"underline"},on:{click:function(e){return t.$refs.userAgreement.openDialog()}}},[t._v("User Agreement")])])],1),t._v(" "),i("el-form-item",[i("el-button",{staticStyle:{width:"100%",height:"40px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t._v("Sign up")])],1),t._v(" "),i("el-row",{staticClass:"mt-20 f12",attrs:{gutter:10}},[i("el-col",{staticClass:"color-main",attrs:{span:12,align:"left"}},[i("span",{staticClass:"color-light-blue cp",on:{click:t.openPrivacyPolicy}},[t._v("Privacy Policy")])]),t._v(" "),i("el-col",{staticClass:"color-main",attrs:{span:12,align:"right"}},[i("span",{staticClass:"color-light-blue cp",on:{click:t.handleLogin}},[t._v("Already have an account?")])])],1)],1)],1),t._v(" "),i("el-col",{staticClass:"pl-20",attrs:{span:14,align:"right"}},[i("img",{staticClass:"register-right",style:t.registerRightStyle,attrs:{src:a("8895"),alt:""}})])],1)],1),t._v(" "),i("privacy-policy",{ref:"privacyPolicy"}),t._v(" "),i("user-agreement",{ref:"userAgreement"})],1)},r=[],o=a("b9b3"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"User Agreement",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("p",[t._v("This is User Agreement")])])},s=[],c={name:"",components:{},props:{},data:function(){return{dialogVisible:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{openDialog:function(){this.dialogVisible=!0}}},l=c,u=a("2877"),d=Object(u["a"])(l,n,s,!1,null,"3072cdb6",null),m=d.exports,p=a("a17d"),f=a("ef87"),g=/^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,h={name:"Login",components:{PrivacyPolicy:o["a"],UserAgreement:m},data:function(){var t=this,e=function(e,a,i){""===a?i(new Error("Please enter a password")):f["d"].test(a)?(""!==t.formData.checkPass&&t.$refs.formData.validateField("checkPass"),i()):i(new Error(f["c"]))},a=function(e,a,i){""===a?i(new Error("Confirm password")):a!==t.formData.password?i(new Error("Confirmed password does not match the new password. ")):i()},i=function(t,e,a){""===e?a(new Error("Please enter an email address.")):(""!==e&&(g.test(e)||a(new Error("Please enter the correct email address."))),a())};return{passwordReg:f["d"],passwordMsg:f["c"],validateEmail:i,getCodeText:"Get Code",getCodeDisable:!1,btnLoading:!1,codeCount:30,validatePass:e,validateCheckPass:a,registerRightStyle:{marginTop:"160px"},formData:{email:"",accountName:"",password:"",checkPass:"",verificationCode:""},checked:!1,loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",pattern:f["d"],message:f["c"],validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;document.querySelector(".register-right").offsetTop;t<306&&t>160&&(this.registerRightStyle={marginTop:t+"px"})},openPrivacyPolicy:function(){this.$refs.privacyPolicy.openDialog()},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){this.$router.push("/login")},handleRegister:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return!1;if(t.checked){t.loading=!0;var a=Object.assign(t.formData);delete a.checkPass,Object(p["c"])(a).then((function(e){t.loading=!1,200===e.code&&t.$router.push("/sendEmailSuccess")})).catch((function(){t.loading=!1}))}else t.$message.warning("Before proceeding you must review and acknowledge the User Agreement.")}))}}},b=h,v=(a("f53e"),Object(u["a"])(b,i,r,!1,null,null,null));e["default"]=v.exports},6646:function(t,e,a){t.exports=a.p+"static/img/NLP.9e846c96.png"},"7caf":function(t,e,a){},8895:function(t,e,a){t.exports=a.p+"static/img/login_right.d64c8bcf.jpg"},"9a0e":function(t,e,a){t.exports=a.p+"static/img/bac.37123118.png"},a17d:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return c}));var i=a("b775");function r(t){return Object(i["a"])({url:"account/user/send/verification/code/signup",method:"post",data:t})}function o(t){return Object(i["a"])({url:"acc/addition",method:"post",data:t})}function n(t){return Object(i["a"])({url:"acc/resetpwd",method:"post",data:t})}function s(t){return Object(i["a"])({url:"account/user/forgot/verification/code",method:"post",data:t})}function c(t){return Object(i["a"])({url:"acc/verify-reset",method:"post",data:t})}},b9b3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Privacy Policy",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("p",[t._v("This is Privacy Policy")])])},r=[],o={name:"",components:{},props:{},data:function(){return{dialogVisible:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{openDialog:function(){this.dialogVisible=!0}}},n=o,s=a("2877"),c=Object(s["a"])(n,i,r,!1,null,"8c3a3046",null);e["a"]=c.exports},c743:function(t,e,a){t.exports=a.p+"static/img/Group.564be7cf.png"},eba9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAABICAYAAAApp23bAAAACXBIWXMAACxLAAAsSwGlPZapAAAFF2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNi0xMFQxNToxMzo0NCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDYtMTBUMTU6MTY6MTkrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMTBUMTU6MTY6MTkrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njg2YWU2ZDAtM2I0YS1j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"},ef87:function(t,e,a){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a.d(e,"b",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return c}));var r=function t(e){if(Array.isArray(e))return e.map(t);if(e&&"object"===i(e)){for(var a={},r=Object.keys(e),o=0,n=r.length;o<n;o++){var s=r[o];a[s]=t(e[s])}return a}return e},o=function(t){if(Array.isArray(t))return Array.from(new Set(t))},n=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}(),s=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/,c="Password does not meet minimum requirements. Passwords should contain at least 8 characters, a number, upper and lower case characters and one of the special characters ! @ # $. "},f53e:function(t,e,a){"use strict";a("7caf")}}]);