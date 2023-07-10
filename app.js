
//---------------PRELOADER---------------------------//

const preloader = gsap.timeline();
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
    .to(".preloader", {scale: 2, opacity: 0, duration: 0.9, ease: "Power4.easeIn"}, "-=0.5")
    .to(".preloader-bg",{yPercent:-100, duration: 1, ease: "Power2.easeIn"})
    .from(".show", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07})
    .from(".stroke", {opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.07}, "<")
    .from(".icon-container", {opacity: 0,duration: 0.5}, "<")
}
window.addEventListener("load", loadPage)

//------------- code for changing the menu bars width--------------//

const barsMenu = document.querySelector(".bars-menu");
const navBars = gsap.timeline({paused:true});
navBars.to(".short", {width: "1rem", left: "16px", duration: 0.2});
barsMenu.addEventListener("mouseenter", ()=>{
    navBars.play();
})
barsMenu.addEventListener("mouseleave", ()=>{
    navBars.reverse();
});

//------------------------------------------------------------------//



const navbarOpen = document.querySelector(".navbar-row")
const navBarsAngle = gsap.timeline({paused:true});
const navAnimationOpen = gsap.timeline({paused:true});

navAnimationOpen
.set(navbarOpen, {display: "flex"})
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

const words = gsap.utils.toArray(".words-li");
const images = gsap.utils.toArray(".pic-position");
const imagesAmount = images.length;
let activeIndex = 0;
gsap.set(images[activeIndex], { zIndex: imagesAmount });

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

////////////////////////////////////////////////




