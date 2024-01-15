var apiKey = "a8cac7a45bb1d3b81a202f2bc9de51ca";
var apiurl = "https://api.openweathermap.org/data/2.5/weather";

var locationInput = document.getElementById("locationInput");
var searchbutton = document.getElementById("searchbutton");
var locationElement = document.getElementById("location");
var temperature = document.getElementById("temperature");
var description = document.getElementById("description");

searchbutton.addEventListener("click", () => {
  var location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  var url = `${apiurl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
