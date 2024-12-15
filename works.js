function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
        lerp: 0.07
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    gsap.to(".sticker", {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        yoyo: true,
        backgroundPosition: "100%"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();

function menu() {
    let flag = 0;
    const close = document.querySelector(".ri-close-line");
    const menuPage = document.querySelector(".menus");
    const menu = document.querySelector("nav .menu");

    menu.addEventListener("click", () => {
        if (flag === 0) {
            gsap.to(menuPage, {
                duration: 1.5,
                left: "0%",
                ease: "elastic.out(1, 0.6)"
            });
            flag = 1;
        }
    });

    close.addEventListener("click", () => {
        if (flag === 1) {
            gsap.to(menuPage, {
                duration: 1.5,
                left: "-100%",
                ease: "elastic.out(1, 0.6)"
            });
            flag = 0;
        }
    });
}

menu();

function circleMouseFollower() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();

// Get all video elements inside the swiper container
const videos = document.querySelectorAll(".mySwiper video");

// Prevent Swiper's interaction while clicking or interacting with videos
videos.forEach((video) => {
    // Disable Swiper interaction when clicking on the video
    video.addEventListener("touchstart", (e) => {
        e.stopPropagation();
        video.closest(".swiper-container").swiper.allowTouchMove = false;
    });
    video.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        video.closest(".swiper-container").swiper.allowTouchMove = false;
    });

    // Re-enable Swiper interaction when interaction ends
    video.addEventListener("touchend", () => {
        video.closest(".swiper-container").swiper.allowTouchMove = true;
    });
    video.addEventListener("mouseup", () => {
        video.closest(".swiper-container").swiper.allowTouchMove = true;
    });

    // Toggle play/pause on video click
    video.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent swiper click events
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Optional: Handle video chaining (autoplay next video when current one ends)
videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
        if (index < videos.length - 1) {
            videos[index + 1].play();
        } else {
            videos[0].play(); // Loop back to the first video
        }
    });
});




const button = document.querySelector("button");
const text = document.querySelector("h1");
let buttonFlag = 0;

button.addEventListener("click", () => {
    gsap.to(text, {
        duration: 2.5,
        color: buttonFlag === 0 ? "red" : "black",
        ease: "elastic.out(1, 0.6)"
    });
    buttonFlag = 1 - buttonFlag;
});

const baseSwiperSettings = {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        600: { slidesPerView: 1, spaceBetween: 20 }
    }
};

new Swiper(".mySwiper", Object.assign({}, baseSwiperSettings, {
    breakpoints: {
        ...baseSwiperSettings.breakpoints,
        768: { slidesPerView: 3, spaceBetween: 30 }
    }
}));

new Swiper(".mySwiper-1", Object.assign({}, baseSwiperSettings, {
    breakpoints: {
        ...baseSwiperSettings.breakpoints,
        768: { slidesPerView: 2, spaceBetween: 30 }
    }
}));
const t1 = gsap.timeline();

t1.from("nav", { y: -30, duration: 1.5, opacity: 0 });
t1.from(".page1 h1", { y: -30, duration: 1.5, opacity: 0 });
t1.from(".page1 button", { y: 30, duration: 1.5, delay: -1, opacity: 0 });

gsap.from(".p2-content h1", {
    y: "40%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".page2-contnet",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".p3-content h1", {
    y: "40%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".p3-content",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".p3-content .caption", {
    y: "70%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".caption",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".Footer", {
    backgroudColor: "#dddddd",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 180%"
    }
});
gsap.from(".Footer .content", {
    y: "-30%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 150%"
    }
});

gsap.from(".Footer .foot", {
    y: "-200%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 150%"
    }
});
