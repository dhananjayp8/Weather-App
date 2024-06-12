const api = {
  key: "d724d7a1db8590909cf13f558bc25145",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "d724d7a1db8590909cf13f558bc25145";

$(document).ready(function () {
  weatherFn("Bhusawal");
});

async function weatherFn(cName) {
  const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(temp);
    const data = await res.json();
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weatherShowFn(data) {
  $("#city-name").text(data.name);
  $("#date").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#temperature").html(`${data.main.temp}°C`);
  $("#description").text(data.weather[0].description);
  $("#wind-speed").html(`Wind Speed: ${data.wind.speed} m/s`);
  $("#weather-icon").attr("src", `...`);
  $("#weather-info").fadeIn();
}
// const api = {
//   key: "d724d7a1db8590909cf13f558bc25145",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress', setQuery);

// function setQuery(evt) {
//   if (evt.keyCode == 13) {
//     getResults(searchbox.value);
//   }
// }

// function getResults (query) {
//   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(weather => {
//       return weather.json();
//     }).then(displayResults);
// }

// function displayResults (weather) {
//   let city = document.querySelector('.location .city');
//   city.innerText = `${weather.name}, ${weather.sys.country}`;

//   let now = new Date();
//   let date = document.querySelector('.location .date');
//   date.innerText = dateBuilder(now);

//   let temp = document.querySelector('.current .temp');
//   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//   let weather_el = document.querySelector('.current .weather');
//   weather_el.innerText = weather.weather[0].main;

//   let hilow = document.querySelector('.hi-low');
//   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
// }

// function dateBuilder (d) {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }
