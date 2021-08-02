import { CssBaseline } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { backToCountry, backToHome, fetchCountry, fetchWeather } from "../redux/actions";
import Country from "./Country";
import Home from "./Home";
import Titlebar from "./Titlebar";
import Weather from "./Weather";

const PageContent = (props) => {
  const { countryReducer } = props;
  const { showingCountry, showingWeather, country, weather } = countryReducer;
  const renderPage = () => {
    if (showingCountry) {
      return <Country {...country} />;
    }
    if (showingWeather) {
      return <Weather {...weather} />;
    }
    return <Home {...props} />;
  };
  return (
    <div>
      <CssBaseline />
      <Titlebar {...props} />
      <div style={{ padding: "20px" }}>{renderPage()}</div>
    </div>
  );
};

const mapStateToProps = ({ countryReducer }) => {
  return {
    countryReducer,
  };
};

export default connect(mapStateToProps, { fetchCountry, fetchWeather, backToCountry, backToHome })(PageContent);
