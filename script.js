// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true,
//     lerp: 0.04
// });
// new ResizeObserver(() => scroll.update()).observe(document.querySelector('main'));
function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
    lerp: 0.04
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

gsap.to(".sticker", {
    rotation: 360,         // Full rotation
    duration: 5,           // Time for one rotation (in seconds)
    repeat: -1,            // Infinite loop
    ease: "linear",        // Smooth constant speed
    background: "linear-gradient(219deg, rgba(157,78,221,1) 8%, rgba(255,255,255,1) 100%)", // Swap the colors
    yoyo: true,            // Reverses the animation back and forth
    backgroundPosition: "100%", // Animate the background position
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();




// function menu(){
//     let flag = 0;
//     const close = document.querySelector(".ri-close-line"); 
//     const menuPage = document.querySelector(".menus"); 
//     const menu = document.querySelector("nav .menu"); 

//     menu.addEventListener('click',()=>{
//         console.log(flag);
//         if(flag == 0){
//             menuPage.style.left = "0";
//             flag = 1;
//         }
        
//     })
//     close.addEventListener('click',()=>{
//         console.log(flag);
//         if(flag == 1){
//             menuPage.style.left = "-100%";
//             flag = 0;
//         }
//     })
// }
// menu();



function menu() {
    let flag = 0;
    const close = document.querySelector(".ri-close-line");
    const menuPage = document.querySelector(".menus");
    const menu = document.querySelector("nav .menu");

    // // Set initial position of the menuPage off-screen
    // gsap.set(menuPage, { left: "-100%" });

    menu.addEventListener('click', () => {
        console.log(flag);
        if (flag == 0) {
            // Use GSAP to animate the menuPage sliding in
            gsap.to(menuPage, { 
                duration: 1.5,
                left: "0%", 
                ease: "elastic.out(1,0.6)",
            });
            flag = 1;
        }
    });

    close.addEventListener('click', () => {
        console.log(flag);
        if (flag == 1) {
            // Use GSAP to animate the menuPage sliding out
            gsap.to(menuPage, { 
                duration: 1.5, 
                left: "-100%", 
                ease: "elastic.out(1,0.6)",
            });
            flag = 0;
        }
    });
}

menu();



const videos = [
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3')
];

videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
        if (index < videos.length - 1) {
            videos[index + 1].play();
        } else {
            videos[0].play();
        }
    });
});

// Start playing the first video automatically
videos[0].play();

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}


var rotate = 0;
var diffrot = 0;

document.querySelectorAll(".skill").forEach(function(elem){

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector(".skill img"),{
            opacity: 0,
            ease: Power3,
            duration: .5,
        });
    });

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector(".skill img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot * 0.5),
        });
    });
});

circleMouseFollower();

document.querySelectorAll(".reveal").forEach(function(elem){
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.textContent = elem.textContent;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
})

var t1 = gsap.timeline();

t1.from("nav",{
    y: -30,
    duration: 1.5,
    opacity: 0
})
t1.to(".herosection .conts .dot", {
    y: "-200%",
    duration: 1
},"same")
t1.to(".herosection .conts .conts-1", {
    x: "-100%",
    duration: 5,
    backgroundColor: "#283618"
},"same")
t1.to(".herosection .conts .conts-2", {
    x: "100%",
    duration: 5,
    backgroundColor: "#283618"
},"same")
t1.from(".herosection .h2-1", {
    y: "50%",
    duration: 2,
    stagger: 1,
    opacity: 0,
    delay: -2
},"h21")
t1.from(".herosection .h2-2", {
    y: "-50%",
    duration: 2,
    stagger: 1,
    opacity: 0,
    delay: -2
},"h21")
t1.to(".herosection h2 span", {
    fontSize: "7vw",
    color: "#a8bd64",
    delay: -1
})

var t2 = gsap.timeline();

// var t2 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".About",
//         scroller: "main",
//         markers: true,
//         start: "top 50%",
//         end: "top -80%",
//         scrub: 2
//     }
// })

gsap.from(".About h1 .child",{
    y: "-150%",
    duration: 2,
    ease: Expo.easeInOut,
    opacity: 0,
    delay: -1,
    scrollTrigger:{
        trigger: ".About h1",
        scrub:2,
        scroller: "main",
        // markers: true,
        start: "top 200%",
    }
})
gsap.from(".About p",{
    color: "#fefae0",
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".About p",
        scroller: "main",
        scrub:2,
        // markers: true,
        start: "top 180%",
    }
})
gsap.from(".Services .heading h1 .child",{
    y: "-100%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".heading h1",
        scroller: "main",
        scrub:2,
        start: "top 170%",
    }
})
gsap.from(".Services .heading p .child",{
    y: "-100%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".heading h1",
        scroller: "main",
        scrub:2,
        start: "top 170%",
    }
})
gsap.from(".Projects h1 .child",{
    y: "100%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".Projects",
        scroller: "main",
        scrub:2,
        start: "top 300%",
    }
})



gsap.from(".Footer .content",{
    y: "-30%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".Footer",
        scroller: "main",
        scrub:2,
        start: "top 150%",
    }
})
gsap.from(".Footer .foot",{
    y: "-200%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".Footer",
        scroller: "main",
        scrub:2,
        start: "top 150%",
    }
})



