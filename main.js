//menu scrolled
window.addEventListener('scroll', function() {
    const navSection = document.querySelector('.navSection');
  
    // Check if the scroll position is greater than a specific threshold (adjust as needed)
    if (window.scrollY > 50) {
      navSection.classList.add('menuScrolled');  // Add the class if scrolled past threshold
    } else {
      navSection.classList.remove('menuScrolled'); // Remove the class if scrolled above threshold
    }
  });
  


// Function to add 'show' class to elements when they come into view
function showOnScroll() {
    const elements = document.querySelectorAll('.show-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight * 0.75) {
            element.classList.add('show');
        }
    });
}

// Scroll to adoption form when the button is clicked
document.querySelector('#adoptButton').addEventListener('click', function() {
    const adoptionForm = document.querySelector('.adoption-form');
    adoptionForm.scrollIntoView({ behavior: 'smooth' });
});


// Add event listener to call showOnScroll function when page is scrolled
window.addEventListener('scroll', showOnScroll);

// Call showOnScroll function on page load to check if elements are in view
showOnScroll();
