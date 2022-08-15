'use strict';

const { type } = require("os");

const db = uniCloud.database();
const yaopinCollection = db.collection("a-yaopin");
const xiaoshouCollection = db.collection("a-xiaoshou");
const dingdanCollection = db.collection("a-dingdan");


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {
		name,
		bieming,
		guige,
		shengchandanwei,
		jixing,
		pihao,
		youxiaoqi,
		shengchanriqi,
		shuliang,
		danjia,
		danwei,
		zognjia,
		addTime,
		addPeople,
		_id,
		// 订单的参数
		// shishou,//实收
		// zhonglei,//种类
		// buy_shuliang,//共多少件
		// shuoming,//说明
		// title,//支付方式
		// yingshou,//应收  -- 总价
		// zhaoling,//找零
		// zhifufangshi,//支付方式
		// isFinish,//订单是否完成（缴费） isFinish:0,//0：未完成  1：已完成
	} = event;
	console.log(event)
	// 根据 别名查询 销售的药品
	switch (event.type){
		case 'getListByID':
			let getListByIDList;
			getListByIDList = await yaopinCollection.where({
				"bieming":event.value
			}).get();
			return getListByIDList
		// case 'addDingdan':
		// 	// 创建订单
		// 	let addDingdanList = await xiaoshouCollection.add({
		// 		shishou,//实收
		// 		buy_shuliang,//共多少件
		// 		zhonglei,//几种药
		// 		shuoming,//说明
		// 		title,//支付方式
		// 		yingshou,//应收  -- 总价
		// 		zhaoling,//找零
		// 		zhifufangshi,//支付方式
		// 		isFinish
		// 	});
		// 	return addDingdanList
		// case 'dingdanXQ':
		// 	//订单详情
		// 	let lists = event.list;
		// 	let dingdanXQList = await dingdanCollection.add(lists);
		// 	return dingdanXQList
		default:
			break;
	}
	
};
