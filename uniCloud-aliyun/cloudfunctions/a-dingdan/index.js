'use strict';

const { type } = require("os");

const db = uniCloud.database();
const yaopinCollection = db.collection("a-yaopin");
const xiaoshouCollection = db.collection("a-xiaoshou");
const dingdanCollection = db.collection("a-dingdan");//订单表
const dingdanDetailsCollection = db.collection("a-dingdanDetails");//订单详情表


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {
		// 订单的参数
		shishou,//实收
		zhonglei,//种类
		buy_shuliang,//共多少件
		shuoming,//说明
		title,//支付方式
		yingshou,//应收  -- 总价
		zhaoling,//找零
		zhifufangshi,//支付方式
		isFinish,//订单是否完成（缴费） isFinish:0,//0：未完成  1：已完成
		addTime,//添加时间
		addPeople,//创建订单人，
		xiaoshouPeople,//订单销售人
		xiaoshouTime,//订单销售时间
		list,//药品的id List
		dingdanID,//订单id
		// 其它
		page,
		limit,
		value
	} = event, skip = (page - 1) * limit, listArr, total;
	console.log(event);
	let resArr; //列表返回结果   {列表arr,分页arr}
	// 根据 别名查询 销售的药品
	switch (event.type){
		case 'list':
			listArr = await dingdanCollection.skip(skip).limit(limit).orderBy("addTime", "desc").get();
			total = await dingdanCollection.count();
			resArr = {
				listArr,
				total
			};
			return resArr
		case 'addDingdan':
			// 创建订单
			let addDingdan = await dingdanCollection.add({
				shishou,//实收
				buy_shuliang,//共多少件
				zhonglei,//几种药
				shuoming,//说明
				title,//支付方式
				yingshou,//应收  -- 总价
				zhaoling,//找零
				zhifufangshi,//支付方式
				isFinish,//订单是否完成
				addPeople,//创建订单人
				addTime,//订单创建时间
				xiaoshouPeople,//订单销售人
				xiaoshouTime,//订单销售时间
				list,//订单的药品内容  是数组的方式
			});
			dingdanID = addDingdan.id;
			// 创建订单详情
			await dingdanDetailsCollection.add({dingdanID,list});
			resArr ={
				addDingdan,
			}
			return resArr
		case "del":
			let res = await dingdanCollection.doc(event.id).remove();
			// 删除订单详情的数据
			await dingdanDetailsCollection.where({dingdanID:event.id}).remove();
			return res
		case 'upDateDingdan':
			let upDateDingdanList = await dingdanCollection.doc(dingdanID).set({
				shishou,//实收
				buy_shuliang,//共多少件
				zhonglei,//几种药
				shuoming,//说明
				title,//支付方式
				yingshou,//应收  -- 总价
				zhaoling,//找零
				zhifufangshi,//支付方式
				isFinish,//订单是否完成
				addPeople,//创建订单人
				addTime,//订单创建时间
				xiaoshouPeople,//订单销售人
				xiaoshouTime,//订单销售时间
				list,//订单详情
			});
			return upDateDingdanList
		case 'dingdanXQ':
			//获取订单详情
			listArr = await dingdanDetailsCollection.skip(skip).limit(limit).where({dingdanID:dingdanID}).get();
			total = await dingdanDetailsCollection.count();
			resArr = {
				listArr,
				total
			};
			return resArr
		default:
			break;
	}
	
};
