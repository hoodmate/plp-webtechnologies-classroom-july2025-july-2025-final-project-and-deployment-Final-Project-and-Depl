// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form validation and feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const msg = document.getElementById('formMsg');
    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
      return;
    }
    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "red";
      return;
    }
    msg.textContent = "Thank you for your message!";
    msg.style.color = "green";
    contactForm.reset();
  });
}