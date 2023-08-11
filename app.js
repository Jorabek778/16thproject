const mountain = document.querySelector('.home-mountains img')
const title = document.querySelector('.home-mountains h1')

gsap.to(mountain,{
    y:100,
    duration:2,
    scrollTrigger:{
        trigger:"home-mountains",
        scrub:true,
    }
})

gsap.to(title, {
    duration:2,
    y:500,
    scrollTrigger:{
        trigger:"home-mountains",
        scrub:true
    }
})