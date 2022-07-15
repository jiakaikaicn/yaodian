<template>
	<view class="uni-container">
		<uni-forms ref="form" :label-width="100" v-model="formData" :rules="rules" validateTrigger="bind" @submit="submit">
			<uni-forms-item name="name" label="商品名称" required><uni-easyinput v-model="formData.name" :clearable="false" placeholder="请输入用户名" /></uni-forms-item>
			<uni-forms-item name="keywords" label="关键字" required><uni-easyinput v-model="formData.keywords" :clearable="false" placeholder="请输入关键字" /></uni-forms-item>
			<uni-forms-item name="guige" label="规格" required><uni-easyinput v-model="formData.guige" :clearable="false" placeholder="请输入关键字" /></uni-forms-item>
			<uni-forms-item name="jiage" label="商品价格"><uni-easyinput v-model="formData.jiage" :clearable="false" placeholder="请输入手机号" /></uni-forms-item>
			<uni-forms-item name="huiyuanjia" label="会员价"><uni-easyinput v-model="formData.huiyuanjia" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>

			<uni-forms-item name="all_kucun" label="库存数量"><uni-easyinput v-model="formData.all_kucun" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="danwei" label="会员价"><uni-easyinput v-model="formData.danwei" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="huiyuanjia" label="会员价"><uni-easyinput v-model="formData.huiyuanjia" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="pihao" label="会员价"><uni-easyinput v-model="formData.pihao" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="month_xiaoliang" label="月销量"><uni-easyinput v-model="formData.month_xiaoliang" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="all_xiaoliang" label="总销量"><uni-easyinput v-model="formData.all_xiaoliang" :clearable="false" placeholder="请输入邮箱" /></uni-forms-item>
			<uni-forms-item name="bieming" label="别名"><uni-easyinput v-model="formData.bieming" :clearable="false" placeholder="请输入别名" /></uni-forms-item>
			<uni-forms-item name="changjia" label="厂家"><uni-easyinput v-model="formData.changjia" :clearable="false" placeholder="请输入厂家" /></uni-forms-item>

			<uni-forms-item name="is_on_sale" label="是否上架销售"><switch @change="binddata('is_on_sale', $event.detail.value)" :checked="formData.is_on_sale" /></uni-forms-item>
			<uni-forms-item name="add_date" label="添加时间"><uni-easyinput v-model="formData.add_date" :clearable="false" placeholder="请输入添加时间" /></uni-forms-item>
			<uni-forms-item name="last_modify_date" label="最后修改时间">
				<uni-easyinput v-model="formData.last_modify_date" :clearable="false" placeholder="请输入最后修改时间" />
			</uni-forms-item>

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
function getValidator(fields) {
	let result = {};
	for (let key in validator) {
		if (fields.includes(key)) {
			result[key] = validator[key];
		}
	}
	return result;
}
export default {
	data() {
		return {
			formData: {
				name: '',
				bieming: '',
				guige: '',
				jiage: '',
				huiyuanjia: '',
				kucun: '',
				danwei: '',
				pihao: '',
				month_xiaoliang: '',
				all_xiaoliang: '',
				changjia: '',
				is_on_sale: '',
				add_date: '',
				last_modify_date: ''
			},
			rules: {
				...getValidator(['name', 'jiage']),
				status: {
					rules: [
						{
							format: 'bool'
						}
					]
				}
			},
			roles: []
		};
	},
	onLoad() {},
	methods: {
		/**
		 * 触发表单提交
		 */
		submitForm() {
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
			// 是否启用功能的数据类型转换， 0 正常， 1 禁用
			if (typeof value.status === 'boolean') {
				value.status = Number(!value.status);
			}
			console.log('tianjia');
			let data = {
				...this.formData,
				type: 'add'
			};
			console.log(data);
			// return;
			uniCloud.callFunction({
				name: 'a-yaopin',
				data: data,
				success: res => {
					console.log(res);
					uni.showModal({
						title: '提示',
						content: '提交成功',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
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

<style></style>
