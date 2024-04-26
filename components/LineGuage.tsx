"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineGuage = () => {
  const ref = useRef<any>();
  const width = 460;
  const height = 400;
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    // Function to increase the number by 1 every second
    const interval = setInterval(() => {
      setData((prevNumber) => prevNumber + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svg
      .append("text")
      .attr("x", 100)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text(`2h 47m`);

    // background
    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 30) // 제목을 위해 y 위치 조정
      .attr("width", 100 * 2) // 초기 가로 길이를 0으로 설정
      .attr("height", 50)
      .style("fill", "gray");

    // 충전 게이지 그리기
    svg
      .append("rect")
      .attr("id", "gauge")
      .attr("x", 0)
      .attr("y", 30) // 제목을 위해 y 위치 조정
      .attr("width", 0) // 초기 가로 길이를 0으로 설정
      .attr("height", 50)
      .style("fill", "green");

    // 충전 상태 텍스트 추가
    svg
      .append("text")
      .attr("id", "text-1")
      .attr("x", 10)
      .attr("y", 100) // 제목을 위해 y 위치 조정
      .text(`충전 상태:`) // 초기 텍스트를 0%로 설정
      .style("fill", "black")
      .style("font-size", "14px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("id", "persentage")
      .attr("x", 75)
      .attr("y", 100) // 제목을 위해 y 위치 조정
      .text(`${data} %`)
      .style("fill", "black")
      .style("font-size", "14px")
      .style("font-weight", "bold");
  }, []);

  useEffect(() => {
    const gauge = d3.select("#gauge");
    const persentage = d3.selectAll("#persentage");

    persentage.remove();
    const svg = d3.select(ref.current);
    svg
      .append("text")
      .attr("id", "persentage")
      .attr("x", 75)
      .attr("y", 100) // 제목을 위해 y 위치 조정
      .text(`${data} %`)
      .style("fill", "black")
      .style("font-size", "14px")
      .style("font-weight", "bold");

    gauge.attr("width", data * 2);
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default LineGuage;
