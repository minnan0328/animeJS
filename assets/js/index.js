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
    translateX: anime.stagger(10, {
        grid: [5, 5],
        from: 'center',
        axis: 'x'
    }),
    translateY: anime.stagger(10, {
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