const burger = document.querySelector('.burger');
const burgerClosed = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
	burgerMenu.classList.toggle('burger-menu_active');
});
burgerClosed.addEventListener('click', () => {
	burgerMenu.classList.remove('burger-menu_active');
});