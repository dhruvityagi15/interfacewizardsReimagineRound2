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
    scrollanimation();
    menutext_animation();
    teamworks();
    images_zoomer();
}

function menu_func() {
    var menu = document.querySelector('#menu');
    var tl = gsap.timeline({ paused: true }); // Initialize timeline paused
    
    // Animate the nav element from outside the window to its final position
    tl.to('.full', {
        right: '0%', // Final position
        borderRadius: '0%', // Final border-radius
        duration: 1.2, // Duration of the animation
        ease: 'power4.in', // Easing function for smooth animation
    });

    // Animate each h4 element within the nav
    tl.from('.full h4', {
        x: 100,
        stagger: 0.24,
        duration: 0.6,
        opacity: 0,
    }, '-=0.3'); // Overlap animations for a smoother effect

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

function menutext_animation(){
    // menutext animation
    document.querySelectorAll('.menu_item').forEach(function(menuItem) {
        menuItem.addEventListener('mouseover', function() {
            gsap.to(menuItem, {
                borderBottomWidth: "2px", // Adjust the width as needed
                duration: 0.3,
                ease: "power3.out"
            });
        });
    
        menuItem.addEventListener('mouseout', function() {
            gsap.to(menuItem, {
                borderBottomWidth: "0px",
                duration: 0.3,
                ease: "power3.out"
            });
        });
    });

}


function home_animation(){
    const myText = new SplitType('#home_text',{types:'words'})
    
    gsap.from('.word',{
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
function scrollanimation(){
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.Whyus h1', {
        transform: 'translateX(-60%)',
        scrollTrigger: {
            trigger: '.Whyus ',
            scroller: 'body',
            // markers: true,
            start: 'top 0%',
            end:"top -150%",
            scrub: 2,
            pin: true,
        }
    });
}

function teamworks() {
    document.querySelectorAll(".listlem").forEach(function (el) {
      el.addEventListener("mousemove", function (dets) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
          ease: Power4,
          duration: 0.25,
        });
      });
  
      el.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 0,
          ease: Power4,
          duration: 0.25,
        });
      });
    });
  }

function images_zoomer() {
    // Select all images with the class 'images'
    var images = document.querySelectorAll('.images');

    // Iterate over each image and add event listeners for mouseenter and mouseleave
    images.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            gsap.to(image, {
                scale: 1.2,
                duration: 0.5,
                ease: "power4.out"
            });
        });

        image.addEventListener('mouseleave', function() {
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: "power4.out"
            });
        });
    });
}

function page2text_animation(){
    
}


