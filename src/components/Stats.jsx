import React from "react";
import Typography from "@mui/material/Typography";
// import { data } from "../data/data";
const Stats = () => {
  return (
    <>
      {/* {console.log(Date.parse("07/17/2015"))} */}
      <div className="row">
        <div className="col-2">
          <Typography variant="h1" color="primary">
            30
          </Typography>
          <Typography variant="body1" color="primary">
            Total Projects
          </Typography>
        </div>

        <div className="col-5">
          <Typography variant="h1" color="primary">
            {/* $ {Math.trunc(data.reduce((n, { budget }) => n + budget, 0))} */}
            $ 521K
          </Typography>
          <Typography variant="body1" color="primary">
            Total Budget
          </Typography>
        </div>
        <div className="col-2">
          <Typography variant="h1" color="primary">
            4
          </Typography>
          <Typography variant="body1" color="primary">
            New Projects
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="h1" color="primary">
            11
          </Typography>
          <Typography variant="body1" color="primary">
            In working
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Stats;
