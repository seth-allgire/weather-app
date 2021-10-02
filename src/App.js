import "./App.css";
import "./Weather.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import SavedLocationsPage from "./components/SavedLocationsPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/savedLocations">
          <SavedLocationsPage />
        </Route>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
