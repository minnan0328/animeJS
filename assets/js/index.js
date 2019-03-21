anime({
    targets: '.div1',
    translateX: 50,
    rotate: '1turn',
    loop: true,
    backgroundColor: '#fff',
    duration: 800
})
anime({
    targets: '.div2',
    translateX: 50,
    // direction: 'reverse',
    loop: true,
    easing: 'easeInOutSine'
})
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
    loop: true
});
anime({
    targets: '.div5',
    translateX: 50,
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    loop: true
});