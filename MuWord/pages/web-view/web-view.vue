<template>
	<view class="web">
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://uniapp.dcloud.io'
			}
		},
		onLoad(option) {
			console.log('从上个页面传过来的参数据：', option);
			if (option?.src) {
				this.src = option.src;
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.web {}
</style>
