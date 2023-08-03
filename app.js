// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

//--------------- MATCH MEDIA ---------------------//

let mm = gsap.matchMedia();



//---------------PRELOADER---------------------------//

const preloader = gsap.timeline();
const barsMenu = document.querySelector(".bars-menu");

const words = gsap.utils.toArray(".words-li");
const images = gsap.utils.toArray(".pic-position");
const imagesAmount = images.length;
let activeIndex = 0;
gsap.set(images[activeIndex], { zIndex: imagesAmount });



mm.add("(min-width: 769px)", ()=>{

    const loadPage = () =>{

        preloader
        .from("body", {autoAlpha: 0})
        .from(".pre1", {opacity: 0, duration: 0.08})
        .to(".pre1", {opacity: 0, duration: 0.08})
        .from(".pre2", {opacity: 0, duration: 0.08})
        .to(".pre2", {opacity: 0, duration: 0.08})
        .from(".pre3", {opacity: 0, duration: 0.08})
        .to(".pre3", {opacity: 0, duration: 0.08})
        .from(".pre4", {opacity: 0, duration: 0.08})
        .to(".pre4", {opacity: 0, duration: 0.08})
        .from(".pre5", {opacity: 0, duration: 0.08})
        .to(".pre5", {opacity: 0, duration: 0.08})
        .from(".pre6", {opacity: 0, duration: 0.08})
        .to(".pre6", {opacity: 0, duration: 0.08})
        .from(".pre7", {opacity: 0, duration: 0.08})
        .to(".pre7", {opacity: 0, duration: 0.08})
        .from(".pre8", {opacity: 0, duration: 0.08})
        .to(".pre8", {opacity: 0, duration: 0.08})
        .from(".pre9", {opacity: 0, duration: 0.08})
        .to(".pre9", {opacity: 0, duration: 0.08})
        .from(".pre10", {opacity: 0, duration: 0.08})
        .to(".pre10", {opacity: 0, delay: 0.5, duration: 0.08})
        .to(".preloader", {scale: 2, opacity: 0, duration: 0.9, ease: "Power4.easeIn", display: "none"}, "-=0.5")
        .to(".preloader-bg",{yPercent:-100, duration: 1, ease: "Power2.easeIn"})
        .from(".show", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07})
        .from(".stroke", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07}, "<")
        .from(".icon-container", {opacity: 0,duration: 0.5}, "<")
    }
    window.addEventListener("load", loadPage);


    //------------- code for changing the menu bars width--------------//

    const navBars = gsap.timeline({paused:true});
    navBars.to(".short", {width: "1rem", left: "16px", duration: 0.2});
    barsMenu.addEventListener("mouseenter", ()=>{
        navBars.play();
    })
    barsMenu.addEventListener("mouseleave", ()=>{
        navBars.reverse();
    });




    words.forEach((item, i) => {
        const charts = gsap.timeline({ paused: true });
        charts
        .to(item.querySelectorAll(".single-chart1"), {
            yPercent: -100,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.in"
        })
        .from(
            item.querySelectorAll(".single-chart2"),
            { yPercent: 100, duration: 0.3, stagger: 0.04, ease: "power1.in" },
            "<0.001"
        );
        item.addEventListener("mouseenter", () => {
            gsap.set(images[activeIndex], { zIndex: 1});
            gsap.set(images[i], { zIndex: imagesAmount})
            charts.play();
            activeIndex = i;
        });
        item.addEventListener("mouseleave", () => {
        charts.reverse();
        });

    });

    //-------------imagen bebu-----------------///

    const imagenBebu = document.querySelector(".about-title");
    const containerImagenBebu = document.querySelector(".container-imagen-bebu");

    imagenBebu.addEventListener("mouseover", (e)=>{
        gsap.to(containerImagenBebu, {autoAlpha: 1, scale: 1, duration: 0.2});
    });
    imagenBebu.addEventListener("mouseleave", (e)=>{
        gsap.to(containerImagenBebu, {autoAlpha: 0, scale: 0, duration: 0.2});

    });
    imagenBebu.addEventListener("mousemove", (e)=>{
        gsap.set(containerImagenBebu, {x: e.offsetX, y: e.offsetY});

    })

    ///--------------------SECTION 2-----------------------///

    // linea roja//


    gsap.from(".linea", {
        drawSVG: 0, duration: 0.5,
        scrollTrigger: {
            trigger: ".section2-container",
            // markers: true,
            start: "-185px top",
            end: "300px",
            // pin: ".section2-container",
            // scrub: true
        }
    })


    //----------------SECTION 4---------------------------------///

    const workTitle = gsap.timeline({scrollTrigger: {
        trigger: ".section4",
        start: "top 50%",

    }});

    workTitle.from(".work-title-h2", {duration: 1, yPercent: 100, })





    // const workList = gsap.timeline({scrollTrigger: {
    //     trigger: ".section4",
    //     markers: true,
    //     start: "30% 50%"
    // }})
const workListContainer = document.querySelector(".work-list-container")


    const workListPin = gsap.timeline({scrollTrigger:{
        // markers: true,
        trigger: ".section4",
        start: "top top",
        pin: true,
        scrub: true,
        // end: ()=> "+=" + workListContainer.offsetWidth/4,
        end: "3000px"
    }});

    workListPin.from(".category-anchor", {yPercent: 100, stagger: 0.1})
    .to(".work-list-container", {x: ()=> -(workListContainer.scrollWidth)/2 + "px",
    })
    .to(".category-anchor", {yPercent: -100});

    // const workListPin = gsap.timeline();
    // workListPin.to(".work-list-container", {x: ()=> -(workListContainer.scrollWidth)/2 + "px",
    // scrollTrigger:{
    //     markers: true,
    //     trigger: ".section4",
    //     start: "top top",
    //     pin: true,
    //     scrub: true,
    //     // end: ()=> "+=" + workListContainer.offsetWidth/4,
    //     end: "1800px"
    // }})





    const workImg = gsap.utils.toArray(".work-img");
    const categoryAnchor = gsap.utils.toArray(".category-anchor");
    
    categoryAnchor.forEach((item, i) =>{
        const workImgAnimation = gsap.timeline({paused:true})
        workImgAnimation.to(workImg[i], {autoAlpha: 1, duration: 0.3})
        .to(item, {color: "red", duration: 0.3}, 0)
        
        item.addEventListener("mouseenter", ()=>{
            workImgAnimation.play();
        });
        item.addEventListener("mouseleave", ()=>{
            workImgAnimation.reverse()
        })

    })
    



    // gsap.set(workImg[activeWorkImg], { zIndex: workImgAmount });



    // workListBg.forEach((item, i)=>{
    //     const workListBGAnimation = gsap.timeline({paused:true});
    //     workListBGAnimation.to(item, {autoAlpha: 1})
    //     item.addEventListener("mouseenter", () => {
    //         gsap.set(workImg[activeWorkImg], { zIndex: 1});
    //         gsap.set(workImg[i], { zIndex: workImgAmount})
    //         workListBGAnimation.play();
    //         activeWorkImg = i;
    //     });
    //     item.addEventListener("mouseleave", ()=>{
    //         workListBGAnimation.reverse();

    //     })
    // })


})




mm.add("(max-width: 768px)", ()=>{

    const loadPage = () =>{

        preloader
        .from("body", {autoAlpha: 0})
        .from(".pre1", {opacity: 0, duration: 0.08})
        .to(".pre1", {opacity: 0, duration: 0.08})
        .from(".pre2", {opacity: 0, duration: 0.08})
        .to(".pre2", {opacity: 0, duration: 0.08})
        .from(".pre3", {opacity: 0, duration: 0.08})
        .to(".pre3", {opacity: 0, duration: 0.08})
        .from(".pre4", {opacity: 0, duration: 0.08})
        .to(".pre4", {opacity: 0, duration: 0.08})
        .from(".pre5", {opacity: 0, duration: 0.08})
        .to(".pre5", {opacity: 0, duration: 0.08})
        .from(".pre6", {opacity: 0, duration: 0.08})
        .to(".pre6", {opacity: 0, duration: 0.08})
        .from(".pre7", {opacity: 0, duration: 0.08})
        .to(".pre7", {opacity: 0, duration: 0.08})
        .from(".pre8", {opacity: 0, duration: 0.08})
        .to(".pre8", {opacity: 0, duration: 0.08})
        .from(".pre9", {opacity: 0, duration: 0.08})
        .to(".pre9", {opacity: 0, duration: 0.08})
        .from(".pre10", {opacity: 0, duration: 0.08})
        .to(".pre10", {opacity: 0, delay: 0.5, duration: 0.08})
        .to(".preloader", {scale: 2, opacity: 0, duration: 0.9, ease: "Power4.easeIn", display: "none"}, "-=0.5")
        .to(".preloader-bg",{yPercent:-100, duration: 1, ease: "Power2.easeIn"})
        .from(".show2", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07})
        .from(".stroke2", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07}, "<")
        .from(".icon-container", {opacity: 0,duration: 0.5}, "<")
    }
    window.addEventListener("load", loadPage)



    words.forEach((item, i) => {
        const charts = gsap.timeline({ paused: true });
        charts
        .to(item.querySelectorAll(".single-chart1"), {
            yPercent: -100,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.in"
        })
        .from(
            item.querySelectorAll(".single-chart2"),
            { yPercent: 100, duration: 0.3, stagger: 0.04, ease: "power1.in" },
            "<0.001"
        );
        item.addEventListener("mouseenter", () => {
            charts.play();
            activeIndex = i;
        });
        item.addEventListener("mouseleave", () => {
            charts.reverse();
        });

    });



    ///--------------------SECTION 2-----------------------///

// linea roja//


    gsap.from(".linea", {
        drawSVG: 0, duration: 0.5,
        scrollTrigger: {
            trigger: ".section2-container",
            // markers: true,
            start: "-235px top",
            end: "300px",
            // pin: ".section2-container",
            // scrub: true
        }
    })

    //----------------SECTION 4---------------------------------///

    const workTitle = gsap.timeline({scrollTrigger: {
        trigger: ".section4",
        start: "top 50%",

    }});

    workTitle.from(".work-title-h2", {duration: 1, yPercent: 100, })


    // const categoryMobile = document.querySelector(".mobile1-container");
    
    // const categoryMobileAnimation = gsap.timeline();
    // categoryMobileAnimation.to(categoryMobile, {xPercent: 100, duration: 2, scrollTrigger:{
    //     trigger: ".section4",
    //     markers: true,
    //     start: "top top"
    // }})

    let masks = document.querySelectorAll('.mask');

masks.forEach( mask => {
    let image = mask.querySelector('.mask-img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            // markers: true,
            start: "top 50%"
            // toggleActions: "restart none none reset"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
})


})







//------------------------------------------------------------------//



const navbarOpen = document.querySelector(".navbar-row")
const navBarsAngle = gsap.timeline({paused:true});
const navAnimationOpen = gsap.timeline({paused:true});

navAnimationOpen
.set(".navbar", {display: "flex"})
.set(navbarOpen, {display: "flex"})
.set("body", {overflow: "hidden"})
.to(".back-bar1, .back-bar2, .back-bar3, .back-bar4, .back-bar5", {top: 0, duration: 0.3, stagger: 0.1})
.to(navbarOpen, {autoAlpha: 1, duration: 0.1}, "-=0.1")
.to(".back-bar1, .back-bar2, .back-bar3, .back-bar4, .back-bar5", {top: "-100%", duration: 0.3, stagger: 0.1})

// navAnimationOpen
// .to(navbarOpen, {display: "flex", autoAlpha: 1, duration: 0.1})


// navAnimationOpen
// .to(".back-bar1, .back-bar2, .back-bar3, .back-bar4, .back-bar5", {top: 0, duration: 0.3, stagger: 0.1})
// .to(".back-bar1, .back-bar2, .back-bar3, .back-bar4, .back-bar5", {top: "-100%", duration: 0.3, stagger: 0.1})


navBarsAngle
.to(".long", {display: "none", duration: 0}, 0)
.to(".bar1", {rotate: 45, top: "23px", background: "red"}, 0)
.to(".bar3", {rotate: -45, top:"23px", background: "red"}, 0)
let angleChange = true;


const navAnimationFunction = () =>{
    if(angleChange == true){
        navBarsAngle.play();
        navAnimationOpen.play()
        angleChange = false;
    }else{
        navBarsAngle.reverse();
        navAnimationOpen.reverse()
        angleChange = true;
    }
}

barsMenu.addEventListener("click", navAnimationFunction)


////////---------REVEAL MENU-------///////////



///////---CODE FOR NAV LETERS----------------------//////


// const words = document.querySelectorAll(".words-li");

// words.forEach((items)=>{
//     const charts = gsap.timeline({paused:true});
//     charts.to(items.querySelectorAll(".single-chart1"), {yPercent: -100, duration: 0.4, stagger:0.04, ease: "power2.in"})
//     .from(items.querySelectorAll(".single-chart2"), {yPercent: 100, duration:0.4, stagger:0.04, ease: "power1.in"}, "<0.001")
//     items.addEventListener("mouseenter", ()=>{
//         charts.play();
//     });
//     items.addEventListener("mouseleave", ()=>{
//         charts.reverse();
//     });
// })


///////---CODE FOR CHANGING TEXT COLOR----------------------//////

// const singleChart1 = document.querySelectorAll(".single-chart1");
// singleChart1.forEach(item =>{
//     item.addEventListener("click", ()=>{
//         document.querySelector(".text-color-active")?.classList.remove(".text-color-active");
//         item.classList.add(".text-color-active")
//     })
// })


// words.forEach((item, i) => {
//     const charts = gsap.timeline({ paused: true });
//     charts
//     .to(item.querySelectorAll(".single-chart1"), {
//         yPercent: -100,
//         duration: 0.3,
//         stagger: 0.04,
//         ease: "power2.in"
//     })
//     .from(
//         item.querySelectorAll(".single-chart2"),
//         { yPercent: 100, duration: 0.3, stagger: 0.04, ease: "power1.in" },
//         "<0.001"
//     );
//     item.addEventListener("mouseenter", () => {
//         gsap.set(images[activeIndex], { zIndex: 1});
//         gsap.set(images[i], { zIndex: imagesAmount})
//         charts.play();
//         activeIndex = i;
//     });
//     item.addEventListener("mouseleave", () => {
//     charts.reverse();
//     });

// });

////////////////////////////////////////////////

///--------------------SECTION 2-----------------------///

// linea roja//


// gsap.from(".linea", {
//     drawSVG: 0, duration: 0.5,
//     scrollTrigger: {
//         trigger: ".section2-container",
//         markers: true,
//         start: "-185px top",
//         end: "300px",
//         // pin: ".section2-container",
//         // scrub: true
//     }
// })








