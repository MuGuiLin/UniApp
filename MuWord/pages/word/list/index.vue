<template>
	<uni-group>
		<unicloud-db v-slot:default="{data, loading, hasMore, error, options}" ref="udb" collection="word" @load="onqueryload"
			@error="onqueryerror">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<!-- <text>{{data}}</text> -->
				<uni-list>
					<uni-list-item showArrow v-for="(item,index) in data" :key="item._id" :title="item.name"
						:note="item.mean" @click.native="update(item._id)" @longpress.native="remove(item._id)">
					</uni-list-item>
				</uni-list>
			</view>
			<uni-load-more :status="loading ? 'loading' : (hasMore ? 'more' : 'noMore')"></uni-load-more>
		</unicloud-db>
		<uni-fab ref="fab" horizontal="right" vertical="bottom" :pop-menu="false" @fabClick="update" />
	</uni-group>
</template>

<script>
	export default {
		data() {
			return {
				options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
				action: '',
				where: {} // 类型为对象或字符串
			};
		},
		onLoad(option) {
			console.log('从上个页面传过来的参数据：', option);
			console.log('Page.route：', Page.route);
		},
		onPullDownRefresh() { //下拉刷新
			this.$refs.udb.loadData({
				clear: true //可选参数，是否清空数据
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() { //滚动到底翻页
			this.$refs.udb.loadMore()
		},
		methods: {
			onqueryload(data, ended) {
				// 可在此处预处理数据，然后再渲染界面
			},
			onqueryerror(e) {
				// 加载数据失败
			},
			update(id) {
				// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
				uni.navigateTo({
					// 关闭当前页面，跳转到应用内的某个页面。
					// uni.redirectTo({
					url: `./edit${id ? '?id='+id : ''}`,
					events: {
						// 监听新增数据成功后, 刷新当前页面数据
						refreshData: () => {
							this.$refs.udb.loadData({
								clear: true
							})
						}
					},
					success: res => {},
					fail: err => {},
					complete: _ => {}
				});
			},
			remove(id) {
				this.$refs.udb.remove(id);
			}
		}
	}
</script>

<style lang="scss">
	.title {
		display: block;
		line-height: 100rpx;
		font-size: 32rpx;
		text-align: center;
	}
</style>
