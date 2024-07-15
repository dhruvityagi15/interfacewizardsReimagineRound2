window.addEventListener('load', function() {
    Loading();
});

function Loading(){
    tl = gsap.timeline();
    tl.from('.ball',{
        duration: 2,
        y: -1000,
        ease: 'bounce',
        strength: 0.9,
        squash: 5,
        squashID: "myBounce-squash",
    })
    .to('.ball',{
        width: 1000,
        height:7,
        ease: "power4.out",
        duration:0.7,
        delay:0.3
    })
    .to('.ball',{
        y:200,
        duration:  0.5,
        ease: 'power4.out',
        opacity: 0,
        delay: 0.5
    },'a')
    .to('.loading_text',{
        height:200,
        duration: 0.5,
        delay: 0.5
    },'a')
}