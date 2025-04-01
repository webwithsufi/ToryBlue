function timelineOne() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom -220%",
      scrub: 2,
      // markers: true,
      pin: true,
    },
  });

  tl.to(".center-content", {
    left: "50%",
    duration: 1,
  })
    .to(
      ".c-btm img",
      {
        rotate: "-180deg",
        stagger: 0.2,
        duration: 4,
        scale: 1,
        ease: Power1,
      },
      "flag"
    )
    .to(
      ".c-top img",
      {
        scale: 1,
        stagger: 0.2,
        duration: 4,
        ease: Power1,
      },
      "flag"
    )
    .to(
      ".center-content",
      {
        scale: 0,
        stagger: 0.2,
        duration: 4,
        ease: Power1,
      },
      "flag"
    )
    .to(
      "#gellery",
      {
        bottom: "-50%",
        duration: 4,
        ease: Power1,
      },
      "flag"
    )
    .to(
      ".animate-circle",
      {
        top: "50%",
        duration: 4,
        ease: Power2,
      },
      "flag"
    )
    .to(
      ".circle img",
      {
        opacity: 0,
        duration: -2,
        ease: Power1,
      },
      "flag1"
    )
    .to(
      ".sm-circle",
      {
        opacity: 0,
        delay: 1,
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "flag1"
    )
    .to(
      ".animate-circle",
      {
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "flag1"
    )
    .to(
      "#toryblue",
      {
        bottom: "2%",
        rotate: 0,
        duration: 2,
        ease: Power1,
      },
      "flag1"
    )
    .to(
      "#hero>img",
      {
        scale: 1,
        duration: 8,
        ease: Power1,
      },
      "flag1"
    )
    .to("#blue-box", {
      top: 0,
      duration: 4,
      ease: Power1,
    })
    .to("#blue-box", {
      delay: 2,
      top: "-100%",
      duration: 5,
      ease: Power1,
    });
}
function timelineTwo() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "bottom -250%",
      scrub: 2,
      // markers: true,
      pin: true,
    },
  });

  tl2
    .to(
      ".circle-one",
      {
        top: "50%",
        duration: 4,
        ease: Power1,
      },
      "flag"
    )
    .to(
      ".circle-two",
      {
        top: "50%",
        delay: 0.2,
        duration: 4,
        ease: Power1,
      },
      "flag"
    )
    .to(
      ".circle-one ",
      {
        left: "50%",
        duration: 4,
        ease: Power1,
      },
      "flag1"
    )
    .to(
      ".circle-two ",
      {
        left: "50%",
        duration: 4,
        ease: Power1,
      },
      "flag1"
    )
    .to(".circle-one , .circle-two ", {
      scale: 0.5,
      duration: 1,
      ease: Power1,
    })
    .to(".circle-one , .circle-two ", {
      scale: 10,
      duration: 15,
      ease: Power1,
    })
    .to(".circle-one , .circle-two ", {
      background:
        " radial-gradient(circle at left,rgb(16, 80, 153),rgb(220, 229, 240))",
      duration: 2,
      ease: Power1,
    })
    .to("#h-one", {
      opacity: 0,
      duration: 2,
      ease: Power2,
    })
    .to("#h-two", {
      opacity: 1,
      duration: 2,
      ease: Power2,
    })
    .to("#gradient", {
      left: "-200%",
      duration: 10,
      ease: Power2,
    })

    .to(".circle-one , .circle-two ", {
      background:
        " radial-gradient(circle at left,rgb(16, 80, 153),rgb(220, 229, 240),rgb(220, 229, 240))",
      duration: 2,
      ease: Power1,
    })
    .to(
      ".five-gradient",
      {
        opacity: 1,
        duration: 4,
        ease: Power1,
      },
      "gri"
    )
    .to(
      ".gradients",
      {
        top: 0,
        stagger: 0.8,
        duration: 8,
        ease: Power1,
      },
      "gri"
    );
}

timelineOne();
timelineTwo();
