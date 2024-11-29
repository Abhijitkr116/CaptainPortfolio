var button = document.querySelector("button");
var text = document.querySelector("h1");
var flag = 0;
button.addEventListener("click",()=>{
    if(flag == 0){
        gsap.to(text, { 
            duration: 2.5,
            color: "red",
            ease: "elastic.out(1,0.6)",
        });
        flag = 1;
    }
    else{
        gsap.to(text, { 
            duration: 2.5,
            color: "black",
            ease: "elastic.out(1,0.6)",
        });
        flag = 0;
    };
    
})

var swiper = new Swiper(".mySwiper", {
    effect: "cube", // Cube effect
    grabCursor: true, // Enable cursor grabbing
    loop: true, // Infinite loop
    cubeEffect: {
        // shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    on: {
        slideChangeTransitionEnd: function () {
            // Pause all videos
            const videos = document.querySelectorAll('.swiper-slide video');
            videos.forEach((video) => {
                video.pause();
            });

            // Play the active slide's video
            const activeSlideVideo = document.querySelector('.swiper-slide-active video');
            if (activeSlideVideo) {
                activeSlideVideo.play();
            }
        },
    },
});

// Add event listeners to prevent interference when video ends
document.querySelectorAll('.swiper-slide video').forEach((video) => {
    // Ensure the video keeps looping (or handle reset)
    video.addEventListener('ended', () => {
        video.currentTime = 0; // Reset video to the beginning
        video.play(); // Replay the video if loop is not enabled
    });

    // Ensure Swiper can swipe when interacting with video
    video.addEventListener('touchstart', (e) => {
        e.stopPropagation(); // Allow Swiper's touch events
    });

    video.addEventListener('mousedown', (e) => {
        e.stopPropagation(); // Prevent conflicts with desktop mouse interactions
    });
});
