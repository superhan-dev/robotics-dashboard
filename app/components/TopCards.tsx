import React from "react";

type TopCardProps = {
  title: string;
  subtitle: string;
};

const TopCard = ({ title, subtitle }: TopCardProps) => {
  return (
    <div className="lg:w-[35%] md:w-full bg-white flex justify-between border p-4 rounded-md m-2">
      <div className="flex-col w-full">
        <div className="font-bold">{title}</div>
        <div className="text-gray-600 text-sm">{subtitle}</div>
      </div>
      <div className="flex items-center rounded-md p-2 py-4 text-green-900 bg-green-300">
        +18%
      </div>
    </div>
  );
};

const TopCards = () => {
  return (
    <div className="mt-20 flex max-md:flex-col lg:flex-row justify-between p-4">
      <TopCard title="$7,846" subtitle="Dayily Revenue" />
      <TopCard title="$1,437,846" subtitle="YTD Revenue" />
      <TopCard title="17,865" subtitle="Customers" />
    </div>
  );
};

export default TopCards;
