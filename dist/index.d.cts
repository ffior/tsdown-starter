//#region src/Is/index.d.ts
declare const _default$1: {
  isNumber: (value: any) => boolean;
  isString: (value: any) => boolean;
  isEmpty: (value: any) => boolean;
  isPromise: (obj: any) => boolean;
  isJSON: (json: string) => boolean;
  isUrl: (url: string, type?: "http" | "ftp" | "https") => boolean;
};
//#endregion
//#region src/String/index.d.ts
declare const _default$3: {
  replaceAll: (value: string, oldStr: string, newStr?: string) => string;
  replaceAllEmpty: (value: string, newStr?: string) => string;
  replaceAllEnter: (value: string, newStr?: string) => string;
};
//#endregion
//#region src/Date/index.d.ts
declare const _default: {
  format: (date: Date, format?: string) => string;
  doubleDigital: (value: number) => string;
  formatTime: (current: Date) => string;
  sleep: (ms: number) => Promise<any>;
  daysOfMonth: (current: Date) => number;
  reverse: (date: string, format?: string) => Date | null;
};
//#endregion
//#region src/Number/index.d.ts
declare const _default$2: {
  tryParse: (input: string | null, defaultOutput?: number) => number;
  thousandSeparator: (num: number) => string;
  toFixed: (n: number, fixed: number) => number;
};
//#endregion
export { _default as DateX, _default$1 as Is, _default$2 as NumberX, _default$3 as StringX };