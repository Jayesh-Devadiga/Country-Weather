import { Typography } from "@material-ui/core";
import React from "react";

const Weather = (props) => {
  const { precip, temperature, wind_speed, weather_icons } = props;
  return (
    <div>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Temperature: </span>
        {temperature} ⁰C
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Weather Icon: </span>
        <img src={weather_icons} style={{ height: "20px", width: "20px" }} />
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Wind Speed: </span> {wind_speed}
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Precip: </span>
        {precip}
      </Typography>
    </div>
  );
};

export default Weather;
