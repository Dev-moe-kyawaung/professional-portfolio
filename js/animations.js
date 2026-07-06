// animations.js – Scroll-based animation triggers

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
