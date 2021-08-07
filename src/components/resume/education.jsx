import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const Education = ({
  startSchoolYear,
  endSchoolYear,
  university,
  degree,
  courses,
  thesis,
}) => {
  return (
    <div style={{ margin: "0" }}>
      <Grid style={{ margin: "0" }}>
        <Cell col={3} style={{ margin: "0" }}>
          <h6 style={{ margin: "0" }}>
            {startSchoolYear} - {endSchoolYear}
          </h6>
        </Cell>
        <Cell col={9} style={{ margin: "0" }}>
          <h5 style={{ margin: "0" }}>{degree}</h5>
          <p style={{ color: "grey", margin: "0", fontWeight: "bold" }}>
            {university}
          </p>
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "50%",
              height: "0",
              marginBottom: "5px",
              marginTop: "0",
            }}
          />

          {!thesis ? (
            courses.map((d) => (
              <p style={{ color: "grey", margin: "0" }}>{d}</p>
            ))
          ) : (
            <div>
              <p style={{ fontWeight: "bold", margin: "0" }}>
                Thesis: <span>{thesis}</span>
              </p>
              {courses.map((d) => (
                <p style={{ color: "grey", margin: "0" }}>{d}</p>
              ))}
            </div>
          )}
        </Cell>
      </Grid>
    </div>
  );
};

export default Education;
