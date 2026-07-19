//#region src/Checker/index.d.ts
declare const _default: {
  handleCNStr: (str: string | null) => string;
  handleCNSubstr: (str: string | null, maxLen: number) => string;
  checkStrMatch: (str: string | null) => boolean;
  xcReg: {
    check(value: string, format: RegExp): boolean;
  };
  checkNumMatch: (str: string | null) => boolean;
  checkCnMatch: (str: string | null) => boolean;
  checkEnMatch: (str: string | null) => boolean;
  checkEnNumMatch: (str: string | null) => boolean;
  checkCnEnNumMatch: (str: string | null) => boolean;
  checkEnJointMatch: (str: string | null) => boolean;
  checkEnJointMatch2: (str: string | null) => boolean;
  checkUrl: (str: string | null) => boolean;
  checkEmail: (str: string | null) => boolean;
};
//#endregion
//#region src/LocalStorage/index.d.ts
declare const _default$6: {
  getItem: (key: string, initialValue?: any) => any;
  setItem: (key: string, value: any, timeout?: number) => void;
  removeItem: (key: string) => void;
};
//#endregion
//#region src/Crypto/index.d.ts
declare const _default$1: {
  aesEncrypt: (word: string, encryptKey: string) => any;
  aesDecrypt: (word: string, decryptKey: string) => any;
  base64Encode: (str: string) => any;
  base64Decode: (str: string) => any;
};
//#endregion
//#region src/Download/index.d.ts
/**
 * 下载一个URL地址返回的内容到本地文件
 * @param url 请求地址
 * @param data 参数
 * @param method 方法类型
 * @returns
 */
declare function download(url: string, data: any, method?: string, headers?: {}): Promise<unknown>;
declare const _default$3: {
  downloadFile: (content: any, filename: string) => void;
  download: typeof download;
  downloadUrl: (url: string, {
    target
  }?: {
    target?: string | undefined;
  }) => void;
  exportCSV: (fileName: string, columns: Array<[string, string]>, data: Array<any>) => void;
};
//#endregion
//#region src/Is/index.d.ts
declare const _default$5: {
  isNumber: (value: any) => boolean;
  isString: (value: any) => boolean;
  isEmpty: (value: any) => boolean;
  isPromise: (obj: any) => boolean;
  isJSON: (json: string) => boolean;
  isUrl: (url: string, type?: "http" | "ftp" | "https") => boolean;
};
//#endregion
//#region src/String/index.d.ts
declare const _default$8: {
  replaceAll: (value: string, oldStr: string, newStr?: string) => string;
  replaceAllEmpty: (value: string, newStr?: string) => string;
  replaceAllEnter: (value: string, newStr?: string) => string;
};
//#endregion
//#region src/Date/index.d.ts
declare const _default$2: {
  format: (date: Date, format?: string) => string;
  doubleDigital: (value: number) => string;
  formatTime: (current: Date) => string;
  sleep: (ms: number) => Promise<any>;
  daysOfMonth: (current: Date) => number;
  reverse: (date: string, format?: string) => Date | null;
};
//#endregion
//#region src/Number/index.d.ts
declare const _default$7: {
  tryParse: (input: string | null, defaultOutput?: number) => number;
  thousandSeparator: (num: number) => string;
  toFixed: (n: number, fixed: number) => number;
};
//#endregion
//#region src/Enum/enumOf.d.ts
type ValueOf<T> = T[keyof T];
type EnumOfValue = string | number | boolean;
type EnumOfStringOrGetter = string | (() => string);
type EnumOfValueObject = {
  value: EnumOfValue;
  label?: EnumOfStringOrGetter;
  description?: EnumOfStringOrGetter;
};
type EnumOfConfigValue = EnumOfValue | (EnumOfValueObject & Record<string, unknown>);
type EnumOfNormalizeToOption<V> = V extends {
  value: unknown;
} ? V : {
  value: V;
  label?: EnumOfStringOrGetter;
  description?: EnumOfStringOrGetter;
};
type EnumOfResolvedField<V> = V extends ((...args: any[]) => infer R) ? R : V;
type EnumOfResolvedOption<O> = O extends unknown ? { [K in keyof O]: EnumOfResolvedField<O[K]> } : never;
type EnumOfExtractOptionShape<T extends Record<string, EnumOfConfigValue>> = EnumOfResolvedOption<EnumOfNormalizeToOption<ValueOf<T>>>;
type EnumOfExtractValues<T extends object> = { [P in keyof T]: T[P] extends {
  value: infer V;
} ? V : T[P] };
type EnumOfKeyForValue<T extends object, V> = { [K in keyof T]: EnumOfExtractValues<T>[K] extends V ? (V extends EnumOfExtractValues<T>[K] ? K : never) : never }[keyof T];
type EnumOfOptionForValue<T extends Record<string, EnumOfConfigValue>, Value> = Value extends infer V ? EnumOfKeyForValue<T, V> extends keyof T ? EnumOfResolvedOption<EnumOfNormalizeToOption<T[EnumOfKeyForValue<T, V>]>> : EnumOfExtractOptionShape<T> : never;
type EnumOfResultMethods<V, T extends Record<string, EnumOfConfigValue>> = {
  values(): V[];
  label(v: V): string;
  labels(): string[];
  description(v: V): string;
  descriptions(): string[];
  option<Value extends V>(v: Value): EnumOfOptionForValue<T, Value>;
  options(): EnumOfExtractOptionShape<T>[];
};
type EnumOfResult<T extends Record<string, EnumOfConfigValue>> = EnumOfExtractValues<T> & EnumOfResultMethods<ValueOf<EnumOfExtractValues<T>>, T>;
//#endregion
//#region src/Enum/index.d.ts
declare const _default$4: {
  enumOf<const T extends Record<string, EnumOfConfigValue>>(config: T): EnumOfResult<T>;
};
//#endregion
export { _default as Checker, _default$1 as Crypto, _default$2 as DateX, _default$3 as Download, _default$4 as EnumX, _default$5 as Is, _default$6 as LocalStorage, _default$7 as NumberX, _default$8 as StringX };