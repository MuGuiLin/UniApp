<template>
	<uni-group>
	<uni-forms :modelValue="data" label-position="top">
		<uni-forms-item label="类型" name="type">
			<uni-easyinput v-model="data.type" placeholder="请输入类型!" />
		</uni-forms-item>
		<uni-forms-item label="单词" name="name">
			<uni-easyinput v-model="data.name" placeholder="请输入单词!" />
		</uni-forms-item>
		<uni-forms-item label="识读" name="read">
			<uni-easyinput v-model="data.read" placeholder="请输入识读!" />
		</uni-forms-item>
		<uni-forms-item label="词意" name="mean">
			<uni-easyinput v-model="data.mean" placeholder="请输入词意!" />
		</uni-forms-item>
		<uni-forms-item>
			<button type="primary" @click="submit">确认修改</button>
		</uni-forms-item>
	</uni-forms>
	</uni-group>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					_id: "",
					type: "",
					name: "",
					read: "",
					mean: ""
				}
			};
		},
		onLoad({
			item
		}) {
			this.data = JSON.parse(item);
		},
		methods: {
			submit() {
				const db = uniCloud.database();
				const data = {
					...this.data
				};
				delete data._id;
				db.collection('word').doc(this.data._id).update(data).then(res => {
					console.log(res);
					if (res.success) {
						uni.showToast({
							title: 'OK，修改成功！',
							duration: 2000,
							complete: (e) => {
								setTimeout(_ => {
									uni.navigateBack({
										delta: 2
									});
								}, 2000);
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
