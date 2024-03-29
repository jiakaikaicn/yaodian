export function parseTime(time, cFormat) {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string')) {
			if ((/^[0-9]+$/.test(time))) {
				// support "1548221490638"
				time = parseInt(time)
			} else {
				time = time.replace(new RegExp(/-/gm), '/')
			}
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
		const value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		return value.toString().padStart(2, '0')
	})
	return time_str
}


// 添加日志

// 主要内容：操作人  操作时间  操作类型（增删改等）
// 增：add   删：del  改：edit  
// shuoming：操作说明
// yaopinID: 操作的数据id

export function addYaoPinJournal(operationType, shuoming, yaopinID,addKucunNum) {
	console.log('添加入库的日志');
	console.log(addKucunNum);
	let time = parseTime(new Date(), "{y}-{m}-{d} {h}:{i}:{s}"); //获取当前系统时间
	let people = uni.getStorageSync('lastUsername');; //获取当前操作人
	let data = {
		type: 'addYaoPinJournal',
		people,
		time,
		operationType,
		shuoming,
		yaopinID,
		addKucunNum
	}
	console.log(data);
	uniCloud.callFunction({
		name: 'a-yaopin',
		data,
		success: (res) => {
			console.log(res);
		},
		fail: (err) => {
			console.log(err);
		}
	})
}

// 删除订单  id :订单id
export function delDingdanFn(dingdanID) {
	console.log('删除订单，同时删除订单详情');
	console.log(dingdanID);
	uni.showLoading({
		title: '删除中...',
		mask: true
	});
	// let time = timeFn(); //获取当前系统时间
	// let people = uni.getStorageSync('lastUsername');; //获取当前操作人
	let data = {
		id:dingdanID,
		type: 'del',
		// people,
		// time,
	}
	console.log(data);
	uniCloud.callFunction({
		name: 'a-dingdan',
		data,
		success: res => {
			uni.showToast({
				title: '删除成功'
			});
			uni.hideLoading();
		},
		fail: err => {
			console.log(err);
			uni.showToast({
				title: '删除失败'
			});
		}
	});
}


// 创建订单  和 更新订单
export function dingdanFn(data) {
	let XQList = data.list;
	console.log('创建订单  或者 更新订单');
	console.log(data);
	let loadTitle = '';
	// 判断是否有订单id  有就是更新，没有的话新建
 	if (data.dingdanID == '') {
		data.type = 'addDingdan';
		loadTitle = '新建订单中...'
		console.log('我是新建订单，创建订单的数据：', data);
	} else {
		data.type = 'upDateDingdan';
		loadTitle = '更新订单中...';
		// data.yaopinIDList = ["62df68c906b1e20001162833", "62df6c397a1d270001aca2ea"];
		console.log('我是更新订单，更新订单的数据：', data);
	}
	uni.showLoading({
		title:loadTitle,
		mask: true
	});
	console.log(data);
	uniCloud.callFunction({
		name: 'a-dingdan',
		data,
		success: res => {
			console.log(res);
			if(res.result.code == '10000'){
				console.log('更新成功!开始核销');
				hexiaoYP(XQList);
			}
			uni.hideLoading();
		},
		fail: err => {
			console.log(err);
			uni.showToast({
				title: '操作失败，请联系管理员'
			});
		}
	});
}

// 核销订单内容
export function hexiaoYP(list) {
	console.log('核销订单内容，进行药品库存的核销');
	let data = {
		list:list,
		type:'hexiaoDingdan'
	}
	console.log(data);
	uniCloud.callFunction({
		name: 'a-dingdan',
		data,
		success: res => {
			console.log(res);
			uni.showToast({
				title: '核销成功'
			});
			setTimeout(function() {
				uni.navigateTo({
					url:'/pages/xiaoshou/dingdan/dingdan'
				})
			}, 1000);
		},
		fail: err => {
			console.log(err);
			uni.showToast({
				title: '操作失败，请联系管理员'
			});
		}
	});
}

// 获取时间   格式  2022-08-21 12:15:21
export function timeFn(time = +new Date()) {
	var date = new Date(time + 8 * 3600 * 1000);
	let tim = date.toJSON().substr(0, 19).replace('T', ' ');
	return tim;
}

