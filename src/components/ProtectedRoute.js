import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function ProtectedRoute({ user, children, path, guarded }) {
  const redirectTo = guarded ? "/login" : "/search";

  if ((user && guarded) || (!user && !guarded)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return (
      <Route path={path}>
        <Redirect to={redirectTo}></Redirect>
      </Route>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
