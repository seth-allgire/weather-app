import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import savedLocationReducer from "./savedLocation.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  userReducer,
  searchReducer,
  savedLocationReducer,
});

export default rootReducer;
