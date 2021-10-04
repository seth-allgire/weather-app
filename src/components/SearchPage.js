import React, { useState } from "react";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import WeatherDisplay from "./WeatherDisplay";
import {
  setSearch,
  addSavedLocation,
  deleteSavedLocation,
} from "../redux/actions";

function SearchPage({
  user,
  savedLocations,
  addSavedLocation,
  deleteSavedLocation,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(search);

  return (
    <>
      <div>
        <div>Please enter a city or zipcode:</div>
        <label className="form-label" htmlFor="search">
          Get weather for
        </label>
        <input
          className="form-input"
          id="search"
          name="search"
          placeholder="City or zipcode"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <div className="form-error">
          {error &&
            searchInput.length < 3 &&
            "Location must contain at least 3 characters"}
        </div>
        <button className="form-button" onClick={() => setSearch(searchInput)}>
          Search
        </button>
        <div>
          {loading && <div>LOADING</div>}
          {error && !loading && <div>{error}</div>}
          {data &&
            data.forecast &&
            !loading &&
            data.forecast.map((val) => (
              <WeatherDisplay
                key={idx}
                location={data.location}
                current_temp={data.current_temp}
                forecast={val.forecast}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
    savedLocations: state.savedLocations,
  };
};

const mapDispatchToProps = {
  deleteSavedLocation,
  addSavedLocation,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
