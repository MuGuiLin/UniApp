<template>
	<view class="word">
		<uni-card :title="item.name" mode="style" :is-title="!show.show" :is-shadow="true" :thumbnail="thum"
			:extra="item.read">
			<view class="mean">
				<text v-show="show.mean">{{item.mean}}</text>
			</view>
		</uni-card>

		<uni-group>
			<input v-if="show.show" class="uni-input" :class="{'error': show.error}" @blur="blur" v-model="show.write" placeholder="在这里默认单词哦!" />
			<picker @change="bind" :value="type.index" :range="type.array" range-key="type">
				<view class="uni-input">{{type.array[index].type}}</view>
			</picker>
		</uni-group>

		<uni-group margin-top="10">
			<button type="primary" @click="next">NEXT</button>
		</uni-group>

		<uni-fab ref="fab" :pattern="fab.pattern" :content="fab.content" :horizontal="fab.horizontal" :vertical="fab.vertical" :direction="fab.direction" @trigger="trigger" />
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				data: [],
				show: {
					mean: true,
					show: false,
					write: "",
					error: false,
				},
				item: {
					type: "名词",
					name: "English",
					read: "[ˈɪŋɡlɪʃ]",
					mean: "英语;英文;英语语言文学;英语学科;英格兰人(有时误用以指包括苏格兰、威尔士和北爱尔兰人在内的英国人)",
					desc: "",
					attr: []
				},
				index: 0,
				thum: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
				type: {
					index: 0,
					array: [{
						type: '全部',
					}]
				},
				fab: {
					horizontal: 'right',
					vertical: 'bottom',
					direction: 'vertical',
					pattern: {
						color: '#7A7E83',
						// buttonColor: "#269939",
						selectedColor: '#269939',
						backgroundColor: '#fff',
					},
					content: [{
							iconPath: '/static/icon/term.svg',
							selectedIconPath: '/static/icon/term-h.svg',
							text: '词意',
							active: true
						},
						{
							iconPath: '/static/icon/write.svg',
							selectedIconPath: '/static/icon/write-h.svg',
							text: '默写',
							active: false
						}
					]
				},
			};
		},
		onLoad() {
			uni.startPullDownRefresh();
			this.init();
		},
		onPullDownRefresh() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		mounted() {

		},
		methods: {
			init() {
				db.collection('word').get().then(({
					result
				}) => {
					console.log(result)
					this.data = result.data;
					this.item = result.data[this.index];
					const obj = {};
					this.type.array = result.data.reduce(function(item, next) {
						obj[next.type] ? '' : obj[next.type] = true && item.push(next);
						return item;
					}, []);
				});
			},
			blur: function({
				detail
			}) {
				this.show.error = detail.value.toUpperCase() != this.item.name.toUpperCase();
				uni.showToast({
					title: this.show.error ? "OH Error！" : "OK Nice！",
					icon: this.show.error ? "error" : "success"
				});
			},
			bind: function(e) {
				this.type.index = e.detail.value;
			},
			next() {
				if (this.data.length) {
					const random = parseInt(Math.random() * this.data.length);
					this.item = this.data[random];
					this.show.write = "";
					this.show.error = false;
				}
			},
			trigger({
				index,
				item
			}) {
				this.fab.content[index].active = !item.active;
				switch (item.text) {
					case '词意':
						this.show.mean = item.active;
						break;
					case '默写':
						this.show.show = item.active;
						break;
					default:
						break;
				};
				this.$refs.fab.close();
			},
		}
	}
</script>

<style lang="scss">
	.word {
		.mean {
			padding-top: 16rpx;
			min-height: 200rpx;
			line-height: 56rpx;
			letter-spacing: 2rpx;
		}

		.uni-list-cell {
			margin: 20rpx;

		}

		.uni-input {
			margin: 20rpx auto;
			padding: 20rpx;
			font-size: 38rpx;
			color: green;
			font-weight: bold;
			border: 1px solid #c8c7cc;
			border-radius: 8rpx;
		}

		.error {
			color: red;

		}

		uni-button[type=primary] {
			background: #269939;
		}
	}

	.uni-fab__circle {
		background-color: #269939 !important;
	}
</style>
