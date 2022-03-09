import React from "react";
import Container from "@mui/material/Container";
import PDataGrid from "../components/DataGrid";
import { LicenseInfo } from "@mui/x-data-grid-pro";
import DateRangePicker from "../components/DateRangePicker";

import Stats from "../components/Stats";
const myfubn = () => {
  LicenseInfo.setLicenseKey(` ${process.env.REACT_APP_MUI_X_KEY}`);
};

const Home = () => {
  return (
    <Container maxWidth="xl">
      {myfubn()}
      <br />
      <div className="row">
        <div className="col-8">
          <Stats />
        </div>

        <div className="col-4">
          <h3>Show records in range: </h3>
          <DateRangePicker />
          <br />
        </div>
      </div>
      <div>
        <br />

        <PDataGrid />
      </div>
    </Container>
  );
};

export default Home;
