(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-event-event"],{"0309":function(t,e,a){"use strict";a.r(e);var n=a("a5fd"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},2357:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"27cb":function(t,e,a){"use strict";var n=a("f305"),i=a.n(n);i.a},5567:function(t,e,a){"use strict";a.r(e);var n=a("a177"),i=a("0309");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("88fe");var u,l=a("f0c5"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],u);e["default"]=o.exports},"596d":function(t,e,a){"use strict";a.r(e);var n=a("e8d0"),i=a("707db");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("27cb");var u,l=a("f0c5"),o=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"2c139b0e",null,!1,n["a"],u);e["default"]=o.exports},"707db":function(t,e,a){"use strict";a.r(e);var n=a("a977"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"7fdc":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-stat-edit--x[data-v-2c139b0e]{display:flex;justify-content:space-between}.uni-stat-edit--btn[data-v-2c139b0e]{cursor:pointer}",""]),t.exports=e},"88fe":function(t,e,a){"use strict";var n=a("d778"),i=a.n(n);i.a},a177:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowA?a("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):a("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},r=[]},a5fd:function(t,e,a){"use strict";a("a9e3"),a("2ca0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},a977:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b85c")),r=a("16f9"),u=n(a("ef91")),l={data:function(){return{fieldsMap:u.default,query:{appid:"",platform_id:"",uni_platform:"",channel_id:"",version_id:"",create_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:[],queryId:"",updateValue:"",channelData:[]}},computed:{channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,n=(0,r.stringifyQuery)({appid:e,uni_platform:a});return n}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){return t.getAllData()})),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,n){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a=(0,r.getTimeOfSomeDayAgo)(t),n=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.create_time=[a,n]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTableData()},changePageSize:function(t){this.options.pageSize=t,this.options.pageCurrent=1,this.getTableData()},getAllData:function(t){this.getTableData(t)},getTableData:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.stringifyQuery)(this.query,null,["uni_platform"]),n=this.options.pageCurrent;this.loading=!0;var l=t.database();l.collection("uni-stat-event-logs","uni-stat-app-platforms").where(a).orderBy("create_time","desc").skip((n-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var a=t.result,n=a.count,l=a.data;e.tableData=[],e.options.total=n;var o,s=(0,i.default)(l);try{for(s.s();!(o=s.n()).done;){var c=o.value;c.create_time=(0,r.parseDateTime)(c.create_time,"dateTime"),c.platform=c.platform&&c.platform[0].name,(0,r.mapfields)(u.default,c,c),e.tableData.push(c)}}catch(d){s.e(d)}finally{s.f()}})).catch((function(t){})).finally((function(){e.loading=!1}))},getChannelData:function(e,a){var n=this;this.query.channel_id="";var i=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var u=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),l=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(l,u).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,i=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),i.push({value:a[r]._id,text:e});n.channelData=i})).catch((function(t){})).finally((function(){}))}}};e.default=l}).call(this,a("a9ff")["default"])},d778:function(t,e,a){var n=a("2357");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5519651a",n,!0,{sourceMap:!1,shadowMode:!1})},e8d0:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("1f28").default,uniLink:a("5567").default,uniDataSelect:a("5889").default,uniStatTabs:a("c470").default,uniDatetimePicker:a("58c6").default,uniTable:a("a332").default,uniTr:a("7f11").default,uniTh:a("34ed").default,uniTd:a("e992").default,uniPagination:a("472e").default,uniPopup:a("3761").default,uniPopupDialog:a("ce75").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("分析用户自定义事件"),a("uni-link",{attrs:{href:"https://ask.dcloud.net.cn/article/36304",text:"自定义事件说明>>"}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.create_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.create_time,callback:function(e){t.$set(t.query,"create_time",e)},expression:"query.create_time"}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{attrs:{localdata:t.channelData,label:"渠道选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:t.$t("common.empty")}},[a("uni-tr",[t._l(t.fieldsMap,(function(e,n){return[e.title?a("uni-th",{key:n,attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.tableData,(function(e,n){return a("uni-tr",{key:n},[t._l(t.fieldsMap,(function(n,i){return[a("uni-td",{attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))])]}))],2)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1),a("uni-popup",{ref:"inputDialog",attrs:{type:"dialog",maskClick:!0}},[a("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"请编辑名称",placeholder:"请输入内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.editName.apply(void 0,arguments)}},model:{value:t.updateValue,callback:function(e){t.updateValue=e},expression:"updateValue"}})],1)],1)},r=[]},ef91:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{title:"创建时间",field:"create_time",tooltip:"",formatter:""},{title:"事件ID",field:"event_key",stat:-1},{title:"事件参数",field:"param",tooltip:""},{title:"平台",field:"platform",tooltip:""},{title:"设备标识",field:"device_id",tooltip:""}];e.default=n},f305:function(t,e,a){var n=a("7fdc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5bd133d0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);