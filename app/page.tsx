import Image from "next/image";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import TopCards from "./components/TopCards";
import BarChart from "./components/BarChart";
import RecentOrders from "./components/RecentOrders";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-col w-screen h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md-grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </div>
    </main>
  );
}
