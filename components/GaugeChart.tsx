import React from "react";
import NeedleGauge from "./NeedleGauge/NeedleGauge";

const GaugeChart = () => {
  return (
    <div>
      <NeedleGauge gauge={60.5} />
    </div>
  );
};

export default GaugeChart;
