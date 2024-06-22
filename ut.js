// Create a GSAP timeline
var tl = gsap.timeline();

// Add animations to the timeline with desired timings
tl.to(".element1", { duration: 1, x: 100 })
  .to(".element2", { duration: 1, y: 50 }, "-=0.5")  // Start .element2 animation 0.5 seconds before .element1 ends
  .to(".element3", { duration: 1, rotation: 360 }, "-=0.5");  // Start .element3 animation 0.5 seconds before .element2 ends
