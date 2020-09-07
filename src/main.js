import Vue from "vue";
import App from './components/App.vue';
import anime from 'animejs/lib/anime.es.js';
import router from './routers/index';
// import './assets/sass/_anime.scss';
// import { store } from './store/index';

Vue.prototype.$anime = anime;
new Vue({
  render: h => h(App),
  router
}).$mount('#app');