import { DISPLAY_BLOCK, DISPLAY_NONE } from '../../api/constants';
import { buildDarkLightToggle } from './darkLightMode';
import {
  createImageElement,
  createElementHref,
  createElementButton,
  createDivElement,
} from './domElements';

export function buildNavBar() {
  const header = document.querySelector('header');
  header.classList.add(
    'bg-purpleLight',
    'dark:bg-violetLight',
    'md:h-20',
    'h-16',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'px-4',
    'md:px-8',
    'w-full'
  );

  const toggleContainer = createDivElement({
    className: ['flex', 'items-center', 'space-x-2', 'mr-5'],
    id: 'darkLightToggle',
  });

  const toggleDarkLight = buildDarkLightToggle();

  toggleContainer.append(toggleDarkLight);

  const nav = document.createElement('nav');
  nav.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'max-w-7xl',
    'w-full',
    'text-base',
    'font-semibold'
  );

  const logo = createImageElement({
    src: '/images/noroff-logo1.png',
    className: [
      'nav-logo',
      'h-6',
      'md:h-8',
      'cursor-pointer',
      'hover:drop-shadow-white',
    ],
  });
  logo.addEventListener('click', () => (window.location.href = '/'));

  const menuContainer = createDivElement({
    className: ['flex', 'items-center'],
  });

  const ul = document.createElement('ul');
  ul.classList.add('hidden', 'md:flex', 'gap-4');

  const burgerMenu = document.createElement('i');
  burgerMenu.classList.add(
    'fa-solid',
    'fa-bars',
    'text-3xl',
    'text-white',
    'md:hidden',
    'cursor-pointer'
  );
  burgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');

    if (burgerMenu.classList.contains('fa-bars')) {
      burgerMenu.classList.replace('fa-bars', 'fa-xmark');
    } else {
      burgerMenu.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  const dropdownMenu = createDivElement({
    className: [
      'absolute',
      'hidden',
      'top-16',
      'left-0',
      'w-full',
      'bg-purpleDark',
      'dark:bg-violetLight',
      'text-white',
      'py-12',
      'font-sans',
      'font-semibold',
      'text-base',
      'flex',
      'flex-col',
      'items-center',
      'h-screen',
      'gap-4',
    ],
  });

  const currentPage = window.location.pathname;
  const getPageClasses = (path) => {
    return currentPage === path ? ['drop-shadow-white'] : [];
  };

  const home = createElementHref({
    href: '/',
    textContent: 'Home',
    className: ['md:hover:underline', ...getPageClasses('/')],
  });
  home.style.display = DISPLAY_BLOCK;

  const create = createElementHref({
    href: '/post/create/',
    textContent: 'Create Post',
    className: ['md:hover:underline', ...getPageClasses('/post/create/')],
  });
  create.style.display = DISPLAY_BLOCK;

  const profile = createElementHref({
    href: '/profile/',
    textContent: 'Profile',
    className: ['md:hover:underline', ...getPageClasses('/profile/')],
  });
  profile.style.display = DISPLAY_BLOCK;

  const loginButton = createElementButton({
    id: 'loginButton',
    className: 'nav-btn',
    textContent: 'Login',
    className: ['md:hover:underline', ...getPageClasses('/auth/login/')],
  });
  loginButton.addEventListener('click', () => {
    window.location.href = '/auth/login/';
  });
  loginButton.style.display = DISPLAY_NONE;

  const logoutButton = createElementButton({
    id: 'logoutButton',
    className: 'nav-btn',
    textContent: 'Logout',
    className: ['md:hover:underline'],
  });
  logoutButton.style.display = DISPLAY_BLOCK;

  const registerButton = createElementButton({
    id: 'registerButton',
    className: 'nav-btn',
    textContent: 'Register',
    className: ['md:hover:underline', ...getPageClasses('/auth/register/')],
  });
  registerButton.addEventListener('click', () => {
    window.location.href = '/auth/register/';
  });
  registerButton.style.display = DISPLAY_NONE;

  const mobileLoginButton = createElementButton({
    id: 'mobileLoginButton',
    className: 'nav-btn',
    textContent: 'Login',
    className: ['md:hover:underline', ...getPageClasses('/auth/login/')],
  });
  mobileLoginButton.addEventListener('click', () => {
    window.location.href = '/auth/login/';
  });
  mobileLoginButton.style.display = DISPLAY_NONE;

  const mobileLogoutButton = createElementButton({
    id: 'mobileLogoutButton',
    className: 'nav-btn',
    textContent: 'Logout',
    className: ['md:hover:underline'],
  });
  mobileLogoutButton.style.display = DISPLAY_BLOCK;

  const mobileRegisterButton = createElementButton({
    id: 'mobileRegisterButton',
    className: 'nav-btn',
    textContent: 'Register',
    className: ['md:hover:underline', ...getPageClasses('/auth/register/')],
  });
  mobileRegisterButton.addEventListener('click', () => {
    window.location.href = '/auth/register/';
  });
  mobileRegisterButton.style.display = DISPLAY_NONE;

  burgerMenu.append(dropdownMenu);
  dropdownMenu.append(
    home.cloneNode(true),
    create.cloneNode(true),
    profile.cloneNode(true),
    mobileLoginButton,
    mobileLogoutButton,
    mobileRegisterButton
  );
  ul.append(home, create, profile, logoutButton, loginButton, registerButton);
  menuContainer.append(toggleContainer, ul, burgerMenu);
  nav.append(logo, menuContainer);
  header.append(nav);
}
