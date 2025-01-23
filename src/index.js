function displayHomePage() {
  const contentDiv = document.querySelector("#content");
  const title = document.createElement("div");
  title.textContent = "Tabletop Tavern";
  contentDiv.appendChild(title);
  const description = document.createElement("p");
  description.textContent = "We got food and we got board games! Please don't touch our games with your greasy fingers";
  contentDiv.appendChild(description);
  const locationHeader = document.createElement("div");
  locationHeader.textContent = "Location";
  contentDiv.appendChild(locationHeader);
  const address = document.createElement("p");
  address.textContent = "123 Fake St Los Angeles, CA 90012";
  contentDiv.appendChild(address);
  const hoursHeader = document.createElement("h1");
  hoursHeader.textContent = "Hours";
  contentDiv.appendChild(hoursHeader);
  
  const hoursList = document.createElement("ul");
  const sunday = document.createElement("li");
  sunday.textContent = "Sunday: 11am-11pm";
  const monday = document.createElement("li");
  monday.textContent = "Monday: 12pm-11pm";
  const tuesday = document.createElement("li");
  tuesday.textContent = "Tuesday: 12pm-11pm";
  const wednesday = document.createElement("li");
  wednesday.textContent = "Wednesday: Closed";
  const thursday = document.createElement("li");
  thursday.textContent = "Thursday: 12pm-11pm";
  const friday = document.createElement("li");
  friday.textContent = "Friday: 12pm-1am";
  const saturday = document.createElement("li");
  saturday.textContent = "Saturday: 12pm-1am";
  hoursList.appendChild(sunday);
  hoursList.appendChild(monday);
  hoursList.appendChild(tuesday);
  hoursList.appendChild(wednesday);
  hoursList.appendChild(thursday);
  hoursList.appendChild(friday);
  hoursList.appendChild(saturday);
  contentDiv.appendChild(hoursList);
  
  const phoneHeader = document.createElement("h1");
  phoneHeader.textContent = "Phone";
  contentDiv.appendChild(phoneHeader);
  const phone = document.createElement("p");
  phone.textContent = "(323) 123-4567";
  contentDiv.appendChild(phone);
}

const homeBtn = document.querySelector(".home-button");
homeBtn.addEventListener('click', displayHomePage);

