window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Triggering shrink after 50px scroll
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow-container .slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentIndex);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Optionally, you can add event listeners for previous and next buttons
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Show the first slide initially
showSlide(currentIndex);
