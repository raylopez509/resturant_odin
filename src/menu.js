import { removeContent } from "./index.js";
export function displayMenuPage() {
  removeContent();
  const contentDiv = document.querySelector('#content');
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Menu';
  contentDiv.appendChild(menuTitle);

  const appetizersTitle = document.createElement('h1');
  appetizersTitle.textContent = 'Appetizers';
  contentDiv.appendChild(appetizersTitle);
  const appetizersList = document.createElement('ul');
  const appetizersArr = [
    'Pajeon',
    'French Toast',
    'Guacamole and Chips',
    'Carne Asada Fries',
  ];
  for (let item of appetizersArr) {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;
    appetizersList.appendChild(menuItem);
  }
  contentDiv.appendChild(appetizersList);

  const entreesTitle = document.createElement('h1');
  entreesTitle.textContent = 'Entrees';
  contentDiv.appendChild(entreesTitle);
  const entreesList = document.createElement('ul');
  const entreesArr = [
    'Sushi',
    'Korean BBQ',
    'Quesabirria Tacos',
    'Orange Chicken',
  ];
  for (let item of entreesArr) {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;
    entreesList.appendChild(menuItem);
  }
  contentDiv.appendChild(entreesList);

  const dessertsTitle = document.createElement('h1');
  dessertsTitle.textContent = 'Desserts';
  contentDiv.appendChild(dessertsTitle);
  const dessertsList = document.createElement('ul');
  const dessertsArr = [
    'Madellines',
    'Banana Pudding',
    'Ice Cream',
    'Cheesecakes',
  ];
  for (let item of dessertsArr) {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;
    dessertsList.appendChild(menuItem);
  }
  contentDiv.appendChild(dessertsList);
}