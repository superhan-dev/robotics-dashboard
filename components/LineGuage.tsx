"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";

type ChargingTime = {
  hour: number;
  minute: number;
};

const LineGuage = () => {
  const ref = useRef<any>();
  const width = 460;
  const height = 400;
  const [data, setData] = useState<number>(0);
  const [chargingTime, setChargingTime] = useState<ChargingTime>({
    hour: 0,
    minute: 0,
  });
  const gaugeBackgroundId: string = "gauge-background";
  const gaugeId: string = "gauge";
  const chargingStatusId: string = "charging-status";
  const persentageId: string = "persentage";
  const chargingTimeId: string = "charging-time";

  const gaugeHeight = 20;
  const gaugeInitWidth = 0;

  const initGauge = useCallback((svg: any) => {
    svg.attr("width", width).attr("height", height);
    updateTime(svg, 0, 0);
    // background
    svg
      .append("rect")
      .attr("id", gaugeBackgroundId)
      .attr("x", gaugeInitWidth)
      .attr("y", gaugeHeight) // 제목을 위해 y 위치 조정
      .attr("width", 100 * 2) // 초기 가로 길이를 0으로 설정
      .attr("height", 50)
      .style("fill", "gray");

    // 충전 게이지 그리기
    svg
      .append("rect")
      .attr("id", gaugeId)
      .attr("x", gaugeInitWidth)
      .attr("y", gaugeHeight) // 제목을 위해 y 위치 조정
      .attr("width", 0) // 초기 가로 길이를 0으로 설정
      .attr("height", 50)
      .style("fill", "green");

    // 충전 상태 텍스트 추가
    svg
      .append("text")
      .attr("id", chargingStatusId)
      .attr("x", 10)
      .attr("y", 100) // 제목을 위해 y 위치 조정
      .text(`충전 상태:`) // 초기 텍스트를 0%로 설정
      .style("fill", "black")
      .style("font-size", "14px")
      .style("font-weight", "bold");
  }, []);

  const updateTime = (svg: any, hour: number, minute: number) => {
    const chargingTime = d3.selectAll(`#${chargingTimeId}`);
    chargingTime.remove();
    svg
      .append("text")
      .attr("id", chargingTimeId)
      .attr("x", 100)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text(`${hour}h ${minute}m`);
  };

  const updateGauge = useCallback((svg: any, data: number) => {
    const gauge = d3.selectAll(`#${gaugeId}`);
    const persentage = d3.selectAll(`#${persentageId}`);

    persentage.remove();
    svg
      .append("text")
      .attr("id", persentageId)
      .attr("x", 75)
      .attr("y", 100) // 제목을 위해 y 위치 조정
      .text(`${data} %`)
      .style("fill", "black")
      .style("font-size", "14px")
      .style("font-weight", "bold");

    gauge.attr("width", data * 2);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevNumber) => prevNumber + 1);
      setChargingTime((prevTime) => {
        prevTime.hour++;
        prevTime.minute++;

        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current);
    initGauge(svg);
    updateGauge(svg, 0);
  }, [initGauge, updateGauge]);

  useEffect(() => {
    const svg = d3.select(ref.current);
    updateGauge(svg, data);
    updateTime(svg, chargingTime.hour, chargingTime.minute);
  }, [data, chargingTime, updateGauge]);

  return <svg ref={ref}></svg>;
};

export default LineGuage;
