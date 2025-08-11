// Display current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handling (no backend — just a demo)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Thank you! Your message has been received.";
  form.reset();
});
