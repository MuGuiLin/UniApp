<template>
	<view class="container">
		<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, hasMore, error}" collection="type" field="name,value">
			<view v-if="error">
				<text>{{error.message}}</text>
			</view>
			<view v-else-if="data">
				<uni-title type="h1" align="center" color="#027fff" title="单词类型"></uni-title>
				<uni-list>
					<uni-list-item v-for="(item, index) in data" :key="index" showArrow :clickable="true" @click="handleItemClick(item._id)">
						<view slot="body">
							<!-- 此处默认显示为_id，请根据需要自行修改为其他字段 -->
							{{item.name}} : {{item.value}}
						</view>
					</uni-list-item>
					
				</uni-list>
			</view>
			<uni-load-more :status="loading?'loading':(hasMore ? 'more' : 'noMore')"></uni-load-more>
		</unicloud-db>
		<uni-fab ref="fab" horizontal="right" vertical="bottom" :pop-menu="false" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadMore: {
					contentdown: '',
					contentrefresh: '',
					contentnomore: ''
				}
			}
		},
		onPullDownRefresh() {
			this.$refs.udb.loadData({
				clear: true
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() {
			this.$refs.udb.loadMore()
		},
		methods: {
			handleItemClick(id) {
				uni.navigateTo({
					url: './detail?id=' + id
				})
			},
			fabClick() {
				// 打开新增页面
				uni.navigateTo({
					url: './add',
					events: {
						// 监听新增数据成功后, 刷新当前页面数据
						refreshData: () => {
							this.$refs.udb.loadData({
								clear: true
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
</style>
