(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dda30"],{"81de":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},s=[],r=n("6455"),c=n("8c92"),i=n.n(c),u={name:"",components:{},props:{},data:function(){return{token:this.$route.query.token,uid:this.$route.query.uid}},computed:{},watch:{},created:function(){},mounted:function(){this.autoLogin()},beforeDestroy:function(){},methods:{autoLogin:function(){var t=this;i.a.remove("userInfo"),sessionStorage.clear(),this.$store.dispatch("user/loginAuto",this.token).then((function(e){t.getUserInfo()})).catch((function(e){404===e.code&&t.$message.error(e.msg),location.href="/",t.loading=!1}))},getUserInfo:function(){var t=this;Object(r["n"])().then((function(e){e.success?(t.$store.dispatch("user/setUserInfo",e.data),location.href="/",t.loading=!1):t.$message.error(e.msg)})).catch((function(){}))}}},a=u,f=n("5d22"),d=Object(f["a"])(a,o,s,!1,null,"f41284f0",null);e["default"]=d.exports}}]);