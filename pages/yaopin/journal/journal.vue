<template>
	<view>
		<view class="uni-header">
			<view class="uni-group hide-on-phone">
				<view class="uni-title">日志</view>
			</view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" placeholder="请输入操作类型" />
				<button class="uni-button" type="default" size="mini" @click="search">{{ $t('common.button.search') }}</button>
			</view>
		</view>
		<view class="uni-container">
			<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="60" align="center">操作说明</uni-th>
					<uni-th width="150" align="center">操作类型</uni-th>
					<uni-th width="100" align="center">操作人</uni-th>
					<uni-th width="100" align="center">操作时间</uni-th>
					<uni-th width="100" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item.shuoming }}</uni-td>
					<uni-td align="center">{{ item.operationType | operationTypeText }}</uni-td>
					<uni-td align="center">{{ item.people}}</uni-td>
					<uni-td align="center">{{ item.time }}</uni-td>
					<uni-td align="center">
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('detail', item)">详情</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box">
				<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
			</view>
		</view>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: '',
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
			};
		},
		filters: {
			operationTypeText: function(value) {
				switch (value) {
					case 'add':
						return '新增';
					case 'addYP':
						return '新增';
					case 'edit':
						return '修改';
					case 'del':
						return '删除';
					default:
						break;
				}
			}
		},
		onLoad() {
			this.selectedIndexs = [];
			this.getData(1);
			// this.ceshi();
		},
		methods: {
			// 分页触发
			change(e) {
				console.log(e);
				this.getData(e.current);
			},
			// 搜索
			search() {
				this.getData(1, this.searchVal);
			},
			// 获取数据
			getData(pageCurrent, value = '') {
				this.pageCurrent = pageCurrent;
				uni.showLoading({
					title: '查询中...',
					mask: true
				});
				let data = {
					page: this.pageCurrent,
					limit: this.pageSize,
					type: 'journalList'
				};
				if (value != '') {
					switch (value){
						case '新增':
							return data.value = 'add';
						case '删除':
							return data.value = 'del';
						case '修改':
							return data.value = 'edit';
						default:
							break;
					}
				}
				uniCloud.callFunction({
					name: 'a-yaopin',
					data: data,
					success: res => {
						console.log(res);
						this.tableData = res.result.listArr.data;
						this.total = res.result.total.total;
						uni.hideLoading();
					},
					fail: err => {
						console.log(err);
					}
				});
			},
			// 点击详情
			gotoPage(name,item){
				uni.navigateTo({
					url: 'details/details?item=' + encodeURIComponent(JSON.stringify(item)),
				});
			},
			ceshi() {
				let data = {
					type: 'ceshiduobiao'
				};
				uniCloud.callFunction({
					name: 'a-yaopin',
					data: data,
					success: res => {
						console.log(res);
						console.log(res);
						console.log(res);
						console.log(res);
						console.log(res);
						console.log(res);
					},
					fail: err => {
						console.log(err);
					}
				});
			},
		}
	};
</script>

<style scoped lang="less">
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}

	/* #endif */
	/deep/.uni-group {
		flex-wrap: nowrap;

		.uni-button {
			margin-left: 0;
			margin-right: 10px !important;
		}
	}
</style>
