<template>
	<view class="word">
		<uni-card :title="data.item.name" mode="style" :is-title="!show.show" :is-shadow="true"
			:thumbnail="thum(data.item.image)" :extra="data.item.read">
			<view class="mean">
				<text v-show="show.mean">{{data.item.mean}}</text>
			</view>
			<view class="desc">
				<text v-show="!show.show">{{data.item.desc}}</text>
			</view>
		</uni-card>

		<uni-group>
			<input v-if="show.show" class="uni-input" :class="{'error': true === show.error, 'correct': false === show.error}" @input="input"
				v-model="show.write" placeholder="在这里默认单词哦!" />
			<picker @change="bind" :value="type.index" :range="type.array" range-key="name">
				<view class="uni-input">{{type.array[type.index].name}}</view>
			</picker>
		</uni-group>

		<view class="btns">
			<button type="warn" @click="prev">
				<uni-icons type="back" color="white" size="20"></uni-icons>PREV
			</button>
			<button type="primary" @click="next">NEXT<uni-icons type="forward" color="white" size="20"></uni-icons>
			</button>
		</view>

		<uni-fab ref="fab" :pattern="fab.pattern" :content="fab.content" :horizontal="fab.horizontal"
			:vertical="fab.vertical" :direction="fab.direction" @trigger="trigger" />
	</view>
</template>

<script>
	const db = uniCloud.database();
	let items = null;
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
					error: null,
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
					vertical: 'top',
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
			word(where = {}) {
				db.collection('word')
					// .where('type == "连词"') // where(可以指定字符串，也可以指定一个对象)
					.where(where)
					// .field(20) // 指定返回字的段
					// .skip(20) // 跳过前20条，可以通过skip() + limit()来进行分页查询, 这里对应的分页条件为：每页20条，取第2页
					.limit(1000) // limit不设置的情况下默认返回100条数据；设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
					// .orderBy('create_date desc') // 按照create_date降序排列 asc(升序)、desc(降序)，多个字段排序，以逗号分隔，写在前面的排序字段优先级高于后面。
					.get()
					// .get({getOne:true}) // getOn只查一条记录，其实等价于上一节的limit(1)。
					.then(({
						result
					}) => {
						if (result.affectedDocs) {
							this.data.root = result.data;
							this.data.word = result.data;
							this.data.item = result.data[this.data.index];
							if (where?.type) {
								uni.showToast({
									title: `已加载${result.affectedDocs}个！`,
									icon: "success"
								});
							}
						} else {
							uni.showToast({
								title: "暂无数据！",
								icon: "error"
							});
							// 统计符合查询条件的记录数 affectedDocs表示从服务器返回给前端的数据条数。默认100条，可通过limit方法调整
							console.log('result.data长度：', result.affectedDocs);

							// 单纯统计数量，不返回数据明细 .count()返回的total则是指符合查询条件的记录总数，至于这些记录是否返回给前端，和count无关。
							console.log('单纯统计数量，不返回数据明细：', db.collection('word').count());
						}
						// const obj = {};
						// this.type.array = result.data.reduce(function(item, next) {
						// 	obj[next.type] ? '' : obj[next.type] = true && item.push(next);
						// 	return item;
						// }, []);
					});
			},
			init() {
				db.collection('type').get().then(({
					result
				}) => {
					this.type.array = [...this.type.array, ...result.data];
					this.word();
				});
			},
			input: function({
				detail
			}) {
				clearTimeout(items);
				items = setTimeout(_ => {
					// 提取数字:value.replace(/[^\d]/g,'');
					// 提取中文:value.replace(/[^\u4E00-\u9FA5]/g,'');
					// 提取英文:value.replace(/[^a-zA-Z]/g,'');
					this.show.error = detail.value.toUpperCase() != this.data.item.name.replace(/[^a-zA-Z]/g,
						'').toUpperCase();
					uni.showToast({
						title: this.show.error ? "OH Error！" : "OK Nice！",
						icon: this.show.error ? "error" : "success",
						success: _ => {
							if (!this.show.error) {
								setTimeout(_ => {
									this.next();
								}, 1000);
							}
						}
					});
				}, 1000);
			},
			bind: function({
				detail
			}) {
				const index = detail.value || 0;
				this.type.index = index;
				if (index) {
					let type = this.type.array[index].name;

					// this.data.word = this.data.root.filter((o, i, a) => o.type == type);

					type = index ? {
						type
					} : {};
					this.word(type);
				} else {
					// 没有条件，就取文档中的前1000条数据
					// this.data.word = this.data.root;

					this.word({});
				}
			},
			thum(img) {
				return img?.length ? img[0]?.path : '/static/img/nui.png';
			},
			prev() {
				if (this.data.word.length) {
					const length = this.data.word.length;
					if (this.show.order) {
						this.data.index = this.data.index <= 0 ? length - 1 : this.data.index - 1;
					} else {
						this.data.index = parseInt(Math.random() * length);
					}
					this.data.item = this.data.word[this.data.index];
					this.show.write = "";
					this.show.error = null;
				}
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
					this.show.error = null;
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
						this.data.index = 0;
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

		.desc {
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
			color: grey;
			font-weight: bold;
			border: 1px solid #c8c7cc;
			border-radius: 8rpx;
		}

		.error {
			color: red;
		}

		.correct {
			color: green;
		}

		.btns {
			position: fixed;
			left: 0;
			bottom: 10px;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.btns button {
			width: 40%;
		}

		uni-button[type=primary] {
			background: #269939;
		}
	}

	.uni-fab__circle {
		background-color: #269939 !important;
	}
</style>
