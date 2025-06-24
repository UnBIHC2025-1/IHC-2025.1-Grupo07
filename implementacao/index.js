// hover e focus da navbar
function handleFirstTab(e) {
  if (e.key === "Tab") {
    document.body.classList.add("using-keyboard");
    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove("using-keyboard");
  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
}

window.addEventListener("keydown", handleFirstTab);

const plantaLinks = document.querySelectorAll('.menu-plantas a');
const plantaSections = Array.from(plantaLinks).map(link => {
  const id = link.getAttribute('href').replace('#', '');
  return document.getElementById(id);
});

function highlightCurrentPlantaLink() {
  let current = null;

  plantaSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      current = plantaLinks[index];
    }
  });

  plantaLinks.forEach(link => {
    link.removeAttribute('aria-current');
  });

  if (current) {
    current.setAttribute('aria-current', 'location');
  }
}

document.addEventListener('scroll', highlightCurrentPlantaLink, { passive: true });
window.addEventListener('load', highlightCurrentPlantaLink);
