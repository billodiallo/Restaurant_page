import './style.css';
import headerPage from './header';
import renderHome from './home';
import foodpage from './food';
import contactPage from './contact';

function fordbd() {
  const i = 0;
  if (i < 0) {
    headerPage();
    renderHome();
    foodpage();
    contactPage();
  }
}

fordbd();

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const burger = document.querySelector('.hamburger');

// Hamburger menu
burger.addEventListener('click', () => {
  document.querySelector('ul').classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Navigation tabs
tabs.forEach((tab) => tab.addEventListener('click', () => {
  const target = document.querySelector(tab.dataset.tabTarget);
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });
  tabs.forEach((tab) => {
    tab.classList.remove('red');
  });
  tab.classList.add('red');
  target.classList.add('active');
}));

document.querySelector('.main-row').addEventListener('click', () => {
  document.querySelector('[data-tab-target="#menu"]').classList.add('red');
});

document.querySelector('[type="submit"]').addEventListener('click', () => {
  document.querySelector('form').reset();
});
