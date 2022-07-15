'use strict';

const db = uniCloud.database();

const yaopinCollection = db.collection("a-yaopin");


exports.main = async (event, context) => {
	console.log('event : ', event);
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
	// 查询
	switch (event.type) {
		// 查询  -- 查询 所有 数据 并查询总数进行分页操作   以及按首字母（别名）查询
		case "list":
			let {
				page, limit,value
			} = event, skip = (page - 1) * limit,listArr,total;
			if(event.value){
				listArr = await yaopinCollection.where({
				  'bieming': value
				}).skip(skip).limit(limit).get();
				total = await yaopinCollection.where({
				  'bieming': value
				}).count();
			}else{
				listArr = await yaopinCollection.skip(skip).limit(limit).get();
				total = await yaopinCollection.count();
			}
			let resArr = {listArr,total};
			return resArr
			// 更新  -- 根据id 更新单条数据
		case "update":
			let updataList = await yaopinCollection.doc(_id).update({
				name,
				bieming,
				guige,
				jiage,
				huiyuanjia,
				kucun,
				danwei,
				pihao,
				changjia,
				is_on_sale,
				add_date,
			});
			return updataList
			// 详情  -- 根据id 查询单条数据
		case "detail":
			let listDetail = await yaopinCollection.where({_id}).get();
			return listDetail
			// 添加库存  -- 根据id 添加库存数量
		case "addKucun":
			let updateKucun = await yaopinCollection.doc(_id).update({kucun});
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
				jiage,
				huiyuanjia,
				kucun,
				danwei,
				pihao,
				month_xiaoliang,
				all_xiaoliang,
				changjia,
				is_on_sale,
				add_date,sss
			});
	}

	//返回数据给客户端
	return event
};
