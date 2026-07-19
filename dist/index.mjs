//#region src/Is/index.ts
/**
* @file 判断类
* @author atding(atding@ffior.com)
*/
/**
* 判断一个对象是不是number
* @param value
*/
const isNumber = (value) => {
	return typeof value === "number";
};
/**
* 判断一个对象是不是string
* @param value
*/
const isString = (value) => {
	return typeof value === "string";
};
/**
* 判断一个对象是不是空对象
* @param value
*/
const isEmpty = (value) => {
	return value === void 0 || value === null;
};
/**
* 判断一个对象是不是Promise对象
* @param obj
*/
const isPromise = (obj) => {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
};
/**
* 判断一个字符串是否是JSON对象
* @param JSON json字符串
*/
const isJSON = (json) => {
	try {
		const obj = JSON.parse(json);
		if (typeof obj == "object" && obj) return true;
		else return false;
	} catch {
		return false;
	}
};
/**
* 判断一个字符串是否是URL网址
* @param url 网址
* @param type URL协议头类型（http、https、ftp）
*/
const isUrl = (url, type) => {
	if (!url) return false;
	if (type) {
		if (url.indexOf(type) !== 0) return false;
	}
	if (!/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/.test(url)) return false;
	return true;
};
var Is_default = {
	isNumber,
	isString,
	isEmpty,
	isPromise,
	isJSON,
	isUrl
};
//#endregion
//#region src/String/index.ts
/**
* @file 字符串操作类
* @author atding(atding@ffior.com)
*/
/**
* 替换字符串所有指定字符
* @param value
* @param oldStr
* @param newStr
*/
const replaceAll = (value, oldStr, newStr = "") => {
	return value ? value.replace(new RegExp(oldStr, "gm"), newStr) : value;
};
/**
* 替换字符串中空字符
* @param value
* @param oldStr
* @param newStr
*/
const replaceAllEmpty = (value, newStr = "") => {
	return replaceAll(value, "[ ]", newStr);
};
/**
* 替换字符串中回车换行字符
* @param value
* @param oldStr
* @param newStr
*/
const replaceAllEnter = (value, newStr = "") => {
	return replaceAll(value, "[\r\n]", newStr);
};
var String_default = {
	replaceAll,
	replaceAllEmpty,
	replaceAllEnter
};
//#endregion
//#region src/Date/index.ts
/**
* @file 日期操作方法
* @author atding(atding@ffior.com)
*/
/**
* 格式化字符串
* @param date 待格式化的日期对象
* @param format 格式 yyyy-代表年，MM-代表月，dd-代表日，hh-代表小时，mm-代表分钟，ss-代表秒数 -是可替换字符
*/
const format = (date, format) => {
	format = format || "yyyy-MM-dd";
	const map = {
		y: date.getFullYear(),
		M: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
	};
	return format.replace(/(y+|M+|d+|h+|m+|s+)/g, (v) => {
		const value = map[v.slice(-1)];
		return ((v.length > 1 ? "0" : "") + value).slice(-(v.length > 2 ? v.length : 2));
	});
};
/**
* 双位数字化，缺0补0
* @param value 如：7 =》07  -7 =》 -07
*/
const doubleDigital = (value) => {
	const val = Math.abs(value);
	let result = val > 9 ? String(val) : "0" + val;
	result = value >= 0 ? result : "-" + result;
	return result;
};
/**
* 格式化时间为整刻度时间，如：0  15  30  45
* @param current 待格式时间对象
*/
const formatTime = (current) => {
	const minute = current.getMinutes();
	let endMinute = 0;
	if (minute >= 0 && minute <= 15) endMinute = 0;
	else if (minute > 15 && minute <= 30) endMinute = 15;
	else if (minute > 30 && minute <= 45) endMinute = 30;
	else endMinute = 45;
	return doubleDigital(endMinute);
};
/**
* 暂停函数，负责暂停当前线程时间
* @param ms 毫秒
*/
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
/**
* 获取当前月的天数
*/
const daysOfMonth = (current) => {
	const year = current.getFullYear();
	switch (current.getMonth() + 1) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12: return 31;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
		case 2: if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return 29;
		else return 28;
	}
	return 31;
};
/**
* 逆向方法，将字符串格式转为Date对象
* @param date 日期字符串
* @param format 字符串格式（支持：yyyy-MM-dd，yyyy-MM-dd hh:mm:ss，yyyy/MM/dd hh:mm:ss，yyyyMMddhhmmss）
*/
const reverse = (date, format = "yyyy-MM-dd") => {
	if (format.includes("-")) {
		const dateString = date.replace(/-/g, "/");
		return new Date(dateString);
	} else if (format.includes("/")) return new Date(date);
	else if (format === "yyyyMMdd") {
		const newDate = [];
		newDate.push(date.substr(0, 4));
		newDate.push(date.substr(4, 2));
		newDate.push(date.substr(6, 2));
		return new Date(newDate.join("/"));
	} else if (format === "yyyyMMddhhmmss") {
		const newDate = [];
		newDate.push(date.substr(0, 4));
		newDate.push(date.substr(4, 2));
		newDate.push(date.substr(6, 2));
		const newTime = [];
		newTime.push(date.substr(8, 2));
		newTime.push(date.substr(10, 2));
		newTime.push(date.substr(12, 2));
		return /* @__PURE__ */ new Date(`${newDate.join("/")} ${newTime.join(":")}`);
	} else return null;
};
var Date_default = {
	format,
	doubleDigital,
	formatTime,
	sleep,
	daysOfMonth,
	reverse
};
//#endregion
//#region src/Number/index.ts
/**
* @file 整形对象操作类
* @author atding(atding@ffior.com)
*/
/**
* 转换数字型函数
* @param input
* @param defaultOutput
*/
const tryParse = (input, defaultOutput) => {
	if (!input) return defaultOutput || 0;
	const output = parseInt(input, 10);
	return isNaN(output) ? defaultOutput || 0 : output;
};
/**
* 将数字转换为按千进位逗号分隔的字符串
* @param num
*/
const thousandSeparator = (num) => {
	let prefix = "";
	if (num < 0) {
		num *= -1;
		prefix = "-";
	}
	const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
	const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
	const str = num.toString().replace(DIGIT_PATTERN, (m) => m.replace(MILI_PATTERN, ","));
	return prefix + str;
};
/**
* 保留小数点（不进行四舍五入），可以将一个数字截断到某个小数点
* @param n
* @param fixed
* @description 例如：toFixed(25.198726354, 2);       // 25.19
*/
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
var Number_default = {
	tryParse,
	thousandSeparator,
	toFixed
};
//#endregion
export { Date_default as DateX, Is_default as Is, Number_default as NumberX, String_default as StringX };
