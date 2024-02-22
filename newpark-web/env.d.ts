/*
 * @Author: xxs
 * @Date: 2024-02-18 13:40:01
 * @LastEditTime: 2024-02-20 17:35:58
 * @FilePath: \webview\newpark-web\env.d.ts
 * @Description: desc
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}