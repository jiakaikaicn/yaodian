<template>
	<view class="uni-container">
		<uni-forms ref="form" :label-width="100" v-model="formData" :rules="rules" validateTrigger="bind" @submit="submit">
			<view class="itemDiv">
				<uni-forms-item name="name" label="药名" required>
					<uni-easyinput v-model="formData.name" :clearable="false" placeholder="请输入药名" />
				</uni-forms-item>
				<uni-forms-item name="bieming" label="别名" required>
					<uni-easyinput v-model="formData.bieming" :clearable="false" placeholder="请输入别名" />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="guige" label="规格">
					<uni-easyinput v-model="formData.guige" :clearable="false" placeholder="请输入规格" />
				</uni-forms-item>
				<uni-forms-item name="shengchandanwei" label="生产单位">
					<uni-easyinput v-model="formData.shengchandanwei" :clearable="false" placeholder="请输入生产单位" />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="jixing" label="剂型">
					<uni-easyinput v-model="formData.jixing" :clearable="false" placeholder="请输入剂型" />
				</uni-forms-item>
				<uni-forms-item name="pihao" label="批号">
					<uni-easyinput v-model="formData.pihao" :clearable="false" placeholder="请输入批号" />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="youxiaoqi" label="有效期">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.youxiaoqi"/>
					<!-- <uni-easyinput v-model="formData.youxiaoqi" :clearable="false" placeholder="请输入有效期" /> -->
				</uni-forms-item>
				<uni-forms-item name="shengchanriqi" label="生产日期">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.shengchanriqi"/>
					<!-- <uni-easyinput v-model="formData.shengchanriqi" :clearable="false" placeholder="请输入生产日期" /> -->
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="shuliang" label="数量" required>
					<uni-easyinput type="number" v-model="formData.shuliang" :clearable="false" placeholder="请输入数量" />
				</uni-forms-item>
				<uni-forms-item name="danwei" label="单位">
					<uni-easyinput v-model="formData.danwei" :clearable="false" placeholder="请输入单位" />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="jinhuo_jia" label="进货价" required>
					<uni-easyinput type="number" v-model="formData.jinhuo_jia" :clearable="false" placeholder="请输入单价" />
				</uni-forms-item>
				<uni-forms-item name="xiaoshou_jia" label="售价" required>
					<uni-easyinput type="number" v-model="formData.xiaoshou_jia" :clearable="false" placeholder="请输入进货价" />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="zongjia" label="总价">
					<uni-easyinput type="number" v-model="formData.zongjia" :clearable="false" placeholder="请输入总价" />
				</uni-forms-item>
				<uni-forms-item>
					<!-- <uni-easyinput type="number" v-model="formData.huiyuan_jia" :clearable="false" placeholder="请输入单价" /> -->
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="addTime" label="添加时间">
					<!-- <uni-easyinput v-model="formData.add_date" :clearable="false" placeholder="请输入添加时间" /> -->
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.addTime"/>
				</uni-forms-item>
				<uni-forms-item name="addPeople" label="操作人">
					<uni-easyinput disabled v-model="userInfo.username" :clearable="false"/>
				</uni-forms-item>
			</view>
			<view class="uni-button-group">
				<button style="width: 100px;" type="primary" class="uni-button" @click="submitForm">{{ $t('common.button.submit') }}</button>
				<navigator open-type="navigateBack" style="margin-left: 15px;">
					<button style="width: 100px;" class="uni-button">{{ $t('common.button.back') }}</button>
				</navigator>
			</view>
		</uni-forms>
	</view>
</template>

<script>
import { validator } from '@/js_sdk/validator/uni-id-users.js';
	import {parseTime,addYaoPinJournal} from "@/common/utils/index.js";
function getValidator(fields) {
	let result = {};
	for (let key in validator) {
		if (fields.includes(key)) {
			result[key] = validator[key];
		}
	}
	return result;
}
import {
	mapMutations,
	mapState
} from 'vuex'
export default {
	data() {
		return {
			formData: {
				name:'',
				bieming:'',
				guige:'',
				shengchandanwei:'',
				jixing:'',
				pihao:'',
				youxiaoqi:'',
				shengchanriqi:'',
				shuliang:'',
				jinhuo_jia:'',
				xiaoshou_jia:'',
				huiyuan_jia:'',
				danwei:'',
				zongjia:'',
				addTime:'',
				addPeople:'',
			},
			rules: {
				...getValidator(['name',"bieming","shuliang","jinhuo_jia","xiaoshou_jia"]),
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入名称',
						}
					]
				},
				bieming: {
					rules: [{
						required: true,
						errorMessage: '请输入别名',
					}]
				},
				shuliang: {
					rules: [{
						required: true,
						errorMessage: '请输入数量',
					}]
				},
				jinhuo_jia:{
					rules: [{
						required: true,
						errorMessage: '请输入进货价格',
					}]
				},
				xiaoshou_jia: {
					rules: [{
						required: true,
						errorMessage: '请输入销售价格',
					}]
				}
			},
			roles: []
		};
	},
	mounted(){
	},
	computed: {
		...mapState('app', ['appName']),
		...mapState('app', ['routes']),
		...mapState('user', ['userInfo']),
		...mapState('error', ['logs'])
	},
	onLoad() {
		let data = new Date();
		this.formData.addTime = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
	},
	methods: {
		/**
		 * 触发表单提交
		 */
		submitForm() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
				this.formData.addPeople = this.userInfo.username;
				this.formData.zongjia = this.formData.shuliang * this.formData.jinhuo_jia || 0;
				let that = this;
				uni.showModal({
					title: '提示',
					content: '是否确定提交',
					success: function(res) {
						if (res.confirm) {
							that.$refs.form.submit();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
			
		},
		submit(event) {
			const { value, errors } = event.detail;
			// 表单校验失败页面会提示报错 ，要停止表单提交逻辑
			if (errors) {
				return;
			}
			uni.showLoading({
				title: '提交中...',
				mask: true
			});
			let data = {
				...this.formData,
				type: 'add'
			};
			uniCloud.callFunction({
				name: 'a-yaopin',
				data: data,
				success: res => {
					console.log(res);
					let that = res;
					uni.showModal({
						title: '提示',
						content: '提交成功',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								let yaopinID = that.result.id;
								addYaoPinJournal('addYP','新增药品',yaopinID);//添加操作日志
								uni.navigateTo({
									url: '../list'
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});

					uni.hideLoading();
				},
				fail: err => {
					console.log(err);
					uni.hideLoading();
				}
			});
		}
	}
};
</script>

<style scoped lang="less">
	/deep/.uni-forms{
		max-width: 1200px !important;
		.itemDiv{
			display: flex;
			.uni-forms-item{
				flex: 1;
				padding: 0 40px 0 0;
			}
		}
	}
</style>
