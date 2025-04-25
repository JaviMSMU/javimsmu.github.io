window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {  // Triggering shrink after 50px scroll
      navbar.classList.add('shrink');
  } else {
      navbar.classList.remove('shrink');
  }
});
