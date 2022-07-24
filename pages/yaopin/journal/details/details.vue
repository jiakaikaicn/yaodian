<template>
	<view class="uni-container">
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" title="日志详情" @clickLeft="backPage" />
		</view>
		<uni-forms :label-width="100" v-model="formData">
			<view class="itemDiv">
				<uni-forms-item name="people" label="操作人" required>
					<uni-easyinput v-model="formData.people" :clearable="false" disabled />
				</uni-forms-item>
				<uni-forms-item name="time" label="操作时间">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.time" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="shuoming" label="操作说明" required>
					<uni-easyinput v-model="formData.shuoming" :clearable="false" disabled />
				</uni-forms-item>
			</view>
		</uni-forms>
		<uni-title type="h1" :title="formData.shuoming"></uni-title>
		<view v-if="formData.shuoming == '新增药品'">
			<uni-forms :label-width="100" v-model="detailsYPData">
				<view class="itemDiv">
					<uni-forms-item name="name" label="药名" required>
						<uni-easyinput v-model="detailsYPData.name" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="bieming" label="别名" required>
						<uni-easyinput v-model="detailsYPData.bieming" :clearable="false" disabled />
					</uni-forms-item>
					
					<uni-forms-item name="shengchandanwei" label="生产单位">
						<uni-easyinput v-model="detailsYPData.shengchandanwei" :clearable="false" disabled />
					</uni-forms-item>
				</view>
				<view class="itemDiv">
					
					<uni-forms-item name="jixing" label="剂型">
						<uni-easyinput v-model="detailsYPData.jixing" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="youxiaoqi" label="有效期">
						<uni-datetime-picker type="date" :clear-icon="false" v-model="detailsYPData.youxiaoqi" disabled/>
					</uni-forms-item>
					<uni-forms-item name="shengchanriqi" label="生产日期">
						<uni-datetime-picker type="date" :clear-icon="false" v-model="detailsYPData.shengchanriqi" disabled/>
					</uni-forms-item>
				</view>
				<view class="itemDiv">
					<uni-forms-item name="guige" label="规格" required>
						<uni-easyinput v-model="detailsYPData.guige" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="shuliang" label="数量">
						<uni-easyinput type="number" v-model="detailsYPData.shuliang" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="danwei" label="单位">
						<uni-easyinput v-model="detailsYPData.danwei" :clearable="false" disabled/>
					</uni-forms-item>
					
				</view>
				<view class="itemDiv">
					<uni-forms-item name="pihao" label="批号">
						<uni-easyinput v-model="detailsYPData.pihao" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="danjia" label="单价">
						<uni-easyinput type="number" v-model="detailsYPData.danjia" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="zognjia" label="总价">
						<uni-easyinput type="number" v-model="detailsYPData.zognjia" :clearable="false" disabled />
					</uni-forms-item>
				</view>
				
			</uni-forms>
		</view>
		<view v-if="formData.shuoming == '添加库存'">
			<uni-forms :label-width="100" v-model="detailsYPData">
				<view class="itemDiv">
					<uni-forms-item name="name" label="药名" required>
						<uni-easyinput v-model="detailsYPData.name" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="bieming" label="原库存" required>
						<uni-easyinput v-model="oldKucunNum" :clearable="false" disabled />
					</uni-forms-item>
					<uni-forms-item name="shengchandanwei" label="新增库存数量">
						<uni-easyinput v-model="formData.addKucunNum" :clearable="false" disabled />
					</uni-forms-item>
				</view>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				formData: {
					people: "",
					time: "",
					operationType: "",
					shuoming: "",
					yaopinID: "",
				},
				detailsYPData:{}
			}
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
		computed:{
			oldKucunNum:function(){
				return this.detailsYPData.shuliang - this.formData.addKucunNum
			}
		},
		onLoad(option) {
			console.log(option.item);
			const item = JSON.parse(decodeURIComponent(option.item));
			this.formData = item;
			this.getDetail(item.yaopinID);
		},
		methods: {
			// 根据id 获取药品的信息
			getDetail(_id) {
				console.log('开始获取详情');
				console.log(_id);
				let data = {
					_id,
					type: 'detail'
				}
				uniCloud.callFunction({
					name: "a-yaopin",
					data,
					success: (res) => {
						console.log(res);
						this.detailsYPData = {
							...res.result.data[0]
						};
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			backPage(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped lang="less">
	/deep/.uni-forms {
		max-width: 1200px !important;

		.itemDiv {
			display: flex;

			.uni-forms-item {
				flex: 1;
				padding: 0 40px 0 0;
			}
		}
	}

	.uni-title__box {
		padding: 15px;
	}
</style>
