<template>
	<uni-forms ref="form" :modelValue="formData" :rules="rules" label-position="top">
		<uni-group>
			<uni-easyinput type="text" v-model="formData.type" placeholder="类型" prefixIcon="gear" />
			<uni-forms-item label="单词" name="name">
				<uni-easyinput v-model="formData.name" placeholder="单词" prefixIcon="info" suffixIcon="search" />
			</uni-forms-item>
			<uni-easyinput v-model="formData.read" placeholder="识读" prefixIcon="sound"
				placeholderStyle="color: green" />
			<uni-forms-item label="词意" name="mean">
				<uni-easyinput v-model="formData.mean" placeholder="词意" type="textarea" autoHeight clearSize="15" />
			</uni-forms-item>
			<uni-easyinput disabled placeholder="禁用" prefixIcon="minus-filled" />
			<uni-forms-item label="邮箱" name="email">
				<uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱"
					@input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
			<uni-easyinput type="digit" laceholder="数字" prefixIcon="paperclip" />
			<uni-easyinput type="password" placeholder="密码" prefixIcon="locked" />
		</uni-group>
		<uni-group>
			<uni-forms-item label="图片上传" name="image">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@progress="progress" @success="success" @fail="fail" />
			</uni-forms-item>
		</uni-group>
		<uni-group>
			<button type="primary" @click="submit">提 交</button>
		</uni-group>
	</uni-forms>

</template>

<script>
	export default {
		data() {
			return {
				formData: {
					type: "",
					name: "",
					read: "",
					mean: "",
					email: ""
				},
				imageValue: [],
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								// 校验 name 不能为空
								required: true,
								errorMessage: '请输入单词！',
							},
							{ // 对name字段进行长度验证
								minLength: 1,
								maxLength: 30,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符！',
							}
						]
					},
					// 对mean字段进行必填验证
					mean: {
						rules: [{
							required: true,
							errorMessage: '请输入中文意思！',
						}]
					}
				}


			};
		},
		methods: {
			/**
			 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
			 * @param {String} email 字段名称
			 * @param {String} value 表单域的值
			 * 通过 input 事件设置表单指定 email 的值
			 */
			binddata(email, value) {
				this.$refs.form.setValue(email, value);
			},

			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},

			// 提交数据
			submit() {
				this.$refs.form.validate().then(data => {
					console.log('表单数据信息：', data);
					delete data.email;
					const db = uniCloud.database();
					db.collection('word').add(data).then(res => {
						console.log(res);
						uni.showToast({
							title: 'OK，添加成功！',
							duration: 2000,
						});
					});
				}).catch(err => {
					console.log('表单错误信息：', err);
				})

			},
		}
	}
</script>

<style lang="scss">

</style>
