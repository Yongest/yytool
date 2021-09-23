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

// 判断是安卓，还是iOS
export let getPhoneType=()=>{
    var u = navigator.userAgent;
    var isXiaomi = u.indexOf('XiaoMi') > -1; // 小米手机
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // 其它安卓
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios
    if (isAndroid || isXiaomi) {
      return 'android';
    }else if (isIOS) {
      return 'ios';
    }
}
// 获取本地时间，2021-08-21 ,不足10，签名补充0
export let getLocalDate=()=>{
	let localTime = new Date().toLocaleDateString() // 2012/09/23
	let localTimeArr = localTime.split('/')
	localTimeArr[1] = localTimeArr[1]>=10?localTimeArr[1]:'0'+localTimeArr[1] 
	localTimeArr[2] = localTimeArr[2]>=10?localTimeArr[2]:'0'+localTimeArr[2] 
	return localTimeArr.join('-')
}