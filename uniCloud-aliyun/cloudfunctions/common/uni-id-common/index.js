"use strict";var e,n=(e=require("crypto"))&&"object"==typeof e&&"default"in e?e.default:e;const t={TOKEN_EXPIRED:"uni-id-token-expired",CHECK_TOKEN_FAILED:"uni-id-check-token-failed",PARAM_REQUIRED:"uni-id-param-required",ACCOUNT_EXISTS:"uni-id-account-exists",ACCOUNT_NOT_EXISTS:"uni-id-account-not-exists",ACCOUNT_CONFLICT:"uni-id-account-conflict",ACCOUNT_BANNED:"uni-id-account-banned",ACCOUNT_AUDITING:"uni-id-account-auditing",ACCOUNT_AUDIT_FAILED:"uni-id-account-audit-failed",ACCOUNT_CLOSED:"uni-id-account-closed"};function i(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function r(e){if(!e)return;const n=e.match(/^(\d+).(\d+).(\d+)/);return n?n.slice(1,4).map(e=>parseInt(e)):void 0}function o(e,n){const t=r(e),i=r(n);return t?i?function(e,n){const t=Math.max(e.length,n.length);for(let i=0;i<t;i++){const t=e[i],r=n[i];if(t>r)return 1;if(t<r)return-1}return 0}(t,i):1:i?-1:0}const s={"uni-id-token-expired":30203,"uni-id-check-token-failed":30202};function c(e){const{errCode:n,errMsgValue:t}=e;e.errMsg=this._t(n,t),n in s&&(e.code=s[n]),delete e.errMsgValue}function a(e){return"object"===(i=e,Object.prototype.toString.call(i).slice(8,-1).toLowerCase())&&e.errCode&&(n=e.errCode,Object.values(t).includes(n))&&!!e.errCode;var n,i}let u={"zh-Hans":{"uni-id-token-expired":"登陆状态失效，token已过期","uni-id-check-token-failed":"token校验未通过","uni-id-param-required":"缺少参数: {param}","uni-id-account-exists":"此账号已注册","uni-id-account-not-exists":"此账号未注册","uni-id-account-conflict":"用户账号冲突","uni-id-account-banned":"从账号已封禁","uni-id-account-auditing":"此账号正在审核中","uni-id-account-audit-failed":"此账号审核失败","uni-id-account-closed":"此账号已注销"},en:{"uni-id-token-expired":"The login status is invalid, token has expired","uni-id-check-token-failed":"Check token failed","uni-id-param-required":"Parameter required: {param}","uni-id-account-exists":"Account exists","uni-id-account-not-exists":"Account does not exists","uni-id-account-conflict":"User account conflict","uni-id-account-banned":"Account has been banned","uni-id-account-auditing":"Account audit in progress","uni-id-account-audit-failed":"Account audit failed","uni-id-account-closed":"Account has been closed"}};try{const e=require.resolve("uni-config-center/uni-id/lang/index.js");u=function(e,n){const t=Object.keys(e);t.push(...Object.keys(n));const i={};for(let r=0;r<t.length;r++){const o=t[r];i[o]=Object.assign({},e[o],n[o])}return i}(u,require(e))}catch(e){}var d=u;function l(e){return e.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function h(e){return JSON.parse((n=function(e){var n=4-(e=e.toString()).length%4;if(4!==n)for(var t=0;t<n;++t)e+="=";return e.replace(/-/g,"+").replace(/_/g,"/")}(e),Buffer.from(n,"base64").toString("utf-8")));var n}function f(e){return l((n=JSON.stringify(e),Buffer.from(n,"utf-8").toString("base64")));var n}function p(e,t){return l(n.createHmac("sha256",t).update(e).digest("base64"))}const k=function(e,n){if("string"!=typeof e)throw new Error("Invalid token");const t=e.split(".");if(3!==t.length)throw new Error("Invalid token");const[i,r,o]=t;if(p(i+"."+r,n)!==o)throw new Error("Invalid token");const s=h(i);if("HS256"!==s.alg||"JWT"!==s.typ)throw new Error("Invalid token");const c=h(r);if(1e3*c.exp<Date.now()){const e=new Error("Token expired");throw e.name="TokenExpiredError",e}return c},g=function(e,n,t={}){const{expiresIn:i}=t;if(!i)throw new Error("expiresIn is required");const r=parseInt(Date.now()/1e3),o={...e,iat:r,exp:r+t.expiresIn},s=f({alg:"HS256",typ:"JWT"})+"."+f(o);return s+"."+p(s,n)},I=uniCloud.database(),_=I.command,C=I.collection("uni-id-users"),m=I.collection("uni-id-roles");class T{constructor({uniId:e}={}){this.uid=null,this.userRecord=null,this.userPermission=null,this.oldToken=null,this.oldTokenPayload=null,this.uniId=e,this.config=this.uniId._getConfig(),this.clientInfo=this.uniId._clientInfo,this.checkConfig()}checkConfig(){const{tokenExpiresIn:e,tokenExpiresThreshold:n}=this.config;if(n>e)throw new Error("Config error, tokenExpiresThreshold should be less than tokenExpiresIn")}get customToken(){return this.uniId.interceptorMap.get("customToken")}isTokenInDb(e){return o(e,"1.0.10")>=0}async getUserRecord(){if(this.userRecord)return this.userRecord;const e=await C.doc(this.uid).get();if(this.userRecord=e.data[0],!this.userRecord)throw{errCode:t.ACCOUNT_NOT_EXISTS};switch(this.userRecord.status){case void 0:case 0:break;case 1:throw{errCode:t.ACCOUNT_BANNED};case 2:throw{errCode:t.ACCOUNT_AUDITING};case 3:throw{errCode:t.ACCOUNT_AUDIT_FAILED};case 4:throw{errCode:t.ACCOUNT_CLOSED}}if(this.oldTokenPayload){if(this.isTokenInDb(this.oldTokenPayload.uniIdVersion)){if(-1===(this.userRecord.token||[]).indexOf(this.oldToken))throw{errCode:t.CHECK_TOKEN_FAILED}}if(this.userRecord.valid_token_date&&this.userRecord.valid_token_date>1e3*this.oldTokenPayload.iat)throw{errCode:t.TOKEN_EXPIRED}}return this.userRecord}async updateUserRecord(e){await C.doc(this.uid).update(e)}async getUserPermission(){if(this.userPermission)return this.userPermission;const e=(await this.getUserRecord()).role||[];if(0===e.length)return this.userPermission={role:[],permission:[]},this.userPermission;if(e.includes("admin"))return this.userPermission={role:["admin"],permission:[]},this.userPermission;const n=await m.where({role_id:_.in(e)}),t=(i=n.data.reduce((e,n)=>{n.permission&&e.push(...n.permission)},[]),Array.from(new Set(i)));var i;return this.userPermission={role:e,permission:t},this.userPermission}async _createToken({uid:e,role:n,permission:i}={}){if(!n||!i){const e=await this.getUserPermission();n=e.role,i=e.permission}let r={uid:e,role:n,permission:i};if(this.uniId.interceptorMap.has("customToken")){const t=this.uniId.interceptorMap.get("customToken");if("function"!=typeof t)throw new Error("Invalid custom token file");r=await t({uid:e,role:n,permission:i})}const o=Date.now(),{tokenSecret:s,tokenExpiresIn:c}=this.config,a=g({...r,uniIdVersion:"1.0.10"},s,{expiresIn:c}),u=await this.getUserRecord(),d=(u.token||[]).filter(e=>{try{const n=this._checkToken(e);if(u.valid_token_date&&u.valid_token_date>1e3*n.iat)return!1}catch(e){if(e.errCode===t.TOKEN_EXPIRED)return!1}return!0});return d.push(a),await this.updateUserRecord({last_login_ip:this.clientInfo.clientIP,last_login_date:o,token:d}),{token:a,tokenExpired:o+1e3*c}}async createToken({uid:e,role:n,permission:i}={}){if(!e)throw{errCode:t.PARAM_REQUIRED,errMsgValue:{param:"uid"}};this.uid=e;const{token:r,tokenExpired:o}=await this._createToken({uid:e,role:n,permission:i});return{errCode:0,token:r,tokenExpired:o}}async refreshToken({token:e}={}){if(!e)throw{errCode:t.PARAM_REQUIRED,errMsgValue:{param:"token"}};this.oldToken=e;const n=this._checkToken(e);this.uid=n.uid,this.oldTokenPayload=n;const{uid:i}=n,{role:r,permission:o}=await this.getUserPermission(),{token:s,tokenExpired:c}=await this._createToken({uid:i,role:r,permission:o});return{errCode:0,token:s,tokenExpired:c}}_checkToken(e){const{tokenSecret:n}=this.config;let i;try{i=k(e,n)}catch(e){if("TokenExpiredError"===e.name)throw{errCode:t.TOKEN_EXPIRED};throw{errCode:t.CHECK_TOKEN_FAILED}}return i}async checkToken(e,{autoRefresh:n=!0}={}){if(!e)throw{errCode:t.PARAM_REQUIRED,errMsgValue:{param:"token"}};this.oldToken=e;const i=this._checkToken(e);this.uid=i.uid,this.oldTokenPayload=i;const{tokenExpiresThreshold:r}=this.config,{uid:o,role:s,permission:c}=i,a={role:s,permission:c};if(!s&&!c){const{role:e,permission:n}=await this.getUserPermission();a.role=e,a.permission=n}if(!r||!n){const e={code:0,errCode:0,...i,...a};return delete e.uniIdVersion,e}const u=Date.now();let d={};1e3*i.exp-u<1e3*r&&(d=await this._createToken({uid:o}));const l={code:0,errCode:0,...i,...a,...d};return delete l.uniIdVersion,l}}var E=Object.freeze({__proto__:null,checkToken:async function(e,{autoRefresh:n=!0}={}){return new T({uniId:this}).checkToken(e,{autoRefresh:n})},createToken:async function({uid:e,role:n,permission:t}={}){return new T({uniId:this}).createToken({uid:e,role:n,permission:t})},refreshToken:async function({token:e}={}){return new T({uniId:this}).refreshToken({token:e})}});const w=require("uni-config-center")({pluginId:"uni-id"});class A{constructor({context:e,clientInfo:n,config:t}={}){this._clientInfo=e?function(e){return{appId:e.APPID,platform:e.PLATFORM,locale:e.LOCALE,clientIP:e.CLIENTIP,deviceId:e.DEVICEID}}(e):n,this.config=t||this._getOriginConfig(),this.interceptorMap=new Map,w.hasFile("custom-token.js")&&this.setInterceptor("customToken",require(w.resolve("custom-token.js"))),this._i18n=uniCloud.initI18n({locale:this._clientInfo.locale,fallbackLocale:"zh-Hans",messages:d})}setInterceptor(e,n){this.interceptorMap.set(e,n)}_t(...e){return this._i18n.t(...e)}_parseOriginConfig(e){return Array.isArray(e)?e:e[0]?Object.values(e):e}_getOriginConfig(){if(w.hasFile("config.json")){let e;try{e=w.config()}catch(e){throw new Error("Invalid uni-id config file\n"+e.message)}return this._parseOriginConfig(e)}try{return this._parseOriginConfig(require("uni-id/config.json"))}catch(e){throw new Error("Invalid uni-id config file")}}_getAppConfig(){const e=this._getOriginConfig();return Array.isArray(e)?e.find(e=>e.dcloudAppid===this._clientInfo.appId)||e.find(e=>e.isDefaultConfig):e}_getPlatformConfig(){const e=this._getAppConfig();if(!e)throw new Error(`Config for current app (${this._clientInfo.appId}) was not found, please check your config file or client appId`);"app-plus"===this._clientInfo.platform&&(this._clientInfo.platform="app"),"h5"===this._clientInfo.platform&&(this._clientInfo.platform="web");const n=Object.assign({tokenExpiresIn:7200,tokenExpiresThreshold:1200,passwordErrorLimit:6,passwordErrorRetryTime:3600},e,e[this._clientInfo.platform]);return["tokenSecret","tokenExpiresIn"].forEach(e=>{if(!n||!n[e])throw new Error(`Config parameter missing, ${e} is required`)}),n}_getConfig(){return this._getPlatformConfig()}}for(const e in E)A.prototype[e]=E[e];function y(e){const n=new A(e);return new Proxy(n,{get(e,n){if(n in e&&0!==n.indexOf("_")){if("function"==typeof e[n])return(t=e[n],function(){let e;try{e=t.apply(this,arguments)}catch(e){if(a(e))return c.call(this,e),e;throw e}return i(e)?e.then(e=>(a(e)&&c.call(this,e),e),e=>{if(a(e))return c.call(this,e),e;throw e}):(a(e)&&c.call(this,e),e)}).bind(e);if("context"!==n&&"config"!==n)return e[n]}var t}})}A.prototype.createInstance=y;const x={createInstance:y};module.exports=x;
