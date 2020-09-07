<template src="./Anime.html"></template>
<style lang="scss" scoped>
@import './Anime.scss';
</style>

<script>
// particlesJS.load('particles', './../../../static/data/particlesjs-config.json', function () {
//     // console.log('callback - particles.js config loaded');
// });
export default {
  name: 'anime',
  data() {
    return {};
  },
  computed: {
    points: () => {
      let point = [];
      for (var i = 0; i <= 24; i++) {
        point.push(i);
      }
      return point;
    },
  },
  mounted() {
    let anime = this.$anime;
    var path = anime.path('.path');
    anime({
      targets: '.drop',
      translateY: 300,
      rotate: '45deg',
      borderTopRightRadius: ['0%', '50%'],
      borderBottomRightRadius: ['0%', '50%'],
      borderBottomLeftRadius: ['0%', '50%'],
      backgroundColor: '#000',
      endDelay: 100,
      easing: 'easeInOutQuad',
      loop: true
    });

    anime({
      targets: '.point',
      translateX: anime.stagger(70, {
        grid: [5, 5],
        from: 'center',
        axis: 'x',
      }),
      translateY: anime.stagger(70, {
        grid: [5, 5],
        from: 'center',
        axis: 'y',
      }),
      rotateZ: anime.stagger([0, 90], {
        grid: [5, 5],
        from: 'center',
        axis: 'x',
      }),
      delay: anime.stagger(200, {
        grid: [5, 5],
        from: 'center',
      }),
      easing: 'easeInOutQuad',
      endDelay: 1000,
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: '.Gradient',
      translateY: 5,
      loop: true,
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      },
      backgroundColor: '#FFF'
    });

    let RhythmNum = [];
    let ConcentricNum = [];
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (var i = 0; i <= 15; i++) {
			RhythmNum.push(getRandom(30, 50) + '%');
			ConcentricNum.push(getRandom(20, 50) + '%');
    }

    anime({
      targets: '.Rhythm',
      translateX: 0,
      borderRadius: RhythmNum,
      easing: 'easeInOutQuad',
      loop: true
    });

    anime({
      targets: '.Concentric',
      translateX: 0,
      borderRadius: ConcentricNum,
      easing: 'easeInOutQuad',
      loop: true
		});

    anime({
      targets: '.cssTransforms',
      translateX: 0,
      scale: 1,
      rotate: '100turn',
      skew: 1000,
      easing: 'easeInOutQuad',
      loop: true,
		});	

    anime({
      targets: '.SpecificPropParams',
      translateX: {
        value: 150,
        duration: 800,
      },
      rotate: {
        value: 720,
        duration: 1800,
        easing: 'easeInOutSine',
      },
      scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart',
      },
      backgroundColor: '#FFF',
      direction: 'alternate',
      delay: 250,
      endDelay: 1000,
      loop: true
		});
		
    anime({
      targets: '.polymorph',
      points: [
        {
          value: '73.5,71.5 49.5,44.5 44.5,86.5 79.5,104.5 129.91,82.88',
        },
        {
          value: '90.5,39.5 60.5,57.5 35.5,88.5 78.5,118.5 108.5,81.5',
        },
        {
          value: '90.5,39.5 35.5,28.5 79.5,70.5 79.5,127.5 115.5,79.5',
        },
        {
          value: [
            '90.5,39.5 35.5,28.5 79.5,70.5 79.5,127.5 115.5,79.5',
            '73.5,71.5 49.5,44.5 44.5,86.5 79.5,104.5 129.91,82.88',
            '90.5,39.5 60.5,57.5 35.5,88.5 78.5,118.5 108.5,81.5',
          ],
        },
        {
          value: '102.5,21.5 54.5,46.5 51.5,82.5 81.5,98.5 115.5,79.5',
        },
        {
          value: '95.5,37.5 48.5,40.5 37.5,85.5 78.5,118.5 115.5,79.5',
        },
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
		});
		
    anime({
      targets: '.FunctionBasedValues',
      translateX: el => {
        return el.getAttribute('data-x');
      },
      translateY: (el, i) => {
        return 3 + 3 * i;
      },
      scale: (el, i, l) => {
        return l - i - i;
      },
      rotate: () => {
        return anime.random(-360, 360);
      },
      borderRadius: () => {
        return ['50%', anime.random(50, 50) + '%'];
      },
      duration: () => {
        return anime.random(1200, 1800);
      },
      delay: () => {
        return anime.random(0, 400);
      },
      skew: (el, l, i) => {
        return l - i * anime.random(0, 10);
      },
      // direction: 'alternate',
      easing: 'easeInOutBack',
      loop: true
		});
		
    anime({
      targets: '.StepEasing',
      translateX: [
        {
          value: 330,
          duration: 1000,
          delay: 0,
        },
        {
          value: 0,
          duration: 1000,
          delay: 1000,
        },
      ],
      translateY: [
        {
          value: 330,
          duration: 1000,
          delay: 1000,
        },
        {
          value: 0,
          duration: 1000,
          delay: 1000,
        },
      ],
      loop: true
		});
		
    // anime({
    //   targets: '.st2min',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInOutSine',
    //   duration: 1500,
    //   delay: function(el, i) {
    //     return i * 250;
    //   },
    //   direction: 'alternate',
    //   delay: 500,
    //   endDelay: 500,
    //   loop: true,
		// });
		
    anime({
      targets: '.pathRect',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      direction: 'alternate',
      duration: 2000,
      loop: true,
    });
  },
};
</script>
