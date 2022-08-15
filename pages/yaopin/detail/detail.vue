<template>
	<view class="uni-container">
		<uni-forms :label-width="100" v-model="formData">
			<view class="itemDiv">
				<uni-forms-item name="name" label="药名" required>
					<uni-easyinput v-model="formData.name" :clearable="false" disabled />
				</uni-forms-item>
				<uni-forms-item name="bieming" label="别名" required>
					<uni-easyinput v-model="formData.bieming" :clearable="false" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="guige" label="规格" required>
					<uni-easyinput v-model="formData.guige" :clearable="false" disabled />
				</uni-forms-item>
				<uni-forms-item name="shengchandanwei" label="生产单位">
					<uni-easyinput v-model="formData.shengchandanwei" :clearable="false" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="jixing" label="剂型">
					<uni-easyinput v-model="formData.jixing" :clearable="false" disabled />
				</uni-forms-item>
				<uni-forms-item name="pihao" label="批号">
					<uni-easyinput v-model="formData.pihao" :clearable="false" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="youxiaoqi" label="有效期">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.youxiaoqi" disabled />
				</uni-forms-item>
				<uni-forms-item name="shengchanriqi" label="生产日期">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.shengchanriqi" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="shuliang" label="数量">
					<uni-easyinput type="number" v-model="formData.shuliang" :clearable="false" disabled />
				</uni-forms-item>
				<uni-forms-item name="danwei" label="单位">
					<uni-easyinput v-model="formData.danwei" :clearable="false" disabled />
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="jinhuo_jia" label="进货价" required>
					<uni-easyinput type="number" v-model="formData.jinhuo_jia" :clearable="false" disabled/>
				</uni-forms-item>
				<uni-forms-item name="xiaoshou_jia" label="售价" required>
					<uni-easyinput type="number" v-model="formData.xiaoshou_jia" :clearable="false" disabled/>
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="zongjia" label="总价">
					<uni-easyinput type="number" v-model="formData.jinhuo_jia * formData.shuliang || 0" :clearable="false" disabled/>
				</uni-forms-item>
				<uni-forms-item>
					<!-- <uni-easyinput type="number" v-model="formData.huiyuan_jia" :clearable="false" placeholder="请输入单价" /> -->
				</uni-forms-item>
			</view>
			<view class="itemDiv">
				<uni-forms-item name="addTime" label="添加时间">
					<uni-datetime-picker type="date" :clear-icon="false" v-model="formData.addTime"disabled />
				</uni-forms-item>
				<uni-forms-item name="addPeople" label="入库员">
					<uni-easyinput disabled v-model="formData.addPeople" :clearable="false" disabled />
				</uni-forms-item>
			</view>
			
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
					shengchandanwei:'',
					jixing:'',
					pihao:'',
					youxiaoqi:'',
					shengchanriqi:'',
					shuliang:'',
					danjia:'',
					danwei:'',
					zognjia:'',
					addTime:'',
					addPeople:'',
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


