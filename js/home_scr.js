

////////////////////
const tl = new gsap.timeline();
tl.to(".navbar", {
  clipPath: "circle(150% at 45px 45px)"
}).to(
  ".item",
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.25
  },
  "-=0.25"
);

tl.pause();

const navIcon = document.querySelector(".nav-icon");
navIcon.addEventListener("click", () => {
  if (tl.reversed() || tl.paused()) tl.play();
  else tl.reverse();
});
//////////////////////////////////////
$ (window).ready (function () {
	setTimeout (function () {
		$('#modal-subscribe').modal ("show")
	}, 1000)
  $(".close").click(function () {
    $('#modal-subscribe').modal ("hide")
  })

})
///////////////////////////////////
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

const setBackground = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};

rightButton.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setBackground();
  setActiveSlide();
});

leftButton.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setBackground();
  setActiveSlide();
});

setBackground();
