(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40eddf0c"],{"02c7":function(t,e,a){},"1e1a":function(t,e,a){"use strict";a("ac1d")},5352:function(t,e,a){"use strict";a("82b7")},"82b7":function(t,e,a){},a9dc:function(t,e,a){"use strict";a("02c7")},ac1d:function(t,e,a){},bb58:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"user-sider bg-color-white"},[a("ul",{staticClass:"user-sider-mean"},[a("router-link",{attrs:{to:"/user/cost"}},[a("li",{class:t.handleActive("cost")},[t._v("\n      Bills & Credits\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/orderInvoice"}},[a("li",{class:t.handleActive("orderInvoice")},[t._v("\n      Payments\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/personalInfo"}},[a("li",{class:t.handleActive("personalInfo")},[t._v("\n      Payment Information\n    ")])]),t._v(" "),a("router-link",{attrs:{to:"/user/accountPassword"}},[a("li",{class:t.handleActive("accountPassword")},[t._v("\n      Account Security\n    ")])])],1)])},n=[],r=a("4360"),s=a("690a"),o={name:"",components:{},props:{},data:function(){return{userName:r["a"].getters.userInfo.accountName,avatarSrc:r["a"].getters.userInfo.imagePath||s,feeLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleActive:function(t){var e=this.$route.name;return e===t?"active":""}}},l=o,c=(a("c120"),a("2877")),d=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=d.exports},c120:function(t,e,a){"use strict";a("f7a1")},e46f:function(t,e,a){"use strict";a("f543")},f543:function(t,e,a){},f7a1:function(t,e,a){},fe83:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("sider"),t._v(" "),a("article",{staticClass:"user-container bg-color-white w"},[a("nav",{staticClass:"p15 bb-10 bt-10"},[a("strong",{staticClass:"f18 color-main"},[a("router-link",{staticClass:"color-main f19",attrs:{to:"/"}},[a("i",{staticClass:"mr-10 el-icon-arrow-left fb"})]),t._v("\n        Payment Information\n      ")],1)]),t._v(" "),a("section",{staticClass:"mt-10 p25 w"},[a("el-form",{ref:"formData",staticClass:"user-form",attrs:{model:t.formData,"label-position":"top",size:"small","status-icon":""}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.personalLoading,expression:"personalLoading"}]},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"First Name",prop:"firstname"}},[a("el-input",{attrs:{type:"test",placeholder:"First name",autocomplete:"off"},model:{value:t.formData.firstname,callback:function(e){t.$set(t.formData,"firstname",e)},expression:"formData.firstname"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Last Name",prop:"lastname"}},[a("el-input",{attrs:{placeholder:"Last name",type:"test",autocomplete:"off"},model:{value:t.formData.lastname,callback:function(e){t.$set(t.formData,"lastname",e)},expression:"formData.lastname"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Company Name",prop:"companyName"}},[a("el-input",{attrs:{type:"test",placeholder:"Company",autocomplete:"off"},model:{value:t.formData.companyName,callback:function(e){t.$set(t.formData,"companyName",e)},expression:"formData.companyName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Phone Number",prop:"phoneNum"}},[a("el-input",{attrs:{placeholder:"Number",type:"test",autocomplete:"off"},model:{value:t.formData.phoneNum,callback:function(e){t.$set(t.formData,"phoneNum",e)},expression:"formData.phoneNum"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{attrs:{disabled:"",placeholder:"Email",type:"test",autocomplete:"off"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Country/Region",prop:"countryRegion"}},[a("el-select",{staticClass:"w",attrs:{filterable:"",clearable:"",placeholder:"Select and Search"},model:{value:t.formData.countryRegion,callback:function(e){t.$set(t.formData,"countryRegion",e)},expression:"formData.countryRegion"}},t._l(t.countryList,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Address 1",prop:"street"}},[a("el-input",{attrs:{placeholder:"Example: 123 Pendleton St",type:"test",autocomplete:"off"},model:{value:t.formData.street,callback:function(e){t.$set(t.formData,"street",e)},expression:"formData.street"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Address 2",prop:"apartment"}},[a("el-input",{attrs:{placeholder:"Apartment, suite, unit, building, floor, etc. ",type:"test",autocomplete:"off"},model:{value:t.formData.apartment,callback:function(e){t.$set(t.formData,"apartment",e)},expression:"formData.apartment"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"City",prop:"city"}},[a("el-input",{attrs:{placeholder:"City",type:"test",autocomplete:"off"},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"State/Province or Region",prop:"state"}},[a("el-input",{attrs:{placeholder:"State",type:"test",autocomplete:"off"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"ZIP Code",prop:"postalCode"}},[a("el-input",{attrs:{type:"test",placeholder:"Example: 12345"},nativeOn:{keyup:function(e){t.formData.postalCode=t.formData.postalCode.replace(/[^\d]/g,"")}},model:{value:t.formData.postalCode,callback:function(e){t.$set(t.formData,"postalCode",e)},expression:"formData.postalCode"}})],1)],1)],1),t._v(" "),a("el-form-item",{staticClass:"mt-40 mb-50 disinblock"},[a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.submitForm("formData")}}},[t._v("Confirm")]),t._v(" "),a("el-button",{on:{click:function(e){return t.resetForm("formData")}}},[t._v("Reset")])],1)],1),t._v(" "),a("el-divider"),t._v(" "),a("nav",{staticClass:"mt-40"},[a("el-row",{staticClass:"w"},[a("el-col",{attrs:{span:16}},[a("strong",{staticClass:"color-black f15"},[t._v("Credit Card")])])],1)],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.cardLoading,expression:"cardLoading"}]},[a("el-row",{staticClass:"user-card-content",attrs:{gutter:20}},[t._l(t.cardList,(function(e,i){return a("el-col",{key:i,staticClass:"mt-20 user-card-item",attrs:{span:12}},[a("el-form-item",[a("el-card",{staticClass:"user-card",attrs:{shadow:"hover","body-style":{padding:"0"}}},[a("el-row",{staticClass:"p15",attrs:{gutter:10}},[a("el-col",{attrs:{span:16}},[a("strong",{staticClass:"f18"},[t._v(t._s(e.brand))])]),t._v(" "),a("el-col",{attrs:{span:8,align:"right"}},["1"==e.metadata.default?a("small",{staticClass:"user-card-default"},[t._v("Default")]):t._e()])],1),t._v(" "),a("div",{staticClass:"user-card-line"}),t._v(" "),a("div",{staticClass:"user-card-chip"},[a("span",[t._v("CREDIT")])]),t._v(" "),a("div",{staticClass:"f16 colof-white p15 fb"},[t._v("\n                    ●●●● ●●●● ●●●● "+t._s(e.last4)+"\n                  ")]),t._v(" "),a("div",{staticClass:"operation-content"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Delete card",placement:"top"}},[a("el-button",{attrs:{type:"danger",circle:"",icon:"el-icon-delete"},on:{click:function(a){return t.deleteCard(e)}}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Set default",placement:"top"}},[a("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-star-off"},on:{click:function(a){return t.setDefaultPayment(e,i)}}})],1)],1)],1)],1)],1)})),t._v(" "),a("el-col",{staticClass:"mt-20",attrs:{span:12}},[a("el-form-item",[a("el-card",{staticClass:"card-add-btn cp",style:!t.publicKey&&"cursor: not-allowed;grayscale(100%);",attrs:{shadow:"hover",title:!t.publicKey&&"Error getting public key, please refresh the page"},nativeOn:{click:function(e){t.publicKey&&t.handleAddCard()}}},[a("div",{staticClass:"tc mt-50"},[a("i",{staticClass:"el-icon-circle-plus-outline f22"})]),t._v(" "),a("div",{staticClass:"tc color-gray card-add-btn-text"},[t._v("\n                    Add bank card\n                  ")])])],1)],1)],2)],1)],1)],1)]),t._v(" "),a("add-card",{ref:"addCardRef",attrs:{"public-key":t.publicKey,"setup-intent":t.setupIntent},on:{"get-card":t.getCardList,"get-public-key":t.getPublicKey}}),t._v(" "),a("upload-avatar",{ref:"uploadAvatarRef",on:{"get-avatar":t.getAvatar}})],1)},n=[],r=a("4360"),s=a("bb58"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.editStatus?"Edit credit card":"Add credit card",align:"center",visible:t.dialogVisible,"close-on-click-modal":!1,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.resetForm}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],ref:"dialogForm",staticClass:"tl mt-30",attrs:{model:t.dialogForm,"label-position":"top",size:"small","status-icon":""}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"Card Number",prop:"cardNumber",rules:[{required:!0,message:"Please input legal bank card number"}]}},[a("div",{staticClass:"sr-payment-form"},[a("div",{staticClass:"sr-form-row"},[a("div",{staticClass:"sr-input sr-element sr-card-element",attrs:{id:"card-element"}})]),t._v(" "),a("div",{staticClass:"sr-field-error",attrs:{id:"card-errors",role:"alert"}})])])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Default payment",prop:"defaultPayment"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.dialogForm.defaultPayment,callback:function(e){t.$set(t.dialogForm,"defaultPayment",e)},expression:"dialogForm.defaultPayment"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"mt-40 mb-20 tc"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"small",loading:t.btnLoading,type:"primary"},on:{click:function(e){return t.submitForm("dialogForm")}}},[t._v("Confirm")])],1)],1)],1)},l=[],c=a("6455"),d=["01","02","03","04","05","06","07","08","09","10","11","12"],u=h();function h(){for(var t=[],e=20,a=0;a<80;a++)t.push(String(e+a));return t}var m=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas, The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Cote D'ivoire","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia, The","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and the McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kosovo, Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],f={name:"",components:{},props:{publicKey:{type:String,default:""},setupIntent:{type:Object,default:function(){return{}}}},data:function(){return{countryList:m,dialogVisible:!1,editStatus:!1,pageLoading:!1,btnLoading:!1,monthList:d,yearList:u,expirationMonth:"",expirationYear:"",dialogForm:{cardNumber:"",firstname:"",lastname:"",expirationDate:"",securityCode:"",countryRegion:"",address:"",city:"",state:"",defaultPayment:1,userId:r["a"].getters.userInfo.userId},cardData:{},email:r["a"].getters.userInfo.email,stripeFun:{}}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{submitCard:function(){var t=this;this.stripeFun.confirmCardSetup(this.setupIntent.client_secret,{payment_method:{card:this.cardData,billing_details:{email:this.email}}}).then((function(e){e.error?(t.$message.warning(e.error.message),t.btnLoading=!1):(t.$message.success("Add card success."),t.complateCard(e.setupIntent))}))},stripeElements:function(t,e){this.stripeFun=Stripe(t);var a=this.stripeFun.elements(),i={base:{fontSize:"16px",color:"#32325d",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",fontSmoothing:"antialiased","::placeholder":{color:"rgba(0,0,0,0.4)"}}},n=a.create("card",{style:i});n.mount("#card-element"),n.on("focus",(function(){var t=document.getElementById("card-element");t.classList.add("focused")})),n.on("blur",(function(){var t=document.getElementById("card-element");t.classList.remove("focused")})),this.cardData=n},complateCard:function(t){var e=this;if(this.btnLoading=!1,this.dialogForm.defaultPayment){var a={id:t.payment_method};this.cardLoading=!0,Object(c["p"])(a).then((function(t){e.cardLoading=!1,200===t.code&&(e.dialogVisible=!1,e.$emit("get-card"),e.$emit("get-public-key"))})).catch((function(){e.cardLoading=!1}))}else this.dialogVisible=!1,this.$emit("get-card"),this.$emit("get-public-key")},openDialog:function(t){var e=this;this.dialogVisible=!0,this.editStatus=!1,this.$nextTick((function(){e.stripeElements(e.publicKey,e.setupIntent)}))},submitForm:function(t){this.btnLoading=!0,this.submitCard()},resetForm:function(t){Object.assign(this.$data,this.$options.data())}}},g=f,p=(a("e46f"),a("2877")),v=Object(p["a"])(g,o,l,!1,null,"76a64484",null),b=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Upload Avatar","custom-class":"upload-avatar",visible:t.dialogVisible,width:"600px",align:"center"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("section",{staticClass:"tc"},[a("div",{staticClass:"cb disinblock"},[a("vue-avatar",{ref:"vueavatar",staticClass:"fl",attrs:{width:300,height:300,rotation:t.rotation,scale:t.scale},on:{"vue-avatar-editor:image-ready":t.onImageReady}})],1),t._v(" "),a("div",{staticClass:"tc"},[a("el-slider",{staticClass:"disinblock upload-avatar-scale",attrs:{min:1,max:3,step:.02},model:{value:t.scale,callback:function(e){t.scale=e},expression:"scale"}})],1)]),t._v(" "),a("div",{staticClass:"mt-20 mb-20"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.confirmAvatar}},[t._v("Confirm")])],1)])},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas",{ref:"avatarEditorCanvas",staticClass:"cursorPointer",attrs:{width:t.canvasWidth,height:t.canvasHeight,id:"avatarEditorCanvas"},on:{dragover:function(t){t.preventDefault()},drop:t.onDrop,mousedown:t.onDragStart,touchstart:t.onDragStart,click:t.clicked}}),t._v(" "),a("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:t.accept},on:{change:t.fileSelected}})])},D=[];function I(t,e){return M(t)||L(t,e)||S(t,e)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t,e){if(t){if("string"===typeof t)return _(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function L(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],i=!0,n=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(a.push(s.value),e&&a.length===e)break}catch(l){n=!0,r=l}finally{try{i||null==o["return"]||o["return"]()}finally{if(n)throw r}}return a}}function M(t){if(Array.isArray(t))return t}var k={props:{image:{type:String,default:""},accept:{type:String,default:"image/*"},placeholderSvg:{type:String,default:'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><defs><style>.cls-1{fill:#000;}</style></defs><title>Upload_Upload</title><path class="cls-1" d="M32.5,1A31.5,31.5,0,1,1,1,32.5,31.54,31.54,0,0,1,32.5,1m0-1A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0h0Z"/><polygon class="cls-1" points="41.91 28.2 32.59 18.65 23.09 28.39 24.17 29.44 31.87 21.54 31.87 40.05 33.37 40.05 33.37 21.59 40.83 29.25 41.91 28.2"/><polygon class="cls-1" points="40.66 40.35 40.66 44.35 24.34 44.35 24.34 40.35 22.34 40.35 22.34 44.35 22.34 46.35 24.34 46.35 40.66 46.35 42.66 46.35 42.66 44.35 42.66 40.35 40.66 40.35"/></svg>'},border:{type:Number,default:25},borderRadius:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},color:{type:Array,default:function(){return[0,0,0,.5]}},scale:{type:Number,default:1},rotation:{type:Number,default:0}},data:function(){return{cursor:"cursorPointer",canvas:null,context:null,dragged:!1,imageLoaded:!1,changed:!1,state:{drag:!1,my:null,mx:null,xxx:"ab",image:{x:0,y:0,resource:null}}}},computed:{canvasWidth:function(){return this.getDimensions().canvas.width},canvasHeight:function(){return this.getDimensions().canvas.height},rotationRadian:function(){return this.rotation*Math.PI/180}},mounted:function(){var t=this;if(this.canvas=this.$refs.avatarEditorCanvas,this.context=this.canvas.getContext("2d"),this.paint(),this.image)this.loadImage(this.image);else{var e=this.svgToImage(this.placeholderSvg);e.onload=function(){var a=t.canvasWidth/2-this.width/2,i=t.canvasHeight/2-this.height/2;t.context.drawImage(e,a,i,this.width,this.height)}}},methods:{drawRoundedRect:function(t,e,a,i,n,r){if(0===r)t.rect(e,a,i,n);else{var s=i-r,o=n-r;t.translate(e,a),t.arc(r,r,r,Math.PI,1.5*Math.PI),t.lineTo(s,0),t.arc(s,r,r,1.5*Math.PI,2*Math.PI),t.lineTo(i,o),t.arc(s,o,r,2*Math.PI,.5*Math.PI),t.lineTo(r,n),t.arc(r,o,r,.5*Math.PI,Math.PI),t.translate(-e,-a)}},svgToImage:function(t){var e=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=self.URL||self.webkitURL||self,i=a.createObjectURL(e),n=new Image;return n.src=i,n},setState:function(t){var e=Math.ceil(1),a=Math.floor(1e4);this.state=t,this.state.cnt="HELLO"+Math.floor(Math.random()*(a-e))+e},paint:function(){this.context.save(),this.context.translate(0,0),this.context.fillStyle="rgba("+this.color.slice(0,4).join(",")+")";var t=this.borderRadius,e=this.getDimensions(),a=e.border,i=e.canvas.height,n=e.canvas.width;t=Math.max(t,0),t=Math.min(t,n/2-a,i/2-a),this.context.beginPath(),this.drawRoundedRect(this.context,a,a,n-2*a,i-2*a,t),this.context.rect(n,0,-n,i),this.context.fill("evenodd"),this.context.restore()},getDimensions:function(){return{width:this.width,height:this.height,border:this.border,canvas:{width:this.width+2*this.border,height:this.height+2*this.border}}},onDrop:function(t){var e=this;if(t=t||window.event,t.stopPropagation(),t.preventDefault(),t.dataTransfer&&t.dataTransfer.files.length){var a=new FileReader,i=t.dataTransfer.files[0];this.changed=!0,a.onload=function(t){return e.loadImage(t.target.result)},a.readAsDataURL(i)}},onDragStart:function(t){var e=this;t=t||window.event,t.preventDefault(),this.state.drag=!0,this.state.mx=null,this.state.my=null,this.cursor="cursorGrabbing";var a=document,i=!1,n=function n(s){e.onDragEnd(s),!i&&s.targetTouches&&t.target.click(),a.removeEventListener("mouseup",n),a.removeEventListener("mousemove",r),a.removeEventListener("touchend",n),a.removeEventListener("touchmove",r)},r=function(t){i=!0,e.onMouseMove(t)};a.addEventListener("mouseup",n),a.addEventListener("mousemove",r),a.addEventListener("touchend",n),a.addEventListener("touchmove",r)},onDragEnd:function(t){this.state.drag&&(this.state.drag=!1,this.cursor="cursorPointer")},onMouseMove:function(t){if(t=t||window.event,!1!==this.state.drag){this.dragged=!0,this.changed=!0;var e=this.state.image,a=e.x,i=e.y,n=t.targetTouches?t.targetTouches[0].pageX:t.clientX,r=t.targetTouches?t.targetTouches[0].pageY:t.clientY,s={mx:n,my:r,image:e};if(this.state.mx&&this.state.my){var o=(this.state.mx-n)/this.scale,l=(this.state.my-r)/this.scale;e.y=this.getBoundedY(i-l,this.scale),e.x=this.getBoundedX(a-o,this.scale)}this.state.mx=s.mx,this.state.my=s.my,this.state.image=e}},replaceImageInBounds:function(){var t=this.state.image;t.y=this.getBoundedY(t.y,this.scale),t.x=this.getBoundedX(t.x,this.scale)},loadImage:function(t){var e=this,a=new Image,i=this;a.onload=function(){var t=i.getInitialSize(a.width,a.height);i.state.image.x=0,i.state.image.y=0,i.state.image.resource=a,i.state.image.width=t.width,i.state.image.height=t.height,i.state.drag=!1,i.$emit("vue-avatar-editor:image-ready",i.scale),i.imageLoaded=!0,e.$emit("imageLoaded",i.imageLoaded),i.cursor="cursorGrab"},a.onerror=function(t){},this.isDataURL(t)||(a.crossOrigin="anonymous"),a.src=t},getInitialSize:function(t,e){var a,i,n=this.getDimensions(),r=n.height/n.width,s=e/t;return r>s?(a=this.getDimensions().height,i=t*(a/e)):(i=this.getDimensions().width,a=e*(i/t)),{height:a,width:i}},isDataURL:function(t){return null!==t&&!!t.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i)},getBoundedX:function(t,e){var a=this.state.image,i=this.getDimensions(),n=Math.abs(a.width*Math.cos(this.rotationRadian))+Math.abs(a.height*Math.sin(this.rotationRadian)),r=Math.floor((n-i.width/e)/2);return r=Math.max(0,r),Math.max(-r,Math.min(t,r))},getBoundedY:function(t,e){var a=this.state.image,i=this.getDimensions(),n=Math.abs(a.width*Math.sin(this.rotationRadian))+Math.abs(a.height*Math.cos(this.rotationRadian)),r=Math.floor((n-i.height/e)/2);return r=Math.max(0,r),Math.max(-r,Math.min(t,r))},paintImage:function(t,e,a){if(e.resource){var i=this.calculatePosition(e,a);t.save(),t.globalCompositeOperation="destination-over";var n=this.getDimensions();t.translate(n.canvas.width/2,n.canvas.height/2),t.rotate(this.rotationRadian),t.translate(-n.canvas.width/2,-n.canvas.height/2),t.drawImage(e.resource,i.x,i.y,i.width,i.height),t.restore()}},transformDataWithRotation:function(t,e){var a=-this.rotationRadian,i=t*Math.cos(a)-e*Math.sin(a),n=t*Math.sin(a)+e*Math.cos(a);return[i,n]},calculatePosition:function(t,e){t=t||this.state.image;var a=this.getDimensions(),i=t.width*this.scale,n=t.height*this.scale,r=(i-a.width)/2,s=(n-a.height)/2,o=t.x*this.scale,l=t.y*this.scale,c=this.transformDataWithRotation(o,l),d=I(c,2);return o=d[0],l=d[1],o+=e-r,l+=e-s,{x:o,y:l,height:n,width:i}},redraw:function(){this.context.clearRect(0,0,this.getDimensions().canvas.width,this.getDimensions().canvas.height),this.paint(),this.paintImage(this.context,this.state.image,this.border)},getImage:function(){var t=this.getCroppingRect(),e=this.state.image;t.x*=e.resource.width,t.y*=e.resource.height,t.width*=e.resource.width,t.height*=e.resource.height;var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(e.resource,-t.x,-t.y),a},getImageScaled:function(){var t=this.getDimensions(),e=t.width,a=t.height,i=document.createElement("canvas");return i.width=e,i.height=a,this.paintImage(i.getContext("2d"),this.state.image,0),i},imageChanged:function(){return this.changed},getCroppingRect:function(){var t=this.getDimensions(),e={x:t.border,y:t.border,width:t.width,height:t.height},a=this.calculatePosition(this.state.image,t.border);return{x:(e.x-a.x)/a.width,y:(e.y-a.y)/a.height,width:e.width/a.width,height:e.height/a.height}},clicked:function(t){!0===this.dragged?this.dragged=!1:this.$refs.input.click()},fileSelected:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(this.$emit("select-file",a),a.length){var i=new FileReader;this.changed=!0,i.onload=function(t){return e.loadImage(t.target.result)},i.readAsDataURL(a[0])}},resetImage:function(){var t=this;this.canvas=this.$refs.avatarEditorCanvas,this.context=this.canvas.getContext("2d"),t.imageLoaded=!1,this.$emit("imageLoaded",t.imageLoaded),t.state={drag:!1,my:null,mx:null,xxx:"ab",image:{x:0,y:0,resource:null}},this.context.clearRect(0,0,this.getDimensions().canvas.width,this.getDimensions().canvas.height),this.paint();var e=this.svgToImage(this.placeholderSvg);e.onload=function(){var a=t.canvasWidth/2-this.width/2,i=t.canvasHeight/2-this.height/2;t.context.drawImage(e,a,i,this.width,this.height)}}},watch:{state:{handler:function(t,e){this.imageLoaded&&this.redraw()},deep:!0},scale:function(){this.imageLoaded&&(this.replaceImageInBounds(),this.redraw())},rotation:function(){this.imageLoaded&&(this.replaceImageInBounds(),this.redraw())},borderRadius:function(){this.redraw()}}},R=k,P=(a("a9dc"),Object(p["a"])(R,C,D,!1,null,null,null)),A=P.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-avatar",{ref:"vueavatar",attrs:{width:t.width,height:t.height,rotation:t.rotation,borderRadius:t.borderRadius,border:t.border,color:t.color,scale:t.scale},on:{"vue-avatar-editor:image-ready":t.onImageReady,"select-file":function(e){return t.onSelectFile(e)}}}),t._v(" "),a("br"),t._v(" "),t.hasScale?a("label",[t._v("\n    Zoom : "+t._s(t.scale)+"x\n    "),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale,expression:"scale"}],attrs:{type:"range",min:"1",max:"3",step:"0.02"},domProps:{value:t.scale},on:{__r:function(e){t.scale=e.target.value}}})]):t._e(),t._v(" "),a("br"),t._v(" "),t.hasRotation?a("label",[t._v("\n    Rotation : "+t._s(t.rotation)+"°\n    "),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rotation,expression:"rotation"}],attrs:{type:"range",min:"0",max:"360",step:"1"},domProps:{value:t.rotation},on:{__r:function(e){t.rotation=e.target.value}}})]):t._e(),t._v(" "),a("br"),t._v(" "),a("button",{on:{click:t.finished}},[t._v(t._s(t.finishText))])],1)},N=[],T={props:{finishText:{type:String,default:"Save"},hasRotation:{type:Boolean,default:!0},hasScale:{type:Boolean,default:!0},image:{type:String,default:""},border:{type:Number,default:25},borderRadius:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},color:{type:Array,default:function(){return[0,0,0,.5]}}},data:function(){return{rotation:0,scale:1}},components:{VueAvatar:A},methods:{onSelectFile:function(t){this.$emit("select-file",t)},onImageReady:function(){this.scale=1,this.rotation=0},finished:function(){return this.$emit("finished",this.$refs.vueavatar.getImageScaled())}}},B=T,E=Object(p["a"])(B,$,N,!1,null,null,null),O=(E.exports,a("bc3a")),F=a.n(O),j=a("c1df"),z=a.n(j),U=a("c24f"),G={name:"",components:{VueAvatar:A},props:{},data:function(){return{dialogVisible:!1,btnLoading:!1,s3Data:{},rotation:0,scale:1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{confirmAvatar:function(){var t=this,e=this.$refs.vueavatar.getImageScaled();e.toBlob((function(e){t.btnLoading=!0;var a={bizData:{},fileName:"avatar_".concat(z()().format("YY_MM_DD_HH_mm_ss"),".png"),type:"avatar",uuid:""};Object(U["b"])(a).then((function(a){if(200===a.code){t.s3Data=a.data;var i="http://melaxtechinput.s3.amazonaws.com",n=new window.File([e],"avatar",{type:"image/png"}),r=new FormData;for(var s in t.s3Data)r.append(s,t.s3Data[s]);r.append("file",n),F.a.post(i,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.btnLoading=!1;var a=e.data;200===a.code&&(t.$message.success("Upload success."),setTimeout((function(){location.reload()}),800))}))}})).catch((function(){t.btnLoading=!1}))}))},openDialog:function(){this.dialogVisible=!0},saveClicked:function(){var t=this.$refs.vueavatar.getImageScaled();this.$refs.image.src=t.toDataURL()},onImageReady:function(){this.scale=1,this.rotation=0},resetData:function(){Object.assign(this.$data,this.$options.data())}}},K=G,V=(a("1e1a"),Object(p["a"])(K,y,w,!1,null,null,null)),H=V.exports;function Y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(a),!0).forEach((function(e){J(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function J(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var q=a("690a"),Z={name:"",components:{Sider:s["a"],addCard:b,UploadAvatar:H},props:{},data:function(){return{dateData:[],countryList:m,avatarSrc:r["a"].getters.userInfo.imagePath||q,btnLoading:!1,personalLoading:!1,cardLoading:!1,cardList:[],formData:{userId:r["a"].getters.userInfo.userId,imagePath:"",firstname:"",lastname:"",companyName:"",phoneNum:"",email:r["a"].getters.userInfo.email,countryRegion:"",areaCode:"",street:"",city:"",state:"",postalCode:""},publicKey:"",setupIntent:{}}},computed:{},watch:{},created:function(){},mounted:function(){if(!document.getElementById("stripe")){var t=document.createElement("script");t.type="text/javascript",t.src="https://js.stripe.com/v3/",t.id="stripe",document.body.appendChild(t)}this.getUserInfo(),this.getCardList(),this.getPublicKey()},beforeDestroy:function(){},methods:{getPublicKey:function(){var t=this;return Object(c["l"])().then((function(e){t.publicKey=e.data,t.getSetupIntent()}))},getSetupIntent:function(){var t=this;return Object(c["b"])().then((function(e){t.setupIntent=e.data}))},copySuccess:function(){this.$message.success("Copy success!")},handleEdit:function(t){this.$refs.addCardRef.openDialog(t)},deleteCard:function(t){var e=this;this.$confirm("Are you sure to delete?",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){var a={id:t.id};e.cardLoading=!0,Object(c["c"])(a).then((function(t){e.cardLoading=!1,200===t.code&&(e.$message.success(t.message),e.getCardList())})).catch((function(){e.cardLoading=!1}))})).catch((function(){e.cardLoading=!1}))},setDefaultPayment:function(t){var e=this;this.$confirm("Set this card as default?",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){var a={id:t.id};e.cardLoading=!0,Object(c["p"])(a).then((function(t){e.cardLoading=!1,200===t.code&&(e.$message.success(t.message),e.getCardList())})).catch((function(){e.cardLoading=!1}))})).catch((function(){}))},getCardList:function(){var t=this,e=r["a"].getters.userInfo.userId;this.cardLoading=!0,Object(c["f"])(e).then((function(e){t.cardLoading=!1,200===e.code&&(t.cardList=e.data)})).catch((function(){t.cardLoading=!1}))},getUserInfo:function(){var t=this;this.personalLoading=!0,Object(c["n"])().then((function(e){t.formData=e.data,t.personalLoading=!1})).catch((function(){t.personalLoading=!1}))},getAvatar:function(t,e){this.avatarSrc=e,this.formData.imagePath=t},editAvatar:function(){this.$refs.uploadAvatarRef.openDialog()},handleAddCard:function(){this.$refs.addCardRef.openDialog()},openBillDetail:function(){this.$router.push("/user/billDetail")},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;var a=W({},e.formData);e.btnLoading=!0,Object(c["a"])(a).then((function(t){e.btnLoading=!1,t.success&&(e.$message.success(t.msg),setTimeout((function(){location.reload()}),800))})).catch((function(){e.btnLoading=!1}))}))},resetForm:function(t){this.$refs[t].resetFields()}}},X=Z,Q=(a("5352"),Object(p["a"])(X,i,n,!1,null,"50ca22ae",null));e["default"]=Q.exports}}]);