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
// import { useState } from 'react';

const Globe = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const clickButton = () => {
    setRotation([100, 130, 30]);
  };
  // {"latitude": 28.033886, "longitude": 1.659626}
  const svgRef = useRef();

  useEffect(() => {
    var diameter = 960 / 3,
      radius = diameter / 2,
      velocity = 0.01;

    var projection = d3
      .geoOrthographic()
      .scale(radius - 2)
      .translate([radius, radius])
      .clipAngle(90)
      .precision(0);

    d3.select(svgRef.current)
      .selectAll(".title")
      .data(["λ", "φ", "γ"])
      .enter()
      .append("div")
      .attr("class", "title")
      .style("width", diameter + "px")
      .text(function (d) {
        return d;
      });

    var canvas = d3
      .select(svgRef.current)
      .selectAll("canvas")
      .data(d3.range(3))
      .enter()
      .append("canvas")
      .datum(function () {
        return this.getContext("2d");
      })
      .attr("width", diameter)
      .attr("height", diameter);

    var path = d3.geoPath().projection(projection);

    d3.json(
      "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json",
      function (error, world) {
        if (error) throw error;

        var land = topojson.feature(world, world.objects.land),
          globe = { type: "Sphere" };

        d3.timer(function (elapsed) {
          var angle = velocity * elapsed;
          canvas.each(function (context, i) {
            var rotate = [0, 0, 0];
            rotate[i] = angle;
            projection.rotate(rotate);
            context.clearRect(0, 0, diameter, diameter);
            context.beginPath();
            path.context(context)(land);
            context.fill();
            context.beginPath();
            path(globe);
            context.stroke();
          });
        });
      }
    );
  });

  return (
    <div>
      <div id="svg-globe" ref={svgRef}></div>
      <button type="button" onClick={clickButton}>
        Click
      </button>
    </div>
  );
};

export default Globe;
