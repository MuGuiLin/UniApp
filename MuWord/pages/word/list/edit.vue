<template>
	<uni-group>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-position="top">
			<uni-forms-item label="类型" name="type" required>
				<!-- <uni-easyinput type="text" v-model="formData.type" placeholder="请选择类型！" prefixIcon="gear" /> -->
				<picker class="picker" @change="bindChange" :value="typeData.index" :range="typeData.data"
					placeholder="请选择类型！" range-key="name">
					<text>{{typeData.data[typeData.index].name}}</text>
				</picker>
			</uni-forms-item>
			<uni-forms-item label="单词" name="name" required>
				<uni-easyinput v-model="formData.name" placeholder="请输入单词!" prefixIcon="info" suffixIcon="search" />
			</uni-forms-item>
			<uni-forms-item label="识读" name="read">
				<uni-easyinput v-model="formData.read" placeholder="请输入识读!" prefixIcon="sound"
					placeholderStyle="color: green" />
			</uni-forms-item>
			<uni-forms-item label="词意" name="mean" required>
				<uni-easyinput type="textarea" v-model="formData.mean" placeholder="请输入词意!" autoHeight clearSize="15" />
			</uni-forms-item>
			<uni-forms-item label="例句" name="desc">
				<uni-easyinput type="textarea" v-model="formData.desc" placeholder="请输入例句!" />
			</uni-forms-item>
			<uni-forms-item label="例图" name="image">
				<uni-file-picker v-model="formData.image" fileMediatype="image" mode="grid" @select="select" :limit="1"
					@progress="progress" @success="success" @fail="fail" />
			</uni-forms-item>
			<uni-forms-item>
				<button type="primary" @click="submit">提交</button>
			</uni-forms-item>
		</uni-forms>
	</uni-group>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				id: '',
				typeData: {
					index: 0,
					data: [{
						name: "全部",
						value: "all"
					}]
				},
				formData: {
					type: "全部",
					name: "",
					read: "",
					mean: "",
					desc: "",
					image: []
				},
				rules: {
					// type: {
					// 	rules: [{
					// 		// 校验 type 不能为空
					// 		required: true,
					// 		errorMessage: '请选择类型！',
					// 	}]
					// },
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
		onLoad({
			id
		}) {
			if (id) {
				this.id = id;
				db.collection('word').where({
					_id: id
				}).get({
					getOne: true
				}).then(({
					result
				}) => {
					this.formData = result.data;
					if (this.formData.type) {
						setTimeout(() => {
							this.typeData.index = this.typeData.data.findIndex(o => o.name == result.data
								.type) > 0 ? this.typeData.data.findIndex(o => o.name == result.data
								.type) : 0;
						}, 300)
						console.log(this.typeData.index);
					}
				}).catch(err => {
					console.error(err);
				});
			}
			db.collection('type').get().then(({
				result
			}) => {
				this.typeData.data = [...this.typeData.data, ...result.data];
			});
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			bindChange: function({
				detail
			}) {
				const index = detail.value || 0;
				this.typeData.index = index;
				this.formData.type = this.typeData.data[index]?.name;
			},
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
				// console.log('选择文件：', e);
			},

			// 获取上传进度
			progress(e) {
				// console.log('上传进度：', e);
			},

			// 上传成功
			success(e) {
				this.formData.image = e.tempFiles;
				console.log('上传成功', e);
			},

			// 上传失败
			fail(e) {
				// console.log('上传失败：', e);
			},

			back() {
				this.getOpenerEventChannel().emit('refreshData');
				setTimeout(() => uni.navigateBack(), 2000);
			},

			// 提交数据
			submit() {
				this.$refs.form.validate().then(data => {
					if (this.id || data._id) {
						data.hasOwnProperty('_id') && delete data._id;
						db.collection('word').doc(this.id).update(data).then(res => {
							uni.showToast({
								icon: 'success',
								title: 'OK，更新成功！',
								duration: 2000
							});
							this.back();
						});
					} else {
						db.collection('word').add(data).then(res => {
							uni.showToast({
								icon: 'success',
								title: 'OK，添加成功！',
								duration: 2000
							});
							this.back();
						});
					}
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
		}
	}
</script>

<style lang="scss">
	.picker {
		display: flex;
		padding-left: 10px;
		min-height: 36px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		border: 1px solid #c8c7cc;
		border-radius: 4px;
	}
</style>
