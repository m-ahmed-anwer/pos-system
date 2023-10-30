import React from "react";
import {
  HomeIcon,
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
  ArchiveBoxArrowDownIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      <div className="relative hidden h-screen shadow-lg lg:block w-80">
        <div className="h-full bg-white dark:bg-gray-700">
          <div className="flex items-center justify-start pt-6 ml-8">
            <Link to={""} className="text-xl font-bold dark:text-white">
              Habibi Stall
            </Link>
          </div>
          <nav className="mt-6">
            <div>
              <Link
                to={""}
                className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 border-l-4 ${
                  currentUrl === "/admin-dashboard/" ||
                  currentUrl === "/admin-dashboard"
                    ? "border-purple-500 dark:text-white text-black"
                    : "border-transparent hover:text-black text-gray-600"
                }`}
              >
                <span className="text-left">
                  <HomeIcon className="w-6 h-6" />
                </span>
                <span className="mx-2 text-sm font-normal">Summary</span>
              </Link>

              <Link
                to={"pos"}
                className={`flex items-center justify-start w-full p-2 pl-6 my-2 transition-colors duration-200 border-l-4 ${
                  currentUrl === "/admin-dashboard/pos" ||
                  currentUrl === "/admin-dashboard/pos/"
                    ? "border-purple-500 dark:text-white text-black"
                    : "border-transparent hover:text-black  text-gray-600"
                }`}
              >
                <span className="text-left">
                  <AdjustmentsVerticalIcon className="w-6 h-6" />
                </span>
                <span className="mx-4 text-sm font-normal">POS System</span>
              </Link>

              <Link
                to={"orders"}
                className={`flex items-center justify-start w-full p-2 pl-6 my-2   transition-colors duration-200 border-l-4 ${
                  currentUrl === "/admin-dashboard/orders" ||
                  currentUrl === "/admin-dashboard/orders/"
                    ? "border-purple-500 dark:text-white text-black"
                    : "border-transparent hover:text-black text-gray-600"
                }`}
              >
                <span className="text-left">
                  <ShoppingBagIcon className="w-6 h-6" />
                </span>
                <span className="mx-4 text-sm font-normal">Orders</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
