<template>
	<view>
		<view class="box-bg">
			<!-- right-icon="cart" -->
			<uni-nav-bar shadow left-icon="left"  title="订单详情" @clickLeft="back"/>
		</view>
		<view class="uni-group" v-show="dingdanObj.isFinish == '0'">
			<button class="uni-button" size="mini" type="primary" @click="gotoPage('结算订单')">结算订单</button>
			<button class="uni-button" size="mini" type="warn" @click="gotoPage('取消订单')">取消订单</button>
		</view>
		<view class="uni-container">
			<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="150" align="center">药品名称</uni-th>
					<uni-th width="60" align="center">核销数量</uni-th>
					<uni-th width="110" align="center">销售价（实际销售价格）</uni-th>
					<uni-th width="80" align="center">销售总价</uni-th>
					<!-- <uni-th width="50" align="center">是否完成</uni-th> -->
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
					<!-- <uni-td align="center">{{ dingdanObj.isFinish == '0' ? '未完成' : '已完成' }}</uni-td> -->
					<uni-td align="center">{{ dingdanObj.addPeople }}</uni-td>
					<uni-td align="center">{{ dingdanObj.addTime }}</uni-td>
					<uni-td align="center">{{ dingdanObj.xiaoshouPeople }}</uni-td>
					<uni-td align="center">{{ dingdanObj.xiaoshouTime }}</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
		
		<!-- 结算方式弹框 -->
		<uni-popup ref="jiesuanPopupBox" type="message" :mask-click="false">
			<uni-grid :column="5" :highlight="true" @change="jiesuanPopupPayChange">
				<uni-grid-item v-for="(item, index) in jiesuanPopupList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="iconfont" :class="item.iconSrc"></view>
						<text class="text">{{item.name}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
			<button @click="gotoPage('关闭购物车')">关闭购物车</button>
		</uni-popup>
		
		<!-- 结算弹框 -->
		<uni-popup ref="zhifuPopup" type="center">
			<view class="zhifuPopupDiv">
				<view class="title">{{baseFormData.zhifufangshi}}</view>
				<view class="formDataDiv">
					<uni-forms ref="baseForm" :modelValue="baseFormData" :label-width="80">
						<uni-forms-item label="方式" required>
							<uni-easyinput v-model="baseFormData.zhifufangshi" disabled />
						</uni-forms-item>
						<uni-forms-item label="应收" required>
							<uni-easyinput v-model="baseFormData.yingshou" disabled />
						</uni-forms-item>
						<view v-show="baseFormData.title == '现金支付'">
							<uni-forms-item label="实收" required>
								<uni-easyinput type="number" v-model="baseFormData.shishou" />
							</uni-forms-item>
							<uni-forms-item label="找零">
								<uni-easyinput v-model="baseFormData.zhaoling" disabled />
							</uni-forms-item>
						</view>
						<uni-forms-item label="说明">
							<uni-easyinput v-model="baseFormData.shuoming" />
						</uni-forms-item>
					</uni-forms>
					<view class="uni-group">
						<button class="uni-button" size="mini" type="primary" @click="gotoPage('结算')">结算</button>
						<button class="uni-button" size="mini" type="warn" @click="gotoPage('重新选择')">重新选择支付方式</button>
					</view>
				</view>
			</view>
		</uni-popup>
		
		
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</view>
</template>

<script>
	import {timeFn,delDingdanFn,addYaoPinJournal,dingdanFn} from "@/common/utils/index.js";
	import ConstData from "@/common/utils/const.js";
	import {
		mapMutations,
		mapState
	} from 'vuex'
	let that = this;
export default {
	data() {
		return {
			// 订单的的内容
			dingdanObj:{
				dingdanID:'',
				isFinish:'0',//订单是否完成   0:未完成  1:已完成
			},
			// 订单的详情
			tableData: [],
			// 每页数据量
			pageSize: 10,
			// 当前页
			pageCurrent: 1,
			// 数据总量
			total: 0,
			loading: false,
			// 结算方式列表
			jiesuanPopupList: [],
			// 结算订单的数据
			baseFormData: {
				zhifufangshi: '',
				yingshou: 0,
				shishou: 0,
				zhaoling: 0,
				shuoming: '',
				// 数量
				buy_shuliang: 0,
				new_jiage: "",
				addPeople: "",
				addTime: "",
				xiaoshouPeople: "", //订单销售人
				xiaoshouTime: "", //订单销售时间
				dingdanID: "", //订单的id
			}
		};
	},
	// 监听现金支付的时候，计算找零
	watch: {
		"baseFormData.shishou": {
			handler(newValue, oldValue) {
				this.baseFormData.zhaoling = Number(newValue) - Number(this.baseFormData.yingshou);
			}
		},
	},
	computed: {
		...mapState('app', ['appName']),
		...mapState('app', ['routes']),
		...mapState('user', ['userInfo']),
		...mapState('error', ['logs'])
	},
	onLoad(option) {
		this.jiesuanPopupList = ConstData.ConstData.jiesuanPopupList;
		const item = JSON.parse(decodeURIComponent(option.item));
		console.log(item);
		// 订单内容
		this.dingdanObj = item;
		this.dingdanObj.dingdanID = item._id;
		this.tableData = item.list;
		this.total = item.list.length;
		this.baseFormData = item;
		// this.getData();
	},
	methods: {
		
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
					this.$refs.jiesuanPopupBox.open();
					break;
				case '取消订单':
					this.quxiaoFn();
					break;
				case '关闭购物车':
					this.$refs.jiesuanPopupBox.close();
					break;
				case '结算':
					console.log('开始正在的结算');
					this.jiesuanFn();
					this.$refs.jiesuanPopupBox.close();
					break;
				case '重新选择':
					console.log('重新选择支付方式');
					this.$refs.zhifuPopup.close()
					break;
				default:
					break;
			}
		},
		close(name) {
			this.$refs.popup.close();
		},
		// 点击结算方式
		jiesuanPopupPayChange(value) {
			let index, name;
			index = value.detail.index;
			name = this.jiesuanPopupList[index].name;
			this.baseFormData.title = name;
			this.baseFormData.zhifufangshi = name;
			this.$refs.zhifuPopup.open();
		},
		// 正式的结算
		jiesuanFn(){
			var regPos = /^-?[0-9]/; //判断是否是数字。
			let data = this.baseFormData;
			data.isFinish = 1;//0：未完成  1：已完成
			data.xiaoshouPeople = this.userInfo.username;
			data.xiaoshouTime = timeFn();
			data.type = 'upDateDingdan';
			
			if (this.baseFormData.title == '现金支付') {
				if (regPos.test(this.baseFormData.zhaoling) && regPos.test(this.baseFormData.yingshou)) {
					console.log('是数字');
					if (this.baseFormData.zhaoling < 0) {
						uni.showToast({
							title: '请确认找零是否正确',
							icon: "error"
						})
					} else {
						console.log('开始结算');
						data.shishou = Number(data.shishou);
						console.log(data);
						dingdanFn(data);
						console.log('正式结算，开始更新数据库');
					}
				} else {
					uni.showToast({
						title: '数据有误，请重新操作一遍',
						icon: "error"
					})
				}
			}
			// 其它方式结算
			dingdanFn(data);
		},
		// 取消订单操作
		quxiaoFn(){
			uni.showModal({
				title: '提示',
				content: '确定要删除该条记录吗？',
				success: res => {
					if (res.confirm) {
						console.log('确定删除');
						delDingdanFn(this.dingdanObj.dingdanID);
						addYaoPinJournal('delDingdan','删除订单');//添加操作日志
						this.$refs.jiesuanPopupBox.close();
						uni.navigateTo({
							url:'/pages/xiaoshou/dingdan/dingdan'
						})
					} else {
						console.log('取消删除');
					}
				}
			});
		},
		// getData() {
		// 	uni.showLoading({
		// 		title: '查询中...',
		// 		mask: true
		// 	});
		// 	let data = {
		// 		page: this.pageCurrent,
		// 		limit: this.pageSize,
		// 		dingdanID:this.dingdanObj.dingdanID,
		// 		type: 'dingdanXQ'
		// 	};
		// 	uniCloud.callFunction({
		// 		name: 'a-dingdan',
		// 		data: data,
		// 		success: res => {
		// 			console.log(res);
		// 			this.tableData = res.result.listArr.data[0].list;
		// 			this.total = res.result.total.total;
		// 			uni.hideLoading();
		// 		},
		// 		fail: err => {
		// 			console.log(err);
		// 		}
		// 	});
		// },
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
/deep/.uni-table-th{
	padding:12px 0;
}

// 选择支付方式的弹框
.grid-item-box {
	flex: 1;
	// position: relative;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}
.grid-item-box-row {
	flex: 1;
	// position: relative;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}

.grid-dot {
	position: absolute;
	top: 5px;
	right: 15px;
}
.text {
	font-size: 28px;
	margin-top: 25px;
	color: #5479fd;
}

/deep/.iconfont {
	font-size: 80px !important;
	color: #128b1a !important;
	width: 80px;
	height: 80px;
}

// 支付方式的样式
.zhifuPopupDiv {
	padding: 20px 30px;
	background: #fff;
	.title {
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
		font-weight: 600;
		font-size: 22px;
	}

	.formDataDiv {
		padding: 0 20px;
	}
}

</style>
