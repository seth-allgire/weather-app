export const SET_SEARCH = "Set Search";
export const CLEAR_SEARCH = "Clear Search";

export function setSearch(weather) {
  return { type: SET_SEARCH, weather };
}

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}
