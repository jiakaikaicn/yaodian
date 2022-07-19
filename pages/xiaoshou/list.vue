<template>
	<view>
		<view class="uni-header">
			<view class="uni-group hide-on-phone">
				<view class="uni-title">销售</view>
			</view>
		</view>
		<view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="searchFn" placeholder="请输入商品名称" />
				<button class="uni-button" type="default" size="mini" @click="searchFn">{{ $t('common.button.search') }}</button>
			</view>
		</view>
		<!-- 选择框 -->
		<uni-popup ref="popup">
			<view class="uni-container">
				<uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange">
					<uni-tr>
						<uni-th width="40" align="center">ID</uni-th>
						<uni-th width="150" align="center">药名</uni-th>
						<uni-th width="60" align="center">规格</uni-th>
						<uni-th width="100" align="center">生产单位</uni-th>
						<uni-th width="100" align="center">有效期</uni-th>
						<uni-th width="100" align="center">生产日期</uni-th>
						<uni-th width="80" align="center">库存</uni-th>
						<uni-th width="80" align="center">单位</uni-th>
						<uni-th width="120" align="center">单价</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in popupTableData" :key="index">
						<uni-td align="center">{{ index + 1 }}</uni-td>
						<uni-td align="center">{{ item.name }}</uni-td>
						<uni-td align="center">{{ item.guige }}</uni-td>
						<uni-td align="center">{{ item.shengchandanwei }}</uni-td>
						<uni-td align="center">{{ item.youxiaoqi}}</uni-td>
						<uni-td align="center">{{ item.shengchanriqi }}</uni-td>
						<uni-td align="center">{{ item.shuliang }}</uni-td>
						<uni-td align="center">{{ item.danwei }}</uni-td>
						<uni-td align="center">{{ item.danjia }}</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
				</view>
				<!-- 按钮 -->
				<view class="uni-group">
					<button class="uni-button" size="mini" type="primary" @click="gotoPage('queding')">确定</button>
					<button class="uni-button" size="mini" type="warn" @click="gotoPage('quxiao')">取消</button>
				</view>
			</view>
		</uni-popup>

		<view class="uni-container">
			<!-- 按钮 -->
			<view class="uni-group">
				<button :disabled="tableData.length > 0 ? false: true" class="uni-button" size="mini" type="primary" @click="gotoPage('结算订单')">结算订单</button>
				<button class="uni-button" size="mini" type="warn" @click="gotoPage('取消订单')">取消订单</button>
			</view>
			<uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="150" align="center">药名</uni-th>
					<uni-th width="60" align="center">规格</uni-th>
					<uni-th width="100" align="center">生产单位</uni-th>
					<uni-th width="100" align="center">有效期</uni-th>
					<uni-th width="100" align="center">生产日期</uni-th>
					<uni-th width="80" align="center">库存</uni-th>
					<uni-th width="80" align="center">购买数量</uni-th>
					<uni-th width="80" align="center">单位</uni-th>
					<uni-th width="120" align="center">单价</uni-th>
					<uni-th width="80" align="center">折扣价</uni-th>
					<uni-th width="60" align="center">总价</uni-th>
					<uni-th width="300" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
					<uni-td align="center">{{ item.guige }}</uni-td>
					<uni-td align="center">{{ item.shengchandanwei }}</uni-td>
					<uni-td align="center">{{ item.youxiaoqi}}</uni-td>
					<uni-td align="center">{{ item.shengchanriqi }}</uni-td>
					<uni-td align="center">{{ item.shuliang }}</uni-td>
					<uni-td align="center">{{ item.buy_shuliang }}</uni-td>
					<uni-td align="center">{{ item.danwei }}</uni-td>
					<uni-td align="center">{{ item.danjia }}</uni-td>
					<uni-td align="center">{{ item.new_jiage }}</uni-td>
					<uni-td align="center">{{ (item.danjia * item.buy_shuliang) || 0}}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('edit',item,index)">修改价格</button>
							<button class="uni-button" size="mini" type="warn" @click="gotoPage('del', item,index)">{{ $t('common.button.delete') }}</button>
							<button class="uni-button" size="mini" type="warn" @click="gotoPage('detail', item)">详情</button>
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
		
		<uni-popup ref="boxNumberBox" type="dialog">
			<uni-popup-dialog
				ref="inputClose"
				:beforeClose="true"
				mode="input"
				title="数量"
				value="1"
				placeholder="请输入要核销的盒数"
				@confirm="dialogInputConfirm"
				@close="closeFn('boxNumberBox')"
			></uni-popup-dialog>
		</uni-popup>
		
		<uni-popup ref="ercimimaBox" type="dialog">
			<!-- 使用密码的时候，修改了组件库   uni_modules文件下uni-popup文件下component下的uni-popup-dialog文件 -->
			<uni-popup-dialog
				ref="inputClose"
				:beforeClose="true"
				mode="pwd"
				title="管理员密码"
				value=""
				placeholder="请输入管理员密码"
				@confirm="confirmFn('ercimimaBox',$event)"
				@close="closeFn('ercimimaBox')"
			></uni-popup-dialog>
		</uni-popup>
		
		<uni-popup ref="editJiageBox" type="dialog">
			<uni-popup-dialog
				ref="inputClose"
				:beforeClose="true"
				mode="input"
				title="请输入要修改的价格"
				value=""
				placeholder="请输入要价格"
				@confirm="confirmFn('editJiageBox',$event)"
				@close="closeFn('editJiageBox')"
			></uni-popup-dialog>
		</uni-popup>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="jiesuanPopupBox" type="message">
				<uni-grid :column="5" :highlight="true" @change="jiesuanPopupPayChange">
					<uni-grid-item v-for="(item, index) in jiesuanPopupList" :index="index" :key="index">
						<view class="grid-item-box" style="background-color: #fff;">
							<view class="iconfont" :class="item.iconSrc"></view>
							<text class="text">{{item.name}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-popup>
		</view>
		
		<!-- 现金收入 -->
		<uni-popup ref="zhifuPopup" type="center">
			<view class="zhifuPopupDiv">
				<view class="title">{{baseFormData.zhifufangshi}}</view>
				<view class="formDataDiv">
					<uni-forms ref="baseForm" :modelValue="baseFormData" :label-width="80">
						<uni-forms-item label="方式" required>
							<uni-easyinput v-model="baseFormData.zhifufangshi" disabled/>
						</uni-forms-item>
						<uni-forms-item label="应收" required>
							<uni-easyinput v-model="baseFormData.yingshou" disabled/>
						</uni-forms-item>
						<view v-show="baseFormData.title == '现金支付'">
							<uni-forms-item label="实收" required>
								<uni-easyinput type="number" v-model="baseFormData.shishou" />
							</uni-forms-item>
							<uni-forms-item label="找零">
								<uni-easyinput v-model="baseFormData.zhaoling" disabled/>
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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: 'ffjyhkl',
				popupTableData: [], //弹框中的table数据
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				selectedIndexs: [], //选择得数据
				changList:[],//选择的数据的内容
				// 点击购物车的时候记录点击的是哪一个
				clickListIndex:'',
				jiesuanPopupList: [{
					name: '现金支付',
					id: '1',
					iconSrc: 'icon-zhifu',
				}, {
					name: '医保卡支付',
					id: '2',
					iconSrc: 'icon-shuaqiazhifu_huaban',
				}, {
					name: '微信支付',
					id: '3',
					iconSrc: 'icon-weixinzhifu',
				}, {
					name: '支付宝支付',
					id: '4',
					iconSrc: 'icon-zhifubao',
				}, {
					name: '其它方式',
					id: '5',
					iconSrc: 'icon-zhifu1',
				}],
				baseFormData:{
					zhifufangshi:'',
					yingshou:0,
					shishou:0,
					zhaoling:0,
					shuoming:'',
					// 数量
					buy_shuliang:'',
				},
				dingdanList:[],//订单的详情
			};
		},
		// 监听现金支付的时候，计算找零
		watch:{
			"baseFormData.shishou":{
				handler(newValue, oldValue) {
					this.baseFormData.zhaoling = Number(newValue) - Number(this.baseFormData.yingshou);
				}
			},
		},
		onLoad() {
			this.selectedIndexs = []
		},
		methods: {
			gotoPage(name, value, index) {
				this.clickListIndex = index;
				switch (name) {
					case 'queding':
						console.log('确定按钮');
						if (this.selectedIndexs.length == 0) {
							uni.showToast({
								title: "请最少选择一个药品进行结算",
								icon: "error"
							})
						} else if(this.selectedIndexs.length > 1){
							uni.showToast({
								title: "你只能一次选择一个药品进行结算",
								icon: "error"
							})
						} else{
							// this.close();
							// 弹出输入盒数
							this.$refs.boxNumberBox.open();
						}
						break;
					case 'quxiao':
						console.log('取消按钮');
						this.close();
						break;
					case 'del':
						console.log('删除');
						this.tableData.splice(index, 1);
						break;
					case '结算订单':
						console.log('结算订单');
						// 进行选择的计算
						this.countFn();
						this.$refs.jiesuanPopupBox.open();
						break;
					case '取消订单':
						console.log('取消订单');
						this.tableData = [];
						break;
					case '结算':
						console.log('结算');
						var regPos = /^-?[0-9]/; //判断是否是数字。
						if(this.baseFormData.title == '现金支付'){
							if(regPos.test(this.baseFormData.zhaoling) && regPos.test(this.baseFormData.yingshou)){
								console.log('是数字');
								if(this.baseFormData.zhaoling < 0){
									uni.showToast({
										title:'请确认找零是否正确',
										icon:"error"
									})
								}else{
									this.jiesuanFn();
									console.log('正式结算')
								}
							}else{
								uni.showToast({
									title:'数据有误，请重新操作一遍',
									icon:"error"
								})
							}
						}
						this.jiesuanFn();
						break;
					case '重新选择':
						console.log('重新选择支付方式');
						this.$refs.zhifuPopup.close()
						break;
					case 'edit':
						this.$refs.ercimimaBox.open();
					default:
						break;
				}
			},
			close() {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				this.selectedIndexs = [];
				this.$refs.popup.close();
			},
			searchFn() {
				let data = {
					value: this.searchVal,
					type: 'getListByID'
				}
				console.log(data);
				uniCloud.callFunction({
					name: 'a-xiaoshou',
					data: data,
					success: (res) => {
						console.log(res);
						this.$refs.popup.open();
						this.popupTableData = res.result.data;
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			// 多选处理
			selectedItems() {
				return this.selectedIndexs.map(i => this.popupTableData[i])
			},
			// 多选
			selectionChange(e) {
				this.selectedIndexs = e.detail.index;
				this.changList = this.popupTableData[0];
				
			},
			// 点击结算方式
			jiesuanPopupPayChange(value){
				let index,name;
				index = value.detail.index;
				name = this.jiesuanPopupList[index].name;
				this.baseFormData.title = name;
				this.baseFormData.zhifufangshi = name;
				this.$refs.zhifuPopup.open();
			},
			dialogInputConfirm(value) {
				var regPos = /^[0-9]/; //判断是否是数字。
				if(regPos.test(value)){
					// 判断与库存的关系
					if(value > this.changList.shuliang){//大于库存
						uni.showToast({
							title:'库存不够，请联系入库员添加',
							icon:"error"
						})
					}else{//小于库存  可以结账
						value = value;
						this.$refs.boxNumberBox.close();
						this.$refs.popup.close();
						this.tableData = this.tableData.concat(this.popupTableData[this.selectedIndexs]);
						this.$set(this.tableData[this.selectedIndexs], "buy_shuliang",Number(value))
					}
				}else{
					uni.showToast({
						title:'请输入纯数字',
						icon:"error"
					})
				}
			},
			closeFn(name){
				console.log('我是关闭',name);
				switch (name){
					case 'ercimimaBox':
						this.$refs.ercimimaBox.close();
						break;
					case 'boxNumberBox':
						this.$refs.boxNumberBox.close();
						break;
					case 'editJiageBox':
						this.$refs.editJiageBox.close();
						break;
					case 'all':
						this.$refs.ercimimaBox.close();
						this.$refs.boxNumberBox.close();
						this.$refs.editJiageBox.close();
						this.$refs.zhifuPopup.close();
						this.$refs.jiesuanPopupBox.close();
					default:
						break;
				}
			},
			confirmFn(name,value){
				console.log('我是确认',name,value);
				switch (name){
					case 'ercimimaBox':
						if(value == 'admin'){
							this.closeFn('ercimimaBox')
							this.$refs.editJiageBox.open();
						}else{
							uni.showToast({
								title:'管理员密码错误',
								icon:"error"
							});
						}
						break;
					case 'editJiageBox':
						console.log('修改后的价格',value);
						// 获取点击的是那一条数据
						this.$set(this.tableData[this.clickListIndex], "new_jiage",Number(value))
						this.closeFn('editJiageBox')
						break;
					default:
						break;
				}
			},
			countFn(){
				console.log('开始计算总价，数量');
				console.log(this.tableData);
				let all_jiage = 0,all_shuliang = 0,dingdanList=[];
				this.tableData.forEach((item)=>{
					//如果有折扣价
					let obj={};
					all_jiage += Number(item.new_jiage ? item.new_jiage : item.danjia) * Number(item.buy_shuliang);
					all_shuliang += Number(item.buy_shuliang);
					obj.yaopinID = item._id;
					obj.buy_shuliang = item.buy_shuliang;
					obj.new_jiage = item.new_jiage ? item.new_jiage : item.danjia;
					obj.zongjia = Number(obj.new_jiage) * Number(obj.buy_shuliang);
					dingdanList.push(obj);
				})
				this.baseFormData.yingshou = all_jiage;
				this.baseFormData.buy_shuliang = all_shuliang;
				this.dingdanList = dingdanList;
			},
			// 结算保存数据
			jiesuanFn(){
				let that = this;
				let data = {
					type:'addDingdan',
					...this.baseFormData,
					zhonglei:this.tableData.length,
					lsit:[
						...this.tableData
					]
				};
				console.log(data);
				uniCloud.callFunction({
					name:'a-xiaoshou',
					data,
					success: (res) => {
						console.log(res);
						let re = res;
						uni.showModal({
							title: '提示',
							content: '结算成功',
							showCancel: false,
							success: function(res) {
								let xiaoshouID = re.result.id;
								if (res.confirm) {
									that.closeFn('all');
									// that.tableData = [];
									// that.popupTableData = [];
									that.dingdanXiangqing(xiaoshouID);
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			// 订单详情操作
			dingdanXiangqing(xiaoshouID){
				let lists = this.dingdanList;
				for (var i = 0; i < lists.length; i++) {
					lists[i].dingdanID = xiaoshouID;//添加订单id
				}
				let data = {
					type:'dingdanXQ',
					list:lists
				}
				uniCloud.callFunction({
					name:'a-xiaoshou',
					data,
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					}
				})
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
			margin-left: 0;
			margin-right: 10px !important;
		}
	}

	/deep/.uni-popup__wrapper {
		background: #fff !important;
	}

	.text {
		font-size: 28px;
		margin-top: 25px;
		color: #5479fd;
	}
	/deep/.iconfont{
		font-size:80px !important;
		color:#128b1a !important;
		width:80px;
		height:80px;
	}
	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

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

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}
	/* #endif */
	
	// 支付方式的样式
	.zhifuPopupDiv{
		padding:20px 30px;
		.title{
			padding: 10px 0;
			border-bottom: 1px solid #ccc;
			margin-bottom: 10px;
			font-weight: 600;
			font-size:22px;
		}
		.formDataDiv{
			padding:0 20px;
		}
	}
</style>
