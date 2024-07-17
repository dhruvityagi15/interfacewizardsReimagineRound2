var main = document.querySelector('.main')
var cursor = document.querySelector('.cursor');
var overlay = document.querySelector('.overlay');

main.addEventListener('mousemove', (e) => {
  cursor.innerHTML = `Littlebox`
    gsap.to(cursor, {
        x: e.x-10,
        y: e.y-10,
        stagger: -0.1,
        ease: "back.out",
        background: "#ffffff7c",
    });
});

