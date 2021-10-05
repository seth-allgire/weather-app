export const ADD_SAVED_LOCATION = "Add Saved Location";
export const DELETE_SAVED_LOCATION = "Delete Saved Location";
export const CLEAR_SAVED_LOCATIONS = "Clear Saved Locations";

export function addSavedLocation(weather) {
  return { type: ADD_SAVED_LOCATION, weather };
}

export function deleteSavedLocation(location) {
  return { type: DELETE_SAVED_LOCATION, location };
}

export function clearSavedLocations() {
  return { type: CLEAR_SAVED_LOCATIONS };
}
