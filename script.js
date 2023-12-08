const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl= gsap.timeline()
tl.to(".page1",{
        y:"120vh",
        scale:.5,
        duration:0
})
tl.to(".page1",{
        y:"0vh",
        duration:1,
        scale:.5
})
tl.to(".page1",{
    rotate:360,
    scale:1,
    duration:1
})

