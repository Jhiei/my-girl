const tl = gsap.timeline({ defaults: { ease: "power1.out" }});

tl.to(".text-header", { y: "0%", duration: 2, stagger: 0.5 });
tl.to(".wel", { y: "-100%", duration: 1, delay: 2 });
tl.fromTo(".intro-text", { opacity: 0 }, { opacity : 1, duration: 1 }, "-=0.5");
tl.to('.slider-go-left', { x: "-100%", duration: 1 });
tl.to('.slider-go-right', { x: "100%", duration: 1 }, "-=1");