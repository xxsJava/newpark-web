/*
 * @Author: xxs
 * @Date: 2024-02-18 13:40:01
 * @LastEditTime: 2024-02-20 17:25:03
 * @FilePath: \webview\newpark-web\src\main.ts
 * @Description: desc
 */
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 导入视频播放组件
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 视频播放组件
app.use(VueVideoPlayer)
app.mount('#app')
