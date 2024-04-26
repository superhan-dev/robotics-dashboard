import Link from "next/link";
import React, { ReactNode } from "react";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { FiSettings } from "react-icons/fi";

type SideNavbarProps = {
  children?: ReactNode;
};

const SideNavbar = ({ children }: SideNavbarProps) => {
  return (
    <div className="flex w-20 h-screen border-r-[1px] p-4 bg-white flex-col justify-between">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo />
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
            <RxDashboard />
          </div>
        </Link>

        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
            <RxPerson />
          </div>
        </Link>

        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
            <HiOutlineShoppingBag />
          </div>
        </Link>

        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
            <FiSettings />
          </div>
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideNavbar;
