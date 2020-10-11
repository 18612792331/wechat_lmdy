"use strict";

function _interopRequireDefault(e) {
	return e && e.__esModule ? e : {
		default: e
	}
}

function _reqlog(e) {
	"development" === process.env.NODE_ENV && e.data && console.log("【" + e.requestId + "】 请求参数：" + JSON.stringify(e.data))
}

function _reslog(e) {
	var t = e.statusCode
}
Object.defineProperty(exports, "__esModule", {
	value: !0
});
var _helper = require("../helper"),
	_helper2 = _interopRequireDefault(_helper);
exports.default = {
	config: {
		baseUrl: _helper2.default.websiteUrl,
		header: {
			"Content-Type": "text/html;charset=utf-8"
		},
		data: {},
		method: "POST",
		dataType: "json",
		responseType: "text",
		success: function() {},
		fail: function() {},
		complete: function() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request: function(e) {
		var t = this;
		return e || (e = {}), e.baseUrl = e.baseUrl || this.config.baseUrl, e.dataType = e.dataType || this.config.dataType,
			e.url = e.baseUrl + e.url, e.data = e.data || {}, e.method = e.method || this.config.method, new Promise(function(
				r, n) {
				var o = null;
				e.complete = function(e) {
						var s = e.statusCode;
						if (e.config = o, t.interceptor.response) {
							var u = t.interceptor.response(e);
							u && (e = u)
						}
						200 === s ? r(e.data) : n(e.data)
					}, o = Object.assign({}, t.config, e), o.requestId = (new Date).getTime(), t.interceptor.request && t.interceptor
					.request(o), uni.request(o)
			})
	},
	get: function(e, t, r) {
		return r || (r = {}), r.url = e, r.data = t, r.method = "GET", this.request(r)
	},
	post: function(e, t, r) {
		return r || (r = {}), r.url = e, r.data = t, r.method = "POST", this.request(r)
	},
	put: function(e, t, r) {
		return r || (r = {}), r.url = e, r.data = t, r.method = "PUT", this.request(r)
	},
	delete: function(e, t, r) {
		return r || (r = {}), r.url = e, r.data = t, r.method = "DELETE", this.request(r)
	}
};
