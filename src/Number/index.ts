/**
 * @file 整形对象操作类
 * @author atding(atding@ffior.com)
 */

/**
 * 转换数字型函数
 * @param input
 * @param defaultOutput
 */
export const tryParse = (
    input: string | null,
    defaultOutput?: number,
): number => {
    if (!input) {
        return defaultOutput || 0;
    }
    const output = parseInt(input, 10);
    return isNaN(output) ? defaultOutput || 0 : output;
};

/**
 * 将数字转换为按千进位逗号分隔的字符串
 * @param num
 */
export const thousandSeparator = (num: number): string => {
    let prefix: string = "";
    if (num < 0) {
        num *= -1;
        prefix = "-";
    }
    const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
    const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
    const str: string = num
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
export const toFixed = (n: number, fixed: number) =>
    ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

export default {
    tryParse,
    thousandSeparator,
    toFixed,
};
