const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const need = String(form.get('need') || '').trim();
  const message = String(form.get('message') || '').trim();
  const body = `Hello Ceiling 820,%0A%0AMy name is ${encodeURIComponent(name)}.%0AEnquiry: ${encodeURIComponent(need)}.%0ADetails: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/9812551552?text=${body}`, '_blank', 'noopener');
});
