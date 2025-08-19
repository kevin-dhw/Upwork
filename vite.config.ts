import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置scss
  resolve: {
    alias: {
      '@': '/src', // 设置 '@' 别名指向项目根目录下的 src 文件夹
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这里需要改，引入自己想要的
        // additionalData: `$injectedColor: orange;`,
        // additionalData: '@import "./src/styles/sassConfig.scss";',
      },
    },
  },
});
