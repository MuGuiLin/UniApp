<template>
	<view class="learn">
		<uni-card :title="uni.name" mode="style" :is-shadow="true" thumbnail="/static/img/uni-ui.gif"
			:extra="uni.mean">
			<button type="primary" @click="goto('http://caibugui.com/uni-ui')">uni-ui</button>
		</uni-card>
		<uni-card :title="mui.name" mode="style" :is-shadow="true" :thumbnail="mui.thum" :extra="mui.mean">
			<button type="warn" @click="goto('https://dev.dcloud.net.cn/mui')">MUI</button>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uni: {
					name: "uni-ui",
					mean: "uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。",
				},
				mui: {
					name: "MUI",
					mean: "最接近原生APP体验的高性能前端框架！",
					thum: '/static/img/mui.png'
				},
			};
		},
		methods: {
			goto(src) {
				uni.navigateTo({
					url: `/pages/web-view/web-view?src=${src}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.learn {
		.uni-card {
			margin:40rpx 30rpx;
			.mean {
				padding-top: 16rpx;
				min-height: 200rpx;
				line-height: 56rpx;
				letter-spacing: 2rpx;
			}

			.uni-list-cell {
				margin: 20rpx;

			}

			uni-button[type=primary],
			uni-button[type=warn] {
				margin: 20rpx auto;
			}
		}
	}
</style>
