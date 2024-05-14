"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

type NeedleGaugeProps = {
  gauge: number;
};

const defaultGauge: number = 50.5;

const NeedleGauge = ({ gauge }: NeedleGaugeProps) => {
  const ref = useRef<any>(null);
  var width = 300;
  var height = 300;

  var scale = d3.scaleLinear().domain([50, 80]).range([0, 180]);

  useEffect(() => {
    var svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    var arc: any = d3
      .arc()
      .innerRadius(50)
      .outerRadius(80)
      // .cornerRadius(5)
      .padAngle(0.05);

    // an array of colors
    const colors: any[] = ["#ea4335", "#fbbc05", "#4285f4", "#34a853"];

    var pie = d3
      .pie()
      .startAngle((-1 * Math.PI) / 2)
      .endAngle(Math.PI / 2)
      .value(function (colors: any) {
        return 30 / colors.length;
      });

    // draw the arcs. one for each color
    svg
      .selectAll(".arc")
      .data(pie(colors))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("transform", "translate(200,200)")
      .style("fill", function (d, i) {
        return colors[i];
      });

    // set up the needle
    svg
      .selectAll(".needle")
      .data([0])
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", -78)
      .attr("y1", 0)
      .attr("y2", 0)
      .classed("needle", true)
      .style("stroke", "black")
      .style("stroke-width", "3")
      .attr("transform", function (d) {
        return " translate(200,200) rotate(" + d + ")";
      });
  }, []);

  useEffect(() => {
    var svg = d3.select(ref.current);
    svg
      .selectAll(".needle")
      .data([gauge ? gauge : defaultGauge]) // 50.5(1) ~ 79.5(100)
      // .transition()
      // // .ease(d3.easeElasticOut)
      // .duration(1000)
      .attr("transform", function (d) {
        return "translate(200,200) rotate(" + scale(d) + ")";
      });
  }, []);

  return <svg className="bg-gray-300" ref={ref}></svg>;
};

export default NeedleGauge;
