"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const ref = useRef<any>();
  const width = 400;
  const height = 350;

  useEffect(() => {
    const margin = {
      top: 30,
      right: 30,
      bottom: 70,
      left: 60,
    };

    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.right})`);

    d3.csv(
      "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
    ).then(function (data: any) {
      // X axis
      const x = d3
        .scaleBand()
        .range([0, w])
        .domain(data.map((d: any) => d.Country))
        .padding(0.2);

      svg
        .append("g")
        .attr("transform", `translate(0, ${h})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 13000]).range([h, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", (d: any) => x(d.Country))
        .attr("y", (d: any) => y(d.Value))
        .attr("width", x.bandwidth())
        .attr("height", (d: any) => h - y(d.Value))
        .attr("fill", "#5f0f40");
    });
  }, []);

  return <svg width={width} height={height} id="barchart" ref={ref} />;
};

export default BarChart;
