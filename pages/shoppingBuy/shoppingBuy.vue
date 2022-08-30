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
		<!-- 提交内容（baseFormData）：{{baseFormData}} <br>选择的内容（selectedInd）：{{selectedInd}} -- {{selectedList}} -->
		<uni-popup ref="popup">
			<view class="uni-container">
				<uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange">
					<uni-tr>
						<uni-th width="40" align="center">ID</uni-th>
						<uni-th width="150" align="center">药名</uni-th>
						<uni-th width="80" align="center">库存</uni-th>
						<uni-th width="80" align="center">单位</uni-th>
						<uni-th width="120" align="center">销售价</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in popupTableData" :key="index">
						<!-- <uni-td align="center">{{ index + 1 }}</uni-td> -->
						<uni-td align="center">{{ item._id }}</uni-td>
						<uni-td align="center">{{ item.name }}</uni-td>
						<uni-td align="center">{{ item.shuliang }}</uni-td>
						<uni-td align="center">{{ item.danwei }}</uni-td>
						<uni-td align="center">{{ item.xiaoshou_jia }}</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
				</view>
				<!-- 按钮 -->
				<view class="uni-group">
					<button class="uni-button" size="mini" type="primary" @click="gotoPage('加入购物车')">加入购物车</button>
					<button class="uni-button" size="mini" type="warn" @click="gotoPage('quxiao')">取消</button>
				</view>
			</view>
		</uni-popup>

		<view class="uni-container">
			<!-- 按钮 -->
			<view class="uni-group">
				<button :disabled="tableData.length > 0 ? false: true" class="uni-button" size="mini" type="primary" @click="gotoPage('结算订单')">创建订单</button>
				<!-- <button class="uni-button" size="mini" type="primary" @click="gotoPage('结算订单')">结算订单</button> -->
				<button class="uni-button" size="mini" type="warn" @click="gotoPage('取消订单')">取消订单</button>
			</view>
			<!-- 订单的内容(tableData):{{tableData}} -->
			<uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange2">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="150" align="center">药名</uni-th>
					<uni-th width="80" align="center">库存</uni-th>
					<uni-th width="80" align="center">购买数量</uni-th>
					<uni-th width="80" align="center">单位</uni-th>
					<uni-th width="120" align="center">销售价</uni-th>
					<uni-th width="80" align="center" style="color: #007408;">实际销售价</uni-th>
					<uni-th width="60" align="center">销售总价</uni-th>
					<uni-th width="300" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
					<uni-td align="center">{{ item.shuliang }}</uni-td>
					<uni-td align="center">{{ item.buy_shuliang }}</uni-td>
					<uni-td align="center">{{ item.danwei }}</uni-td>
					<uni-td align="center">
						<span v-if="item.new_jiage" style="text-decoration:line-through">{{ item.xiaoshou_jia }}</span>
						<span v-else>{{ item.xiaoshou_jia }}</span>
					</uni-td>
					<uni-td align="center" style="color: #007408;">{{ item.new_jiage }}</uni-td>
					<uni-td align="center">
						<span v-if="item.new_jiage">{{(item.new_jiage * item.buy_shuliang) || 0}}</span>
						<span v-else>{{(item.xiaoshou_jia * item.buy_shuliang) || 0}}</span>
					</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('editJiage',item,index)">修改销售价格</button>
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('editShuliang',item,index)">修改销售数量</button>
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
		
		<!-- 添加数量的弹框 -->
		<uni-popup ref="boxNumberBox" type="dialog">
			<uni-popup-dialog ref="inputClose" :beforeClose="true" mode="input" title="销售数量" value="1" placeholder="请输入要核销的盒数" @confirm="dialogInputConfirm" @close="closeFn('boxNumberBox')"></uni-popup-dialog>
		</uni-popup>
		
		<!-- 修改数量的弹框 -->
		<uni-popup ref="editNumberBox" type="dialog">
			<uni-popup-dialog ref="inputClose" :beforeClose="true" mode="input" title="修改数量" :value="boxNumberValue" placeholder="请输入要修改的盒数" @confirm="confirmFn('editNumberConfirm',$event)" @close="closeFn('editNumberBox')"></uni-popup-dialog>
		</uni-popup>

		<uni-popup ref="ercimimaBox" type="dialog">
			<!-- 使用密码的时候，修改了组件库   uni_modules文件下uni-popup文件下component下的uni-popup-dialog文件 -->
			<uni-popup-dialog ref="inputClose" :beforeClose="true" mode="pwd" title="管理员密码" value="" placeholder="请输入管理员密码" @confirm="confirmFn('ercimimaBox',$event)" @close="closeFn('ercimimaBox')"></uni-popup-dialog>
		</uni-popup>

		<uni-popup ref="editJiageBox" type="dialog">
			<uni-popup-dialog ref="inputClose" :beforeClose="true" mode="input" title="请输入要修改的销售价格" value="" placeholder="请输入要修改的销售价格" @confirm="confirmFn('editJiageBox',$event)" @close="closeFn('editJiageBox')"></uni-popup-dialog>
		</uni-popup>

		<!-- 结算方式的选择弹框 -->
		<uni-popup ref="jiesuanPopupBox" type="message" :mask-click="false">
			<uni-grid :column="5" :highlight="true" @change="jiesuanPopupPayChange">
				<uni-grid-item v-for="(item, index) in jiesuanPopupList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="iconfont" :class="item.iconSrc"></view>
						<text class="text">{{item.name}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
			<button @click="close('jiesuanPopupBox')">关闭购物车</button>
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

	</view>
</template>

<script>
	import {timeFn} from "@/common/utils/index.js";
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				searchVal: '',
				popupTableData: [], //弹框中的table数据
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				selectedInd: '', //选择得数据id
				selectedList: [], //选择的数据的内容
				// 修改商品数量
				boxNumberValue:1,//购买数量的默认值
				editNumberBoxInd:'',//选择修改数量的商品下标
				// 点击购物车的时候记录点击的是哪一个
				clickListIndex: '',
				jiesuanPopupList: [
					{
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
					}
				],
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
		computed: {
			...mapState('app', ['appName']),
			...mapState('app', ['routes']),
			...mapState('user', ['userInfo']),
			...mapState('error', ['logs'])
		},
		// 监听现金支付的时候，计算找零
		watch: {
			"baseFormData.shishou": {
				handler(newValue, oldValue) {
					this.baseFormData.zhaoling = Number(newValue) - Number(this.baseFormData.yingshou);
				}
			},
		},
		onLoad() {
			this.selectedInd = '';
			this.selectedList = [];
		},
		methods: {
			gotoPage(name, value, index) {
				this.clickListIndex = index;
				switch (name) {
					case '加入购物车':
						console.log('确定按钮',this.selectedList);
						if (this.selectedList.length == 0) {
							uni.showToast({
								title: "请最少选择一个药品进行结算",
								icon: "error"
							})
						} else if (this.selectedList.length > 1) {
							uni.showToast({
								title: "你只能一次选择一个药品进行结算",
								icon: "error"
							})
						} else {
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
						// 开始创建订单
						this.addDingdanList();
						// this.$refs.jiesuanPopupBox.open();
						break;
					case '取消订单':
						console.log('取消订单');
						this.tableData = [];
						this.baseFormData = {
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
						break;
					case '结算':
						console.log('结算');
						var regPos = /^-?[0-9]/; //判断是否是数字。
						if (this.baseFormData.title == '现金支付') {
							if (regPos.test(this.baseFormData.zhaoling) && regPos.test(this.baseFormData.yingshou)) {
								console.log('是数字');
								if (this.baseFormData.zhaoling < 0) {
									uni.showToast({
										title: '请确认找零是否正确',
										icon: "error"
									})
								} else {
									this.jiesuanFn();
									console.log('正式结算，开始更新数据库')
								}
							} else {
								uni.showToast({
									title: '数据有误，请重新操作一遍',
									icon: "error"
								})
							}
						}
						this.jiesuanFn();
						break;
					case '重新选择':
						console.log('重新选择支付方式');
						this.$refs.zhifuPopup.close()
						break;
					case 'editJiage':
						this.$refs.ercimimaBox.open();
						break;
					case 'editShuliang':
						this.$refs.editNumberBox.open();
						// 获取点击的数据 -- 输入数量的弹框
						this.boxNumberValue = this.tableData[index].buy_shuliang;
						break;
					default:
						break;
				}
			},
			close(name) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				if(name == 'jiesuanPopupBox'){
					// 选择结算方式的弹框取消
					/* 返回到订单列表中 */
					uni.navigateTo({
						url:'/pages/xiaoshou/dingdan/dingdan'
					})
				}
				this.selectedList = [];
				this.selectedInd = '';
				this.$refs.popup.close();
			},
			// 选择药品
			selectionChange(e) {
				this.selectedInd = '';
				this.selectedInd = e.detail.index;
				this.selectedList = [];
				if(e.detail.index.length == '1'){
					this.selectedList.push(this.popupTableData[e.detail.index])
				}else{
					console.log('选择的内容有问题');
				}
			},
			selectionChange2(e) {
				console.log('2222222222222222222222222222222222');
			},
			// 加入购物车后选择单个药品的数量
			dialogInputConfirm(value) {
				console.log("该药品加入的数量", value);
				var regPos = /^[0-9]/; //判断是否是数字。
				if (regPos.test(value)) {
					// 判断与库存的关系
					if (Number(value) > Number(this.selectedList[0].shuliang)) { //大于库存
						uni.showToast({
							title: '库存不够，请联系入库员添加',
							icon: "error"
						})
					} else { //小于库存  可以结账
						if(this.tableData.length > 0){
							let listInd = this.tableData.findIndex(item=>item._id == this.selectedList[0]._id)
							if(listInd != -1){
								console.log('该订单有这个药品');
								this.tableData[listInd].buy_shuliang = Number(this.tableData[listInd].buy_shuliang) + Number(value);
							}else{
								this.$set(this.selectedList[0],'buy_shuliang',value);
								this.tableData = this.tableData.concat(this.selectedList[0]);
							}
							this.closeFn("all")
						}else{
							console.log('第一次');
							this.selectedList.buy_shuliang = value;
							this.$set(this.selectedList[0],'buy_shuliang',value);
							this.tableData = this.tableData.concat(this.selectedList);
							this.closeFn("all")
						}
					}
				} else {
					uni.showToast({
						title: '请输入纯数字',
						icon: "error"
					})
				}
			},
			closeFn(name) {
				console.log('我是关闭', name);
				switch (name) {
					case 'ercimimaBox':
						this.$refs.ercimimaBox.close();
						break;
					case 'boxNumberBox':
						this.$refs.boxNumberBox.close();
						this.selectedInd = '';
						this.selectedList = [];
						break;
					case 'editJiageBox':
						this.$refs.editJiageBox.close();
						break;
					case 'editNumberBox':
						this.$refs.editNumberBox.close();
						break;
					case 'all':
						this.$refs.ercimimaBox.close();
						this.$refs.boxNumberBox.close();
						this.$refs.editJiageBox.close();
						this.$refs.zhifuPopup.close();
						this.$refs.jiesuanPopupBox.close();
						this.$refs.popup.close();
						this.selectedInd = '';
						this.selectedList = [];
						break;
					default:
						break;
				}
			},
			confirmFn(name, value) {
				console.log('我是按钮', name, value);
				switch (name) {
					case 'ercimimaBox':
						if (value == 'admin') {
							this.closeFn('ercimimaBox')
							this.$refs.editJiageBox.open();
						} else {
							uni.showToast({
								title: '管理员密码错误',
								icon: "error"
							});
						}
						break;
					case 'editJiageBox':
						console.log('修改后的价格', value);
						// 获取点击的是那一条数据
						this.$set(this.tableData[this.clickListIndex], "new_jiage", Number(value));
						// 进行新总价的计算
						// this.$set(this.tableData[this.clickListIndex], "xiaoshou_jia", Number(value) * Number(this.tableData[this.clickListIndex].buy_shuliang));
						this.closeFn('editJiageBox');
						break;
					case 'editNumberConfirm':
						// 修改药品数量
						console.log('修改药品数量');
						if(Number(value) > Number(this.tableData[this.clickListIndex].shuliang)){
							console.log('');
							uni.showToast({
								title: '库存不够，请联系入库员添加',
								icon: "error"
							})
						}else{
							this.$set(this.tableData[this.clickListIndex], "buy_shuliang", Number(value));
							this.closeFn('editNumberBox');
						}
						break;
					default:
						break;
				}
			},
			// 开始计算总价，数量   进行订单的结算操作
			countFn() {
				console.log('开始计算订单总价，数量等操作，提供订单的内容');
				console.log(this.tableData);
				let all_jiage = 0,
					all_shuliang = 0,
					dingdanList = [];
				this.tableData.forEach((item) => {
					let obj = {};
					all_jiage += Number(item.new_jiage ? item.new_jiage : item.xiaoshou_jia) * Number(item.buy_shuliang);
					all_shuliang += Number(item.buy_shuliang);
					obj.yaopinID = item._id;
					obj.buy_shuliang = item.buy_shuliang;
					obj.new_jiage = item.new_jiage ? item.new_jiage : item.xiaoshou_jia;
					obj.zongjia = Number(obj.new_jiage) * Number(obj.buy_shuliang);
					dingdanList.push(obj);
				})
				this.baseFormData.yingshou = all_jiage;
				this.baseFormData.buy_shuliang = all_shuliang;
				this.dingdanList = dingdanList;
			},
			
			// 正式结算保存数据
			jiesuanFn() {
				let that = this;
				// 订单结算的时间  和 人员
				this.baseFormData.xiaoshouPeople = this.userInfo.username;
				this.baseFormData.xiaoshouTime = timeFn();
				let data = {
					type: 'addDingdan',
					...this.baseFormData,
					zhonglei: this.tableData.length,
					list: [
						...this.tableData
					],
					isFinish: 1, //0：未完成  1：已完成
				};
				if (this.baseFormData.dingdanID == '') {
					data.type = 'addDingdan';
					console.log('我是新建订单，创建订单的数据：', data);
				} else {
					data.type = 'upDateDingdan';
					console.log('我是更新订单，更新订单的数据：', data);
				}
				console.log(data);
				uniCloud.callFunction({
					name: 'a-dingdan',
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
									that.baseFormData = {
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
									// that.dingdanXiangqing(xiaoshouID);
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

			// 开始创建订单
			addDingdanList() {
				console.log('开始创建订单');
				uni.showLoading({
					title: '订单创建中...',
					mask: true
				});
				let that = this;
				// 订单结算的时间  和 人员
				this.baseFormData.addPeople = this.userInfo.username;
				this.baseFormData.addTime = timeFn();
				let data = {
					...this.baseFormData,
					zhonglei: this.tableData.length,
					list: this.tableData,
					isFinish: 0, //0：未完成  1：已完成
				};
				// 判断是更新还是新建订单   如有订单id  就是更新，没有订单id 就是新建订单
				if (this.baseFormData.dingdanID == '') {
					data.type = 'addDingdan';
					console.log('我是新建订单，创建订单的数据：', data);
				} else {
					data.type = 'upDateDingdan';
					console.log('我是更新订单，更新订单的数据：', data);
				}
				uniCloud.callFunction({
					name: 'a-dingdan',
					data,
					success: (res) => {
						console.log(res);
						// 创建成功之后 返回订单id ---后续有可能需要
						if (this.baseFormData.dingdanID == '') this.baseFormData.dingdanID = res.result.addDingdan.id;
						// that.addDingdanXQ(this.baseFormData.dingdanID);
						uni.showToast({
							title: '订单创建成功',
							icon: "success"
						})
						setTimeout(function() {
							/* 返回到订单列表中 */
							uni.navigateTo({
								url:'/pages/xiaoshou/dingdan/dingdan'
							})
						}, 1000);
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			// 订单详情操作  （数据库直接能存数组，不用这个方法新建订单详情表了）
			// 弃用
			addDingdanXQ(dingdanID) {
				let lists = this.tableData;
				for (var i = 0; i < lists.length; i++) {
					lists[i].dingdanID = this.baseFormData.dingdanID; //添加订单id
				}
				let data = {
					type: 'addDingdanXQ',
					list: lists
				}
				uniCloud.callFunction({
					name: 'a-dingdan',
					data,
					success: (res) => {},
					fail: (err) => {
						console.log(err);
					}
				})
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
			// 按名称搜索药品
			searchFn() {
				let data = {value: this.searchVal,type: 'getListByID'}
				uniCloud.callFunction({
					name: 'a-xiaoshou',
					data: data,
					success: (res) => {
						this.$refs.popup.open();
						this.popupTableData = res.result.data;
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			// 获取时间
			timeFn(time = +new Date()){
				var date = new Date(time + 8 * 3600 * 1000); 
				let tim = date.toJSON().substr(0, 19).replace('T', ' ');
				return tim;
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

	/deep/.uni-popup__wrapper {
		background: #fff !important;
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
