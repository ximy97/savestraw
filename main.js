//menu scrolled
window.addEventListener("scroll", function () {
  const navSection = document.querySelector(".navSection");

  // Check if the scroll position is greater than a specific threshold (adjust as needed)
  if (window.scrollY > 50) {
    navSection.classList.add("menuScrolled"); // Add the class if scrolled past threshold
  } else {
    navSection.classList.remove("menuScrolled"); // Remove the class if scrolled above threshold
  }
});


//menu responsive

const menuToggle = document.querySelector(".menu__toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("activeMenu");
  navigation.classList.toggle("activeMenu");
});


// scroll titles history

// Obtener todos los enlaces con la clase "titleHistory"
const titleLinks = document.querySelectorAll('.titleHistory');

// Agregar un evento de clic a cada enlace
titleLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    const targetId = event.currentTarget.getAttribute('href'); // Obtener el ID del objetivo
    const targetElement = document.querySelector(targetId); // Obtener el elemento objetivo

    // Realizar el desplazamiento suave
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// scroll adopt form

const adoptButton = document.getElementById('adoptButton');
const titleForm = document.getElementById('titleForm');

adoptButton.addEventListener('click', () => {
  titleForm.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
