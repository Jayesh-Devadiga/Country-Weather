import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../redux/actions";

const Country = (props) => {
  const { capital, population, latlng, flag, fetchWeather } = props;
  const [latitude, longitude] = latlng;
  console.log(props);
  return (
    <div>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Capital: </span>
        {capital}
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Population: </span>
        {population}
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Latitude: </span>
        {latitude}
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Longitude: </span>
        {longitude}
      </Typography>
      <Avatar variant="square" src={flag} style={{ width: "40px", height: "24px" }} />
      <Button variant="contained" fullWidth style={{ marginTop: "30px" }} onClick={() => fetchWeather(capital)}>
        Check Capital Weather
      </Button>
    </div>
  );
};

export default connect(null,{fetchWeather})(Country);
