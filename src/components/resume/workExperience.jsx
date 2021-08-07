import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const WorkExperience = ({
  startWorkYear,
  endWorkYear,
  organization,
  jobTile,
  duties,
}) => {
  return (
    <div style={{ margin: "0" }}>
      <Grid style={{ margin: "0" }}>
        <Cell col={3} style={{ margin: "0" }}>
          <h6 style={{ margin: "0" }}>
            {startWorkYear} - {endWorkYear}
          </h6>
        </Cell>
        <Cell col={9} style={{ margin: "0" }}>
          <h5 style={{ margin: "0" }}>{jobTile}</h5>
          <p style={{ color: "grey", margin: "0" , fontWeight: "bold"}}>{organization}</p>
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "50%",
              height:  "0",
              margin: "0",
            }}
          />
          {duties.map((d)=>(
            <p style={{ color: "grey", margin: "0" }}>{d}</p>

          ))}
        </Cell>
      </Grid>
    </div>
  );
};

export default WorkExperience;
