<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://caibugui.com/uni-ui'
			};
		}
	}
</script>

<style lang="scss">

</style>
