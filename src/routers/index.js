"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue';
import Anime from '@/components/Anime/Anime.vue';
import CSSMotionGraphics from '@/components/CSSMotionGraphics/CSSMotionGraphics.vue';
Vue.use(VueRouter)

const root = { path: '/', redirect: '/anime' }
export const ComponentRouters = [
  { path: '/home', component: Home, name: 'Home' },
  { path: '/anime', component: Anime, name: 'AnimeJS' },
  { path: '/CSS_Motion_Graphics', component: CSSMotionGraphics, name: 'CSS Motion Graphics'}
]

export default new VueRouter({
  routes: [root].concat(ComponentRouters),
  mode: 'history',
  linkActiveClass: 'active'
})