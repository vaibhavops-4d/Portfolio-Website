// ============================================================
// College Project: Personal Portfolio Website Script
// Clean, minimal JavaScript that is easy to understand & explain
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Automatically update copyright year in the footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Simple Contact Form Submission Handler
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      // Prevents the browser from reloading the page
      event.preventDefault();

      // Get values from form inputs
      const name = document.getElementById("name").value.trim();

      // Display friendly success message
      formMessage.style.color = "#16a34a"; // Green color
      formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

      // Clear the form input fields
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    });
  }
});
