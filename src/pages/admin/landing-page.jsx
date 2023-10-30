import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Welcome to Admin Dashboard
        </h1>
        <h2 className="text-gray-400 text-md">
          Here's what's happening with our stall in summary.
        </h2>
        <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
              <div className="block w-full h-full">
                <div className="flex items-center justify-between px-4 py-7 space-x-4">
                  <div className="flex items-center">
                    <span className="relative p-5 bg-yellow-100 rounded-full">
                      <CurrencyDollarIcon className="absolute h-7 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </span>
                    <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                      Income within the Orders
                    </p>
                  </div>
                  <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                    Rs. 44,000.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-1/2">
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-xl font-bold text-black dark:text-white flex items-end">
                  4
                </p>
                <p className="text-sm text-gray-400">Active Foods</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-xl font-bold text-black dark:text-white flex items-end">
                  100
                </p>
                <p className="text-sm text-gray-400">Number of Orders</p>
                <span className="absolute p-4 bg-purple-700 rounded-full top-2 right-4">
                  <CurrencyDollarIcon className="absolute h-6 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-lg font-bold text-gray-600">Our Foods</div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                01
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Watalappam
                </p>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Cost</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Selling Price</p>
                <div className="flex items-end text-xs">Rs. 200</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Profit</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Quantity</p>
                <div className="flex items-end text-xs">100</div>
              </div>

              <div className="">
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Profit</p>
                  <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                    Rs.100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Earnings</p>
                  <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                    Rs.100
                  </div>
                </div>

                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Sold Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                    100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Remaining Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                    100
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                02
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Unduwal
                </p>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Cost</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Selling Price</p>
                <div className="flex items-end text-xs">Rs. 200</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Profit</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Quantites</p>
                <div className="flex items-end text-xs">100</div>
              </div>

              <div className="">
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Profit</p>
                  <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                    Rs.100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Earnings</p>
                  <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                    Rs.100
                  </div>
                </div>

                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Sold Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                    100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Remaining Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                    100
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                03
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Walithalapa
                </p>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Cost</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Selling Price</p>
                <div className="flex items-end text-xs">Rs. 200</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Profit</p>
                <div className="flex items-end text-xs">Rs. 100</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Quantity</p>
                <div className="flex items-end text-xs">100</div>
              </div>

              <div className="">
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Profit</p>
                  <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                    Rs.100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Total Earnings</p>
                  <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                    Rs.100
                  </div>
                </div>

                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Sold Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                    100
                  </div>
                </div>
                <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                  <p>Remaining Quantities</p>
                  <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                    100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
