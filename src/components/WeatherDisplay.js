import React from "react";
import { addSavedLocation, deleteSavedLocation } from "../redux/actions";

export default function WeatherDisplay({
  location,
  current_temp,
  forecast,
  isSavedLocation,
}) {
  return (
    <div>
      <h3>
        City: {location} Current Temp: {current_temp}
      </h3>
      <div>Forecast: {forecast}</div>
      {!isSavedLocation && (
        <button
          className="form-button"
          onClick={() => addSavedLocation({ location, current_temp, forecast })}
        >
          Save Location
        </button>
      )}
      {isSavedLocation && (
        <button
          className="form-button"
          onClick={() => deleteSavedLocation(location)}
        >
          Remove Location
        </button>
      )}
    </div>
  );
}
