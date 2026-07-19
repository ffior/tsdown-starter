Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
    let target = {};
    for (var name in all)
        __defProp(target, name, {
            get: all[name],
            enumerable: true,
        });
    if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
    return target;
};
var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function")
        for (
            var keys = __getOwnPropNames(from), i = 0, n = keys.length, key;
            i < n;
            i++
        ) {
            key = keys[i];
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: ((k) => from[k]).bind(null, key),
                    enumerable:
                        !(desc = __getOwnPropDesc(from, key)) ||
                        desc.enumerable,
                });
        }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
        isNodeMode || !mod || !mod.__esModule
            ? __defProp(target, "default", {
                  value: mod,
                  enumerable: true,
              })
            : target,
        mod,
    )
);
//#endregion
let crypto_js_aes_js = require("crypto-js/aes.js");
crypto_js_aes_js = __toESM(crypto_js_aes_js, 1);
let crypto_js_enc_base64_js = require("crypto-js/enc-base64.js");
crypto_js_enc_base64_js = __toESM(crypto_js_enc_base64_js, 1);
let crypto_js_enc_utf8_js = require("crypto-js/enc-utf8.js");
crypto_js_enc_utf8_js = __toESM(crypto_js_enc_utf8_js, 1);
let crypto_js_mode_cfb_js = require("crypto-js/mode-cfb.js");
crypto_js_mode_cfb_js = __toESM(crypto_js_mode_cfb_js, 1);
let crypto_js_pad_pkcs7_js = require("crypto-js/pad-pkcs7.js");
crypto_js_pad_pkcs7_js = __toESM(crypto_js_pad_pkcs7_js, 1);
let axios = require("axios");
axios = __toESM(axios, 1);
let lodash = require("lodash");
//#region src/Checker/Reg/reg.ts
/**
 * @file 正则表达式验证工具类
 * @author atding(atding@ffior.com)
 */
var reg_default = {
    /**
     * 验证字符串是否符合正则表达式要求
     * @param value 日期对象
     * @param format 格式
     */
    check(value, format) {
        return value.length > 0 ? format.test(value) : true;
    },
};
//#endregion
//#region src/Checker/Reg/exp.ts
/**
 * @file 正则表达式验证工具类
 * @author atding(atding@ffior.com)
 */
/**
 * 仅支持中文
 */
const REG_CN_ONLY = /* @__PURE__ */ new RegExp(
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
);
/**
 * 仅支持英文字母
 */
const REG_EN_ONLY = /* @__PURE__ */ new RegExp(/^[a-zA-Z]+$/);
/**
 * 仅支持英文字母和数字
 */
const REG_EN_DIGITAL_ONLY = /* @__PURE__ */ new RegExp(/^[a-zA-Z0-9]+$/);
/**
 * 仅支持中文、英文字母、数字
 */
const REG_CN_EN_DIGITAL_ONLY = /* @__PURE__ */ new RegExp(
    /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
);
/**
 * 支持邮箱
 */
const REG_EMAIL = /* @__PURE__ */ new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
);
//#endregion
//#region src/Checker/Reg/index.ts
/**
 * @file 正则表达式验证工具类
 * @author atding(atding@ffior.com)
 */
var Reg_default = reg_default;
//#endregion
//#region src/Checker/index.ts
/**
 * @file checker
 * @author atding<atding@ffior.com>
 */
/**
 * 将中文字符处理为两个英文字符aa
 * @param {String} str 需处理的字符串
 * @return {String} 值
 */
const handleCNStr = (str) => {
    if (str === void 0 || str === null) return "";
    str = str + "";
    const tmpArr = str.split("");
    for (let i = 0; i < tmpArr.length; i++)
        tmpArr[i] = tmpArr[i].replace(/[\u4e00-\u9fa5]+/g, "aa");
    return tmpArr.join("");
};
/**
 * 字符串截取，中文字符算两个字节
 * @param {String} str 需处理的字符串
 * @param {String} maxLen 截取长度
 * @return {String} 值
 */
const handleCNSubstr = (str, maxLen) => {
    if (str === void 0 || str === null) return "";
    let returnVal = "";
    let byteValLen = 0;
    for (const item of str) {
        if (item.match(/[\u4e00-\u9fa5]+/g) !== null) byteValLen += 2;
        else byteValLen += 1;
        if (byteValLen > maxLen) break;
        returnVal += item;
    }
    return returnVal;
};
/**
 * 字符串匹配，所有中英文数字，键盘能输入的特殊字符
 * @param {String} str 需处理的字符串
 * @return {Boolean} 值
 */
const checkStrMatch = (str) => {
    const tmpStr = handleCNStr(str);
    if (
        !/^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、a-zA-Z0-9 ]{1,}$/g.test(
            tmpStr,
        )
    )
        return false;
    return true;
};
/**
 * 数字校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 是否匹配数字成功
 */
const checkNumMatch = (str) => {
    if (str === void 0 || str === null) return false;
    if (!/^[0-9]{1,}$/g.test(str)) return false;
    return true;
};
/**
 * 中文校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 值
 */
const checkCnMatch = (str) => {
    return Reg_default.check(str || "", REG_CN_ONLY);
};
/**
 * 英文校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 值
 */
const checkEnMatch = (str) => {
    return Reg_default.check(str || "", REG_EN_ONLY);
};
/**
 * 英文和数字校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 值
 */
const checkEnNumMatch = (str) => {
    return Reg_default.check(str || "", REG_EN_DIGITAL_ONLY);
};
/**
 * 中文、英文和数字校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 值
 */
const checkCnEnNumMatch = (str) => {
    return Reg_default.check(str || "", REG_CN_EN_DIGITAL_ONLY);
};
/**
 * 英文和连接符包括：-横线和_下划线校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 是否符合规则
 */
const checkEnJointMatch = (str) => {
    const RegEnJoint = /* @__PURE__ */ new RegExp("^[a-zA-Z-_]+$");
    return Reg_default.check(str || "", RegEnJoint);
};
/**
 * 英文和连接符包括：_下划线校验
 * @param {String} str 需处理的字符串
 * @return {Boolean} 是否符合规则
 */
const checkEnJointMatch2 = (str) => {
    const RegEnJoint = /* @__PURE__ */ new RegExp("^[a-zA-Z_]+$");
    return Reg_default.check(str || "", RegEnJoint);
};
/**
 * 验证URL格式
 * @param {String} str 需验证的字符串
 * @return {Boolean} 是否符合规则
 */
const checkUrl = (str) => {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(str || "");
};
const checkEmail = (str) => {
    return Reg_default.check(str || "", REG_EMAIL);
};
var Checker_default = {
    handleCNStr,
    handleCNSubstr,
    checkStrMatch,
    xcReg: Reg_default,
    checkNumMatch,
    checkCnMatch,
    checkEnMatch,
    checkEnNumMatch,
    checkCnEnNumMatch,
    checkEnJointMatch,
    checkEnJointMatch2,
    checkUrl,
    checkEmail,
};
//#endregion
//#region src/LocalStorage/index.ts
/**
 * @file localStorage
 * @author atding<atding@ffior.com>
 */
/**
 * 删除缓存Key
 * @param {String} key 缓存的Key
 */
const removeItem = (key) => {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};
/**
 * 获取缓存对象
 * @param {String} key 缓存的Key
 * @return {Object} 值
 */
const getItem = (key, initialValue = "") => {
    try {
        const item = window.localStorage.getItem(key);
        if (item) {
            const current = /* @__PURE__ */ new Date().getTime();
            const result = JSON.parse(item);
            if (result.expired > 0 && result.expired < current) {
                removeItem(key);
                return initialValue;
            }
        }
        return item ? JSON.parse(item).value : initialValue;
    } catch (error) {
        console.log(error);
        return initialValue;
    }
};
/**
 * 设置缓存对象
 * @param {String} key 缓存的Key
 * @param {Number} timeout 缓存的过期失效，单位：秒
 */
const setItem = (key, value, timeout = 0) => {
    try {
        const current =
            /* @__PURE__ */ new Date().getTime() +
            (timeout > 0 ? timeout : 0) * 1e3;
        const item = {
            expired: timeout > 0 ? current : -1,
            value,
        };
        window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};
var LocalStorage_default = {
    getItem,
    setItem,
    removeItem,
};
//#endregion
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
    return (
        !!obj &&
        (typeof obj === "object" || typeof obj === "function") &&
        typeof obj.then === "function"
    );
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
    if (
        !/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/.test(
            url,
        )
    )
        return false;
    return true;
};
var Is_default = {
    isNumber,
    isString,
    isEmpty,
    isPromise,
    isJSON,
    isUrl,
};
//#endregion
//#region src/Crypto/index.ts
/**
 * @file aes.ts
 * @author atding<atding@ffior.com>
 */
/**
 * AES加密方法
 * @param word 待加密的字符串
 * @param encryptKey 加密所用的密钥
 * @returns 加密后的字符串
 */
const aesEncrypt = (word, encryptKey) => {
    const key = crypto_js_enc_utf8_js.default.parse(encryptKey);
    const wordArray = crypto_js_enc_utf8_js.default.parse(word);
    return crypto_js_aes_js.default
        .encrypt(wordArray, key, {
            mode: crypto_js_mode_cfb_js.default,
            padding: crypto_js_pad_pkcs7_js.default,
        })
        .toString();
};
/**
 * AES解密方法
 * @param word 待加密的字符串
 * @param decryptKey 加密所用的密钥
 * @returns 解密后的字符串
 */
const aesDecrypt = (word, decryptKey) => {
    const key = crypto_js_enc_utf8_js.default.parse(decryptKey);
    const bytes = crypto_js_aes_js.default.decrypt(word, key, {
        mode: crypto_js_mode_cfb_js.default,
        padding: crypto_js_pad_pkcs7_js.default,
    });
    const originalText = crypto_js_enc_utf8_js.default
        .stringify(bytes)
        .toString();
    return isJSON(originalText) ? JSON.parse(originalText) : originalText;
};
/**
 * 基础Base64字符串编码
 * @param str 待编码字符串
 * @returns 编码后字符串
 */
const base64Encode = (str) =>
    crypto_js_enc_base64_js.default.stringify(
        crypto_js_enc_utf8_js.default.parse(str),
    );
/**
 * 将Base64编码的字符串解码
 * @param str 待解码字符串
 * @returns 解码后字符串
 */
const base64Decode = (str) => {
    return crypto_js_enc_base64_js.default
        .parse(str)
        .toString(crypto_js_enc_utf8_js.default);
};
var Crypto_default = {
    aesEncrypt,
    aesDecrypt,
    base64Encode,
    base64Decode,
};
//#endregion
//#region src/Download/index.ts
/**
 * @file POST下载文件统一处理
 * @author wuruile<wuruile@ffior.com>
 */
/**
 * 下载文件
 * @param content 文件内容
 * @param filename 文件名称
 */
const downloadFile = (content, filename) => {
    const blob = new Blob([content]);
    const downloadUrl = URL.createObjectURL(blob);
    const eleLink = document.createElement("a");
    eleLink.download = filename;
    eleLink.style.display = "none";
    eleLink.href = downloadUrl;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
};
/**
 * 下载一个URL地址返回的内容到本地文件
 * @param url 请求地址
 * @param data 参数
 * @param method 方法类型
 * @returns
 */
function download(url, data, method = "post", headers = {}) {
    return new Promise((resolve, reject) => {
        (0, axios.default)({
            method,
            url,
            data,
            responseType: "blob",
            headers: { ...headers },
        })
            .then((axiosResponse) => {
                const { data: content } = axiosResponse;
                if (content.size === 0) reject();
                else if (content.type === "application/json") {
                    const reader = new FileReader();
                    reader.addEventListener("loadend", () => {
                        const json = JSON.parse(String(reader.result));
                        if (
                            json.success === false &&
                            json.message &&
                            json.message.redirect
                        )
                            location.href = json.message.redirect;
                    });
                    reader.readAsText(content);
                    reject();
                } else {
                    downloadFile(
                        content,
                        axiosResponse.headers["content-disposition"]
                            ? axiosResponse.headers[
                                  "content-disposition"
                              ].split("=")[1]
                            : "",
                    );
                    resolve(true);
                }
            })
            .catch((error) => {
                if (axios.default.isCancel(error))
                    console.log("Request canceled", error.message);
            });
    });
}
/**
 * 直接下载一个URL地址，返回流数据，浏览器直接保存
 * @param url 下载文件地址
 * @param { target } 参数：是否新开页面下载
 */
const downloadUrl = (url, { target = "_blank" } = {}) => {
    const eleLink = document.createElement("a");
    eleLink.style.display = "none";
    eleLink.href = url;
    eleLink.target = target;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
};
/**
 * 导出数据列表到CSV文件
 * @param fileName 文件名字
 * @param columns 列名字[['name', '名称']]
 * @param data 数据数组对象
 */
const exportCSV = (fileName, columns, data) => {
    data = data || [];
    const titleCols = [];
    const fieldCols = [];
    columns = columns || [];
    columns.forEach((col) => {
        titleCols.push(col[1]);
        fieldCols.push(col[0]);
    });
    const fields = [titleCols];
    let str = "";
    const listData = JSON.parse(JSON.stringify(data));
    listData.forEach((item) => {
        Object.keys(item).forEach((res) => {
            if (/,/g.test(item[res])) item[res] = item[res].replace(/,/g, "");
        });
    });
    listData.forEach(function (row) {
        const rowVals = fieldCols.map((item) => {
            return row[item];
        });
        fields.push(rowVals);
    });
    fields.forEach(function (item, index) {
        const row = item.join(",");
        str += index < fields.length ? row + "\n" : row;
    });
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=gb2312,﻿" + str);
    link.setAttribute("download", fileName + ".csv");
    link.click();
};
var Download_default = {
    downloadFile,
    download,
    downloadUrl,
    exportCSV,
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
    replaceAllEnter,
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
        s: date.getSeconds(),
    };
    return format.replace(/(y+|M+|d+|h+|m+|s+)/g, (v) => {
        const value = map[v.slice(-1)];
        return ((v.length > 1 ? "0" : "") + value).slice(
            -(v.length > 2 ? v.length : 2),
        );
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
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                return 29;
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
        return /* @__PURE__ */ new Date(
            `${newDate.join("/")} ${newTime.join(":")}`,
        );
    } else return null;
};
var Date_default = {
    format,
    doubleDigital,
    formatTime,
    sleep,
    daysOfMonth,
    reverse,
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
    const str = num
        .toString()
        .replace(DIGIT_PATTERN, (m) => m.replace(MILI_PATTERN, ","));
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
    toFixed,
};
//#endregion
//#region src/Function/callOrReturn.ts
function callOrReturn(fnOrValue, ...args) {
    if ((0, lodash.isFunction)(fnOrValue)) return fnOrValue(...args);
    return fnOrValue;
}
//#endregion
//#region src/Enum/enumOf.ts
var enumOf_exports = /* @__PURE__ */ __exportAll({ enumOf: () => enumOf });
function isEnumOfValueObject(value) {
    return (0, lodash.isPlainObject)(value);
}
function enumOf(config) {
    const extractValues = Object.entries(config).reduce(
        (result, [key, value]) => {
            result[key] = isEnumOfValueObject(value) ? value.value : value;
            return result;
        },
        {},
    );
    const configValues = Object.values(config);
    function label(v) {
        const valueObject = getValueObject(v);
        return valueObject?.label ? callOrReturn(valueObject.label) : "";
    }
    function description(v) {
        const valueObject = getValueObject(v);
        return valueObject?.description
            ? callOrReturn(valueObject.description)
            : "";
    }
    function values() {
        return configValues.map((option) =>
            isEnumOfValueObject(option) ? option.value : option,
        );
    }
    function labels() {
        return configValues.map((option) => {
            if (isEnumOfValueObject(option))
                return option.label ? callOrReturn(option.label) : "";
            return "";
        });
    }
    function descriptions() {
        return configValues.map((option) => {
            if (isEnumOfValueObject(option))
                return option.description
                    ? callOrReturn(option.description)
                    : "";
            return "";
        });
    }
    function resolveOption(option) {
        const result = {};
        for (const key of Object.keys(option))
            result[key] = callOrReturn(option[key]);
        return result;
    }
    function option(v) {
        const valueObject = getValueObject(v);
        if (valueObject) return resolveOption(valueObject);
        return {
            value: v,
            label: "",
            description: "",
        };
    }
    function options() {
        return configValues.map((option) => {
            if (isEnumOfValueObject(option)) return resolveOption(option);
            return {
                value: option,
                label: "",
                description: "",
            };
        });
    }
    function getValueObject(v) {
        return configValues.find(
            (option) => isEnumOfValueObject(option) && option.value === v,
        );
    }
    return {
        ...extractValues,
        values,
        label,
        description,
        labels,
        descriptions,
        option,
        options,
    };
}
//#endregion
//#region src/Enum/index.ts
var Enum_default = { ...enumOf_exports };
//#endregion
exports.Checker = Checker_default;
exports.Crypto = Crypto_default;
exports.DateX = Date_default;
exports.Download = Download_default;
exports.EnumX = Enum_default;
exports.Is = Is_default;
exports.LocalStorage = LocalStorage_default;
exports.NumberX = Number_default;
exports.StringX = String_default;
