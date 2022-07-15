'use strict';

const { type } = require("os");

const db = uniCloud.database();
const xiaoshouCollection = db.collection("a-yaopin");

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {
		name,
		bieming,
		guige,
		jiage,
		huiyuanjia,
		kucun,
		danwei,
		pihao,
		month_xiaoliang,
		all_xiaoliang,
		changjia,
		is_on_sale,
		add_date,
		_id
	} = event;
	console.log(event)
	// 根据 别名查询 销售的药品
	switch (event.type){
		case 'getListByID':
			let getListByIDList;
			getListByIDList = await xiaoshouCollection.where({
				"bieming":event.value
			}).get();
			return getListByIDList
		default:
			break;
	}
	
};
