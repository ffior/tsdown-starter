/**
 * @file 判断类
 * @author atding(atding@ffior.com)
 */
/**
 * 判断一个对象是不是number
 * @param value
 */
export const isNumber = (value: any): boolean => {
    return typeof value === "number";
};

/**
 * 判断一个对象是不是string
 * @param value
 */
export const isString = (value: any): boolean => {
    return typeof value === "string";
};

/**
 * 判断一个对象是不是空对象
 * @param value
 */
export const isEmpty = (value: any): boolean => {
    return value === undefined || value === null;
};

/**
 * 判断一个对象是不是Promise对象
 * @param obj
 */
export const isPromise = (obj: any): boolean => {
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
export const isJSON = (json: string): boolean => {
    try {
        const obj = JSON.parse(json);
        if (typeof obj == "object" && obj) {
            return true;
        } else {
            return false;
        }
    } catch {
        return false;
    }
};

/**
 * 判断一个字符串是否是URL网址
 * @param url 网址
 * @param type URL协议头类型（http、https、ftp）
 */
export const isUrl = (
    url: string,
    type?: "http" | "ftp" | "https",
): boolean => {
    if (!url) return false;
    if (type) {
        if (url.indexOf(type) !== 0) {
            return false;
        }
    }
    // eslint-disable-next-line no-useless-escape
    const reg: RegExp =
        /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;

    if (!reg.test(url)) {
        return false;
    }
    return true;
};

export default {
    isNumber,
    isString,
    isEmpty,
    isPromise,
    isJSON,
    isUrl,
};
