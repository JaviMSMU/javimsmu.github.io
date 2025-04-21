const slides = document.querySelectorAll('.slide');
const dots = {
  lima: document.getElementById('dot-lima'),
  cusco: document.getElementById('dot-cusco'),
  arequipa: document.getElementById('dot-arequipa')
};

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  // Reset all dots
  Object.values(dots).forEach(dot => {
    dot.style.backgroundColor = 'gray';
  });

  const currentCity = slides[index].getAttribute('data-city');
  dots[currentCity].style.backgroundColor = 'red';
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

showSlide(current);
