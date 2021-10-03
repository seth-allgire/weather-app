import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";

function LoginPage() {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="form-section">
        <label className="form-label" htmlFor="username">
          Username:
        </label>
        <input
          className="form-input"
          value={username}
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <div className="form-error">
          {error &&
            username.length < 4 &&
            "Username must contain at least 4 characters"}
        </div>
      </div>
      <div className="form-section">
        <label className="form-label" htmlFor="password">
          Password:
        </label>
        <input
          className="form-input"
          value={password}
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="form-error">
          {error &&
            password.length < 4 &&
            "Password must contain at least 4 characters"}
        </div>
      </div>

      <button
        className="form-button"
        onClick={() => {
          if (username.length < 4 || password.length < 4) {
            setError(true);
            return;
          }
          setUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
