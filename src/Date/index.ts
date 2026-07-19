/**
 * @file 日期操作方法
 * @author atding(atding@ffior.com)
 */

/**
 * 格式化字符串
 * @param date 待格式化的日期对象
 * @param format 格式 yyyy-代表年，MM-代表月，dd-代表日，hh-代表小时，mm-代表分钟，ss-代表秒数 -是可替换字符
 */
export const format = (date: Date, format?: string) => {
    format = format || "yyyy-MM-dd";
    const map: Record<string, number> = {
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
export const doubleDigital = (value: number): string => {
    const val: number = Math.abs(value);
    let result: string = val > 9 ? String(val) : "0" + val;
    result = value >= 0 ? result : "-" + result;
    return result;
};

/**
 * 格式化时间为整刻度时间，如：0  15  30  45
 * @param current 待格式时间对象
 */
export const formatTime = (current: Date): string => {
    const minute: number = current.getMinutes();
    let endMinute: number = 0;

    if (minute >= 0 && minute <= 15) {
        endMinute = 0;
    } else if (minute > 15 && minute <= 30) {
        endMinute = 15;
    } else if (minute > 30 && minute <= 45) {
        endMinute = 30;
    } else {
        endMinute = 45;
    }
    return doubleDigital(endMinute);
};

/**
 * 暂停函数，负责暂停当前线程时间
 * @param ms 毫秒
 */
export const sleep = (ms: number): Promise<any> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 获取当前月的天数
 */
export const daysOfMonth = (current: Date): number => {
    const year: number = current.getFullYear();
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
            // 闰年判断
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return 29;
            } else {
                return 28;
            }
    }
    // 默认31
    return 31;
};

/**
 * 逆向方法，将字符串格式转为Date对象
 * @param date 日期字符串
 * @param format 字符串格式（支持：yyyy-MM-dd，yyyy-MM-dd hh:mm:ss，yyyy/MM/dd hh:mm:ss，yyyyMMddhhmmss）
 */
export const reverse = (
    date: string,
    format: string = "yyyy-MM-dd",
): Date | null => {
    if (format.includes("-")) {
        const dateString: string = date.replace(/-/g, "/");
        return new Date(dateString);
    } else if (format.includes("/")) {
        return new Date(date);
    } else if (format === "yyyyMMdd") {
        const newDate: string[] = [];
        newDate.push(date.substr(0, 4));
        newDate.push(date.substr(4, 2));
        newDate.push(date.substr(6, 2));
        return new Date(newDate.join("/"));
    } else if (format === "yyyyMMddhhmmss") {
        const newDate: string[] = [];
        newDate.push(date.substr(0, 4));
        newDate.push(date.substr(4, 2));
        newDate.push(date.substr(6, 2));
        const newTime: string[] = [];
        newTime.push(date.substr(8, 2));
        newTime.push(date.substr(10, 2));
        newTime.push(date.substr(12, 2));
        return new Date(`${newDate.join("/")} ${newTime.join(":")}`);
    } else {
        return null;
    }
};

export default {
    format,
    doubleDigital,
    formatTime,
    sleep,
    daysOfMonth,
    reverse,
};
