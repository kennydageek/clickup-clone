/*****************
NAVIGATION SCRIPTS
*****************/
const overlay = document.querySelector('.nav-dropdown-overlay');
const menuBtn = document.querySelector('.nav-icon__icon');
const mobileNav = document.querySelector('.nav-dropdown');
const cancel = document.querySelector('.nav-dropdown-cancel__icon');

const showMenu = function () {
  mobileNav.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMenu = function () {
  mobileNav.classList.add('hidden');
  overlay.classList.add('hidden');
};

menuBtn.addEventListener('click', showMenu);
cancel.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
