(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-index"],{6236:function(n,e,t){"use strict";var u,i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"content"})},c=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return u}))},c3f7:function(n,e,t){"use strict";t.r(e);var u=t("dc82"),i=t.n(u);for(var c in u)"default"!==c&&function(n){t.d(e,n,(function(){return u[n]}))}(c);e["default"]=i.a},dc82:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={onLoad:function(){this.checkGuide()},methods:{checkGuide:function(){var n=uni.getStorageSync("sys_config");"1"==n.show_ad?uni.redirectTo({url:"/pages/guide/list"}):uni.switchTab({url:"/pages/index/index"})}}};e.default=u},ee93:function(n,e,t){"use strict";t.r(e);var u=t("6236"),i=t("c3f7");for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);var r,a=t("f0c5"),o=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"668fd741",null,!1,u["a"],r);e["default"]=o.exports}}]);