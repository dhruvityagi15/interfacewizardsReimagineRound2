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

document.querySelector('#roundedpage').addEventListener('mousemove', (e) => {
  cursor.innerHTML = `What are we`
})
document.querySelector('#roundedpage').addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
})


document.querySelector('#our_collection').addEventListener('mousemove', (e) => {
  cursor.innerHTML = `Our Collection`
})
document.querySelector('#our_collection').addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
})


document.querySelector('#Pick_a_Mood').addEventListener('mousemove', (e) => {
  cursor.innerHTML = `Pick a Mood`
})
document.querySelector('#Pick_a_Mood').addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
})

document.querySelector('#Shop_The_Look').addEventListener('mousemove', (e) => {
  cursor.innerHTML = `Shop The Look`
})
document.querySelector('#Shop_The_Look').addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
})

document.querySelector('#New_For_You').addEventListener('mousemove', (e) => {
  cursor.innerHTML = `New For You`
})
document.querySelector('#New_For_You').addEventListener('mouseleave', (e) => {
  cursor.innerHTML = `LittleBox`
})


document.querySelectorAll('.images').forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    cursor.innerHTML = `Shop Now`;
  });
  
  image.addEventListener('mouseleave', (e) => {
    cursor.innerHTML = `LittleBox`;
  });
});

const videoDiv = document.querySelectorAll('.videoDiv ');

videoDiv.forEach((image) => {
  image.addEventListener('mouseenter', (e) => {
    document.querySelector('.videoDiv img').classList.add("hidden");
  });

  image.addEventListener('mouseleave', (e) => {
    document.querySelector('.videoDiv img').classList.remove("hidden");
  });
});

const videoDiv2 = document.querySelectorAll('.videoDiv2 ');

videoDiv2.forEach((image) => {
  image.addEventListener('mouseenter', (e) => {
    document.querySelector('.videoDiv2 img').classList.add("hidden");
  });

  image.addEventListener('mouseleave', (e) => {
    document.querySelector('.videoDiv2 img').classList.remove("hidden");
  });
});



