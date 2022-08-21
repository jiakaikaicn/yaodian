<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" right-icon="cart" title="订单详情" @clickLeft="back"/>
		</view>
		<view class="uni-group" v-show="isFinish">
			<button class="uni-button" size="mini" type="primary" @click="gotoPage('结算订单')">结算订单</button>
			<button class="uni-button" size="mini" type="warn" @click="gotoPage('取消订单')">取消订单</button>
		</view>
		<view class="uni-container">
			<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="160" align="center">药品名称</uni-th>
					<uni-th width="60" align="center">核销数量</uni-th>
					<uni-th width="110" align="center">销售价（实际销售价格）</uni-th>
					<uni-th width="100" align="center">销售总价</uni-th>
					<uni-th width="50" align="center">是否完成</uni-th>
					<uni-th width="100" align="center">订单创建人</uni-th>
					<uni-th width="100" align="center">订单创建时间</uni-th>
					<uni-th width="100" align="center">订单销售人</uni-th>
					<uni-th width="100" align="center">订单销售时间</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
					<uni-td align="center">{{ item.buy_shuliang }}</uni-td>
					<uni-td align="center">{{ item.xiaoshou_jia }}</uni-td>
					<uni-td align="center">{{ item.xiaoshou_jia * item.buy_shuliang}}</uni-td>
					<uni-td align="center">{{ item.isFinish == '0' ? '未完成' : '已完成' }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouPeople }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouTime }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouPeople }}</uni-td>
					<uni-td align="center">{{ item.xiaoshouTime }}</uni-td>
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
			dingdanID:'',
			isFinish:false,//订单是否完成   0:未完成  1:已完成
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
	computed: {
		...mapState('app', ['appName']),
		...mapState('app', ['routes']),
		...mapState('user', ['userInfo']),
		...mapState('error', ['logs'])
	},
	onLoad(option) {
		const item = JSON.parse(decodeURIComponent(option.item));
		this.dingdanID = item._id;
		this.isFinish = item.isFinish == 0 ? true : false;
		this.getData();
	},
	methods: {
		getData() {
			uni.showLoading({
				title: '查询中...',
				mask: true
			});
			let data = {
				page: this.pageCurrent,
				limit: this.pageSize,
				dingdanID:this.dingdanID,
				type: 'dingdanXQ'
			};
			uniCloud.callFunction({
				name: 'a-dingdan',
				data: data,
				success: res => {
					console.log(res);
					this.tableData = res.result.listArr.data[0].list;
					this.total = res.result.total.total;
					uni.hideLoading();
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		back(){
			console.log('返回');
			uni.navigateTo({
				url:'/pages/xiaoshou/dingdan/dingdan'
			})
		},
		gotoPage(name){
			console.log(name);
			switch (name){
				case '结算订单':
					break;
				case '取消订单':
					break;
				default:
					break;
			}
		}
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
