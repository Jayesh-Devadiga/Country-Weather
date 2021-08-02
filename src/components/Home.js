import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Home = (props) => {
  const { fetchCountry } = props;
  const [countryName, setCountryName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchCountry(countryName);
        setCountryName("");
      }}
    >
      <TextField
        fullWidth
        label="Country"
        placeholder="Enter the name of the country you want to search"
        variant="outlined"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />

      <Button fullWidth variant="contained" type="submit" style={{ marginTop: "20px" }} disabled={!countryName}>
        Search
      </Button>
    </form>
  );
};

export default Home;
