import apiKey from "./apikey.js";

// DOM elements
const searchBtn = document.getElementById("searchbtn");
const reqCity = document.getElementById("enteredcity");
const displayCity = document.getElementById("displaycity");
const displayLTime = document.getElementById("displayLtime");
const displayTemp = document.getElementById("displaytemp");
const displayWeather = document.getElementById("displayweather");
const currentCity = document.getElementById("currentcity");
const currentLTime = document.getElementById("currentLtime");
const currentTemp = document.getElementById("currenttemp");
const currentWeather = document.getElementById("currentweather");
const currenticon = document.getElementById("current-weather-icon");
const displayicon = document.getElementById("display-weather-icon");

// Function to handle fetch errors
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    alert("Failed to fetch weather data. Please try again later.");
  }
}

// Searched city weather function
async function getSearchedCityDetails(cityName) {
  return await fetchWithErrorHandling(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
  );
}

// Weather of user's current location function
async function getCurrentCityDetails(longitude, latitude) {
  return await fetchWithErrorHandling(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`
  );
}

// Location sub-function
async function success(position) {
  const details = await getCurrentCityDetails(
    position.coords.longitude,
    position.coords.latitude
  );
  if (details) {
    currentCity.innerHTML = `${details.location.name}, ${details.location.region} - ${details.location.country}`;
    currentLTime.innerHTML = `Local-Time: ${details.location.localtime}`;
    currentTemp.innerHTML = `Temperature: ${details.current.temp_c} °C`;
    currentWeather.innerHTML = `Weather: ${details.current.condition.text}`;

    // Set the icon
    currenticon.src = `https:${details.current.condition.icon}`; // Add `https:` prefix
    currenticon.alt = details.current.condition.text; // Set alt text to the weather condition
  }
}

function failure() {
  console.log("Unable to retrieve location.");
}

// Show current location weather
function showCurrentLocationWeather() {
  navigator.geolocation.getCurrentPosition(success, failure);
}

// Search button code
searchBtn.addEventListener("click", async () => {
  const cityName = reqCity.value.trim(); // Trim whitespace from input
  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  const details = await getSearchedCityDetails(cityName);
  if (details) {
    displayCity.innerHTML = `${details.location.name}, ${details.location.region} - ${details.location.country}`;
    displayLTime.innerHTML = `Local-Time: ${details.location.localtime}`;
    displayTemp.innerHTML = `Temperature: ${details.current.temp_c} °C`;
    displayWeather.innerHTML = `Weather: ${details.current.condition.text}`;

    // Set the icon for searched city
    displayicon.src = `https:${details.current.condition.icon}`; // Add `https:` prefix
    displayicon.alt = details.current.condition.text; // Set alt text to the weather condition
  }
});

// Call showCurrentLocationWeather on page load or button click
showCurrentLocationWeather();
