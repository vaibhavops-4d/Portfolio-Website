# College Web Development Project - Vaibhav Verma Portfolio

A clean, minimal, and responsive personal portfolio website designed for a college project/assignment.

---

## 📁 Files in This Project

```
portfolio-website/
├── index.html   # Main HTML5 structure with semantic tags & personal details
├── style.css    # Clean, minimal CSS with Flexbox & Grid
├── script.js    # Simple JavaScript for footer year & form submission
└── README.md    # Quick reference guide & viva preparation
```

---

## 👤 Profile Details

- **Name:** Vaibhav Verma
- **Education:**
  - Bachelor of Technology (B.Tech) — KIET Group of Institutions (KIET), 1st Year (Started 2026)
  - Higher Secondary School (Class XII) — St. Paul's School
- **Featured Projects:**
  1. **Personal Portfolio Website:** Built with HTML5, CSS3, and JavaScript.
  2. **VyomSetu:** Space tech research platform to access all ISRO missions, track goals, insights, achievements, and upcoming launches in a clean format.
  3. **UdhyamSetu:** FinTech government loan discovery portal enabling users to find and compare government loan schemes based on requirement, income, and category.
- **Contact Info:**
  - **Email:** vaibhav1812207@gmail.com
  - **LinkedIn:** [linkedin.com/in/vaibhav-verma-814624407/](https://www.linkedin.com/in/vaibhav-verma-814624407/)
  - **GitHub:** [github.com/vaibhavops-4d](https://github.com/vaibhavops-4d)

---

## 🎯 Key Concepts to Explain in Your Viva / College Presentation

If your professor or examiner asks you about the code, here is how you can explain each part:

### 1. HTML5 (`index.html`)
- **Semantic Tags**: Used `<header>`, `<nav>`, `<section>`, and `<footer>` instead of just plain `<div>`s to improve document structure and accessibility (SEO-friendly).
- **Navigation**: Uses anchor tags with hash links (e.g., `href="#about"`) that jump directly to matching section IDs on the page.
- **Form Controls**: Built with `<input>`, `<textarea>`, and `required` attributes for basic HTML5 form validation.

### 2. CSS3 (`style.css`)
- **Box Sizing (`box-sizing: border-box`)**: Ensures padding and borders are included in the element's total width and height, preventing layout breakage.
- **Flexbox**: Used for the navigation bar and hero buttons to easily align items in rows.
- **CSS Grid**: Used for the Skills and Projects cards (`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`) to make cards responsive across all screen sizes.
- **Smooth Scrolling (`scroll-behavior: smooth`)**: Enables smooth animated scrolling when clicking navbar links.
- **Media Queries (`@media (max-width: 768px)`)**: Ensures the website looks great on mobile phones and tablets by stacking elements vertically.

### 3. JavaScript (`script.js`)
- **`DOMContentLoaded`**: Waits until the HTML document is fully loaded before executing scripts.
- **Dynamic Year**: Uses `new Date().getFullYear()` to keep the copyright year automatically updated.
- **`event.preventDefault()`**: Prevents the default browser action of refreshing the page when the contact form is submitted, allowing a custom success message to show up smoothly.
