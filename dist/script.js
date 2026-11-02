const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));
document.querySelector('#demo-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-feedback').textContent = 'This is a preview. A live client site would send this inquiry to the business.';
});
