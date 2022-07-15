<template>
	<view>
		<view class="uni-header">
			<view class="uni-group hide-on-phone">
				<view class="uni-title">{{ $t('demo.table.title') }}</view>
			</view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" placeholder="请输入商品名称" />
				<button class="uni-button" type="default" size="mini" @click="search">{{ $t('common.button.search') }}</button>
				<button class="uni-button" type="primary" size="mini" @click="gotoPage('add')">{{ $t('common.button.add') }}</button>
				<!-- <button class="uni-button" type="warn" size="mini" @click="delTable">{{$t('common.button.batchDelete')}}</button> -->
			</view>
		</view>
		<view class="uni-container">
			<!-- <uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange"> -->
			<uni-table :loading="loading" border stripe :emptyText="$t('common.empty')">
				<uni-tr>
					<uni-th width="40" align="center">ID</uni-th>
					<uni-th width="150" align="center">商品名称</uni-th>
					<!-- <uni-th width="100" align="center">别名</uni-th> -->
					<uni-th width="100" align="center">种类</uni-th>
					<uni-th width="60" align="center">规格</uni-th>
					<uni-th width="60" align="center">价格</uni-th>
					<uni-th width="80" align="center">库存</uni-th>
					<uni-th width="60" align="center">总价</uni-th>
					<uni-th width="60" align="center">会员价</uni-th>
					<uni-th width="60" align="center">生产单位</uni-th>
					<uni-th width="80" align="center">批号</uni-th>
					<uni-th width="80" align="center">剂型</uni-th>
					<uni-th width="120" align="center">有效期</uni-th>
                    <uni-th width="120" align="center">生产日期</uni-th>
					<uni-th width="100" align="center">厂家</uni-th>
					<!-- <uni-th width="100" align="center">是否上架</uni-th> -->
					<uni-th width="120" align="center">添加时间</uni-th>
					<uni-th width="300" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ index + 1 }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
					<!-- <uni-td align="center">{{ item.bieming }}</uni-td> -->
					<uni-td align="center">{{ item.zhonglei }}</uni-td>
					<uni-td align="center">{{ item.guige }}</uni-td>
					<uni-td align="center">{{ item.jiage }}</uni-td>
					<uni-td align="center">{{ item.kucun }}</uni-td>
					<uni-td align="center">{{ (item.jiage * item.kucun) || 0}}</uni-td>
					<uni-td align="center">{{ item.huiyuanjia }}</uni-td>
					<uni-td align="center">{{ item.danwei }}</uni-td>
					<uni-td align="center">{{ item.pihao }}</uni-td>
					<uni-td align="center">{{ item.jixing }}</uni-td>
					<uni-td width="100" align="center">{{item.youxiaoqi}}</uni-td>
                    <uni-td width="100" align="center">{{item.shengchanriqi}}</uni-td>
					<uni-td align="center">{{ item.changjia }}</uni-td>
					<!-- <uni-td width="100" align="center">{{ item.is_on_sale }}</uni-td> -->
					<uni-td width="100" align="center">{{item.add_date}}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="warn" @click="addKucunFn(item)">添加库存</button>
							<button class="uni-button" size="mini" type="primary" @click="gotoPage('edit', item)">{{ $t('common.button.edit') }}</button>
							<button class="uni-button" size="mini" type="warn" @click="gotoPage('del', item)">{{ $t('common.button.delete') }}</button>
							<button class="uni-button" size="mini" type="warn" @click="gotoPage('detail', item)">详情</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog
				ref="inputClose"
				mode="input"
				title="新增库存"
				value=""
				placeholder="请输入要添加的库存数量(新增数量)"
				@confirm="dialogInputConfirm"
			></uni-popup-dialog>
		</uni-popup>
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
			clickID: '', //点击的id
			clickAddKucunObj: {} //记录点击的添加库存的数量
		};
	},
	onLoad() {
		this.selectedIndexs = [];
		this.getData(1);
	},
	methods: {
		close() {
			this.$refs.popup.close();
		},
		// 添加库存
		addKucunFn(item) {
			this.clickAddKucunObj = item;
			this.$refs.popup.open();
		},
		dialogInputConfirm(value) {
			let obj = this.clickAddKucunObj;
			let { _id, kucun } = obj;
			kucun = Number(kucun) + Number(value);
			uniCloud.callFunction({
				name: 'a-yaopin',
				data: {
					_id,
					kucun,
					type: 'addKucun'
				},
				success: res => {
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
		// 多选处理
		selectedItems() {
			return this.selectedIndexs.map(i => this.tableData[i]);
		},
		// 多选
		selectionChange(e) {
			console.log(e.detail.index);
			this.selectedIndexs = e.detail.index;
		},
		//批量删除
		delTable() {
			console.log(this.selectedItems());
		},
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
		gotoPage(name, item) {
			console.log(name);
			console.log(item);
			switch (name) {
				case 'detail':
					uni.navigateTo({
						url: './detail/detail?id=' + item._id
					});
					break;
				case 'add':
					uni.navigateTo({
						url: './add/add'
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
				case 'edit':
					uni.navigateTo({
						url: './edit/edit?item=' + encodeURIComponent(JSON.stringify(item))
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
				name: 'a-yaopin',
				data: {
					id,
					type: 'del'
				},
				success: res => {
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
