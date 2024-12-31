/** creating button click show hide navbar **/
const menuToggle = document.querySelector(".menu-toggler input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// var typed = new Typed(".input", {
//   strings: ["Frontend Developer", "UX Designer", "Web Developer"],
//   typedSpeed: 70,
//   backSpeed: 55,
//   loop: true,
// });

// // bagian animasi
// sr.reveal(".logo-text", { delay: 200, origin: "top" });
// sr.reveal(".logo", { delay: 450, origin: "right" });
// sr.reveal(".icons", { delay: 450, origin: "left" });
// sr.reveal(".scroll-down", { delay: 450, origin: "right" });
