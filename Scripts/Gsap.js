// Debounce function to ensure click events are handled once within a certain timeframe
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

window.addEventListener('load', function() {
    // Loading();
    init();
});
gsap.registerPlugin(ScrollTrigger);

function Loading() {
    var tl = gsap.timeline();
    
    tl.from('.ball', {
        duration: 2,
        y: -1000,
        ease: 'bounce',
        strength: 0.9,
        squash: 5,
        squashID: "myBounce-squash",
    })
    .to('.ball', {
        width: 1000,
        height: 7,
        ease: "power4.out",
        duration: 0.7,
        delay: 0.3
    })
    .to('.ball', {
        y: 200,
        duration: 0.5,
        ease: 'power4.out',
        opacity: 0,
        delay: 0.5
    }, 'a')
    .to('.loading_text', {
        height: 200,
        duration: 0.5,
        delay: 0.5,
        onComplete: function() {
            tl.kill();
            init();
        }
    }, 'a');
}

function init(){
    document.querySelector(".Loading").classList.add("hidden");
    document.querySelector(".main").classList.remove("hidden");

    menu_func();
}

function menu_func(){
    var menu = document.querySelector('#menu');
    var tl = gsap.timeline({ paused: true }); // Initialize timeline paused
    
    tl.to('.full', {
        right: 0,
        duration: 0.6,
        ease: 'power4.in',
    });
    tl.from('.full h4', {
        x: 100,
        stagger: 0.24,
        duration: 0.6,
        opacity: 0,
    });
    
    menu.addEventListener('click', debounce(function() {
        if (!tl.isActive()) { // Check if timeline is not actively animating
            if (tl.progress() === 1) {
                tl.reverse();
                console.log('Menu closed');
            } else {
                tl.play();
                console.log('Menu opened');
            }
        }
    }, 300)); // Adjust debounce delay as needed (e.g., 300ms)
}

function home(){
    gsap.to('.main_image', {
        scrollTrigger: {
            trigger: '.main_image',
            scroller:'.home',
            start: 'center 90%',
            end: 'center 10%',
            scrub: 1,
            markers: true,
        },
        opacity: 0,
    });
}

