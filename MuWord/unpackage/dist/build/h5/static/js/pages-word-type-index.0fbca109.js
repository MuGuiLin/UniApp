(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-word-type-index"],{"081d":function(t,n,e){"use strict";var i=e("a5bf"),o=e.n(i);o.a},"0c39":function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"Pull up to show more","uni-load-more.contentrefresh":"loading...","uni-load-more.contentnomore":"No more data"}')},"21ad":function(t,n,e){"use strict";var i=e("4ea4");e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a=e("37dc"),r=i(e("278c"));setTimeout((function(){o=uni.getSystemInfoSync().platform}),16);var s=(0,a.initVueI18n)(r.default),c=s.t,f={name:"UniLoadMore",emits:["clickLoadMore"],props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"",contentrefresh:"",contentnomore:""}}}},data:function(){return{webviewHide:!1,platform:o}},computed:{iconSnowWidth:function(){return 2*(Math.floor(this.iconSize/24)||1)},contentdownText:function(){return this.contentText.contentdown||c("uni-load-more.contentdown")},contentrefreshText:function(){return this.contentText.contentrefresh||c("uni-load-more.contentrefresh")},contentnomoreText:function(){return this.contentText.contentnomore||c("uni-load-more.contentnomore")}},mounted:function(){},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};n.default=f},"278c":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("0c39")),a=i(e("cd38")),r=i(e("793f")),s={en:o.default,"zh-Hans":a.default,"zh-Hant":r.default};n.default=s},"2a13":function(t,n,e){"use strict";var i=e("f511"),o=e.n(i);o.a},"2e3f":function(t,n,e){"use strict";e.r(n);var i=e("a9b6"),o=e("3bfb");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("8dca");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6510ba0e",null,!1,i["a"],r);n["default"]=c.exports},"3bfb":function(t,n,e){"use strict";e.r(n);var i=e("5b1b"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"3dea":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?e("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[e("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?e("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(n,i){return e("v-uni-view",{key:i,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onItemClick(i,n)}}},[e("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:n.active?n.selectedIconPath:n.iconPath,mode:"widthFix"}}),e("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:n.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(n.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?e("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),e("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"fab-circle-v",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0}}),e("v-uni-view",{staticClass:"fab-circle-h",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0}})],1)],1)},a=[]},"490a":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-load-more",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[!t.webviewHide&&("circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform)&&"loading"===t.status&&t.showIcon?e("svg",{staticClass:"uni-load-more__img uni-load-more__img--android-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"},attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[e("circle",{style:{color:t.color},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":3}})]):!t.webviewHide&&"loading"===t.status&&t.showIcon?e("v-uni-view",{staticClass:"uni-load-more__img uni-load-more__img--ios-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"}},[e("v-uni-image",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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",mode:"widthFix"}})],1):t._e(),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentdownText:"loading"===t.status?t.contentrefreshText:t.contentnomoreText))])],1)},a=[]},"4a12":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-6510ba0e]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-6510ba0e]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-6510ba0e]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-6510ba0e]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-6510ba0e]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-6510ba0e]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-6510ba0e]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},"5b1b":function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i},"64d3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i="other",o={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===i,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,n){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,n){this.$emit("trigger",{index:t,item:n})},getPosition:function(t,n,e){return 0===t?this.horizontal===n&&this.vertical===e:1===t?this.direction===n&&this.vertical===e:2===t?this.direction===n&&this.horizontal===e:this.isShow&&this.direction===n?this.contentWidth:this.contentWidthMin}}};n.default=o},6948:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},(function(){uni.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{handleItemClick:function(t){uni.navigateTo({url:"./detail?id="+t})},fabClick:function(){var t=this;uni.navigateTo({url:"./add",events:{refreshData:function(){t.$refs.udb.loadData({clear:!0})}}})}}};n.default=i},"793f":function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"上拉顯示更多","uni-load-more.contentrefresh":"正在加載...","uni-load-more.contentnomore":"沒有更多數據了"}')},"84f9":function(t,n,e){"use strict";e.r(n);var i=e("21ad"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"8dca":function(t,n,e){"use strict";var i=e("b661"),o=e.n(i);o.a},"92cd":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-load-more[data-v-5214a5cf]{display:flex;flex-direction:row;height:40px;align-items:center;justify-content:center}.uni-load-more__text[data-v-5214a5cf]{font-size:15px}.uni-load-more__img[data-v-5214a5cf]{width:24px;height:24px;margin-right:8px}.uni-load-more__img--nvue[data-v-5214a5cf]{color:#666}.uni-load-more__img--android[data-v-5214a5cf],\r\n.uni-load-more__img--ios[data-v-5214a5cf]{width:24px;height:24px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-load-more__img--android[data-v-5214a5cf]{-webkit-animation:loading-ios 1s 0s linear infinite;animation:loading-ios 1s 0s linear infinite}@-webkit-keyframes loading-android-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--ios-H5[data-v-5214a5cf]{position:relative;-webkit-animation:loading-ios-H5-data-v-5214a5cf 1s 0s step-end infinite;animation:loading-ios-H5-data-v-5214a5cf 1s 0s step-end infinite}.uni-load-more__img--ios-H5 > uni-image[data-v-5214a5cf]{position:absolute;width:100%;height:100%;left:0;top:0}@-webkit-keyframes loading-ios-H5-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-ios-H5-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--android-H5[data-v-5214a5cf]{-webkit-animation:loading-android-H5-rotate-data-v-5214a5cf 2s linear infinite;animation:loading-android-H5-rotate-data-v-5214a5cf 2s linear infinite;-webkit-transform-origin:center center;transform-origin:center center}.uni-load-more__img--android-H5 > circle[data-v-5214a5cf]{display:inline-block;-webkit-animation:loading-android-H5-dash-data-v-5214a5cf 1.5s ease-in-out infinite;animation:loading-android-H5-dash-data-v-5214a5cf 1.5s ease-in-out infinite;stroke:currentColor;stroke-linecap:round}@-webkit-keyframes loading-android-H5-rotate-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-H5-rotate-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-android-H5-dash-data-v-5214a5cf{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes loading-android-H5-dash-data-v-5214a5cf{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}',""]),t.exports=n},"9a0c":function(t,n,e){"use strict";e.r(n);var i=e("6948"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},a584:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-fab[data-v-3b0e6a29]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10}.uni-cursor-point[data-v-3b0e6a29]{cursor:pointer}.uni-fab--active[data-v-3b0e6a29]{opacity:1}.uni-fab--leftBottom[data-v-3b0e6a29]{left:5px;bottom:20px;left:calc(5px + var(--window-left));bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--leftTop[data-v-3b0e6a29]{left:5px;top:30px;left:calc(5px + var(--window-left));top:calc(30px + var(--window-top));padding:10px}.uni-fab--rightBottom[data-v-3b0e6a29]{right:5px;bottom:20px;right:calc(5px + var(--window-right));bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--rightTop[data-v-3b0e6a29]{right:5px;top:30px;right:calc(5px + var(--window-right));top:calc(30px + var(--window-top));padding:10px}.uni-fab__circle[data-v-3b0e6a29]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:55px;z-index:11}.uni-fab__circle--leftBottom[data-v-3b0e6a29]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-3b0e6a29]{left:15px;top:40px;left:calc(15px + var(--window-left));top:calc(40px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-3b0e6a29]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-3b0e6a29]{right:15px;top:40px;right:calc(15px + var(--window-right));top:calc(40px + var(--window-top))}.uni-fab__circle--left[data-v-3b0e6a29]{left:0}.uni-fab__circle--right[data-v-3b0e6a29]{right:0}.uni-fab__circle--top[data-v-3b0e6a29]{top:0}.uni-fab__circle--bottom[data-v-3b0e6a29]{bottom:0}.uni-fab__plus[data-v-3b0e6a29]{font-weight:700}.fab-circle-v[data-v-3b0e6a29]{position:absolute;width:3px;height:31px;left:26px;top:12px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.fab-circle-h[data-v-3b0e6a29]{position:absolute;width:31px;height:3px;left:12px;top:26px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uni-fab__plus--active[data-v-3b0e6a29]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-3b0e6a29]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-3b0e6a29]{border-width:0;box-shadow:0 0 5px 2px rgba(0,0,0,.2)}.uni-fab__content--left[data-v-3b0e6a29]{justify-content:flex-start}.uni-fab__content--right[data-v-3b0e6a29]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-3b0e6a29]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-3b0e6a29]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-3b0e6a29]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-3b0e6a29]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-3b0e6a29]{opacity:1}.uni-fab__item-image[data-v-3b0e6a29]{width:25px;height:25px;margin-bottom:3px}.uni-fab__item-text[data-v-3b0e6a29]{color:#fff;font-size:12px}.uni-fab__item--first[data-v-3b0e6a29]{width:55px}',""]),t.exports=n},a5bf:function(t,n,e){var i=e("a584");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("3e1b2e9f",i,!0,{sourceMap:!1,shadowMode:!1})},a9b6:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},a=[]},b63e:function(t,n,e){"use strict";e.r(n);var i=e("64d3"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},b661:function(t,n,e){var i=e("4a12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("822b97ca",i,!0,{sourceMap:!1,shadowMode:!1})},cd38:function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"上拉显示更多","uni-load-more.contentrefresh":"正在加载...","uni-load-more.contentnomore":"没有更多数据了"}')},ed70:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={unicloudDb:e("960d").default,uniTitle:e("2e3f").default,uniList:e("7ccc").default,uniListItem:e("3a44").default,uniLoadMore:e("fe84").default,uniFab:e("f663").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("unicloud-db",{ref:"udb",attrs:{collection:"type",field:"name,value"},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.data,o=(n.pagination,n.loading),a=n.hasMore,r=n.error;return[r?e("v-uni-view",[e("v-uni-text",[t._v(t._s(r.message))])],1):i?e("v-uni-view",[e("uni-title",{attrs:{type:"h1",align:"center",color:"#027fff",title:"单词类型"}}),e("uni-list",t._l(i,(function(n,i){return e("uni-list-item",{key:i,attrs:{showArrow:!0,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleItemClick(n._id)}}},[e("v-uni-view",{attrs:{slot:"body"},slot:"body"},[t._v(t._s(n.name)+" : "+t._s(n.value))])],1)})),1)],1):t._e(),e("uni-load-more",{attrs:{status:o?"loading":a?"more":"noMore"}})]}}])}),e("uni-fab",{ref:"fab",attrs:{horizontal:"right",vertical:"bottom","pop-menu":!1},on:{fabClick:function(n){arguments[0]=n=t.$handleEvent(n),t.fabClick.apply(void 0,arguments)}}})],1)},a=[]},f511:function(t,n,e){var i=e("92cd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("79428080",i,!0,{sourceMap:!1,shadowMode:!1})},f663:function(t,n,e){"use strict";e.r(n);var i=e("3dea"),o=e("b63e");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("081d");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3b0e6a29",null,!1,i["a"],r);n["default"]=c.exports},fbdf:function(t,n,e){"use strict";e.r(n);var i=e("ed70"),o=e("9a0c");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"36d1826f",null,!1,i["a"],r);n["default"]=c.exports},fe84:function(t,n,e){"use strict";e.r(n);var i=e("490a"),o=e("84f9");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("2a13");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5214a5cf",null,!1,i["a"],r);n["default"]=c.exports}}]);