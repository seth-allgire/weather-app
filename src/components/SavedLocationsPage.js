import React from "react";
import { connect } from "react-redux";
import { deleteSavedLocation } from "../redux/actions";
import WeatherDisplay from "./WeatherDisplay";

function SavedLocationsPage(user, savedLocation, deleteSavedLocation) {
  return (
    <div>
      <h3>Saved locations for {user}</h3>
      <WeatherDisplay />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    savedLocation: state.savedLocation,
  };
};

const mapDispatchToProps = {
  deleteSavedLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocationsPage);
