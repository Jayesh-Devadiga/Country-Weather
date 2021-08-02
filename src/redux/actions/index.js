import { countrySearch, weatherSearch } from "../../utils/API";
import { BACK_TO_COUNTRY, BACK_TO_HOME, FETCH_COUNTRY, FETCH_WEATHER } from "./types";

export const fetchCountry = (countryName) => async (dispatch) => {
  try {
    const countryDeatils = await countrySearch.get(`${countryName}`);
    console.log(countryDeatils.data[0]);
    dispatch({ type: FETCH_COUNTRY, payload: countryDeatils.data[0] });
  } catch (error) {
    alert("Enter a valid country name");
  }
};

export const fetchWeather = (capital) => async (dispatch) => {
  const weather = await weatherSearch.get(`${capital}`);
  console.log(weather.data.current);
  dispatch({ type: FETCH_WEATHER, payload: weather.data.current });
};

export const backToCountry = () => {
  return {
    type: BACK_TO_COUNTRY,
  };
};

export const backToHome = () => {
  return {
    type: BACK_TO_HOME,
  };
};
