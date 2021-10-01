import {
  ADD_SAVED_LOCATION,
  DELETE_SAVED_LOCATION,
  CLEAR_SAVED_LOCATION,
} from "../actions";

export default function savedLocationReducer(state = [], action) {
  switch (action.type) {
    case ADD_SAVED_LOCATION:
      return [...state, action.weather];
    case DELETE_SAVED_LOCATION:
      return state.filter((weather) => weather.location !== action.location);
    case CLEAR_SAVED_LOCATION:
      return [];
    default:
      return state;
  }
}
