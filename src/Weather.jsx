import React from "react";
import "./index.css";

function Weather(props) {
  // Example static data; replace with API data as needed
  const weather = {
    city: props.name,
    temp: props.main.temp,
    condition: props.weather[0].main,
    icon: `http://openweathermap.org/img/w/${props.weather[0].icon}.png`,
  };

  return (
    <div className="weather-container">
        <h1>Weather App</h1>
      <h2>{weather.city}</h2>
      <img src={weather.icon} alt={weather.condition} className="weather-icon" />
      <div className="weather-temp">{weather.temp}°C</div>
      <div className="weather-condition">{weather.condition}</div>
    </div>
  );
}

export default Weather;