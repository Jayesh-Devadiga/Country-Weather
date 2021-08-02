import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

const Titlebar = (props) => {
  const { backToCountry, backToHome } = props;
  const { showingCountry, showingWeather } = props.countryReducer;
  const renderHeading = () => {
    if (showingCountry) {
      return (
        <>
          <IconButton onClick={backToHome}>
            <KeyboardBackspace color="inherit" />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Country Details
          </Typography>
        </>
      );
    }
    if (showingWeather) {
      return (
        <>
          <IconButton onClick={backToCountry}>
            <KeyboardBackspace color="inherit" />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Weather Details
          </Typography>
        </>
      );
    }
    return (
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Home
      </Typography>
    );
  };
  return (
    <AppBar position="static">
      <Toolbar>{renderHeading()}</Toolbar>
    </AppBar>
  );
};

export default Titlebar;
