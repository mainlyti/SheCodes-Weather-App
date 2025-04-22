//Display current time
function formatDate(date) {
  let minute = date.getMinutes();
  let hour = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${day} ${hour}:${minute}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//Display searched city
function search(event) {
  event.preventDefault();
  let searchedInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  //API info
  let apiKey = "5bfa080034fb64td6b864b3a813efo04";
  let city = searchedInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);

  cityElement.innerHTML = city;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Display current temperature of searched city
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
}
