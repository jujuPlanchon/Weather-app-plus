let now = new Date();
let currentTime = document.querySelector("#date");

let jour = now.getDate();
let year = now.getUTCFullYear();
let weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let week = weeks[now.getDay()];
let mois = months[now.getMonth()];
currentTime.innerHTML = `${week}, ${jour}, ${mois}, ${year}`;

let time = new Date();
let hoursNow = document.querySelector("#hour");
let hours = time.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = time.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
hoursNow.innerHTML = `${hours}:${minutes}`;

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let idTemperature = document.querySelector("#temperature");
  idTemperature.innerHTML = Math.round(response.data.main.temp);
}

function okSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-bar").value;
  let apiKey = "f9b144c081d097692afbbd4e19bdc435";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let formSearch = document.querySelector("#search-city");
formSearch.addEventListener("submit", okSubmit);

function currentPosition(position) {
  let apiKey = "f9b144c081d097692afbbd4e19bdc435";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}
let currentLocationButton = document.querySelector("#temp-now");
currentLocationButton.addEventListener("click", getCurrentLocation);
