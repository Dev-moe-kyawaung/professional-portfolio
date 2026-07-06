/* main.js – Main JavaScript for Professional Portfolio */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Compare last part of path (e.g. "about.html")
    const fileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (href === fileName) {
      link.classList.add('active');
    }
  });
});

// 2. Scroll-based animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-fade-up, .animate-fade-left');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;

    if (isVisible) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
