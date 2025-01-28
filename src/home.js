import { removeContent } from "./index.js";
export function displayHomePage() {
  removeContent();
  const contentDiv = document.querySelector('#content');
  const description = document.createElement('p');
  description.textContent =
    "We got food and we got board games! Please don't touch our games with your greasy fingers";
  contentDiv.appendChild(description);
  const locationHeader = document.createElement('h1');
  locationHeader.textContent = 'Location';
  contentDiv.appendChild(locationHeader);
  const address = document.createElement('p');
  address.textContent = '123 Fake St Los Angeles, CA 90012';
  contentDiv.appendChild(address);
  const hoursHeader = document.createElement('h1');
  hoursHeader.textContent = 'Hours';
  contentDiv.appendChild(hoursHeader);

  const hoursList = document.createElement('ul');
  const hoursArr = [
    'Sunday: 11am-11pm',
    'Monday: 12pm-11pm',
    'Tuesday: 12pm-11pm',
    'Wednesday: Closed',
    'Thursday: 12pm-11pm',
    'Friday: 12pm-2am',
    'Saturday: 12pm-1am',
  ];
  for (let day of hoursArr) {
    let time = document.createElement('li');
    time.textContent = day;
    hoursList.appendChild(time);
  }
  contentDiv.appendChild(hoursList);

  const phoneHeader = document.createElement('h1');
  phoneHeader.textContent = 'Phone';
  contentDiv.appendChild(phoneHeader);
  const phone = document.createElement('p');
  phone.textContent = '(323) 123-4567';
  contentDiv.appendChild(phone);
}