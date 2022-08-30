(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-comparison-comparison"],{8523:function(t,a,e){var i=e("d9df");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6b2dc0c8",i,!0,{sourceMap:!1,shadowMode:!1})},"8ca0":function(t,a,e){"use strict";e.r(a);var i=e("922b"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"922b":function(t,a,e){"use strict";(function(t){var i=e("4ea4");e("99af"),e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("b85c")),r=i(e("2909")),s=e("468e"),c={data:function(){return{query:{dimension:"day",appid:"",version_id:"",start_time:(0,s.getTimeOfSomeDayAgo)(0)},platforms:[],dayChartsData:[],monChartsData:[]}},created:function(){var t=this;this.debounceGet=(0,s.debounce)((function(){t.getChartData(t.query),t.getRangeCountData(t.query,"month")}))},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},computed:{chartsData:function(){return[].concat((0,r.default)(this.dayChartsData),(0,r.default)(this.monChartsData))},versionQuery:function(){var t=this.query.appid,a=(0,s.stringifyQuery)({appid:t});return a}},methods:{getChartData:function(a){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";a=JSON.parse(JSON.stringify(a));var n=(0,s.getTimeOfSomeDayAgo)(0);if(a.start_time>=n){var r=(new Date).getTime();a.start_time=[n,r],a=(0,s.stringifyQuery)(a,!0)}else a=(0,s.stringifyQuery)(a);var c=t.database();c.collection("uni-stat-result").where(a).field("active_device_count,new_device_count,total_devices,platform_id").groupBy("platform_id").groupField("sum(active_device_count) as ".concat(i,"_active_device_count, sum(new_device_count) as ").concat(i,"_new_device_count, max(total_devices) as ").concat(i,"_total_devices")).get().then((function(t){var a=t.result.data;e.initChartOption(a,"dayChartsData")}))},getRangeCountData:function(a,e){var i=this;a=(0,s.stringifyQuery)(a);var n=t.database();n.collection("uni-stat-result").where(a).field("active_device_count, new_device_count, platform_id, ".concat(e,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(e,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(e?e+",":"","platform_id")).groupField("sum(active_device_count) as ".concat(e,"_active_device_count, sum(new_device_count) as ").concat(e,"_new_device_count")).orderBy("year asc, ".concat(e," asc")).get().then((function(t){var a=t.result.data;i.initChartOption(a,"monChartsData","month")}))},initChartOption:function(a,e){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",s=t.database();s.collection("uni-stat-app-platforms").get().then((function(t){var s=[{field:"".concat(r,"_new_device_count"),title:"".concat("day"===r?"日":"月","新增设备对比"),series:[{data:[]}]},{field:"".concat(r,"_active_device_count"),title:"".concat("day"===r?"日":"月","活跃设备对比"),series:[{data:[]}]}];"day"===r&&s.unshift({field:"day_total_devices",title:"总设备数对比",series:[{data:[]}]}),i[e]=s;var c=t.result.data,u={};c.forEach((function(t){u[t._id]=t.name}));var o,d=(0,n.default)(i[e]);try{for(d.s();!(o=d.n()).done;){var l,f=o.value,v=f.series[0].data,p=JSON.parse(JSON.stringify(u)),_=(0,n.default)(a);try{for(_.s();!(l=_.n()).done;){var h=l.value;for(var m in h)if(f.field===m){var y=h.platform_id,b={name:p[y],value:h[m]};v.push(b),delete p[y]}}}catch(C){_.e(C)}finally{_.f()}for(var g in p){var w={name:p[g],value:0};v.push(w)}}}catch(C){d.e(C)}finally{d.f()}}))}}};a.default=c}).call(this,e("a9ff")["default"])},a01f:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={uniStatBreadcrumb:e("c6c0").default,uniDataSelect:e("f429").default,uniDatetimePicker:e("a56f").default,qiunDataCharts:e("c863").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"fix-top-window"},[e("v-uni-view",{staticClass:"uni-header"},[e("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),e("v-uni-view",{staticClass:"uni-group hide-on-phone"},[e("v-uni-view",{staticClass:"uni-sub-title"},[t._v("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])],1)],1),e("v-uni-view",{staticClass:"uni-container"},[e("v-uni-view",{staticClass:"uni-stat--x flex mb-m"},[e("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(a){t.$set(t.query,"appid",a)},expression:"query.appid"}}),e("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(a){t.$set(t.query,"version_id",a)},expression:"query.version_id"}}),e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"ml-m label-text hide-on-phone"},[t._v("日期选择:")]),e("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":!!t.query.start_time},attrs:{type:"date",returnType:"timestamp",clearIcon:!1},model:{value:t.query.start_time,callback:function(a){t.$set(t.query,"start_time",a)},expression:"query.start_time"}})],1)],1),e("v-uni-view",{staticClass:"dispaly-grid"},t._l(t.chartsData,(function(a,i){return e("v-uni-view",{key:i,staticClass:"uni-stat--x uni-charts-box1"},[e("v-uni-view",{staticClass:"label-text",staticStyle:{margin:"5px 0 20px 0"}},[t._v(t._s(t.chartsData[i].title))]),e("qiun-data-charts",{attrs:{type:"ring",chartData:t.chartsData[i],echartsH5:!0,echartsApp:!0}})],1)})),1)],1)],1)},r=[]},a42e:function(t,a,e){"use strict";e.r(a);var i=e("a01f"),n=e("8ca0");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("eebe");var s,c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"e75f40a0",null,!1,i["a"],s);a["default"]=u.exports},d9df:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-charts-box1[data-v-e75f40a0]{padding:10px;height:420px}',""]),t.exports=a},eebe:function(t,a,e){"use strict";var i=e("8523"),n=e.n(i);n.a}}]);