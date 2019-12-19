import './styles.css';
import menu from './menu.json'
import menuItem from './menu.hbs'

const menuUl = {ul: document.querySelector('.menu')};

function makeMenu(menu) {
    const makeup = menu.map(menu => menuItem(menu)).join('');
    menuUl.ul.insertAdjacentHTML('beforeend', makeup);
}

makeMenu(menu)

const switchInput = document.querySelector('#theme-switch-control');
const ref = document.querySelector('body');
const checkbox = document.querySelector('input[type="checkbox"]');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

switchInput.addEventListener('click', switchTheme);
function switchTheme (e) {
     if(ref.classList.contains('light-theme')) {
        ref.classList.remove('light-theme');
        ref.classList.add('dark-theme');
        localStorage.setItem('Theme', 'DARK');
     } else {
        ref.classList.remove('dark-theme');
        ref.classList.add('light-theme');
        localStorage.setItem('Theme', 'LIGHT');
     }
    };

localStorage.getItem('Theme')

const startTheme = localStorage.getItem('Theme');

if(startTheme === 'DARK') {
    ref.classList.add('dark-theme');
    checkbox.checked = true;
} else {
    ref.classList.add('light-theme');
    checkbox.checked = false;
}






