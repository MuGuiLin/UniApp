<template>
	<view class="warp">
		<image src="@/static/imgs/phonetics.jpeg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			uni.showToast({
				title: `开发中，敬请期待！`,
				icon: 'none'
			});
		}
	}
</script>

<style lang="scss">
.warp{
	image{
		width: 100vw;
		height: 100vh;
	}
}
</style>
