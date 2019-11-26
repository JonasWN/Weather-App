const degrees = document.querySelector("#degree_number")
const wind = document.querySelector("#windNumber")
const weatherIcon = document.querySelector("#WeatherIcon")
// Weather Icons

const weatherIcons = {
  sunny: "/assets/images/sunny.svg",
  cloudy: "/assets/images/cloudy.svg",
  wind: "/assets/images/wind.svg",
  rainy: "/assets/images/rain.svg",
  snow: "/assets/images/snow.svg",
  rainy: "/assets/images/wind-speed.svg"
}

const api = () => {
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=2618425&appid=68f82a388c4c0de995710dfc8a8ca667&units=metric`
    )
    .then(answer => answer.json())
    .then(response => {
      console.log(response);

      degrees.innerText = response.main.temp
      wind.innerText = response.wind.speed
      weatherIcon.src = `/assets/images/${response.weather[0].main}.svg`
    });
}
api()
setInterval(api, 600000);