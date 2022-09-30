<template>
	<view class="warp">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
			<swiper @change="change">
				<!-- 	<swiper-item>
					<image src="@/static/imgs/banner-1.jpg" mode=""></image>
				</swiper-item> -->
				<swiper-item v-for="(item ,index) in info" :key="index">
					{{item.content}}
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-grid :column="3" :showBorder="true" :square="true" :highlight="true">
			<uni-grid-item v-for="(item ,index) in menu" :key="index">
				<view class="grid-item-box" @click="open(index)">
					<uni-icons :type="item.icon" size="50" color="#00aa00"></uni-icons>
					<text>{{item.name}}</text>
				</view>
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
					selectedBackgroundColor: 'orange',
					selectedBorder: 'white',
				},
				menu: [{
						icon: 'mic-filled',
						name: '国际音标'
					},
					{
						icon: 'sound-filled',
						name: '见词拼读'
					},
					{
						icon: 'chatboxes-filled',
						name: '模仿秀'
					},
					{
						icon: 'star-filled',
						name: '单词速记'
					},
				]
			}
		},
		onLoad() {
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
			// console.log(2);
		},
		mounted() {
			// console.log(3);
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			open(e) {
				console.log(e)
				switch (e) {
					case 0:
						uni.navigateTo({
							url: '../word/phonetics/index'
						});
						break;
					case 1:
						uni.navigateTo({
							url: '../word/spelling/index'
						});
						break;
					case 2:
						uni.navigateTo({
							url: '../word/imitate/index'
						});
						break;
					case 3:
						uni.navigateTo({
							url: '../word/index'
						});
						break;
					default:
						uni.showToast({
							title: `开发中，敬请期待！`,
							icon: 'none'
						});
						break;
				}
			},
		}
	}
</script>

<style lang="scss">
	.warp {
		text-align: center;

		uni-swiper {
			border-top: 1rpx solid white;
			height: 500rpx;

			uni-swiper-item {
				color: white;
				font-size: 66rpx;
				line-height: 500rpx;
				font-weight: bold;
				background: repeating-radial-gradient(#005200, #00aa00);

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.grid-item-box {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			text {
				color: #666;
				line-height: 80rpx;
			}
		}
	}
</style>
