(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-table-table"],{"00e1":function(e,n,t){"use strict";var a=t("5130"),i=t.n(a);i.a},"0aa5":function(e,n,t){"use strict";var a=t("4ea4");t("4160"),t("a9e3"),t("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("37dc"),r=a(t("5096")),s=(0,i.initVueI18n)(r.default),u=s.t,d={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var e=1,n=Number(this.total),t=Number(this.pageSize);return n&&t&&(e=Math.ceil(n/t)),e},paper:function(){for(var e=this.currentIndex,n=this.pagerCount,t=this.total,a=this.pageSize,i=[],r=[],s=Math.ceil(t/a),u=0;u<s;u++)i.push(u+1);r.push(1);var d=i[i.length-(n+1)/2];return i.forEach((function(t,a){(n+1)/2>=e?t<n+1&&t>1&&r.push(t):e+2<=d?t>e-(n+1)/2&&t<e+(n+1)/2&&r.push(t):(t>e-(n+1)/2||s-n<t)&&t<i[i.length-1]&&r.push(t)})),s>n?((n+1)/2>=e?r[r.length-1]="...":e+2<=d?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(n+1)/2>=e||e+2<=d||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,n){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){var n="uni-pagination-picker-show";this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add(n):setTimeout((function(){return e.classList.remove(n)}),300)}},selectPage:function(e,n){if(parseInt(e))this.currentIndex=e,this.change("current");else{var t=Math.ceil(this.total/this.pageSize);if(n<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(n>=6)return void(this.currentIndex+5>t?this.currentIndex=t:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};n.default=d},"21d3":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var a={uniIcons:t("b839").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?t("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.pickerChange.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=e.$handleEvent(n),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.pickerClick.apply(void 0,arguments)}}},[t("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[t("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),t("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),t("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),t("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[t("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[t("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),t("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[t("v-uni-view",{staticClass:"uni-pagination__num-current"},[t("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide",staticStyle:{color:"#409EFF"}},[e._v(e._s(e.currentIndex))]),t("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(n,a){return t("v-uni-view",{key:a,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":n===e.currentIndex},on:{click:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"top",void 0,t.key,void 0))return null;arguments[0]=t=e.$handleEvent(t),e.selectPage(n,a)}}},[t("v-uni-text",[e._v(e._s(n))])],1)}))],2)],1),t("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[t("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[t("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},2606:function(e,n,t){"use strict";var a=t("4ea4");t("4de4"),t("4160"),t("c975"),t("d81d"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("d0d0")),r={data:function(){return{searchVal:"",tableData:[],pageSize:10,pageCurrent:1,total:0,loading:!1}},onLoad:function(){this.selectedIndexs=[],this.getData(1)},methods:{selectedItems:function(){var e=this;return this.selectedIndexs.map((function(n){return e.tableData[n]}))},selectionChange:function(e){this.selectedIndexs=e.detail.index},delTable:function(){},change:function(e){this.getData(e.current)},search:function(){this.getData(1,this.searchVal)},getData:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.loading=!0,this.pageCurrent=e,this.request({pageSize:this.pageSize,pageCurrent:e,value:t,success:function(e){n.tableData=e.data,n.total=e.total,n.loading=!1}})},request:function(e){var n=e.pageSize,t=e.pageCurrent,a=e.success,r=e.value,s=i.default.length,u=i.default.filter((function(e,a){var i=a-(t-1)*n;return i<n&&i>=0}));r&&(u=[],i.default.forEach((function(e){-1!==e.name.indexOf(r)&&u.push(e)})),s=u.length),setTimeout((function(){"function"===typeof a&&a({data:u,total:s})}),500)}}};n.default=r},"2e71":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},3248:function(e,n,t){"use strict";t.r(n);var a=t("f983"),i=t("3562");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("00e1");var s,u=t("f0c5"),d=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"08273a10",null,!1,a["a"],s);n["default"]=d.exports},3562:function(e,n,t){"use strict";t.r(n);var a=t("2606"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},"472e":function(e,n,t){"use strict";t.r(n);var a=t("21d3"),i=t("a77c");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("7d44");var s,u=t("f0c5"),d=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"323ae21c",null,!1,a["a"],s);n["default"]=d.exports},5096:function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("5293")),r=a(t("6300")),s=a(t("2e71")),u=a(t("f58e")),d=a(t("94d3")),o={en:i.default,es:r.default,fr:s.default,"zh-Hans":u.default,"zh-Hant":d.default};n.default=o},5130:function(e,n,t){var a=t("b5e0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("ac14c172",a,!0,{sourceMap:!1,shadowMode:!1})},5293:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},6300:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"7d44":function(e,n,t){"use strict";var a=t("f6df"),i=t.n(a);i.a},"94d3":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},a77c:function(e,n,t){"use strict";t.r(n);var a=t("0aa5"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},b5e0:function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]),e.exports=n},d0d0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=[{date:"2020-09-01",name:"Dcloud1",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud2",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud3",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud4",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud5",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud6",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud7",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud8",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud9",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud10",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud11",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud12",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud13",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud14",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud15",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud16",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-01",name:"Dcloud17",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud18",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud19",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud20",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud21",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud22",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud23",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud24",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud25",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud26",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud27",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud28",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud29",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud30",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud31",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud32",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-01",name:"Dcloud33",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud34",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud35",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud36",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud37",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud38",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud39",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud40",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud41",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud42",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud43",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud44",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud45",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud46",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud47",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud48",address:"上海市普陀区金沙江路 1516 弄"}];n.default=a},e3aa:function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-323ae21c]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-323ae21c]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-323ae21c]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-323ae21c]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-323ae21c]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-323ae21c]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-323ae21c]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-323ae21c]{font-size:15px}.uni-pagination--enabled[data-v-323ae21c]{color:#333;opacity:1}.uni-pagination--disabled[data-v-323ae21c]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-323ae21c]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-323ae21c]:hover{color:#2979ff}.page--active[data-v-323ae21c]{color:#fff;background-color:#2979ff}.page--active[data-v-323ae21c]:hover{color:#fff}.is-pc-hide[data-v-323ae21c]{display:block}.is-phone-hide[data-v-323ae21c]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-323ae21c]{display:none}.is-phone-hide[data-v-323ae21c]{display:block}.uni-pagination__num-flex-none[data-v-323ae21c]{flex:none}}',""]),e.exports=n},f58e:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},f6df:function(e,n,t){var a=t("e3aa");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("61bfd12b",a,!0,{sourceMap:!1,shadowMode:!1})},f983:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var a={uniTable:t("a332").default,uniTr:t("7f11").default,uniTh:t("34ed").default,uniTd:t("e992").default,uniPagination:t("472e").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticClass:"uni-header"},[t("v-uni-view",{staticClass:"uni-group hide-on-phone"},[t("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("demo.table.title")))])],1),t("v-uni-view",{staticClass:"uni-group"},[t("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(n){e.searchVal=n},expression:"searchVal"}}),t("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),t("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.add")))]),t("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))])],1)],1),t("v-uni-view",{staticClass:"uni-container"},[t("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,type:"selection",emptyText:e.$t("common.empty")},on:{"selection-change":function(n){arguments[0]=n=e.$handleEvent(n),e.selectionChange.apply(void 0,arguments)}}},[t("uni-tr",[t("uni-th",{attrs:{width:"150",align:"center"}},[e._v("日期")]),t("uni-th",{attrs:{width:"150",align:"center"}},[e._v("姓名")]),t("uni-th",{attrs:{align:"center"}},[e._v("地址")]),t("uni-th",{attrs:{width:"204",align:"center"}},[e._v("设置")])],1),e._l(e.tableData,(function(n,a){return t("uni-tr",{key:a},[t("uni-td",[e._v(e._s(n.date))]),t("uni-td",[t("v-uni-view",{staticClass:"name"},[e._v(e._s(n.name))])],1),t("uni-td",[e._v(e._s(n.address))]),t("uni-td",[t("v-uni-view",{staticClass:"uni-group"},[t("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"}},[e._v(e._s(e.$t("common.button.edit")))]),t("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),t("v-uni-view",{staticClass:"uni-pagination-box"},[t("uni-pagination",{attrs:{"show-icon":!0,"page-size":e.pageSize,current:e.pageCurrent,total:e.total},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change.apply(void 0,arguments)}}})],1)],1)],1)},r=[]}}]);