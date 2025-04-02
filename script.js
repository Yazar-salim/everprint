document.addEventListener("DOMContentLoaded", () => {

     // Register ScrollTrigger
//   gsap.registerPlugin(ScrollTrigger);
  // Register GSAP Plugin
  gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);

  // Create GSAP timeline
  const tl = gsap.timeline();
  
 

  // Step 1: Set initial properties (All shapes start from center, small scale)
  gsap.set(".shapes", {
    x: 0,
    y: 0,
    scale: 1, // Shapes start at full size
    opacity: 1,
  });

  tl.from(".blueRectangle", {
    y: -100,
    ease: "bounce.out",
    opacity: 1,
  });
  tl.from(".yellowRectangle", {
    y: -100,
    opacity: 1,
    ease: "bounce.out",
  });
  tl.from(".greenCircle", {
    y: -100,
    opacity: 1,
    ease: "bounce.out",
  });
  tl.from(".pinkRectangle", {
    y: -100,
    ease: "bounce.out",
    opacity: 1,
  });

  // Step 2: Rotate the shapes in a circular motion (one full cycle)
  tl.to(".shapes", {
    motionPath: {
      path: [
        { x: 50, y: 0 }, // Right
        { x: 35, y: 35 }, // Bottom-right
        { x: 0, y: 50 }, // Bottom
        { x: -35, y: 35 }, // Bottom-left
        { x: -50, y: 0 }, // Left
        { x: -35, y: -35 }, // Top-left
        { x: 0, y: -50 }, // Top
        { x: 35, y: -35 }, // Top-right
        { x: 0, y: 0 }, // Back to start
      ],
      curviness: 1.5,
      autoRotate: false,
    },
    duration: 1.5, // One full rotation duration
    ease: "bounce-out",
    stagger: 0.2,
  });

  // Step 3: Fix the shapes in their final positions
  tl.to(
    [".blueRectangle", ".yellowRectangle", ".pinkRectangle", ".greenCircle"],
    {
      duration: 1, // Smooth movement duration
      ease: "bounce.out",
      stagger: 0.1,
      x: (i) => [-15, 30, -15, 30][i], // X positions
      y: (i) => [-15, -15, 30, 30][i], // Y positions
    }
  );

  // Step 4: Animate the right logo (appears after shapes settle)
  tl.to(
    ".everprint",
    {
      // y: -12,
      x: 10,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "bounce.out",
    },
    "-=0.5"
  ); // Slight overlap for smooth transition

  tl.to(".fullLogoContainer", {
    y: -100,
    x: -400,
    // opacity:0,
    duration: 1,
    scale: 1.4,
    // transformOrigin:"center center",
  });

  tl.to(".herobackground", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "bounce.out",
  });

  tl.from(".word", {
    opacity: 0,
    x: 40,
    y: 50,
    duration: 0.5,
    stagger: 0.1, // Animates each word with a slight delay
  });

  tl.from(".definitionpara", {
    opacity: 0,
    y: -50,
  });

  tl.from(".headers",{
    y:-100
  })

  tl.from(".social-links",{
    y:100,
    opacity:0
  })


 // Get paragraph text and split it into words
 const paragraph = document.getElementById("paragraph");
 const words = paragraph.innerText.split(" "); // Split into words
 paragraph.innerHTML = words.map(word => `<span class="word1">${word}&nbsp;</span>`).join(""); // Wrap each word

 // Animate words from left to right on scroll
 gsap.fromTo(
     ".word1",
     { color: "rgb(39, 39, 39)" }, // Start with green color
     {
         color: "white", // Change to white
         duration: 0.5,
         stagger: 0.2, // Each word animates sequentially
         scrollTrigger: {
             trigger: ".text-container",
             start: "top 80%",
             end: "top 20%",
             scrub: 1, // Smooth transition
         }
     }
 );




});


// grid color changes on each hover

const colors = ["crimson", "steelblue", "orangered", "purple", "teal", "green"];

document.querySelectorAll(".grid-item").forEach((container) => {
    let lastColor = ""; // Store last color for this card

    container.addEventListener("mouseenter", function() {
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === lastColor);

        lastColor = newColor;
        container.querySelector(".grid-item-def-nogrid").style.backgroundColor = newColor;
    });
});

