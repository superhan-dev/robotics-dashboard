import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import LineGuage from "@/components/LineGuage";
import NeedleGauge from "@/components/NeedleGauge/NeedleGauge";
import RecentOrders from "@/components/RecentOrders";
import SideNavbar from "@/components/SideNavbar";
import TopCards from "@/components/TopCards";
import React from "react";

const DashboardPage = () => {
  return (
    <main className="flex h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-col w-screen h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md-grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <LineGuage />
          <NeedleGauge />
          <RecentOrders />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
