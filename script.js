const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

const links = document.querySelectorAll('.site-nav a');
links.forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.dataset.scrolled = window.scrollY > 20 ? 'true' : 'false';
});
