var main = document.querySelector('.main')
var cursor = document.querySelector('.cursor');
var overlay = document.querySelector(".overlay")

main.addEventListener('mousemove', (e) => {
  
    gsap.to(cursor, {
        height:'100',
        width:'100',
        x: e.x-10,
        y: e.y-10,
        stagger: -0.1,
        ease: "back.out",
        background: "#ffffff7c",
    });
});
main.addEventListener('mouseleave', (e) => {
  cursor.innerHTML = ``
  cursor.classList.add("hidden")
  cursor.classList.remove("flex")
  gsap.to(cursor, {
    height:'0',
    width:'0',
  })
})
main.addEventListener('mouseenter', (e) => {
  cursor.innerHTML = `Littlebox`
  cursor.classList.remove("hidden")
  cursor.classList.add("flex")
  gsap.to(cursor, {
    height:'100',
    width:'100',
  })
})

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


