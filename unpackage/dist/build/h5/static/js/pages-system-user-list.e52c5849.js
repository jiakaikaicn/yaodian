(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-list"],{"0211":function(t,e,n){"use strict";var a=n("4d8f"),i=n.n(a);i.a},"0f95":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"1b8f":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("f199"),s=t.database(),o="last_login_date desc",l=["username","role.role_name","mobile","email"],u=20,c=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:o,orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],tags:{},managerTags:[],queryTagid:"",options:(0,i.default)({pageSize:u,pageCurrent:c,filterData:{status_localdata:[{text:"正常",value:0,checked:!0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-users.xls",type:"xls",fields:{"用户名":"username","手机号码":"mobile","用户状态":"status","邮箱":"email","角色":"role",last_login_date:"last_login_date"}},exportExcelData:[],noAppidWhatShouldIDoLink:"https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid"}},onLoad:function(t){this._filter={};var e=t.tagid;if(e){this.queryTagid=e;var n={filterType:"select",filter:[e]};this.filterChange(n,"tags")}},onReady:function(){this.loadTags(),this.queryTagid||this.$refs.udb.loadData()},computed:{tagsData:function(){var t=[];for(var e in this.tags){var n={value:e,text:this.tags[e]};e===this.queryTagid&&(n.checked=!0),t.push(n)}return t}},methods:{onqueryload:function(t){for(var e=this,n=0;n<t.length;n++){var a=t[n],i=a.role.map((function(t){return t.role_name}));a.role=i.join("、");var r=a.tags&&a.tags.map((function(t){return e.tags[t]}));a.tags=r,Array.isArray(a.dcloud_appid)&&(a.dcloud_appid=a.dcloud_appid.join("、")),a.last_login_date=this.$formatDate(a.last_login_date)}this.exportExcelData=t},changeSize:function(t){var e=this;this.options.pageSize=t,this.options.pageCurrent=1,this.$nextTick((function(){e.loadData()}))},openTagsPopup:function(){this.$refs.tagsPopup.open()},closeTagsPopup:function(){this.$refs.tagsPopup.close()},getWhere:function(){var t=this.query.trim();if(!t)return"";var e=new RegExp(t,"i");return l.map((function(t){return e+".test("+t+")"})).join(" || ")},search:function(){var t=this,e=this.getWhere();this.where=e,this.$nextTick((function(){t.loadData()}))},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:t})},onPageChanged:function(t){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:t.current})},navigateTo:function(t,e){var n=this;uni.navigateTo({url:t,events:{refreshData:function(){n.loadTags(),n.loadData(e)}}})},selectedItems:function(){var t=this.$refs.udb.dataList;return this.selectedIndexs.map((function(e){return t[e]._id}))},delTable:function(){var t=this;this.$refs.udb.remove(this.selectedItems(),{success:function(e){t.$refs.table.clearSelection()}})},selectionChange:function(t){this.selectedIndexs=t.detail.index},confirmDelete:function(t){var e=this;this.$refs.udb.remove(t,{success:function(t){e.$refs.table.clearSelection()}})},sortChange:function(t,e){var n=this;this.orderByFieldName=e,t.order?this.orderby=e+" "+d[t.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(t,e){var n=this;this._filter[e]={type:t.filterType,value:t.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))},loadTags:function(){var t=this;s.collection("uni-id-tag").limit(500).get().then((function(e){e.result.data.map((function(e){t.tags[e.tagid]=e.name}))})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))},managerMultiTag:function(t){var e=this,n=this.selectedItems(),a={type:t,ids:n,value:this.managerTags};this.$request("managerMultiTag",a,{functionName:"uni-id-cf"}).then((function(t){uni.showToast({title:"修改标签成功",duration:2e3}),e.$refs.table.clearSelection(),e.managerTags=[],e.loadData(),e.closeTagsPopup()})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(t){uni.hideLoading()}))}}};e.default=f}).call(this,n("a9ff")["default"])},"223cc":function(t,e,n){"use strict";var a=n("5d78"),i=n.n(a);i.a},"40ac":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tags-manager--x[data-v-25d9069f]{width:400px;padding:40px 30px;border-radius:5px;background-color:#fff}.tags-manager--header[data-v-25d9069f]{font-size:22px;color:#333;text-align:center}.mb[data-v-25d9069f]{margin-bottom:80px}.ml[data-v-25d9069f]{margin-left:30px}',""]),t.exports=e},"4d8f":function(t,e,n){var a=n("40ac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("bd776456",a,!0,{sourceMap:!1,shadowMode:!1})},"5d78":function(t,e,n){var a=n("0f95");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("558f8da8",a,!0,{sourceMap:!1,shadowMode:!1})},"61f0":function(t,e,n){"use strict";n.r(e);var a=n("96a2"),i=n("860a");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("223cc");var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"03b6d5de",null,!1,a["a"],s);e["default"]=l.exports},"860a":function(t,e,n){"use strict";n.r(e);var a=n("b05b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"91de":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniStatBreadcrumb:n("c6c0").default,downloadExcel:n("2265").default,unicloudDb:n("960d").default,uniTable:n("9e02").default,uniTr:n("158c").default,uniTh:n("1bb9").default,uniTd:n("1cbc").default,uniLink:n("61f0").default,uniTag:n("a5b9").default,uniDateformat:n("e5ec").default,uniPagination:n("41c2").default,uniPopup:n("4f6b").default,uniDataCheckbox:n("1d69").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:t.$t("common.placeholder.query")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button hide-on-phone",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("./add")}}},[t._v(t._s(t.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!t.selectedIndexs.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delTable.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.batchDelete")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini",disabled:!t.selectedIndexs.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTagsPopup.apply(void 0,arguments)}}},[t._v("标签管理")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:t.exportExcel.fields,data:t.exportExcelData,type:t.exportExcel.type,name:t.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[t._v(t._s(t.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-users,uni-id-roles",field:"username,mobile,status,email,role{role_name},dcloud_appid,tags,last_login_date",where:t.where,"page-data":"replace",orderby:t.orderby,getcount:!0,"page-size":t.options.pageSize,"page-current":t.options.pageCurrent,options:t.options,loadtime:"manual"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onqueryload.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,i=e.pagination,r=e.loading,s=e.error,o=e.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:s.message||t.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"username")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"username")}}},[t._v("用户名")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"mobile")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"mobile")}}},[t._v("手机号码")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":o.filterData.status_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"status")}}},[t._v("用户状态")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"email")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"email")}}},[t._v("邮箱")]),n("uni-th",{attrs:{align:"center"}},[t._v("角色")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":t.tagsData},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"tags")}}},[t._v("用户标签")]),n("uni-th",{attrs:{align:"center"}},[t._v("可登录应用")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"last_login_date")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"last_login_date")}}},[t._v("最后登录时间")]),n("uni-th",{attrs:{align:"center"}},[t._v("操作")])],1),t._l(a,(function(e,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.username))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.mobile))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(o.status_valuetotext[e.status]))]),n("uni-td",{attrs:{align:"center"}},[n("uni-link",{attrs:{href:"mailto:"+e.email,text:e.email}})],1),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.role))]),n("uni-td",{attrs:{align:"center"}},[t._l(e.tags,(function(a){return e.tags?[n("uni-tag",{staticStyle:{margin:"0 5px"},attrs:{type:"primary",inverted:!0,size:"small",text:a}})]:t._e()}))],2),n("uni-td",{attrs:{align:"center"}},[void 0===e.dcloud_appid?n("uni-link",{attrs:{href:t.noAppidWhatShouldIDoLink}},[t._v("未绑定可登录应用"),n("v-uni-view",{staticClass:"uni-icons-help"})],1):t._e(),t._v(t._s(e.dcloud_appid))],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:e.last_login_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./edit?id="+e._id,!1)}}},[t._v(t._s(t.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e._id)}}},[t._v(t._s(t.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-iconn":!0,"show-page-size":!0,"page-size":i.size,total:i.count},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onPageChanged.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSize.apply(void 0,arguments)}},model:{value:i.current,callback:function(e){t.$set(i,"current",e)},expression:"pagination.current"}})],1)]}}])})],1),n("uni-popup",{ref:"tagsPopup",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"tags-manager--x"},[n("v-uni-view",{staticClass:"tags-manager--header mb"},[t._v("管理标签")]),n("uni-data-checkbox",{ref:"checkbox",staticClass:"mb ml",attrs:{multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},model:{value:t.managerTags,callback:function(e){t.managerTags=e},expression:"managerTags"}}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{"margin-right":"75px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.managerMultiTag("add")}}},[t._v("添加")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.managerMultiTag("del")}}},[t._v("删除")])],1)],1)],1)],1)},r=[]},"96a2":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},r=[]},b05b:function(t,e,n){"use strict";n("a9e3"),n("2ca0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=a},f199:function(t,e,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=l,e.enumConverter=e.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={username:{rules:[{required:!0},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},last_login_date:{rules:[{format:"timestamp"}]}};e.validator=s;var o={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function l(t,e){var n={};for(var a in t){var s=t[a],o=s.type,l=s.value;switch(o){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var u,c=[],d=(0,r.default)(l);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(e.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=e.or(c)}break;case"range":if(l.length){var h=l[0],p=l[1];n[a]=e.and([e.gte(h),e.lte(p)])}break;case"date":if(l.length){var g=(0,i.default)(l,2),v=g[0],m=g[1],b=new Date(v),_=new Date(m);n[a]=e.and([e.gte(b),e.lte(_)])}break;case"timestamp":if(l.length){var y=(0,i.default)(l,2),x=y[0],w=y[1];n[a]=e.and([e.gte(x),e.lte(w)])}break}}return n}e.enumConverter=o},f760:function(t,e,n){"use strict";n.r(e);var a=n("91de"),i=n("f9a6");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0211");var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"25d9069f",null,!1,a["a"],s);e["default"]=l.exports},f9a6:function(t,e,n){"use strict";n.r(e);var a=n("1b8f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);