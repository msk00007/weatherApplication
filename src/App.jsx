import React, { useState } from "react";
import { Search } from "./components/Search/Search";
import { Forcast } from "./components/Forcast/Forcast";
import { CurrentWeather } from "./components/current-weather/Current-weather";
import { weather_Url, weather_Key } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${weather_Url}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weather_Key}`
    );
    const forcastFetch = fetch(
      `${weather_Url}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${weather_Key}`
    );

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <Header />
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forcast data={forecast} />}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Weather Application</h1>
    </div>
  );
}
export default App;
