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

// 获取时间   格式  2022-08-21 12:15:21
export function timeFn(time = +new Date()) {
	var date = new Date(time + 8 * 3600 * 1000);
	let tim = date.toJSON().substr(0, 19).replace('T', ' ');
	return tim;
}