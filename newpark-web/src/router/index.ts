/*
 * @Author: xxs
 * @Date: 2024-02-18 13:40:01
 * @LastEditTime: 2024-02-20 17:36:14
 * @FilePath: \webview\newpark-web\src\router\index.ts
 * @Description: desc
 */

import { createRouter, createWebHistory } from 'vue-router'
import Music from '../components/Music.vue'
import Video from '../components/Video.vue'

const routs = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routs
})

export default router
