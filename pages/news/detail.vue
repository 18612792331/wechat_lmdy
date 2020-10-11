<template>
	<view class="content">
		<view class="flex-sub text-left">
			<view class="text-lg padding">
				<text class="text-black">{{content.title}}</text>
			</view>
			<view class="flex-sub text-left">
				<view class="solid-bottom text-xs padding">
					<text class="text-gray">发布时间：{{content.create_time}}</text>
				</view>
			</view>
		</view>
		<view class="content-box">
			<ad ad-type="grid" unit-id="adunit-f039e12abfc1fc1e" ad-intervals="35"></ad>
			<image class="content-img" :src=" apiImageUrl + content.img "></image>
			<rich-text :nodes="content.content"></rich-text>
		</view>
		<ad ad-type="video" unit-id="adunit-f6d43bbe8b5f31e0" ad-intervals="35"></ad>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: {},
				imageUrl: this.$helper.imageUrl,
				apiImageUrl: this.$helper.apiImageUrl,
			}
		},
		onLoad(options) {
			if (options.id > 0) {
				this.getDetail(options.id);
			}
		},
		methods: {
			getDetail (id) {
				var _this = this;
				_this.$http.post('/news/index/detail',{id: id}).then((res)=>{
					_this.content = res.data.data;
					_this.content.content = res.data.data.content.replace(/style=\"(.*?)\"/gi, '').replace(/\<img/gi, '<img style="width:100%;height:auto;display:block"');
				}).catch((err)=>{
					uni.showToast({title: '网络错误', icon: "none"});
				})
			}
		}
	}
</script>

<style>
	.content-box{
		padding: 20upx 28upx;
	}
	.content-img {
		max-height: 480upx;
	}
</style>
