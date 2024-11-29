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
    loop: true,
    spaceBetween: 30, // Default space between slides
    navigation: {
        nextEl: ".swiper-button-next", // Right arrow
        prevEl: ".swiper-button-prev", // Left arrow
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // For small screens (up to 600px)
        0: {
            slidesPerView: 1, // Show 1 slide per view
            spaceBetween: 10, // Reduced space between slides
        },
        // For medium screens (up to 768px)
        600: {
            slidesPerView: 2, // Show 2 slides per view
            spaceBetween: 20, // Medium spacing
        },
        // For large screens (up to 1024px)
        768: {
            slidesPerView: 3, // Show 3 slides per view
            spaceBetween: 30, // Default spacing
        },
        // // For extra-large screens (above 1024px)
        // 1024: {
        //     slidesPerView: 4, // Show 4 slides per view
        //     spaceBetween: 40, // Increased spacing
        // },
    },
});
