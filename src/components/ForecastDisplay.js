import React from "react";

export default function ForecastDisplay({ forecast }) {
  return (
    <div>
      <div>
        Forecast for:
        {forecast.day}: low {forecast.min}; high {forecast.max} {forecast.descr}{" "}
        <img src={forecast.icon} alt="icon" />
      </div>
    </div>
  );
}
