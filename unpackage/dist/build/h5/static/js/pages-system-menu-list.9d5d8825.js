(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-list"],{1148:function(t,e,n){"use strict";var i=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"11d2":function(t,e,n){"use strict";n.r(e);var i=n("9b17"),a=n("9a4a"),o=n("52fd"),s=n("e0e4"),u=n("68f3");e["default"]={en:i,es:a,fr:o,"zh-Hans":s,"zh-Hant":u}},"1cdf":function(t,e,n){"use strict";var i=n("937a"),a=n.n(i);a.a},"20c4":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("7db0"),n("4160"),n("d81d"),n("45fc"),n("d3b7"),n("38cf"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=n("8a14"),s=(t.database(),"create_date asc"),u=2e4,r=1,c=[];function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.forEach((function(i){i.menu_id===e&&i.parent_id&&(n=n+1+l(t,i.parent_id,n))})),n}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.find((function(t){return t.parent_id===e}))&&t.forEach((function(i){i.parent_id===e&&(n.push(i._id),d(t,i.menu_id,n))})),n}var h={data:function(){return{query:"",where:"",orderby:s,options:{pageSize:u,pageCurrent:r},selectedIndexs:[],loading:!0,menus:[],errMsg:"",currentTab:"menus",selectedPluginMenuIndexs:[]}},computed:{pluginMenus:function(){var t=[];if(!this.$hasRole("admin"))return t;var e=this.menus;return e.length?(c.forEach((function(n){e.find((function(t){return t.menu_id===n.menu_id}))||t.push(n)})),t):t}},watch:{pluginMenus:function(t){t.length||(this.currentTab="menus")}},methods:{getSortMenu:function(t){return t.map((function(e){t.some((function(t){return t.parent_id===e.menu_id}))||(e.isLeafNode=!0)})),(0,o.buildMenus)(t)},onqueryload:function(t){for(var e=0;e<t.length;e++){var n=t[e],i=l(t,n.menu_id);n.name=(i?"　".repeat(i)+"|-":"")+n.name}var a=this.getSortMenu(t),o=[];this.patTree(a,o),t.length=0,t.push.apply(t,o),this.menus=t},patTree:function(t,e){var n=this;return t.forEach((function(t){e.push(t),t.children.length&&n.patTree(t.children,e)})),e},switchTab:function(t){this.currentTab=t},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:t})},navigateTo:function(t,e){var n=this;uni.navigateTo({url:t,events:{refreshData:function(){n.loadData(e)}}})},confirmDelete:function(t){var e=this,n=t._id,i="是否删除该菜单？",o=d(this.menus,t.menu_id);o.length&&(i="是否删除该菜单及其子菜单？"),n=[n].concat((0,a.default)(o)),uni.showModal({title:"提示",content:i,success:function(t){t.confirm&&e.$refs.udb.remove(n,{needConfirm:!1})}})},pluginMenuSelectChange:function(t){this.selectedPluginMenuIndexs=t.detail.index},addPluginMenus:function(e){var n=this;if(!this.selectedPluginMenuIndexs.length)return uni.showModal({title:"提示",content:"请选择要添加的菜单！",showCancel:!1});var i=this.pluginMenus,a=[];this.selectedPluginMenuIndexs.forEach((function(t){var e=i[t];if(e){var n=JSON.parse(JSON.stringify(e));delete n.json,a.push(n)}})),uni.showModal({title:"提示",content:"您确认要添加已选中的菜单吗？",success:function(e){if(e.confirm){uni.showLoading({mask:!0});var o=a.length===i.length;t.database().collection("opendb-admin-menus").add(a).then((function(t){n.init(),uni.showModal({title:"提示",content:"添加菜单成功！",showCancel:!1,success:function(){n.$refs.pluginMenusTable.clearSelection(),o&&(n.currentTab="menus"),n.loadData()}})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})})).finally((function(){uni.hideLoading()}))}}})}}};e.default=h}).call(this,n("a9ff")["default"])},"38cf":function(t,e,n){var i=n("23e7"),a=n("1148");i({target:"String",proto:!0},{repeat:a})},"4af1":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=n("37dc"),s=i(n("11d2")),u=(0,o.initVueI18n)(s.default),r=u.t,c={load:"load",error:"error"},l={add:"add",replace:"replace"},d={auto:"auto",onready:"onready",manual:"manual"},h=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],f={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return h.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==d.manual){for(var i=!1,a=2;a<e.length;a++)if(e[a]!==n[a]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==d.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===l.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===l.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.showToast,o=void 0===a||a,s=n.toastTitle,u=n.success,c=n.fail,l=n.complete,d=n.needConfirm,h=void 0===d||d,f=n.needLoading,p=void 0===f||f,g=n.loadingTitle,v=void 0===g?"":g;p&&uni.showLoading({title:v});var m=t.database(this.spaceInfo);i&&(m=m.action(i)),m.collection(this.mainCollection).add(e).then((function(t){u&&u(t),o&&uni.showToast({title:s||r("uniCloud.component.add.success")})})).catch((function(t){c&&c(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),l&&l()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.success,o=n.fail,s=n.complete,u=n.confirmTitle,c=n.confirmContent,l=n.needConfirm,d=void 0===l||l,h=n.needLoading,f=void 0===h||h,p=n.loadingTitle,g=void 0===p?"":p;t&&t.length&&(d?uni.showModal({title:u||r("uniCloud.component.remove.showModal.title"),content:c||r("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,i,a,o,s,d,f,g)}}):this._execRemove(t,i,a,o,s,d,f,g))},update:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.action,o=i.showToast,s=void 0===o||o,u=i.toastTitle,c=i.success,l=i.fail,d=i.complete,h=i.needConfirm,f=void 0===h||h,p=i.needLoading,g=void 0===p||p,v=i.loadingTitle,m=void 0===v?"":v;g&&uni.showLoading({title:m});var b=t.database(this.spaceInfo);return a&&(b=b.action(a)),b.collection(this.mainCollection).doc(e).update(n).then((function(t){c&&c(t),s&&uni.showToast({title:u||r("uniCloud.component.update.success")})})).catch((function(t){l&&l(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),d&&d()}))},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=t.database(this.spaceInfo);this.action&&(i=i.action(this.action)),i=(e=i).collection.apply(e,(0,a.default)(this.collectionArgs)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var o=this.paginationInternal,s=o.current,u=o.size,r={};this.getcount&&(r.getCount=this.getcount);var c={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(r.getTree=c),this.gettreepath&&(r.getTreePath=c),i=i.skip(u*(s-1)).limit(u),n?(i=i.getTemp(r),i.udb=this):i=i.get(r),i},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,o=t.count;this._isEnded=void 0!==o?this.paginationInternal.current*this.paginationInternal.size>=o:i.length<this.pageSize,this.hasMore=!this._isEnded;var s,u=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=o),e&&e(u,this._isEnded,this.paginationInternal),this._dispatchEvent(c.load,u),this.getone||this.pageData===l.replace)?this.dataList=u:n?this.dataList=u:(s=this.dataList).push.apply(s,(0,a.default)(u))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(c.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,i,a,o,s,u,r){var c=this;if(this.collection&&e){var d=Array.isArray(e)?e:[e];if(d.length){u&&uni.showLoading({mask:!0,title:r});var h=t.database(this.spaceInfo),f=h.command,p=h;n&&(p=p.action(n)),p.collection(this.mainCollection).where({_id:f.in(d)}).remove().then((function(t){i&&i(t.result),c.pageData===l.replace?c.refresh():c.removeData(d)})).catch((function(t){a&&a(t),s&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){u&&uni.hideLoading(),o&&o()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var a=e.indexOf(n[i]._id);a>=0&&(n.splice(i,1),e.splice(a,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=f}).call(this,n("a9ff")["default"])},5291:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},o=[]},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"73c6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.menu-disable[data-v-6f256bd2]{color:red}.menu-badge[data-v-6f256bd2]{position:absolute;top:0;right:5px}",""]),t.exports=e},7949:function(t,e,n){"use strict";n.r(e);var i=n("cdb4"),a=n("8e91");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("1cdf");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6f256bd2",null,!1,i["a"],s);e["default"]=r.exports},"848e":function(t,e,n){"use strict";n.r(e);var i=n("4af1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8e91":function(t,e,n){"use strict";n.r(e);var i=n("20c4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"937a":function(t,e,n){var i=n("73c6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("58b056ee",i,!0,{sourceMap:!1,shadowMode:!1})},"960d":function(t,e,n){"use strict";n.r(e);var i=n("5291"),a=n("848e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=r.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},cdb4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:n("c6c0").default,uniBadge:n("617e").default,unicloudDb:n("960d").default,uniTable:n("9e02").default,uniTr:n("158c").default,uniTh:n("1bb9").default,uniTd:n("1cbc").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"})],1),n("v-uni-view",{staticClass:"uni-tabs__header"},[n("v-uni-view",{staticClass:"uni-tabs__nav-wrap"},[n("v-uni-view",{staticClass:"uni-tabs__nav-scroll"},[n("v-uni-view",{staticClass:"uni-tabs__nav"},[n("v-uni-view",{staticClass:"uni-tabs__item",class:{"is-active":"menus"===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("menus")}}},[t._v(t._s(t.$t("menu.text.menuManager")))]),t.pluginMenus.length?n("v-uni-view",{staticClass:"uni-tabs__item",class:{"is-active":"pluginMenus"===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("pluginMenus")}}},[t._v(t._s(t.$t("menu.text.additiveMenu"))),n("uni-badge",{staticClass:"menu-badge",attrs:{text:t.pluginMenus.length,type:"error"}})],1):t._e()],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"menus"===t.currentTab,expression:"currentTab==='menus'"}]},[n("v-uni-view",{staticClass:"uni-header",staticStyle:{"border-bottom":"0","margin-bottom":"-15px"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{attrs:{size:"mini",plain:"true",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("./add")}}},[t._v(t._s(t.$t("menu.button.addFirstLevelMenu")))])],1),n("v-uni-view",{staticClass:"uni-group"})],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-admin-menus",options:t.options,where:t.where,"page-data":"replace",orderby:t.orderby,getcount:!0,"page-size":t.options.pageSize,"page-current":t.options.pageCurrent},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onqueryload.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data,a=(e.pagination,e.loading);e.error;return[n("uni-table",{staticClass:"table-pc",attrs:{loading:a,emptyText:t.errMsg||t.$t("common.empty"),border:!0,stripe:!0}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("排序")]),n("uni-th",{attrs:{width:"200",align:"center"}},[t._v("名称")]),n("uni-th",{attrs:{align:"center"}},[t._v("标识")]),n("uni-th",{attrs:{align:"center"}},[t._v("URL")]),n("uni-th",{attrs:{width:"100",align:"center"}},[t._v("是否启用")]),n("uni-th",{attrs:{align:"center"}},[t._v("操作")])],1),t._l(i,(function(e,i){return n("uni-tr",{key:i},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.sort))]),n("uni-td",[t._v(t._s(e.name))]),n("uni-td",[t._v(t._s(e.menu_id))]),n("uni-td",[t._v(t._s(e.url))]),n("uni-td",{class:{"menu-disable":!e.enable},attrs:{align:"center"}},[t._v(t._s(e.enable?"已启用":"未启用"))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group",staticStyle:{"justify-content":"left"}},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./edit?id="+e._id,!1)}}},[t._v(t._s(t.$t("common.button.edit")))]),"system_menu"!==e.menu_id&&"system_management"!==e.menu_id?n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e)}}},[t._v(t._s(t.$t("common.button.delete")))]):t._e(),e.url?t._e():n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./add?parent_id="+e.menu_id,!1)}}},[t._v(t._s(t.$t("menu.button.addChildMenu")))])],1)],1)],1)}))],2)]}}])})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"pluginMenus"===t.currentTab,expression:"currentTab==='pluginMenus'"}]},[n("v-uni-view",{staticClass:"uni-header",staticStyle:{"border-bottom":"0","margin-bottom":"-15px"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addPluginMenus.apply(void 0,arguments)}}},[t._v("添加选中的菜单")])],1),n("v-uni-view",{staticClass:"uni-group"})],1),n("v-uni-view",{staticClass:"uni-container"},[n("uni-table",{ref:"pluginMenusTable",attrs:{type:"selection",border:!0,stripe:!0},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.pluginMenuSelectChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("名称（标识）")]),n("uni-th",{attrs:{align:"center"}},[t._v("URL")]),n("uni-th",{attrs:{align:"center"}},[t._v("插件菜单 json 文件")])],1),t._l(t.pluginMenus,(function(e,i){return n("uni-tr",{key:i},[n("uni-td",[t._v(t._s(e.name)+"（"+t._s(e.menu_id)+"）")]),n("uni-td",[t._v(t._s(e.url))]),n("uni-td",[t._v(t._s(e.json))])],1)}))],2),n("v-uni-view",{staticClass:"uni-sub-title",staticStyle:{"margin-top":"15px"}},[t._v("以上待添加菜单来自于三方插件，添加后，将显示在菜单管理中，若不希望显示在上述表格中时，可手动删除项目中对应的`插件id-menu.json`文件。")])],1)],1)],1)},o=[]},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')}}]);