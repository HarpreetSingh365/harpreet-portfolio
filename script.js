// Example: Scroll animation for sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s';
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    });
    observer.observe(section);
  });
  