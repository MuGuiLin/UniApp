(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2e3f":function(t,n,e){"use strict";e.r(n);var i=e("a9b6"),a=e("3bfb");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("8dca");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6510ba0e",null,!1,i["a"],r);n["default"]=u.exports},"3bfb":function(t,n,e){"use strict";e.r(n);var i=e("5b1b"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"4a12":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-6510ba0e]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-6510ba0e]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-6510ba0e]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-6510ba0e]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-6510ba0e]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-6510ba0e]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-6510ba0e]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},"4d00":function(t,n,e){var i=e("de06");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("a120b4a0",i,!0,{sourceMap:!1,shadowMode:!1})},"5b1b":function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i},"6acf":function(t,n,e){"use strict";e.r(n);var i=e("fc1e"),a=e("d99c");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("74ed");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"54ed8922",null,!1,i["a"],r);n["default"]=u.exports},"74ed":function(t,n,e){"use strict";var i=e("4d00"),a=e.n(i);a.a},"8dca":function(t,n,e){"use strict";var i=e("b661"),a=e.n(i);a.a},a9b6:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},o=[]},b661:function(t,n,e){var i=e("4a12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("822b97ca",i,!0,{sourceMap:!1,shadowMode:!1})},c28f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"Hello Uni App"}},onLoad:function(){console.log(1),t.callFunction({name:"word",success:function(t){console.log(4,t)},complete:function(t){console.log(4,t)}})},created:function(){console.log(2)},mounted:function(){console.log(3)},methods:{goto:function(t){uni.navigateTo({url:"".concat(t,"?src=https://uniapp.dcloud.io/component/web-view")})}}};n.default=e}).call(this,e("a9ff")["default"])},d99c:function(t,n,e){"use strict";e.r(n);var i=e("c28f"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},de06:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-54ed8922]{display:flex;flex-direction:column;align-items:center;justify-content:center}.content .logo[data-v-54ed8922]{margin-top:%?50?%}.content .text-area[data-v-54ed8922]{display:flex;justify-content:center}.content .text-area .title[data-v-54ed8922]{line-height:%?100?%;font-size:%?36?%;color:#ff007f}.content .title[data-v-54ed8922]{font-size:%?36?%;color:#8f8f94}.content .btn-box uni-button[data-v-54ed8922]{margin:%?20?%}',""]),t.exports=n},fc1e:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniTitle:e("2e3f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/img/uni-app.png"}}),e("v-uni-view",{staticClass:"text-area"},[e("uni-title",{attrs:{type:"h1",title:t.title}}),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-navigator",{attrs:{url:"/pages/unicloud-db/index?title=navigate","hover-class":"navigator-hover"}},[e("v-uni-button",{attrs:{type:"primary"}},[t._v("跳转到新页面 clientDB")])],1),e("v-uni-navigator",{attrs:{url:"/pages/unicloud-db/index?title=redirect","hover-class":"other-navigator-hover","open-type":"redirect"}},[e("v-uni-button",{attrs:{type:"warn"}},[t._v("在当前页打开 clientDB")])],1),e("v-uni-navigator",{attrs:{url:"/pages/learn/index","open-type":"switchTab","hover-class":"other-navigator-hover"}},[e("v-uni-button",{attrs:{type:"default"}},[t._v("跳转到tab页面 Learing")])],1),e("v-uni-button",{attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("/pages/web-view/web-view")}}},[t._v("跳转到web-view页面-h5平台支持")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/web-view/web-view")}}},[t._v("通过方法跳转到web-view页面 - 推荐")])],1)],1)},o=[]}}]);