import React from "react";

export default function WeatherDisplay({ location, current_temp, forecast }) {
  return (
    <div>
      <h3>
        City: {location} Current Temp: {current_temp}
      </h3>
      <div>Forecast: {forecast}</div>
    </div>
  );
}
