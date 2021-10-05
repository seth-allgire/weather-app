import React from "react";
import { connect } from "react-redux";
import { deleteSavedLocation } from "../redux/actions";

function SavedLocationsPage({
  user,
  location,
  region,
  savedLocations,
  deleteSavedLocation,
}) {
  return (
    <div>
      <h3>Saved locations for {user}</h3>

      <div>{savedLocations}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    savedLocations: state.savedLocations,
  };
};

const mapDispatchToProps = {
  deleteSavedLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocationsPage);
