import { useState, useEffect } from "react";

export default function useFetch(search) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      if (search.length < 3) {
        return;
      }
      setLoading(true);
      setData({});
      setError(null);
      try {
        const url = `http://api.weatherapi.com/v1/current.json?key=6287e78fbd774a9daa0160527210110&q=${search}&aqi=no`;
        const response = await fetch(url);
        const json = await response.json();
        let forecast = json.forecast.forecastday.map((val) => ({
          day: val.date,
          max: val.day.maxtemp_f,
          min: val.day.mintemp_f,
        }));
        let data = {
          location: json.location.name,
          forecast,
          current_temp: json.current.temp_f,
        };
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [search]);
  return { data, error, loading };
}
