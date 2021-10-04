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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <ProtectedRoute guarded={false} path="/login">
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute guarded={true} path="/search">
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute guarded={true} path="/savedLocations">
          <SavedLocationsPage />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
