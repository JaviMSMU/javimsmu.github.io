window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('shrink');
  } else {
      navbar.classList.remove('shrink');
  }
});

const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const cityCards = document.querySelectorAll(".city-card");

function filterCities() {
  const searchText = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  cityCards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    const region = card.getAttribute("data-region");

    const matchesName = name.includes(searchText);
    const matchesRegion = selectedRegion === "all" || region === selectedRegion;

    if (matchesName && matchesRegion) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterCities);
regionFilter.addEventListener("change", filterCities);

