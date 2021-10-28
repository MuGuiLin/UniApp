<template>
	<view class="word">
		<uni-card :title="item.name" mode="style" :is-shadow="true" :thumbnail="thum" :extra="item.read" note="">
			<view class="mean">
				<text>{{item.mean}}</text>
			</view>
		</uni-card>
		<uni-group title="" margin-top="10">
			显示词意：
			<switch checked color="" @change="switchChange" />
		</uni-group>

		<uni-group title="" margin-top="10">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<radio :value="item.value" :checked="index === current" />
					{{item.name}}
				</label>
			</radio-group>
		</uni-group>

		<uni-group title="" margin-top="10">
			<button type="primary" @click="next">NEXT</button>
		</uni-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word: [],
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
				items: [{
						value: 'time',
						name: '时间'
					},
					{
						value: 'food',
						name: '食物'
					}
				],
				current: 0
			};
		},
		onLoad() {
			const db = uniCloud.database();
			db.collection('word').get().then(({
				result
			}) => {
				console.log(result)
				this.word = result.data;
				this.item = result.data[this.index];
			});
		},
		mounted() {
			
		},
		methods: {
			switchChange: function(e) {
				console.log('switch 发生 change 事件，携带值为', e.target.value)
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},
			next() {
				if (this.word.length) {
					const random = parseInt(Math.random() * this.word.length);
					this.item = this.word[random];
				}
			}
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

		uni-button[type=primary] {
			background: #269939;
		}

	}
</style>
