window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  slideIndex = index;
}

// automatic slideshow (if you have it)
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // changes every 5 seconds — you can increase this

// dot click handler
function currentSlide(index) {
  showSlide(index);
}
