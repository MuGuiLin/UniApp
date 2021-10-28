<template>
	<view class="content">
		<image class="logo" src="/static/icon/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="btn-box">
			<navigator url="/pages/unicloud-db/index?title=navigate" hover-class="navigator-hover">
				<button type="default">跳转到新页面</button>
			</navigator>
			<navigator url="/pages/unicloud-db/index?title=redirect" open-type="redirect"
				hover-class="other-navigator-hover">
				<button type="default">在当前页打开 clientDB </button>
			</navigator>
			<navigator url="/pages/unicloud-db/index" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default">跳转tab页面</button>
			</navigator>
			<!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
			<button type="warn" @click="navigateTo('/pages/web-view/web-view')">跳转到web-view页面-h5平台支持</button>
			<button type="primary" @click="goto('/pages/web-view/web-view')">通过方法跳转到web-view页面 - 推荐</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name: "word",
				success: (e) => {
					console.log(e);
				}
			})
		},
		methods: {
			goto(url) {
				uni.navigateTo({
					url: `${url}?src=https://uniapp.dcloud.io/component/web-view`
				});
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}

		.text-area {
			display: flex;
			justify-content: center;

			.title {
				font-size: 36rpx;
				color: #8f8f94;
			}
		}


		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}

		.btn-box {
			button {
				margin: 20rpx;
			}
		}
	}
</style>
