(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-word-type-edit"],{"01e6":function(e,t,a){"use strict";var n=a("7ce3"),i=a.n(n);i.a},"0eb9":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniForms:a("0fdf").default,uniFormsItem:a("fef3").default,uniEasyinput:a("15f1").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:e.formData,"validate-trigger":"submit","err-show-type":"toast","label-position":"top","label-width":"70","label-align":"left"}},[a("uni-forms-item",{attrs:{name:"_id",label:"_ID",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"_ID",disabled:!0},model:{value:e.formData._id,callback:function(t){e.$set(e.formData,"_id",t)},expression:"formData._id"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"类型名",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"类型名"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("uni-forms-item",{attrs:{name:"value",label:"类型值"}},[a("uni-easyinput",{attrs:{placeholder:"类型值"},model:{value:e.formData.value,callback:function(t){e.$set(e.formData,"value",t)},expression:"formData.value"}})],1),a("uni-forms-item",[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},r=[]},"615b":function(e,t,a){"use strict";a.r(t);var n=a("0eb9"),i=a("f9ab");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("01e6");var o,u=a("f0c5"),f=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"6403aeff",null,!1,n["a"],o);t["default"]=f.exports},"7ce3":function(e,t,a){var n=a("bae5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("205c8c32",n,!0,{sourceMap:!1,shadowMode:!1})},a6b1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=t.validator=void 0;var n={name:{rules:[{required:!0},{format:"string"}]},value:{rules:[{format:"string"}]}};t.validator=n;var i={};t.enumConverter=i},bae5:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".uni-container[data-v-6403aeff]{padding:15px}.uni-input-border[data-v-6403aeff],\n.uni-textarea-border[data-v-6403aeff]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-6403aeff]{padding:0 10px;height:35px}.uni-textarea-border[data-v-6403aeff]{padding:10px;height:80px}.uni-button-group[data-v-6403aeff]{margin-top:50px;display:flex;justify-content:center}.uni-button[data-v-6403aeff]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),e.exports=t},ebfa:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("c975"),a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),r=a("a6b1"),o=e.database(),u="type";function f(e){var t={};for(var a in r.validator)e.indexOf(a)>-1&&(t[a]=r.validator[a]);return t}var s={data:function(){return{formData:{name:"",value:""},formOptions:{},rules:(0,i.default)({},f(["name","value"]))}},onLoad:function(e){var t=e.id;this.formDataId=t,this.getDetail(t)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(t){e.submitForm(t)})).catch((function(e){uni.hideLoading()}))},submitForm:function(e){var t=this;delete e._id,o.collection(u).doc(this.formDataId).update(e).then((function(e){uni.showToast({icon:"success",title:"修改成功！"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败！",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(e){var t=this;uni.showLoading({mask:!0}),o.collection(u).doc(e).field("name,value").get().then((function(e){var a=e.result.data[0];a&&(t.formData=a)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败!",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=s}).call(this,a("a9ff")["default"])},f9ab:function(e,t,a){"use strict";a.r(t);var n=a("ebfa"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}}]);