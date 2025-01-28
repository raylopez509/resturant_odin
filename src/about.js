import { removeContent } from "./index.js";
export function displayAboutPage() {
  removeContent();
  const contentDiv = document.querySelector('#content');
  const aboutUsTitle = document.createElement('h1');
  aboutUsTitle.textContent = 'About Us';
  contentDiv.appendChild(aboutUsTitle);
  const aboutUsText = document.createElement('p');
  aboutUsText.textContent =
    'We love board games and we love good food. This restaurant combines both for board game lovers and foodies!';
  contentDiv.appendChild(aboutUsText);
}