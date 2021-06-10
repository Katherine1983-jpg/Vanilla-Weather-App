function formatDate (timestamp){
  let date = new Date (timestamp);
  let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
  let minutes = date.getMimnutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  return `${day} ${hours}: ${minutes}`;
}


function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity";)
  let windElement = document.querySelector ("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey = "b0d83851e18449e7f7758cf92ca80a6e";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
