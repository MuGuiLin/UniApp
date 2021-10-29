<template>
	<view class="word">
		<uni-card :title="data.item.name" mode="style" :is-title="!show.show" :is-shadow="true"
			:thumbnail="thum(data.item.image)" :extra="data.item.read">
			<view class="mean">
				<text v-show="show.mean">{{data.item.mean}}</text>
			</view>
			<view class="desc">
				<text>{{data.item.desc}}</text>
			</view>
		</uni-card>

		<uni-group>
			<input v-if="show.show" class="uni-input" :class="{'error': show.error}" @blur="blur" v-model="show.write"
				placeholder="在这里默认单词哦!" />
			<picker @change="bind" :value="type.index" :range="type.array" range-key="name">
				<view class="uni-input">{{type.array[type.index].name}}</view>
			</picker>
		</uni-group>

		<uni-group margin-top="10">
			<button type="primary" @click="next">NEXT</button>
		</uni-group>

		<uni-fab ref="fab" :pattern="fab.pattern" :content="fab.content" :horizontal="fab.horizontal"
			:vertical="fab.vertical" :direction="fab.direction" @trigger="trigger" />
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				data: {
					root: [],
					word: [],
					index: 0,
					item: {
						type: "名词",
						name: "English",
						read: "[ˈɪŋɡlɪʃ]",
						mean: "英语;英文;英语语言文学;英语学科;英格兰人(有时误用以指包括苏格兰、威尔士和北爱尔兰人在内的英国人)",
						desc: "",
						attr: [],
						image: []
					}
				},
				show: {
					mean: true,
					show: false,
					order: 0,
					write: "",
					error: false,
				},
				type: {
					index: 0,
					array: [{
						name: "全部",
						value: "all"
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
						},
						{
							iconPath: '/static/icon/order-h.svg',
							selectedIconPath: '/static/icon/random-h.svg',
							text: '随机',
							active: true
						},
						{
							iconPath: '/static/icon/type.svg',
							selectedIconPath: '/static/icon/type-h.svg',
							text: '类型',
							active: false
						},
						{
							iconPath: '/static/icon/list.svg',
							selectedIconPath: '/static/icon/list-h.svg',
							text: '列表',
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
				db.collection('type').get().then(({
					result
				}) => {
					this.type.array = [...this.type.array, ...result.data];
				});
				db.collection('word').get().then(({
					result
				}) => {
					this.data.root = result.data;
					this.data.word = result.data;
					this.data.item = result.data[this.data.index];
					// const obj = {};
					// this.type.array = result.data.reduce(function(item, next) {
					// 	obj[next.type] ? '' : obj[next.type] = true && item.push(next);
					// 	return item;
					// }, []);
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
			bind: function({
				detail
			}) {
				const index = detail.value || 0;
				this.type.index = index;
				if (index) {
					const type = this.type.array[index].name;
					this.data.word = this.data.root.filter((o, i, a) => o.type == type);
				} else {
					this.data.word = this.data.root;
				}
			},
			thum(img) {
				return img?.length ? img[0]?.path : '/static/img/nui.png';
			},
			next() {
				if (this.data.word.length) {
					const length = this.data.word.length;
					if (this.show.order) {
						this.data.index = this.data.index >= length - 1 ? 0 : this.data.index + 1;
					} else {
						this.data.index = parseInt(Math.random() * length);
					}
					this.data.item = this.data.word[this.data.index];
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
					case '随机':
						this.show.order = 1;
						this.fab.content[index].text = '顺序';
						// this.fab.content[index].active = true;
						break;
					case '顺序':
						this.show.order = 0;
						this.fab.content[index].text = '随机';
						// this.fab.content[index].active = true;
						break;
					case '类型':
						this.fab.content[index].active = false;
						uni.navigateTo({
							url: './type/index'
						});
						break;
					case '列表':
						this.fab.content[index].active = false;
						uni.navigateTo({
							url: './list/index'
						});
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
			min-height: 128rpx;
			line-height: 56rpx;
		}
		.desc{
			color: gray;
			margin-top: 10rpx;
			min-height: 100rpx;
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
