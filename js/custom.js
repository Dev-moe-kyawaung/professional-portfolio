// custom.js – Basic behaviors and enhancements

document.addEventListener('DOMContentLoaded', () => {
  // Optional: active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath.substring(currentPath.lastIndexOf('/') + 1)) {
      link.classList.add('active');
    }
  });
});
