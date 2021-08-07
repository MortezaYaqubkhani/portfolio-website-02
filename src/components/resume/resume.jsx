import "./resume.scss";
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import WorkExperience from "./workExperience";

const Resume = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="mainResume">
      <div className="resume" id="resume">
        <h1>Resume</h1>
      </div>
      <div className="resumeGrid">
        <Grid>
          <Cell col={1}></Cell>
          <Cell col={5} className="resume-left-col">
            <h3>ٍEducation</h3>
            <hr
              style={{
                borderTop: "3px solid #e22947",
                margin: "0",
                width: "70%",
              }}
            />
            <Education
              startSchoolYear={2019}
              endSchoolYear={2021}
              university="University of Twente, Faculty of ITC"
              degree="MSc Geoinformatics"
              courses={[
                "• Scientific Geocomputing with Python",
                "• Acquisition and Exploration of Geospatial Data",
                "• Extract/Analysis & Dissemination of Geodata",
                "• Integrated Geospatial Workflows",
              ]}
              thesis="Integration of the MDA and Software Design Patterns for Geospatial Web and Mobile Application Development"
            />

            <Education
              startSchoolYear={2006}
              endSchoolYear={2010}
              university="Univarsity of Zajan"
              degree="Bsc Geomatic Engineering"
              courses={[
                "• Geographic information systems (GIS)",
                "• Fundamentals of remote sensing (RS)",
                "• Photogrammetry",
                "• Global Positioning System (GPS)",
                "• Land / underground surveying",
              ]}
            />
          </Cell>

          <Cell col={5} className="resume-right-col">
            <h3>Work Experience</h3>
            <hr
              style={{
                borderTop: "3px solid #e22947",
                margin: "0",
                width: "70%",
              }}
            />
            <WorkExperience
              startWorkYear={2021}
              endWorkYear={2021}
              organization="NEO B.V."
              jobTile="Intern, Web GIS development"
              duties={[
                "•	Developing a 3D visualization web application for remotely sensed land objects (trees)",
                "• Generate 3D tiles for tree database and visualize it in Mapbox GL JS and Cesium S",
              ]}
            />
            <WorkExperience
              startWorkYear={2013}
              endWorkYear={2019}
              organization="Abyek Municipality"
              jobTile="Geographcal Information System Specialist"
              duties={[
                "• Reviewing Municipality's GIS data for accuracy",
                "• Creating and updating geospatial databases and maps using satellite images and aerial photos through GIS software",
                "• Utilizing the GIS software to analyze the spatial and non-spatial information in the databases",
              ]}
            />

            <WorkExperience
              startWorkYear={2010}
              endWorkYear={2013}
              organization="Freelance"
              jobTile="Land Surveyor / Geomatics Engineer"
              duties={[
                "• Creating and updating land use maps",
                "• Topographic mapping",
                "• cadastral mapping",
              ]}
            />
          </Cell>
          <Cell col={1}></Cell>
        </Grid>
      </div>
      <div
        className={"right " + (menuOpen && "active")}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="hamburger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
