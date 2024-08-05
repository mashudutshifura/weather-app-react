import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <h1 class="weather-city">Pretoria</h1>
        <p class="weather-details">
          <span id="time">Monday</span> <span id="description"></span>
          <br />
          Humidity: <strong id="humidity">73%</strong>, Wind:
          <strong id="wind-speed">3.09km/h</strong>
        </p>
      </div>
      <div className="weather-temperature-container">
        <div className="row">
          <div className="col-6">
            <div className="weather-icon" id="icon"></div>
            <div className="temperature-value" id="temperature">
              17
            </div>
            <div className="temperature-unit">°C</div>
          </div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
