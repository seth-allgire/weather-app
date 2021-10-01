export const SET_SEARCH = "Set Search";
export const CLEAR_SEARCH = "Clear Search";

export function setSearch() {
  return { type: SET_SEARCH };
}

export function clearSearch(weather) {
  return { type: CLEAR_SEARCH, weather };
}
