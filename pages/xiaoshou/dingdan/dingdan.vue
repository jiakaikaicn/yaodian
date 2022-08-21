<template>
	<view>
		<view class="uni-header">
			<view class="uni-group hide-on-phone">
				<view class="uni-title">订单</view>
			</view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" placeholder="请输入订单id" />
				<button class="uni-button" type="default" size="mini" @click="search">{{ $t('common.button.search') }}</button>
			</view>
		</view>
		
		<view class="uni-container">
			<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th align="center">订单号</uni-th>
					<uni-th width="150" align="center">订单总价</uni-th>
					<uni-th width="150" align="center">订单数量</uni-th>
					<uni-th width="150" align="center">订单创建人</uni-th>
					<uni-th width="230" align="center">订单创建时间</uni-th>
					<uni-th width="100" align="center">是否完成</uni-th>
					<uni-th width="100" align="center">订单销售人</uni-th>
					<uni-th width="230" align="center">订单销售时间</uni-th>
					<uni-th width="300" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item._id }}</uni-td>
					<uni-td align="center">{{ item.yingshou }}</uni-td>
					<uni-td align="center">{{ item.buy_shuliang }}</uni-td>
					<uni-td align="center">{{ item.addPeople }}</uni-td>
					<uni-td align="center">{{ item.addTime}}</uni-td>
					<uni-td align="center">{{ item.isFinish == '0' ? '未完成' : '已完成' }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouPeople }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouTime }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button v-if="item.isFinish == '0'" class="uni-button" size="mini" type="warn" @click="gotoPage('del', item)">{{ $t('common.button.delete') }}</button>
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('detail', item)">详情</button>
							<button v-if="item.isFinish == '0'" class="uni-button" size="mini" type="primary" @click="gotoPage('jiesuan', item)">结算</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</view>
</template>

<script>
	import {parseTime,addYaoPinJournal} from "@/common/utils/index.js";
	import {
		mapMutations,
		mapState
	} from 'vuex'
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
			clickID: '', //点击的id
			clickAddKucunObj: {} //记录点击的添加库存的数量
		};
	},
	computed: {
		...mapState('app', ['appName']),
		...mapState('app', ['routes']),
		...mapState('user', ['userInfo']),
		...mapState('error', ['logs'])
	},
	onLoad() {
		this.selectedIndexs = [];
		this.getData(1);
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
				type: 'list'
			};
			if (value != '') {
				data.value = value;
			}
			uniCloud.callFunction({
				name: 'a-dingdan',
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
		// 点击操作
		gotoPage(name, item) {
			console.log(name);
			console.log(item);
			switch (name) {
				case 'detail':
					uni.navigateTo({
						url:'./detail?item='+ encodeURIComponent(JSON.stringify(item))
					});
					break;
				case 'del':
					uni.showModal({
						title: '提示',
						content: '确定要删除该条记录吗？',
						success: res => {
							if (res.confirm) {
								console.log('确定删除');
								this.delFn(item._id);
								return;
							} else {
								console.log('取消删除');
							}
						}
					});
					break;
			}
		},
		// 删除
		delFn(id) {
			uni.showLoading({
				title: '删除中...',
				mask: true
			});
			uniCloud.callFunction({
				name: 'a-dingdan',
				data: {
					id,
					type: 'del'
				},
				success: res => {
					let yaopinID = id;
					uni.showToast({
						title: '删除成功'
					});
					uni.hideLoading();
					this.getData(1);
				},
				fail: err => {
					console.log(err);
					uni.showToast({
						title: '删除失败'
					});
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
		margin-left:0;
		margin-right: 10px !important;
	}
}
</style>
