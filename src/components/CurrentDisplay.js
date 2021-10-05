import React from "react";
import { addSavedLocation, deleteSavedLocation } from "../redux/actions";

export default function CurrentDisplay({
  location,
  region,
  current_temp,
  isSavedLocation,
}) {
  return (
    <div>
      <div>
        <h3 className="forecast-location">
          Weather for: {location}, {region}
          {!isSavedLocation && (
            <button
              className="form-button"
              onClick={() => addSavedLocation({ location, region })}
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
        </h3>
        <div className="curr-temp">Current temperature: {current_temp}</div>
      </div>
    </div>
  );
}
