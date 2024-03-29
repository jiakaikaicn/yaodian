(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-role-list"],{"0a44":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("5530")),i=n("5049"),o=e.database(),s="create_date desc",l=["role_id","role_name","permission.permission_name"],c=20,u=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:s,orderByFieldName:"",selectedIndexs:[],options:(0,r.default)({pageSize:c,pageCurrent:u,filterData:{}},i.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-roles.xls",type:"xls",fields:{"唯一ID":"role_id","名称":"role_name","权限":"permission","备注":"comment",create_date:"create_date"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.permission=n.permission.map((function(e){return e.permission_name})).join("、"),n.create_date=this.$formatDate(n.create_date)}this.exportExcelData=e},changeSize:function(e){var t=this;this.options.pageSize=e,this.options.pageCurrent=1,this.$nextTick((function(){t.loadData()}))},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return l.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,i.filterToWhere)(this._filter,o.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},2265:function(e,t,n){"use strict";n.r(t);var a=n("b186"),r=n("2de1");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var o,s=n("f0c5"),l=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=l.exports},"2de1":function(e,t,n){"use strict";n.r(t);var a=n("84d9"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"4d06":function(e,t,n){"use strict";n.r(t);var a=n("0a44"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},5049:function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var r=a(n("3835")),i=a(n("b85c")),o={role_id:{rules:[{required:!0},{format:"string"}],label:"唯一ID"},role_name:{rules:[{required:!0},{format:"string"}],label:"名称"},permission:{rules:[{format:"array"}],label:"权限"},comment:{rules:[{format:"string"}],label:"备注"},create_date:{rules:[{format:"timestamp"}]}};t.validator=o;var s={};function l(e,t){var n={};for(var a in e){var o=e[a],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var c,u=[],d=(0,i.default)(l);try{for(d.s();!(c=d.n()).done;){var f=c.value;u.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=t.or(u)}break;case"range":if(l.length){var h=l[0],p=l[1];n[a]=t.and([t.gte(h),t.lte(p)])}break;case"date":if(l.length){var m=(0,r.default)(l,2),v=m[0],b=m[1],g=new Date(v),y=new Date(b);n[a]=t.and([t.gte(g),t.lte(y)])}break;case"timestamp":if(l.length){var x=(0,r.default)(l,2),w=x[0],_=x[1];n[a]=t.and([t.gte(w),t.lte(_)])}break}}return n}t.enumConverter=s},5651:function(e,t,n){"use strict";n.r(t);var a=n("6d82"),r=n("4d06");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var o,s=n("f0c5"),l=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"36d2f48e",null,!1,a["a"],o);t["default"]=l.exports},"6d82":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uniStatBreadcrumb:n("c6c0").default,downloadExcel:n("2265").default,unicloudDb:n("960d").default,uniTable:n("9e02").default,uniTr:n("158c").default,uniTh:n("1bb9").default,uniTd:n("1cbc").default,uniDateformat:n("e5ec").default,uniPagination:n("41c2").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button hide-on-phone",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v(e._s(e.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-roles,uni-id-permissions",field:"role_id,role_name,permission{permission_name},comment,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,r=t.pagination,i=t.loading,o=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:i,emptyText:o.message||e.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"role_id")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"role_id")}}},[e._v("唯一ID")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"role_name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"role_name")}}},[e._v("名称")]),n("uni-th",{attrs:{align:"center"}},[e._v("权限")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"comment")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"comment")}}},[e._v("备注")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"create_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role_id))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.permission))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.comment))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v(e._s(e.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":r.size,total:r.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSize.apply(void 0,arguments)}},model:{value:r.current,callback:function(t){e.$set(r,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},i=[]},"84d9":function(e,t,n){"use strict";var a=n("4ea4");n("d81d"),n("ace4"),n("b64b"),n("d3b7"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("2ca0"),n("8a59"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("2954"),n("649e"),n("219c"),n("b39a"),n("72f7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("b85c"));n("96cf");var i=a(n("1da1")),o=a(n("b526")),s={name:"downloadExcel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:function(){return null}},exportFields:{type:Object,default:function(){return null}},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName:function(){var e=(new Date).getTime();return"export_"+e},downloadFields:function(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof e.beforeGenerate){t.next=3;break}return t.next=3,e.beforeGenerate();case 3:if(n=e.data,"function"!==typeof e.fetch&&n){t.next=8;break}return t.next=7,e.fetch();case 7:n=t.sent;case 8:if(n&&n.length){t.next=10;break}return t.abrupt("return");case 10:if(a=e.getProcessedJson(n,e.downloadFields),"html"!==e.type){t.next=15;break}return t.abrupt("return",e.export(e.jsonToXLS(a),e.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==e.type){t.next=17;break}return t.abrupt("return",e.export(e.jsonToCSV(a),e.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",e.export(e.jsonToXLS(a),e.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}}),t)})))()},export:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.base64ToBlob(t,a),"function"!==typeof this.beforeFinish){e.next=4;break}return e.next=4,this.beforeFinish();case 4:(0,o.default)(r,n,a);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),jsonToXLS:function(e){var t='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style scoped>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',n="<thead>",a=Object.keys(e[0]).length,r=this,i=this.header||this.$attrs.title;for(var o in i&&(n+=this.parseExtraData(i,'<tr><th colspan="'+a+'">${data}</th></tr>')),n+="<tr>",e[0])n+="<th>"+o+"</th>";return n+="</tr>",n+="</thead>",n+="<tbody>",e.map((function(e,t){for(var a in n+="<tr>",e)n+="<td>"+r.preprocessLongNum(r.valueReformattedForMultilines(e[a]))+"</td>";n+="</tr>"})),n+="</tbody>",null!=this.footer&&(n+="<tfoot>",n+=this.parseExtraData(this.footer,'<tr><td colspan="'+a+'">${data}</td></tr>'),n+="</tfoot>"),t.replace("${table}",n).replace("${worksheet}",this.worksheet)},jsonToCSV:function(e){var t=this,n=[],a=this.header||this.$attrs.title;for(var r in a&&n.push(this.parseExtraData(a,"${data}\r\n")),e[0])n.push(r),n.push(",");return n.pop(),n.push("\r\n"),e.map((function(e){for(var a in e){var r=e[a]+"";t.escapeCsv&&(r='="'+r+'"',r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"')),n.push(r),n.push(",")}n.pop(),n.push("\r\n")})),null!=this.footer&&n.push(this.parseExtraData(this.footer,"${data}\r\n")),n.join("")},getProcessedJson:function(e,t){var n=this.getKeys(e,t),a=[],r=this;return e.map((function(e,t){var i={};for(var o in n){var s=n[o];i[o]=r.getValue(s,e)}a.push(i)})),a},getKeys:function(e,t){if(t)return t;var n={};for(var a in e[0])n[a]=a;return n},parseExtraData:function(e,t){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)e[a]&&(n+=t.replace("${data}",e[a]));else n+=t.replace("${data}",e);return n},getValue:function(e,t){var n="object"!==typeof e?e:e.field,a="string"!==typeof n?[]:n.split("."),r=this.defaultValue;return r=n?a.length>1?this.getValueFromNestedItem(t,a):this.parseValue(t[n]):t,e.hasOwnProperty("callback")&&(r=this.getValueFromCallback(r,e.callback)),r},valueReformattedForMultilines:function(e){return"string"==typeof e?e.replace(/\n/gi,"<br/>"):e},preprocessLongNum:function(e){if(this.stringifyLongNum){if(String(e).startsWith("0x"))return e;if(!isNaN(e)&&""!=e&&(e>99999999999||e<1e-13))return'="'+e+'"'}return e},getValueFromNestedItem:function(e,t){var n,a=e,i=(0,r.default)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;a&&(a=a[o])}}catch(s){i.e(s)}finally{i.f()}return this.parseValue(a)},getValueFromCallback:function(e,t){if("function"!==typeof t)return this.defaultValue;var n=t(e);return this.parseValue(n)},parseValue:function(e){return e||0===e||"boolean"===typeof e?e:this.defaultValue},base64ToBlob:function(e,t){var n=window.btoa(window.unescape(encodeURIComponent(e))),a=atob(n),r=a.length,i=new Uint8ClampedArray(r);while(r--)i[r]=a.charCodeAt(r);return new Blob([i],{type:t})}}};t.default=s},b186:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.idName},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.generate.apply(void 0,arguments)}}},[e._t("default",[e._v("Download "+e._s(e.name))])],2)},i=[]},b526:function(e,t,n){"use strict";function a(e,t,n){var r,i,o=window,s="application/octet-stream",l=n||s,c=e,u=!t&&!n&&c,d=document.createElement("a"),f=function(e){return String(e)},h=o.Blob||o.MozBlob||o.WebKitBlob||f,p=t||"download";if(h=h.call?h.bind(o):Blob,"true"===String(this)&&(c=[c,l],l=c[0],c=c[1]),u&&u.length<2048&&(p=u.split("/").pop().split("?")[0],d.href=u,-1!==d.href.indexOf(u))){var m=new XMLHttpRequest;return m.open("GET",u,!0),m.responseType="blob",m.onload=function(e){a(e.target.response,p,s)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)){if(!(c.length>2096103.424&&h!==f))return navigator.msSaveBlob?navigator.msSaveBlob(y(c),p):x(c);c=y(c),l=c.type||s}else if(/([\x80-\xff])/.test(c)){var v=0,b=new Uint8Array(c.length),g=b.length;for(v;v<g;++v)b[v]=c.charCodeAt(v);c=new h([b],{type:l})}function y(e){var t=e.split(/[:;,]/),n=t[1],a="base64"==t[2]?atob:decodeURIComponent,r=a(t.pop()),i=r.length,o=0,s=new Uint8Array(i);for(o;o<i;++o)s[o]=r.charCodeAt(o);return new h([s],{type:n})}function x(e,t){if("download"in d)return d.href=e,d.setAttribute("download",p),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===t&&setTimeout((function(){o.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=c instanceof h?c:new h([c],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(r,p);if(o.URL)x(o.URL.createObjectURL(r),!0);else{if("string"===typeof r||r.constructor===f)try{return x("data:"+l+";base64,"+o.btoa(r))}catch(w){return x("data:"+l+","+encodeURIComponent(r))}i=new FileReader,i.onload=function(e){x(this.result)},i.readAsDataURL(r)}return!0}n("c975"),n("ace4"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("2954"),n("649e"),n("219c"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}}]);