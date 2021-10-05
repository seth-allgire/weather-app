import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser, clearSearch, clearSavedLocations } from "../redux/actions";

function Menu({ user, clearUser, clearSearch, clearSavedLocations }) {
  return (
    <nav className="menu">
      {!user && (
        <NavLink to="/login" activeClassName="active" className="link">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink to="/login" activeClassName="active" className="link">
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
              clearSavedLocations();
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
  clearSavedLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
