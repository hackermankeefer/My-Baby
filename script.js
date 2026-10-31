// script.js – Interactions for the single-page site

(function() {
  // Smooth scroll for internal nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in animations on scroll using Intersection Observer
  const sections = document.querySelectorAll('section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      // Skip already visible hero
      if (!section.id || section.id !== 'hero') observer.observe(section);
    });
  } else {
    // Fallback: show all immediately
    sections.forEach(section => section.classList.add('visible'));
  }
})();