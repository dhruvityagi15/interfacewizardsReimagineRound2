// Debounce function to ensure click events are handled once within a certain timeframe
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

window.addEventListener('load', function() {
    Loading();
    // init();
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
    }, 'a')
    .to('.Loading', {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            tl.kill();
            init();
        }
    })
}

function init(){
    document.querySelector(".Loading").classList.add("hidden");
    document.querySelector(".main").classList.remove("hidden");

    menu_func();
    home_animation();
    string_func();
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

// menutext animation

function home_animation(){
    const myText = new SplitType('#home_text',{types:'words'})
    
    gsap.from('.word',{
        // y: 10,
        // stagger: 0.2,
        duration: 1,
        opacity: 0,
    })
}

function string_func(){
    var Path = `M 70 100 Q 650 100 1250 100`
    var finalPath = `M 70 100 Q 650 100 1250 100`
    
    var string = document.querySelector(".string")
    
    string.addEventListener("mousemove", function(elm) {
        var rect = elm.target.getBoundingClientRect();
        var y = elm.clientY ; // Get the y coordinate relative to the element
        var a = y - 200; // Adjust this value to control the amplitude of the vibration
        Path = `M 70 100 Q ${elm.x} ${a} 1250 100`;
        
        gsap.to('.flicker path', {
            attr: {
                d: Path
            },
            duration: 0.2,
            ease: "elastic.out(1,0.2)"
        });
    });
    
    string.addEventListener("mouseleave", function() {
        Path = finalPath;
        
        gsap.to('.flicker path', {
            attr: {
                d: Path
            },
            duration: 0.5,
            ease: "bounce.out"
        });
    });

}


