<template>
	<view class="content">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						{{item.content}}
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-grid :column="3" :showBorder="true" :square="true" @change="grid">
			<uni-grid-item>
				<uni-icons type="home" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="hand-thumbsup" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="eye" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="star" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="mic-filled" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="gear-filled" size="36" color="#00aa00"></uni-icons>
				<text class="text">记单词</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					content: '好好学习！'
				}, {
					content: '每天进步！'
				}, {
					content: '贵在坚持！'
				}],
				current: 0,
				mode: 'round',
				dotsStyles: {
					width: 10,
					height: 10,
					bottom: 16,
					backgroundColor: 'white',
					border: 'green',
					selectedBackgroundColor: 'yellow',
					selectedBorder: 'white',
				}
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
			change(e) {
				this.current = e.detail.current;
			},
			grid(e) {
				console.log(e.detail.index)
				switch (e.detail.index) {
					case 0:
						uni.navigateTo({
							url: '../word/index'
						});
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		.swiper-box{
			border-top: 1rpx solid white;
			height: 500rpx;
		}
		.swiper-item {
			color: white;
			font-size: 66rpx;
			line-height: 500rpx;
			background: repeating-radial-gradient(#005200, #00aa00);
		}

		.uni-icons {
			display: inline-block;
			margin-top: 66rpx;
		}

		.text {
			
			color: #00aa00;
			line-height: 50rpx;
		}
	}
</style>
