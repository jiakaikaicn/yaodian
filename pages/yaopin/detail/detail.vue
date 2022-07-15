<template>
	<view class="uni-container">
		<uni-forms :label-width="100" v-model="formData">
			<uni-forms-item name="name" label="商品名称" required>
				<uni-easyinput v-model="formData.name" :clearable="false" placeholder="请输入用户名" disabled />
			</uni-forms-item>
			<uni-forms-item name="keywords" label="关键字" required>
				<uni-easyinput v-model="formData.keywords" :clearable="false" placeholder="请输入关键字" disabled />
			</uni-forms-item>
			<uni-forms-item name="bieming" label="别名">
				<uni-easyinput v-model="formData.bieming" :clearable="false" placeholder="请输入别名" disabled />
			</uni-forms-item>
			<uni-forms-item name="guige" label="规格" required>
				<uni-easyinput v-model="formData.guige" :clearable="false" placeholder="请输入关键字" disabled />
			</uni-forms-item>
			<uni-forms-item name="jiage" label="商品价格">
				<uni-easyinput v-model="formData.jiage" :clearable="false" placeholder="请输入手机号" disabled />
			</uni-forms-item>
			<uni-forms-item name="huiyuanjia" label="会员价">
				<uni-easyinput v-model="formData.huiyuanjia" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			
			<uni-forms-item name="all_kucun" label="库存数量">
				<uni-easyinput v-model="formData.all_kucun" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			<uni-forms-item name="danwei" label="会员价">
				<uni-easyinput v-model="formData.danwei" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			<uni-forms-item name="huiyuanjia" label="会员价">
				<uni-easyinput v-model="formData.huiyuanjia" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			<uni-forms-item name="pihao" label="会员价">
				<uni-easyinput v-model="formData.pihao" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			<uni-forms-item name="month_xiaoliang" label="月销量">
				<uni-easyinput v-model="formData.month_xiaoliang" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			<uni-forms-item name="all_xiaoliang" label="总销量">
				<uni-easyinput v-model="formData.all_xiaoliang" :clearable="false" placeholder="请输入邮箱" disabled />
			</uni-forms-item>
			
			<uni-forms-item name="changjia" label="厂家">
				<uni-easyinput v-model="formData.changjia" :clearable="false" placeholder="请输入厂家" disabled />
			</uni-forms-item>
			
			
			
			<uni-forms-item name="is_on_sale" label="是否上架销售">
				<switch @change="binddata('is_on_sale', $event.detail.value)" :checked="formData.is_on_sale" disabled />
			</uni-forms-item>
			<uni-forms-item name="add_date" label="添加时间">
				<uni-easyinput v-model="formData.add_date" :clearable="false" placeholder="请输入添加时间" disabled />
			</uni-forms-item>
			<uni-forms-item name="last_modify_date" label="最后修改时间">
				<uni-easyinput v-model="formData.last_modify_date" :clearable="false" placeholder="请输入最后修改时间" disabled />
			</uni-forms-item>
			
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				formData:{
					name:'',
					bieming:'',
					guige:'',
					jiage:'',
					huiyuanjia:'',
					kucun:'',
					danwei:'',
					pihao:'',
					month_xiaoliang:'',
					all_xiaoliang:'',
					changjia:'',
					is_on_sale:'',
					add_date:'',
					last_modify_date:'',
				},
			}
		},
		onLoad(e) {
			console.log(e);
			if (e.id) {
			  this.id = e.id
			  console.log(this.id);
			  this.getDetail( this.id)
			}
		},
		methods: {
			getDetail(_id){
				console.log('开始获取详情');
				let data = {
					_id,
					type:'detail'
				}
				uniCloud.callFunction({
					name:"a-yaopin",
					data:data,success: (res) => {
						console.log(res);
						this.formData = res.result.data[0];	
					},fail: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style>

</style>
