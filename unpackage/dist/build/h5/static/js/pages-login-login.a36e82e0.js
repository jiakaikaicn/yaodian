(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{6745:function(t,i,a){"use strict";a.r(i);var e=a("6d3b"),n=a("811a");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("c6e7");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"46738f22",null,!1,e["a"],s);i["default"]=c.exports},"6d3b":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniForms:a("095e").default,uniFormsItem:a("93c8").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"login-box"},[a("v-uni-view",{staticClass:"admin-logo"},[a("v-uni-image",{attrs:{src:t.logo,mode:"heightFix"}})],1),a("v-uni-view",{staticClass:"uni-header no-padding"},[a("v-uni-view",{staticClass:"uni-title"},[t._v(t._s(t.$t("login.text.title")))])],1),a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{rules:t.rules},model:{value:t.formData,callback:function(i){t.formData=i},expression:"formData"}},[a("uni-forms-item",{attrs:{"left-icon":"person-filled",name:"username",labelWidth:"35"}},[a("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:t.$t("login.field.username")},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.username,callback:function(i){t.$set(t.formData,"username",i)},expression:"formData.username"}})],1),a("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"locked-filled",name:"password",labelWidth:"35"}},[a("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:t.showPassword,placeholder:t.$t("login.field.password")},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.password,callback:function(i){t.$set(t.formData,"password",i)},expression:"formData.password"}}),a("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[t.showPassword?"":"uni-eye-active"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changePassword.apply(void 0,arguments)}}},[t._v("")])],1),t.needCaptcha?a("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"image",name:"captcha",labelWidth:"35"}},[a("v-uni-input",{ref:"captchaInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:t.$t("login.field.captcha")},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(i){t.$set(t.formData,"captcha",i)},expression:"formData.captcha"}}),a("v-uni-view",{staticClass:"admin-captcha-img pointer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.createCaptcha.apply(void 0,arguments)}}},[t.captchaLoading?a("i",{staticClass:"uni-loading"}):a("img",{staticStyle:{width:"120px",height:"32px"},attrs:{src:t.captchaBase64}})])],1):t._e(),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:t.loading,disabled:t.loading},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.button.login")))])],1)],1),a("v-uni-view",{staticClass:"uni-tips"},[a("v-uni-text",{staticClass:"uni-tips-text",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.initAdmin.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.text.prompt"))+"...")])],1)],1)],1)},o=[]},"77aa":function(t,i,a){"use strict";var e=a("4ea4");a("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("5530")),o=a("26cb"),s=e(a("a780")),r=a("e50f"),c={deviceId:(0,r.getDeviceUUID)(),scene:"login"},d={data:function(){return(0,n.default)((0,n.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:"",captcha:""},captchaLoading:!1,needCaptcha:!1,captchaBase64:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},captcha:{rules:[{required:!0,errorMessage:"请输入验证码"}]}}})},mounted:function(){this.focus();var t=this;uni.getStorage({key:"lastUsername",success:function(i){t.formData.username=i.data}}),this.getNeedCaptcha()},methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)({setToken:function(t,i){t("user/SET_TOKEN",i)},setUserInfo:function(t,i){t("user/SET_USER_INFO",i,{root:!0})}})),{},{getNeedCaptcha:function(){var t=this;this.$request("getNeedCaptcha",{functionName:"uni-id-cf",showModal:!1}).then((function(i){i.needCaptcha?(t.formData.captcha="",t.createCaptcha(),t.needCaptcha=!0):t.needCaptcha=!1}))},submit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.loading||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.$refs.captchaInput&&this.$refs.captchaInput.$refs.input.blur(),this.loading=!0,this.$request("login",(0,n.default)((0,n.default)({},i),c),{functionName:"uni-id-cf",showModal:!1}).then((function(a){t.setToken({token:a.token,tokenExpired:a.tokenExpired}),t.setUserInfo(a.userInfo),uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"lastUsername",data:i.username}),uni.redirectTo({url:t.indexPage})})).catch((function(i){i.needCaptcha?(t.formData.captcha="",t.createCaptcha(),t.needCaptcha=!0):t.needCaptcha=!1;var a=t;uni.showModal({content:i.message||"请求服务失败",showCancel:!1,success:function(){10101===i.code&&a.$refs.usernameInput&&a.$refs.usernameInput.$refs.input.focus(),10102===i.code&&a.$refs.passwordInput&&a.$refs.passwordInput.$refs.input.focus(),10002===i.code&&a.$refs.captchaInput&&a.$refs.captchaInput.$refs.input.focus()}})})).finally((function(i){t.loading=!1})))},createCaptcha:function(){var t=this;this.captchaLoading=!0,this.$request("createCaptcha",c,{functionName:"uni-id-cf"}).then((function(i){0===i.code&&(t.captchaBase64=i.captchaBase64)})).catch((function(t){})).finally((function(i){t.captchaLoading=!1}))},submitForm:function(){this.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};i.default=d},"811a":function(t,i,a){"use strict";a.r(i);var e=a("77aa"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},c6e7:function(t,i,a){"use strict";var e=a("e23b"),n=a.n(e);n.a},e23b:function(t,i,a){var e=a("e501");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("ae3370d2",e,!0,{sourceMap:!1,shadowMode:!1})},e501:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'uni-page-body[data-v-46738f22]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-46738f22]{position:relative;max-width:350px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-46738f22]:hover{text-decoration:underline}.uni-tips[data-v-46738f22]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-46738f22]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-46738f22]{padding:0}.admin-logo[data-v-46738f22]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-46738f22]{height:40px}.admin-captcha-img[data-v-46738f22]{position:absolute;top:1px;right:0;display:flex;justify-content:center;align-items:center;background-color:#fff;width:100px;height:33px;border-left:1px #e5e5e5 solid;border-right:1px #e5e5e5 solid;border-radius:0 5px 5px 0;background-color:#f9f9f9}.admin-captcha-img img[data-v-46738f22]{border-radius:5px}.uni-loading[data-v-46738f22]:before{background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat}.uni-loading[data-v-46738f22]{margin:0 auto;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:uni-loading-data-v-46738f22 1s steps(12) infinite;animation:uni-loading-data-v-46738f22 1s steps(12) infinite;background-size:100%}@-webkit-keyframes uni-loading-data-v-46738f22{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-loading-data-v-46738f22{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}body.?%PAGE?%[data-v-46738f22]{background-color:#fff}',""]),t.exports=i}}]);