(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-register"],{"0db1":function(a,t,e){"use strict";var n=e("9475"),o=e.n(n);o.a},2038:function(a,t,e){a.exports=e.p+"static/img/register.f5c9ea7a.png"},"43f7":function(a,t,e){"use strict";e.r(t);var n=e("7764"),o=e("f391");for(var i in o)"default"!==i&&function(a){e.d(t,a,(function(){return o[a]}))}(i);e("0db1");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"0c7c52af",null,!1,n["a"],r);t["default"]=c.exports},"721c":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{formValue:{type:"reg",account:"",password:"",repassword:"",group_id:1,drice_id:""}}},methods:{register:function(){var a=this;return a.formValue.account&&a.formValue.password?a.formValue.repassword?a.formValue.password!=a.formValue.repassword?(uni.showToast({title:"两次密码不一致",icon:"none"}),!1):void a.doRegister():(uni.showToast({title:"请输入确认密码",icon:"none"}),!1):(uni.showToast({title:"请输入帐号和密码",icon:"none"}),!1)},doRegister:function(){var a=this;a.$http.post("/user/auth/dosth",a.formValue).then((function(a){200==a.code?(uni.showToast({title:"注册成功！\n请加Q群（516769607）\n联系群主进行帐号审核",icon:"none"}),uni.setStorageSync("userInfo",a.data),uni.setStorageSync("token",a.data.token),uni.switchTab({url:"/pages/user/index"})):617==a.code?uni.showModal({title:"注册提示",content:a.msg,showCancel:!1,success:function(a){uni.switchTab({url:"/pages/user/index"})}}):uni.showToast({title:a.msg,icon:"none"})})).catch((function(a){}))}}};t.default=n},7764:function(a,t,e){"use strict";var n,o=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"zai-box pages"},[n("v-uni-image",{staticClass:"zai-logo",attrs:{src:e("2038"),mode:"aspectFit"}}),n("v-uni-view",{staticClass:"zai-title"},[a._v("云试听")]),n("v-uni-view",{staticClass:"zai-form"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{staticClass:"zai-input",attrs:{maxlength:"11",type:"number","placeholder-class":!0,placeholder:"请输入手机号"},model:{value:a.formValue.account,callback:function(t){a.$set(a.formValue,"account",t)},expression:"formValue.account"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{staticClass:"zai-input",attrs:{"placeholder-class":!0,password:!0,placeholder:"请输入密码"},model:{value:a.formValue.password,callback:function(t){a.$set(a.formValue,"password",t)},expression:"formValue.password"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{staticClass:"zai-input",attrs:{"placeholder-class":!0,password:!0,placeholder:"请再输入一次密码"},model:{value:a.formValue.repassword,callback:function(t){a.$set(a.formValue,"repassword",t)},expression:"formValue.repassword"}})],1),n("v-uni-button",{staticClass:"zai-btn bg-my-red",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.register.apply(void 0,arguments)}}},[a._v("立即注册")]),n("v-uni-navigator",{staticClass:"zai-label",attrs:{url:"../user/login","open-type":"navigateBack","hover-class":"none"}},[a._v("已有账号，点此去登录")])],1)],1)},i=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return n}))},"7c18":function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".cu-form-group[data-v-0c7c52af]{border:none!important;background-color:#161827!important}.zai-box[data-v-0c7c52af]{padding:0 %?100?%;position:relative}.zai-logo[data-v-0c7c52af]{width:100%;width:100%;height:%?310?%}.zai-title[data-v-0c7c52af]{position:absolute;top:0;line-height:%?360?%;font-size:%?68?%;color:#fff;text-align:center;width:100%;margin-left:%?-100?%}.zai-form[data-v-0c7c52af]{margin-top:%?300?%}.zai-input[data-v-0c7c52af]{background:#e2f5fc;margin-top:%?30?%;border-radius:%?100?%;padding:0 %?40?%;font-size:%?36?%;height:%?80?%!important;min-height:%?80?%!important;line-height:%?80?%!important}.input-placeholder[data-v-0c7c52af], .zai-input[data-v-0c7c52af]{color:#94afce}.zai-label[data-v-0c7c52af]{padding:%?60?% 0;text-align:center;font-size:%?30?%;color:#a7b6d0}.zai-btn[data-v-0c7c52af]{\n\n\nbackground:#48b3fd;\ncolor:#fff;border:0;border-radius:%?100?%;font-size:%?36?%;margin-top:%?60?%}.zai-btn[data-v-0c7c52af]:after{border:0}\n/*按钮点击效果*/.zai-btn.button-hover[data-v-0c7c52af]{-webkit-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}",""]),a.exports=t},9475:function(a,t,e){var n=e("7c18");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=e("4f06").default;o("dcfebeea",n,!0,{sourceMap:!1,shadowMode:!1})},f391:function(a,t,e){"use strict";e.r(t);var n=e("721c"),o=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,(function(){return n[a]}))}(i);t["default"]=o.a}}]);