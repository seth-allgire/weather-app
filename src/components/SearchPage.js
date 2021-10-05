import React, { useState } from "react";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import ForecastDisplay from "./ForecastDisplay";
import {
  setSearch,
  addSavedLocation,
  deleteSavedLocation,
} from "../redux/actions";
import CurrentDisplay from "./CurrentDisplay";

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
        <h3 className="comp-header">Find your forecast</h3>
        <div className="form-section">
          <label className="form-label" htmlFor="search">
            Please enter a city or zipcode:
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
        </div>
        <button className="form-button" onClick={() => setSearch(searchInput)}>
          Search
        </button>
        <div>
          {loading && <div>LOADING</div>}
          {error && !loading && <div>{error}</div>}
          {data && data.location && data.current_temp && !loading && (
            <CurrentDisplay
              isSavedLocation={""}
              location={data.location}
              region={data.region}
              current_temp={data.current_temp}
              addSavedLocation={addSavedLocation}
              deleteSavedLocation={deleteSavedLocation}
            />
          )}
          {data &&
            data.forecast &&
            !loading &&
            data.forecast.map((val, idx) => (
              <ForecastDisplay key={idx} forecast={val} />
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
