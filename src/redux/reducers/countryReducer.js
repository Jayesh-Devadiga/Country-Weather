import { BACK_TO_COUNTRY, BACK_TO_HOME, FETCH_COUNTRY, FETCH_WEATHER } from "../actions/types";

const initialState = {
  country: {},
  weather: {},
  showingHomePage: true,
  showingCountry: false,
  showingWeather: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        country: action.payload,
        showingHomePage: false,
        showingCountry: true,
        showingWeather: false,
      };
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        showingHomePage: false,
        showingCountry: false,
        showingWeather: true,
      };
    case BACK_TO_COUNTRY:
      return {
        ...state,
        showingHomePage: false,
        showingCountry: true,
        showingWeather: false,
      };
    case BACK_TO_HOME:
      return {
        ...state,
        country: {},
        weather: {},
        showingHomePage: true,
        showingCountry: false,
        showingWeather: false,
      };

    default:
      return state;
  }
};
