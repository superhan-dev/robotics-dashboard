import BarChart from "@/components/BarChart";
import GaugeChart from "@/components/GaugeChart";
import Header from "@/components/Header";
import LineGuage from "@/components/LineGuage";
import LogSheet from "@/components/LogSheet";

import SideNavbar from "@/components/SideNavbar";
import TopCards from "@/components/TopCards";
import React from "react";

const DashboardPage = () => {
  return (
    <main className="flex w-screen h-screen  bg-gray-100">
      <SideNavbar />
      <div className="flex-col w-screen h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 sm:grid-cols-1 gap-3">
          <div className="bg-red-100 col-span-2 sm:max-lg:col-span-3">
            <LogSheet />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <BarChart />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            pie chart
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <GaugeChart />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <BarChart />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <BarChart />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <LineGuage />
          </div>
          <div className="bg-red-100 flex justify-center items-center sm:max-lg:col-span-3">
            <BarChart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
