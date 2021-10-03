import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const menuMarkup = document.querySelector('.js-menu');
const cardMarkup = createMenuMarkup(menu);
menuMarkup.insertAdjacentHTML('beforeend', cardMarkup);
function createMenuMarkup(menu) {
  return menu.map(menuTemplate).join('');
}
const body = document.querySelector('body');
const toolbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

function setThemeName(themeName) {
  localStorage.setItem('theme', themeName);
  body.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem('theme') === LIGHT) {
    setThemeName(DARK);
  } else {
    setThemeName(LIGHT);
  }
}
function saveTheme() {
  if (localStorage.getItem('theme') === DARK) {
    setThemeName(DARK);
    toolbox.checked = true;
  } else {
    setThemeName(LIGHT);
    toolbox.checked = false;
  }
}

saveTheme();
toolbox.addEventListener('change', toggleTheme);
