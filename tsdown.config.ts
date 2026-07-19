import { defineConfig } from "tsdown";

export default defineConfig({
    entry: "./src/index.ts", // 指定打包入口
    format: ["esm", "cjs"], // 同时输出 ESM 和 CommonJS 两种格式
    dts: true, // 自动生成 .d.ts 类型声明文件
    target: "esnext", // 编译目标为最新 ES 标准
    // 声明外部依赖，不参与打包
    // external: ["react", "react-dom", "echarts"],
});
