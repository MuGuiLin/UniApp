<template>
	<uni-group>
		<text class="title">clientDB unicloud-db </text>
		<unicloud-db v-slot:default="{data, loading, error, options}" ref="udb" collection="word">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<text>{{data}}</text>
				<uni-list>
					<uni-list-item v-for="(item,index) in data" :key="item._id" :title="item.name" :note="item.mean"
						@click.native="update(item)" @longpress.native="remove(item._id)">45674846</uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
		<navigator url="/pages/unicloud-db/add?title=add" hover-class="navigator-hover">
			<button type="primary">添 加</button>
		</navigator>
	</uni-group>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(option) {
			console.log('从上个页面传过来的参数据：', option);
			console.log('Page.route：', Page.route);
		},
		methods: {
			update(item) {
				// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
				uni.navigateTo({
					// 关闭当前页面，跳转到应用内的某个页面。
					// uni.redirectTo({
					url: './update?item=' + JSON.stringify(item),
					success: res => {},
					fail: () => {},
					complete: () => {}
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
