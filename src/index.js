import './styles.css';
import { displayHomePage } from './home';
import { displayMenuPage } from './menu';
import { displayAboutPage} from './about';

export function removeContent() {
  const contentDiv = document.querySelector('#content');
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

const initBtns = (() => {
  const homeBtn = document.querySelector('.home-button');
  homeBtn.addEventListener('click', displayHomePage);
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', displayMenuPage);
  const aboutBtn = document.querySelector('.about-button');
  aboutBtn.addEventListener('click', displayAboutPage);
})();

displayHomePage();
