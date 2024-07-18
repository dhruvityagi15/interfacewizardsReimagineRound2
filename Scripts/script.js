var main = document.querySelector('.main')
var cursor = document.querySelector('.cursor');
var overlay = document.querySelector(".overlay")

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

overlay.addEventListener('mouseenter', (e) => {
  cursor.innerHTML = `Shop now`
  gsap.to(cursor, {
    scale:2
  });
});
overlay.addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
  gsap.to(cursor, {
    scale:1
  });
});


