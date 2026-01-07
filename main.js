/* Fade-in on scroll */
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

/* Language toggle */
let currentLang = 'es';
const toggleBtn = document.getElementById('lang-toggle');

toggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  toggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
