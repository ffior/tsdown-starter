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
export const replaceAll = (
    value: string,
    oldStr: string,
    newStr: string = "",
): string => {
    return value ? value.replace(new RegExp(oldStr, "gm"), newStr) : value;
};

/**
 * 替换字符串中空字符
 * @param value
 * @param oldStr
 * @param newStr
 */
export const replaceAllEmpty = (value: string, newStr: string = ""): string => {
    return replaceAll(value, "[ ]", newStr);
};

/**
 * 替换字符串中回车换行字符
 * @param value
 * @param oldStr
 * @param newStr
 */
export const replaceAllEnter = (value: string, newStr: string = ""): string => {
    return replaceAll(value, "[\r\n]", newStr);
};

export default {
    replaceAll,
    replaceAllEmpty,
    replaceAllEnter,
};
