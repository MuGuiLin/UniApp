<template>
	<view class="content">
		<image class="logo" src="/static/img/uni-app.png"></image>
		<view class="text-area">
			<uni-title type="h1" :title="title"></uni-title>
			<text class="title">{{title}}</text>
		</view>
		<view class="btn-box">
			<navigator url="/pages/unicloud-db/index?title=navigate" hover-class="navigator-hover">
				<button type="primary">跳转到新页面 clientDB</button>
			</navigator>
			<navigator url="/pages/unicloud-db/index?title=redirect" hover-class="other-navigator-hover"
				open-type="redirect">
				<button type="warn">在当前页打开 clientDB</button>
			</navigator>
			<navigator url="/pages/learn/index" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default">跳转到tab页面 Learing</button>
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
				title: 'Hello Uni App'
			}
		},
		onLoad() {
			console.log(1);
			uniCloud.callFunction({
				name: "word",
				success: (e) => {
					console.log(4, e);
				},
				complete: (e) => {
					console.log(4, e);
				}
			});
		},
		created: () => {
			console.log(2);
		},
		mounted() {
			console.log(3);
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
			margin-top: 50rpx;
		}

		.text-area {
			display: flex;
			justify-content: center;

			.title {
				line-height: 100rpx;
				font-size: 36rpx;
				color: #ff007f;
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
