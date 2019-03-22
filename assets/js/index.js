anime({
    targets: '.cssSelector',
    translateY: 150,
    rotate: '45deg',
    borderTopRightRadius: ['0%', '50%'],
    borderBottomRightRadius: ['0%', '50%'],
    borderBottomLeftRadius: ['0%', '50%'],
    backgroundColor: '#000',
    endDelay: 1000,
    easing: 'easeInOutQuad',
    loop: true
})
var elements = document.querySelectorAll('.DomNodeSelector');
anime({
    targets: elements,
    translateY: 5,
    loop: true,
    delay: function (el, i, l) {
        return i * 100;
    },
    endDelay: function (el, i, l) {
        return (l - i) * 100;
    },
    backgroundColor: '#FFF',
    // direction: 'alternate'
})
anime({
    targets: '.cssProrerties',
    translateX: 0,
    borderRadius: ['46%','38%','45%', '50%','40%','33%','44%','50%'],
    easing: 'easeInOutQuad',
    loop: true
});
anime({
    targets: '.cssProrerties1',
    translateX: 0,
    borderRadius: ['35%', '50%', '33%', '45%', '50%', '40%', '25%', '50%','47%','33%','41%','50%'],
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
    targets: '.div4',
    translateX: anime.stagger(20, {
        grid: [5, 5],
        from: 'center',
        axis: 'x'
    }),
    translateY: anime.stagger(20, {
        grid: [5, 5],
        from: 'center',
        axis: 'y'
    }),
    rotateZ: anime.stagger([0, 90], {
        grid: [5, 5],
        from: 'center',
        axis: 'x'
    }),
    delay: anime.stagger(200, {
        grid: [5, 5],
        from: 'center'
    }),
    easing: 'easeInOutQuad',
    endDelay: 1000,
    direction: 'alternate',
    loop: true
});
anime({
    targets: '.SpecificPropParamsL',
    translateX: {
        value: 75,
        duration: 800
    },
    rotate: {
        value: 720,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    backgroundColor: '#FFF',
    // easing: 'easeInOutQuad',
    direction: 'alternate',
    delay: 250,
    endDelay: 1000,
    loop: true
});
anime({
    targets: '.polymorph',
    points: [
        {
            value: '73.5,71.5 49.5,44.5 44.5,86.5 79.5,104.5 129.91,82.88'
        },
        {
            value: '90.5,39.5 60.5,57.5 35.5,88.5 78.5,118.5 108.5,81.5'
        },
        {
            value: '90.5,39.5 35.5,28.5 79.5,70.5 79.5,127.5 115.5,79.5'
        },
        {
           value: [
               '102.5,21.5 54.5,46.5 51.5,82.5 81.5,98.5 115.5,79.5',
               '90.5,39.5 35.5,28.5 79.5,70.5 79.5,127.5 115.5,79.5',
               '73.5,71.5 49.5,44.5 44.5,86.5 79.5,104.5 129.91,82.88',
               '90.5,39.5 60.5,57.5 35.5,88.5 78.5,118.5 108.5,81.5',
           ]
        },
        {
            value: '102.5,21.5 54.5,46.5 51.5,82.5 81.5,98.5 115.5,79.5'
        },
        {
            value: '95.5,37.5 48.5,40.5 37.5,85.5 78.5,118.5 115.5,79.5'
        }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
});