(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-unicloud-db-add"],{"4a1f":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{formData:{type:"",name:"",read:"",mean:"",email:""},imageValue:[],rules:{name:{rules:[{required:!0,errorMessage:"请输入单词！"},{minLength:1,maxLength:30,errorMessage:"姓名长度在 {minLength} 到 {maxLength} 个字符！"}]},mean:{rules:[{required:!0,errorMessage:"请输入中文意思！"}]}}}},methods:{binddata:function(e,a){this.$refs.form.setValue(e,a)},select:function(e){console.log("选择文件：",e)},progress:function(e){console.log("上传进度：",e)},success:function(e){console.log("上传成功")},fail:function(e){console.log("上传失败：",e)},submit:function(){this.$refs.form.validate().then((function(a){console.log("表单数据信息：",a),delete a.email;var t=e.database();t.collection("word").add(a).then((function(e){console.log(e),uni.showToast({title:"OK，添加成功！",duration:2e3})}))})).catch((function(e){console.log("表单错误信息：",e)}))}}};a.default=t}).call(this,t("a9ff")["default"])},"926f":function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return n}));var n={uniForms:t("0fdf").default,uniGroup:t("94e5").default,uniEasyinput:t("15f1").default,uniFormsItem:t("fef3").default,uniFilePicker:t("8c28").default},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("uni-forms",{ref:"form",attrs:{modelValue:e.formData,rules:e.rules,"label-position":"top"}},[t("uni-group",[t("uni-easyinput",{attrs:{type:"text",placeholder:"类型",prefixIcon:"gear"},model:{value:e.formData.type,callback:function(a){e.$set(e.formData,"type",a)},expression:"formData.type"}}),t("uni-forms-item",{attrs:{label:"单词",name:"name"}},[t("uni-easyinput",{attrs:{placeholder:"单词",prefixIcon:"info",suffixIcon:"search"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("uni-easyinput",{attrs:{placeholder:"识读",prefixIcon:"sound",placeholderStyle:"color: green"},model:{value:e.formData.read,callback:function(a){e.$set(e.formData,"read",a)},expression:"formData.read"}}),t("uni-forms-item",{attrs:{label:"词意",name:"mean"}},[t("uni-easyinput",{attrs:{placeholder:"词意",type:"textarea",autoHeight:!0,clearSize:"15"},model:{value:e.formData.mean,callback:function(a){e.$set(e.formData,"mean",a)},expression:"formData.mean"}})],1),t("uni-easyinput",{attrs:{disabled:!0,placeholder:"禁用",prefixIcon:"minus-filled"}}),t("uni-forms-item",{attrs:{label:"邮箱",name:"email"}},[t("uni-easyinput",{attrs:{type:"text",placeholder:"请输入邮箱"},on:{input:function(a){arguments[0]=a=e.$handleEvent(a),e.binddata("email",a.detail.value)}},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("uni-easyinput",{attrs:{type:"digit",laceholder:"数字",prefixIcon:"paperclip"}}),t("uni-easyinput",{attrs:{type:"password",placeholder:"密码",prefixIcon:"locked"}})],1),t("uni-group",[t("uni-forms-item",{attrs:{label:"图片上传",name:"image"}},[t("uni-file-picker",{attrs:{fileMediatype:"image",mode:"grid"},on:{select:function(a){arguments[0]=a=e.$handleEvent(a),e.select.apply(void 0,arguments)},progress:function(a){arguments[0]=a=e.$handleEvent(a),e.progress.apply(void 0,arguments)},success:function(a){arguments[0]=a=e.$handleEvent(a),e.success.apply(void 0,arguments)},fail:function(a){arguments[0]=a=e.$handleEvent(a),e.fail.apply(void 0,arguments)}},model:{value:e.imageValue,callback:function(a){e.imageValue=a},expression:"imageValue"}})],1)],1),t("uni-group",[t("v-uni-button",{attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.submit.apply(void 0,arguments)}}},[e._v("提 交")])],1)],1)},i=[]},c6ce:function(e,a,t){"use strict";t.r(a);var n=t("4a1f"),o=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,(function(){return n[e]}))}(i);a["default"]=o.a},fb8d:function(e,a,t){"use strict";t.r(a);var n=t("926f"),o=t("c6ce");for(var i in o)"default"!==i&&function(e){t.d(a,e,(function(){return o[e]}))}(i);var r,l=t("f0c5"),u=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"3ac6b248",null,!1,n["a"],r);a["default"]=u.exports}}]);