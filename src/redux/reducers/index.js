import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import savedLocationReducer from "./savedLocation.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  savedLocation: savedLocationReducer,
});

export default rootReducer;
