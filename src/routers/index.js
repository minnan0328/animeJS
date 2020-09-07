"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue';
import Anime from '@/components/Anime/Anime.vue';
import VisualDifference from '@/components/VisualDifference/VisualDifference.vue';
Vue.use(VueRouter)

const root = { path: '/', redirect: '/anime' }
export const ComponentRouters = [
  { path: '/home', component: Home, name: 'Home' },
  { path: '/anime', component: Anime, name: 'AnimeJS' },
  { path: '/visual_difference', component: VisualDifference, name: 'Visual Difference'}
]

export default new VueRouter({
  routes: [root].concat(ComponentRouters),
  mode: 'history',
  linkActiveClass: 'active'
})