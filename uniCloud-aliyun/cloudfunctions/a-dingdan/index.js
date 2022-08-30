'use strict';

const { type } = require("os");


const db = uniCloud.database();
const dbCmd = db.command;
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
	let code = '10000';//默认10000 为成功
	let yaopinList = [];
	let yaopinIDList = []//药品id数组
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
			// 删除订单
			let res = await dingdanCollection.doc(event.id).remove();
			// 删除订单详情的数据
			await dingdanDetailsCollection.where({dingdanID:event.id}).remove();
			return res
		case 'upDateDingdan':
			// 更新订单，获取到订单详情，每一个都要进行判断 库存和订单的关系
			// 如果 可以核销，就进行订单的更新。否则不进行订单的更新
			let isTrue = true,upDateDingdanList=[];
			// 通过订单的药品详情获取订单id
			yaopinIDList = list.map((item,index) => {
				 return item._id
			})
			yaopinList = await yaopinCollection.where({
				_id: dbCmd.in(yaopinIDList),
			}).get();
			for (var i = 0; i < yaopinIDList.length; i++) {
				if(Number(list[i].buy_shuliang) > Number(yaopinList.data[i].shuliang)){
					// 如果购买数量大于库存数量，无法进行结算
					console.log('购买数量大于库存，该订单无法进行核销');
					isTrue = false;
					break;
				}
			}
			if(isTrue){
				// 可以进行核销
				code = '10000';
				// 更新订单内容
				upDateDingdanList = await dingdanCollection.doc(dingdanID).set({
					shishou,//实收
					buy_shuliang,//共多少件
					zhonglei,//几种药
					shuoming,//说明
					title,//支付方式
					yingshou,//应收  -- 总价
					zhaoling,//找零
					zhifufangshi,//支付方式
					isFinish:1,//订单是否完成
					addPeople,//创建订单人
					addTime,//订单创建时间
					xiaoshouPeople,//订单销售人
					xiaoshouTime,//订单销售时间
					list,//订单详情
				});
				// 进行订单的核销
				
			}else{
				// 不能进行核销
				code = '100001'
			}
			console.log(isTrue);
			resArr ={
				code,
				upDateDingdanList,
				yaopinIDList,
			}
			return resArr
		case 'dingdanXQ':
			//获取订单详情
			listArr = await dingdanDetailsCollection.skip(skip).limit(limit).where({dingdanID:dingdanID}).get();
			total = await dingdanDetailsCollection.count();
			resArr = {
				listArr,
				total
			};
			return resArr
		case 'hexiaoDingdan':
			//核销订单详情
			// 获取订单详情的列表  中的药品id数组
			yaopinIDList = list.map((item,index) => {
				 return item._id
			});
			console.log('药品id数组',yaopinIDList);
			// 根据 id 获取到药品的数据   进行库存的核销操作
			yaopinList = await yaopinCollection.where({
				_id: dbCmd.in(yaopinIDList),
			}).get();
			//药品的详情  重新赋值
			let newYaopinDetails = yaopinList.data;
			for (var i = 0; i < list.length; i++) {
				for(var m = 0; m < newYaopinDetails.length; m++){
					if(newYaopinDetails[m]._id == list[i]._id){
						// 进行库存的核销操作
						let num = Number(newYaopinDetails[m].shuliang) - Number(list[i].buy_shuliang);
						// 进行库存的删除
						await yaopinCollection.doc(newYaopinDetails[m]._id).update({
							shuliang:num
						});
					}
				}
			}
			resArr = {
				code:'10000',
				msg:'核销成功'
			};
			return resArr;
		default:
			break;
	}
	
};
