(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-overview-overview"],{"0488":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:a("c6c0").default,uniDataSelect:a("f429").default,uniStatTabs:a("0d99").default,uniDatetimePicker:a("a56f").default,uniStatPanel:a("41d6").default,qiunDataCharts:a("c863").default,uniTable:a("9e02").default,uniTr:a("158c").default,uniTh:a("1bb9").default,uniTooltip:a("2129").default,uniIcons:a("6dbc").default,uniTd:a("1cbc").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"})],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date",today:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}})],1),a("uni-stat-panel",{attrs:{items:t.panelData,contrast:!0}}),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}},model:{value:t.chartTab,callback:function(e){t.chartTab=e},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,eopts:t.eopts,echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom"}})],1)],1),a("v-uni-view",{staticClass:"dispaly-grid"},[a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[a("v-uni-view",[t._v("受访页 TOP10")]),a("v-uni-view",{staticClass:"uni-stat-card-header-link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/uni-stat/page-res/page-res")}}},[t._v("查看更多")])],1),a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.resFieldsMap,(function(e,i){return[e.title?a("uni-th",{key:i,attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.resTableData,(function(e,i){return a("uni-tr",{key:i},[t._l(t.resFieldsMap,(function(i,n){return[i.title?a("uni-td",{key:n,attrs:{align:0===n?"left":"center"}},[t._v(t._s(void 0!==e[i.field]?e[i.field]:"-"))]):t._e()]}))],2)}))],2)],1),a("v-uni-view",{staticClass:"uni-stat--x uni-stat-card p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[a("v-uni-view",[t._v("入口页 TOP10")]),a("v-uni-view",{staticClass:"uni-stat-card-header-link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/uni-stat/page-ent/page-ent")}}},[t._v("查看更多")])],1),a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.entFieldsMap,(function(e,i){return[e.title?a("uni-th",{key:i,attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.entTableData,(function(e,i){return a("uni-tr",{key:i},[t._l(t.entFieldsMap,(function(i,n){return[i.title?a("uni-td",{key:n,attrs:{align:0===n?"left":"center"}},[t._v(t._s(void 0!==e[i.field]?e[i.field]:"-"))]):t._e()]}))],2)}))],2)],1)],1)],1)],1)},r=[]},3770:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-stat-card-header[data-v-2971fce4]{display:flex;justify-content:space-between;color:#555;font-size:14px;font-weight:600;padding:10px 0;margin-bottom:15px}.uni-stat-card-header-link[data-v-2971fce4]{cursor:pointer}",""]),t.exports=e},"430a":function(t,e,a){var i=a("3770");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8414bb90",i,!0,{sourceMap:!1,shadowMode:!1})},4781:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.entFieldsMap=e.resFieldsMap=e.fieldsMap=void 0;var i=[{value:"今天",contrast:"昨天"},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0,contrast:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数，今日数据为每小时活跃设备累加（未虑重），昨日数据为全天活跃设备虑重后结果",value:0,contrast:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0,contrast:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0,contrast:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,contrast:0,stat:"avg"},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0,contrast:0,stat:"avg"},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0,contrast:0}];e.fieldsMap=i;var n=[{title:"受访页",field:"path",tooltip:"设备进入应用访问的所有页面，例如设备从页面1进入应用，跳转到页面2，1,2均为受访页",formatter:""},{title:"访问次数",field:"visit_times",tooltip:"访问该页面的总次数",value:0},{title:"占比",field:"rate",computed:"visit_times/total_app_access",tooltip:"页面的访问次数占所有页面访问次数的比例",formatter:"%"}];e.resFieldsMap=n;var r=[{title:"入口页",field:"path",tooltip:"设备进入应用访问的第一个页面，例如设备从页面1进入应用，跳转到页面2，1为入口页，而2不是",formatter:""},{title:"入口页次数",field:"entry_count",tooltip:"访问该入口页的总次数",value:0},{title:"占比",field:"rate",computed:"entry_count/total_app_access",tooltip:"页面的入口页次数占所有页面访问次数的比例",formatter:"%"}];e.entFieldsMap=r},"6f71":function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("99af"),a("4de4"),a("7db0"),a("4160"),a("d81d"),a("a9e3"),a("b64b"),a("d3b7"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b85c")),r=i(a("3835")),s=a("468e"),o=a("4781"),l=o.fieldsMap.filter((function(t){return t.hasOwnProperty("value")})),u={data:function(){return{tableName:"uni-stat-result",fieldsMap:o.fieldsMap,resFieldsMap:o.resFieldsMap,entFieldsMap:o.entFieldsMap,query:{dimension:"hour",appid:"",version_id:"",platform_id:"",uni_platform:"",start_time:[]},options:{pageCurrent:1,total:0,pageSizeIndex:0,pageSizeRange:[10,20,50,100]},loading:!1,currentDateTab:2,chartTab:"new_user_count",tableData:[],resTableData:[],entTableData:[],panelData:l,chartData:{},eopts:{seriesTemplate:[{itemStyle:{borderWidth:2,borderColor:"#1890FF",color:"#1890FF"},areaStyle:{color:{colorStops:[{offset:0,color:"#1890FF"},{offset:1,color:"#FFFFFF"}]}}},{lineStyle:{color:"#ea7ccc",width:2,type:"dashed"},itemStyle:{borderWidth:1,borderColor:"#ea7ccc",color:"#ea7ccc"},areaStyle:null}]},tabIndex:0,tabName:"新增设备"}},onLoad:function(t){var e=t.appid;e&&(this.query.appid=e)},computed:{pageSize:function(){var t=this.options,e=t.pageSizeRange,a=t.pageSizeIndex;return e[a]},chartTabs:function(){var t=[];return o.fieldsMap.forEach((function(e){var a=e.field,i=e.title;a&&i&&t.push({_id:a,name:i})})),t},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,i=(0,s.stringifyQuery)({appid:e,uni_platform:a});return i}},created:function(){var t=this;this.debounceGet=(0,s.debounce)((function(){return t.getAllData(t.query)}))},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=null},changePlatform:function(t,e,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a,i,n=864e5;a=(0,s.getTimeOfSomeDayAgo)(t),i=t?(0,s.getTimeOfSomeDayAgo)(0)-1:(0,s.getTimeOfSomeDayAgo)(0)+n-1,this.query.start_time=[a,i]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getChartData(this.query)},changePageSize:function(t){var e=t.detail.value;this.options.pageCurrent=1,this.options.pageSizeIndex=e,this.getChartData(this.query)},changeChartTab:function(t,e,a){this.tabIndex=e,this.tabName=a,this.getChartData(this.query,t,a)},getAllData:function(t){this.getPanelData(),this.getChartData(t),this.getPageData(t,"res"),this.getPageData(t,"ent")},getDays:function(){if(!this.query.start_time.length)return!0;var t=864e5,e=(0,r.default)(this.query.start_time,2),a=e[0],i=e[1],n=i-a>=t;return n},getPanelData:function(){var e=this,a=this.query,i=a.appid,n=a.platform_id,r=a.version_id,l=(0,s.stringifyQuery)({appid:i,platform_id:n,version_id:r,start_time:[(0,s.getTimeOfSomeDayAgo)(1),(new Date).getTime()]}),u=t.database();u.collection(this.tableName).where(l).field("".concat((0,s.stringifyField)(o.fieldsMap),",dimension,stat_date")).groupBy("stat_date, dimension").groupField((0,s.stringifyGroupField)(o.fieldsMap)).orderBy("stat_date","desc").get().then((function(t){var a=t.result.data,i=a.find((function(t){return t.stat_date===(0,s.parseDateTime)((0,s.getTimeOfSomeDayAgo)(0),"","")}))||{};i.total_devices=0;var n=a.find((function(t){return"day"===t.dimension&&t.stat_date===(0,s.parseDateTime)((0,s.getTimeOfSomeDayAgo)(1),"","")}));e.panelData=[],e.panelData=(0,s.mapfields)(o.fieldsMap,i),e.panelData.map((function(t){(0,s.mapfields)(o.fieldsMap,n,t,"","contrast")})),s.getFieldTotal.call(e,l)}))},getChartData:function(e){var a,i=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.chartTabs[this.tabIndex]._id,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.chartTabs[this.tabIndex].name,c=(this.options.pageCurrent,this.currentDateTab),d=(0,s.getTimeOfSomeDayAgo)(c),p=864e5;if(!this.getDays()){var f=d-p,v=d+p-1;e=JSON.parse(JSON.stringify(e)),a=e.start_time=[f,v]}e=(0,s.stringifyQuery)(e,!0,["uni_platform"]);var h=t.database();h.collection(this.tableName).where(e).field("".concat((0,s.stringifyField)(o.fieldsMap,l),", start_time")).groupBy("start_time").groupField((0,s.stringifyGroupField)(o.fieldsMap,l)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,c=(e.count,e.data),p={categories:[],series:[{name:u,data:[]}]},f=o.fieldsMap.filter((function(t){return t.field===l}));if(f=JSON.parse(JSON.stringify(f)),delete f[0].value,f[0].formatter="",i.getDays()){var v,h=(0,n.default)(c);try{for(h.s();!(v=h.n()).done;){var g=v.value;(0,s.mapfields)(f,g,g);var m=(0,s.formatDate)(g.start_time,"day"),_=Number(g[l]);p.series[0].data.push(_),p.categories.push(m)}}catch(y){h.e(y)}finally{h.f()}}else(function(){for(var t=a,e=(0,r.default)(t,2),i=e[0],n=e[1],o=p.series[1]={name:(0,s.formatDate)(i),data:[]},u=p.series[0]={name:(0,s.formatDate)(n),data:[]},v=function(t){var e=t<10?"0"+t:t,a="".concat(e,":00 ~ ").concat(e,":59");p.categories.push(a),o.data[t]=0,u.data[t]=0,c.forEach((function(e){(0,s.mapfields)(f,e,e);var a=Number(e[l]),i=new Date(e.start_time);e.start_time<d?i.getHours()===t&&(o.data[t]=a):i.getHours()===t&&(u.data[t]=a)}))},h=0;h<24;++h)v(h)})();i.chartData=p})).catch((function(t){})).finally((function(){}))},getAppAccessTimes:function(e){var a=t.database();return a.collection(this.tableName).where(e).groupBy("appid").groupField("sum(page_visit_count) as total_app_access").get()},getPageData:function(e,a){var i=this;e=JSON.parse(JSON.stringify(e)),e.dimension="day",e=(0,s.stringifyQuery)(e,!1,["uni_platform"]);this.options.pageCurrent;var r=this["".concat(a,"FieldsMap")],o=r[1].field;this.loading=!0;var l=t.database(),u=(0,s.stringifyQuery)({appid:this.query.appid}),c=l.collection("uni-stat-pages").where(u).field("_id, title, path").getTemp(),d=l.collection("uni-stat-page-result").where("".concat(e," && ").concat(o," > 0")).getTemp();l.collection(d,c).field("".concat((0,s.stringifyField)(r,o),", stat_date, page_id")).groupBy("page_id").groupField((0,s.stringifyGroupField)(r,o)).orderBy(o,"desc").limit(10).get({getCount:!0}).then((function(t){var o,l=t.result,u=(l.count,l.data);i.getAppAccessTimes(e).then((function(t){var e=t.result.data[0];o=e&&e.total_app_access})).finally((function(){i["".concat(a,"TableData")]=[];var t,e=(0,n.default)(u);try{for(e.s();!(t=e.n()).done;){var l=t.value;l.total_app_access=o;var c=l.page_id;if(Array.isArray(c)){delete l.page_id;var d=c[0];if(d&&Object.keys(d).length)for(var p in d)"_id"!==p&&(l[p]=d[p])}(0,s.mapfields)(r,l,l),i["".concat(a,"TableData")].push(l)}}catch(f){e.e(f)}finally{e.f()}i.loading=!1}))})).catch((function(t){})).finally((function(){}))},navTo:function(t){t&&uni.navigateTo({url:t})}}};e.default=u}).call(this,a("a9ff")["default"])},7713:function(t,e,a){"use strict";a.r(e);var i=a("6f71"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"9b20":function(t,e,a){"use strict";a.r(e);var i=a("0488"),n=a("7713");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b4a5");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"2971fce4",null,!1,i["a"],s);e["default"]=l.exports},b4a5:function(t,e,a){"use strict";var i=a("430a"),n=a.n(i);n.a}}]);