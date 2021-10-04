import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser, clearSearch, clearSavedLocation } from "../redux/actions";

function Menu({ user, clearUser, clearSearch, clearSavedLocation }) {
  return (
    <nav className="menu">
      {!user && (
        <NavLink to="/login" activeClassName="active" className="link">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink to="/search" activeClassName="active" className="link">
            Search
          </NavLink>
          <NavLink
            to="/savedLocations"
            activeClassName="active"
            className="link"
          >
            Saved Locations
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => {
              clearUser();
              clearSearch();
              clearSavedLocation();
            }}
            className="link"
            activeClassName="active"
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  clearUser,
  clearSearch,
  clearSavedLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
