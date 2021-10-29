<template>
	<view class="container">
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" collection="type" field="name,value" :where="queryWhere" :getone="true" :manual="true">
			<view v-if="error">
				<text>{{error.message}}</text>
			</view>
			<view v-else-if="loading">
				<uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
			</view>
			<view v-else-if="data">
				<uni-title type="h1" align="center" color="#027fff" :title="data.name"></uni-title>
				<uni-list>
					<uni-list-item title="name:" :note="data.name"></uni-list-item>
					<uni-list-item title="value" :note="data.value"></uni-list-item>
					<uni-list-item title="_id" :note="data._id"></uni-list-item>
					<uni-list-item title="create_date" :note="data.create_date"></uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
		<view class="btns">
			<button type="primary" @click="handleUpdate">修改</button>
			<button type="warn" class="btn-delete" @click="handleDelete">删除</button>
		</view>
	</view>
</template>

<script>
	// 由schema2code生成，包含校验规则和enum静态数据
	import {
		enumConverter
	} from '../../../js_sdk/validator/word/type.js';

	export default {
		data() {
			return {
				queryWhere: '',
				loadMore: {
					contentdown: '',
					contentrefresh: '',
					contentnomore: ''
				},
				options: {
					// 将scheme enum 属性静态数据中的value转成text
					...enumConverter
				}
			}
		},
		onLoad(e) {
			this._id = e.id
		},
		onReady() {
			if (this._id) {
				this.queryWhere = '_id=="' + this._id + '"'
			}
		},
		methods: {
			handleUpdate() {
				// 打开修改页面
				uni.navigateTo({
					url: './edit?id=' + this._id,
					events: {
						// 监听修改页面成功修改数据后, 刷新当前页面数据
						refreshData: () => {
							this.$refs.udb.loadData({
								clear: true
							})
						}
					}
				})
			},
			handleDelete() {
				this.$refs.udb.remove(this._id, {
					success: (res) => {
						// 删除数据成功后跳转到list页面
						uni.navigateTo({
							url: './list'
						})
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 10px;
	}

	.btns {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
	}

	.btns button {
		flex: 1;
	}

	.btn-delete {
		margin-left: 10px;
	}
</style>
