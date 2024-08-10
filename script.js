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


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();










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
    fontSize: "5vw",
    color: "#a8bd64",
    delay: 1
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