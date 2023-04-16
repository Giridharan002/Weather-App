const apikey= "04c1ae798b5150ccc3d75e60f5e13b26";


const weatherDataEl = document.getElementById("weather-data");

const cityinputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityinputEl.value;
    getWeatherData(cityValue);
}
);

async function  getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network reponse was not ok")
        }
        const data = await response.json()
        
        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${ Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`,
        ]
        
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png"alt="Weather Icon">`;

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description").textContent = description;

        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
  
      
    } catch (error){
        weatherDataEl.querySelector(".icon").innerHTML ="";

        weatherDataEl.querySelector(".temperature").textContent = "";

        weatherDataEl.querySelector(".description").textContent = "error happened,please try again later!";

        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}
