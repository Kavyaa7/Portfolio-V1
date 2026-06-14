// Kavya S Portfolio - Neon Arcade Theme JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized under Neon Arcade specifications.');
  
  // Scroll Reveal Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, we can unobserve if we want it to remain visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
