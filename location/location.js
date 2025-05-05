window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('shrink');
  } else {
        navbar.classList.remove('shrink');
    }
});

const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const experienceCards = document.querySelectorAll(".experience-card");

function filterExperiences() {
  const searchText = searchInput.value.toLowerCase();
  const selectedType = typeFilter.value;

  experienceCards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    const type = card.getAttribute("data-type");

    const matchesName = name.includes(searchText);
    const matchesType = selectedType === "all" || type === selectedType;

    if (matchesName && matchesType) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterExperiences);
typeFilter.addEventListener("change", filterExperiences);

