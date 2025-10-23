const menuButton = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});