/**
 * 移除中文
 */
 export let removeChinese = (txt)=>{
	return txt.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g,'');
}

/**
 * numberStr 19920817
 * return  年龄
 */
export let calcuAge = (numberStr)=>{
	let year = numberStr.slice(0, 4) // 获取生日
	let month = numberStr.slice(4, 6) // 获取生日
	let day = numberStr.slice(6, 8) // 获取生日
	let allBothday = `${year}-${month}-${day}`
	let age = (+new Date() - +new Date(allBothday)) / 1000 / 3600 / 24 / 365
	age = Math.floor(age)
	return age
}
// 是否包含中文字
export let  hasChinese = (val)=>{
	var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
	return reg.test(val)
}