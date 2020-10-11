<template>
	<view>
		<view class="banner">
			<swiper class="card-swiper square-dot" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item" v-if="item.type == 'image'">
						<image :lazy-load="true" :src="apiImageUrl + item.img"></image>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<view class="swiper-item ad-swiper-item" v-if="item.type == 'mpad'">
						<ad :style="mpadStyle" @load="mpadLoad" :unit-id="item.ad_url" ad-intervals="35"></ad>
					</view>
					<!-- #endif -->
				</swiper-item>
			</swiper>
		</view>
		<view class="cu-card article">
			<block v-for="(item,index) in newsList" :key="index">
				<view class="cu-item shadow" @tap="goDetail(item.id)">
					<view class="title"><view class="text-cut">{{item.title}}</view></view>
					<view class="content">
						<image :src="apiImageUrl + item.img"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">{{item.desc}}</view>
							<view>
								<view class="cu-tag bg-green light sm round">{{item.create_time}}</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<ad ad-type="grid" unit-id="adunit-f039e12abfc1fc1e" ad-intervals="35" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mpadStyle: '',
				cardCur: 0,
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				newsList: [],
				imageUrl: this.$helper.imageUrl,
				apiImageUrl: this.$helper.apiImageUrl,
			};
		},
		onLoad() {
			this.getGlobalConfig();
		},
		methods: {
			mpadLoad () {
				let _this = this;
				setTimeout(function(){
					_this.mpadStyle = 'width: 100%!important; height:100%!important';
				}, 2000);
			},
			getGlobalConfig() {
				var _this = this;
				_this.$http.post('/index/config/getConfig',{}).then((res)=>{
					uni.setStorageSync('sys_config', res.data.data);
					// 是否显示xx页
					if (res.data.data.show_xx == 0) {
						uni.redirectTo({
						    url: '/pages/guide/index'
						});
						return;
					}else{
						_this.getNewsBanner();
						_this.getNewsList();
					}
				}).catch((err)=>{
					uni.showToast({title: '网络错误', icon: "none"});
				})
			},
			getNewsBanner () {
				var _this = this;
				_this.$http.post('/banner/banner/getBannerLists',{}).then((res)=>{
					_this.swiperList = res.data.data.list;
					// 初始化towerSwiper 传已有的数组名即可
					_this.TowerSwiper('swiperList');
				}).catch((err)=>{
					uni.showToast({title: '网络错误', icon: "none"});
				})
			},
			getNewsList() {
				var _this = this;
				_this.$http.post('/news/index/lists',{}).then((res)=>{
					_this.newsList = res.data.data.list;
				}).catch((err)=>{
					uni.showToast({title: '网络错误', icon: "none"});
				})
			},
			goDetail (id) {
				if (parseInt(id) > 0) {
					uni.navigateTo({
						url: "/pages/news/detail?id=" + id
					})
				}
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			}
		}
	}
</script>

<style>
</style>
