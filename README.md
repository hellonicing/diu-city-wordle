# diu-city-wordle

diu 的 cityWordle 项目练习与学习记录

`npm run dev` 启动项目

1.安装 vite-unocss
`npm install -D unocss` 
2.在 vite.config.ts 中导入 plugins 
```js
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";

plugins: [
  vue(),
  UnoCSS({
    presets: [presetUno(), presetAttributify()],
  }),
],
```
3.在 main.ts 中导入 css 文件
`import "virtual:uno.css";`
