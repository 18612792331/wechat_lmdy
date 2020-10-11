import http from './interface'
import helper from '../helper'
 
export const post = (url,data) => {
	let timestamp = _getTimeStamp();
	let token = uni.getStorageSync('token');
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			'secret': helper.websiteSecret,
			'token': token,
			'timestamp': timestamp
		}
		config.method = 'POST';
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		if (response.data.code >= 400) {
			if (1200 == response.data.code) {
				uni.setStorageSync('userInfo', null);
				uni.navigateTo({
					url: '/pages/user/login'
				})
				return false;
			}
			uni.showModal({
				title: '提示',
				content: response.data.msg || "请求失败",
				showCancel: false
			})
			return false;
		}
		return response;
	}
    return http.request({
        url: url,
        data
    })
}

export const get = (url,data) => {
	let timestamp = _getTimeStamp();
	let token = uni.getStorageSync('token');
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			'secret': helper.websiteSecret,
			'token': token,
			'timestamp': timestamp
		}
		config.method = 'GET';
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		if (response.data.code >= 400) {
			uni.showModal({
				title: '提示',
				content: response.data.msg || "请求失败",
				showCancel: false
			})
			return false;
		}
		if (1200 == response.data.code) {
			uni.setStorageSync('userInfo', null);
			uni.navigateTo({
				url: '/pages/user/login'
			})
		}
		return response;
	}
    return http.request({
        url: url,
        data
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	post,
	get
}

function _getTimeStamp() {
	let NowTime = new Date();   
		NowTime = NowTime.getTime(); 
	return NowTime/1000;
}