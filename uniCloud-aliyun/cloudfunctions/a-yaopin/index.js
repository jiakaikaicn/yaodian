'use strict';

const db = uniCloud.database();

const yaopinCollection = db.collection("a-yaopin"); //药品表
const yaopinJournalCollection = db.collection("a-yaopin-journal"); //日志表




exports.main = async (event, context) => {
	console.log('event : ', event);
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
		// 添加日志
		people,
		time,
		operationType,
		shuoming,
		yaopinID,
		addKucunNum
	} = event;
	let {
		page,
		limit,
		value
	} = event, skip = (page - 1) * limit, listArr, total;
	let resArr; //列表返回结果   {列表arr,分页arr}
	// 查询
	switch (event.type) {
		// 查询  -- 查询 所有 数据 并查询总数进行分页操作   以及按首字母（别名）查询
		case "list":
			if (event.value) {
				listArr = await yaopinCollection.where({
					'bieming': value
				}).skip(skip).limit(limit).get();
				total = await yaopinCollection.where({
					'bieming': value
				}).count();
			} else {
				listArr = await yaopinCollection.skip(skip).limit(limit).get();
				total = await yaopinCollection.count();
			}
			resArr = {
				listArr,
				total
			};
			return resArr
			// 更新  -- 根据id 更新单条数据
		case "update":
			let updataList = await yaopinCollection.doc(_id).update({
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
			});
			return updataList
			// 详情  -- 根据id 查询单条数据
		case "detail":
			let listDetail = await yaopinCollection.where({
				_id
			}).get();
			return listDetail
			// 添加库存  -- 根据id 添加库存数量
		case "addKucun":
			let updateKucun = await yaopinCollection.doc(_id).update({
				shuliang
			});
			return updateKucun
			// 删除  -- 根据id 删除单条数据
		case "del":
			let res = await yaopinCollection.doc(event.id).remove();
			return res
			// 添加  -- 添加单条数据
		case "add":
			return await yaopinCollection.add({
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
			});
			// 添加日志
		case 'addYaoPinJournal':
			return await yaopinJournalCollection.add({
				people,
				time,
				operationType,
				shuoming,
				yaopinID,
				addKucunNum
			});
			// 日志查询
		case 'journalList':
			if (event.value) {
				listArr = await yaopinJournalCollection.where({
					'operationType': value
				}).skip(skip).limit(limit).orderBy("time", "desc").get();
				total = await yaopinJournalCollection.where({
					'operationType': value
				}).count();
			} else {
				listArr = await yaopinJournalCollection.skip(skip).limit(limit).orderBy("time", "desc").get();
				// 根据listArr中的yaopinid 查询药品表

				total = await yaopinJournalCollection.count();
			}
			resArr = {
				listArr,
				total
			};
			return resArr
		// case 'ceshiduobiao':
		// 	let ress = await yaopinJournalCollection.aggregate()
		// 		.lookup({
		// 			from: as, //要联查哪个表
		// 			localField: 'yaopinID', //本表字段
		// 			foreignField: '_id', //关联字段
		// 			as: 'yaopin' //别名
		// 		}).fie
		// 		.end()
		// 	return ress
	}

};
