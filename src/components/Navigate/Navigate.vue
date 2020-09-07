<template src="./Navigate.html"></template>
<style lang="scss" scoped>
  @import './Navigate.scss';
</style>

<script>
import {ComponentRouters} from './../../routers/index.js';
export default {
  name: 'Navigate',
  data(){
    return {}
  },
  computed:{
    routers (){return ComponentRouters}
  },
  mounted(){
    let anime = this.$anime;
      anime({
        targets: '.st2min',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) {
            return i * 250
        },
        direction: 'alternate',
        delay: 500,
        endDelay: 500,
        loop: true
    });
  }
}
</script>
