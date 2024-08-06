var tl = gsap.timeline({scrollTrigger:{ /* tl variable in which scrollTrigger plugin is used for scroll */
    trigger:"#main",
    start: "20% 30%",
    end: "110% 90%",
    scrub:true, /* sscrub is used to give that folding animation */
    markers:true, /* markers is for reference markings for animation end and start */
}})

tl.to("#img2",{
    rotateX: "0deg",
})

.to("#img3",{
    rotateX: "0deg",
})
