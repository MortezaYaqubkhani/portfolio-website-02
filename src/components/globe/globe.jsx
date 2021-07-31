// const width = 960;
// const height = 500;
//   const config = {
//   speed: 0.005,
//   verticalTilt: -30,
//   horizontalTilt: 0
// }
// let locations = [];
// const svg = d3.select('svg')
//     .attr('width', width).attr('height', height);
// const markerGroup = svg.append('g');
// const projection = d3.geoOrthographic();
// const initialScale = projection.scale();
// const path = d3.geoPath().projection(projection);
// const center = [width/2, height/2];

// drawGlobe();
// drawGraticule();
// enableRotation();

// function drawGlobe() {
//     d3.queue()
//         .defer(d3.json, 'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
//         .await((error, worldData) => {
//             svg.selectAll(".segment")
//                 .data(topojson.feature(worldData, worldData.objects.countries).features)
//                 .enter().append("path")
//                 .attr("class", "segment")
//                 .attr("d", path)
//                 .style("stroke", "#888")
//                 .style("stroke-width", "1px")
//                 .style("fill", (d, i) => '#e5e5e5')
//                 .style("opacity", ".6")
//                 .on('mouseover', function (d, i) {
// d3.select(this).style('fill', 'rgb(60, 60, 60)');
// })

//         });
// }

// function drawGraticule() {
//     const graticule = d3.geoGraticule()
//         .step([10, 10]);

//     svg.append("path")
//         .datum(graticule)
//         .attr("class", "graticule")
//         .attr("d", path)
//         .style("fill", "#fff")
//         .style("stroke", "#ccc");
// }

// function enableRotation() {
//     d3.timer(function (elapsed) {
//         projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
//         svg.selectAll("path").attr("d", path);
//         drawMarkers();
//     });
// }

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import * as queue from "queue";
import * as topojson from "topojson";

const Globe = () => {
  const svgRef = useRef();
  const width = 960;
  const height = 500;
  const config = {
    speed: 0.005,
    verticalTilt: -30,
    horizontalTilt: 0,
  };
  let locations = [];

  useEffect(() => {
    console.log(123);
    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "rgb(65, 83, 83)");

    const markerGroup = svg.append("g");
    const projection = d3.geoOrthographic();
    const initialScale = projection.scale();
    const path = d3.geoPath().projection(projection);
    const center = [width / 2, height / 2];

    // function drawGlobe() {
    d3.json(
      "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json"
    ).then((worldData) => {
      svg
        .selectAll(".segment")
        .data(topojson.feature(worldData, worldData.objects.countries).features)
        .enter()
        .append("path")
        .attr("class", "segment")
        .attr("d", path)
        .style("stroke", "#888")
        .style("stroke-width", "1px")
        .style("fill", (d, i) => "#e5e5e5")
        .style("opacity", ".6")
        .on("mouseover", function (d, i) {
          d3.select(this).style("fill", "rgb(60, 60, 60)");
        });
    });
    // }
  }, []);

  return <div id="svg-globe" ref={svgRef}>fg</div>;
};

export default Globe;
