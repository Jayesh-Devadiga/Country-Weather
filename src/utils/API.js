import axios from "axios";

export const countrySearch = axios.create({ baseURL: `https://restcountries.eu/rest/v2/name/` });

export const weatherSearch = axios.create({
  baseURL: `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=`,
});
