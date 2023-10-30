import React, { useEffect, useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import {
  getItemByName,
  getItemQuantitiesByName,
  totalEarnings,
} from "../../firebase/firebase";
import Loading from "../../components/loading/loading";

const details = {
  watalappam: {},
  aluwa: {},
  spongeCake: {},
  walithalapa: {},
  walithalapa4: {},
  unduwal: {},
  unduwal4: {},
  coconutSweet: {},
};
function LandingPage() {
  const [totalEarning, setTotalEarning] = useState(0);
  const [items, setItems] = useState(details);
  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const watalappam = await getItemByName("watalappam");
      const watalappamCount = await getItemQuantitiesByName("watalappam");

      const aluwa = await getItemByName("aluwa");
      const aluwaCount = await getItemQuantitiesByName("aluwa");

      const spongeCake = await getItemByName("spongeCake");
      const spongeCakeCount = await getItemQuantitiesByName("spongeCake");

      const walithalapa = await getItemByName("walithalapa");
      const walithalapaCount = await getItemQuantitiesByName("walithalapa");

      const walithalapa4 = await getItemByName("walithalapa4");
      const walithalapa4Count = await getItemQuantitiesByName("walithalapa4");

      const unduwal = await getItemByName("unduwal");
      const unduwalCount = await getItemQuantitiesByName("unduwal");

      const unduwal4 = await getItemByName("unduwal4");
      const unduwal4Count = await getItemQuantitiesByName("unduwal4");

      const coconutSweet = await getItemByName("coconutSweet");
      const coconutSweetCount = await getItemQuantitiesByName("coconutSweet");

      setItems({
        ...items,
        watalappam: { details: watalappam, quantity: watalappamCount },
        aluwa: { details: aluwa, quantity: aluwaCount },
        spongeCake: { details: spongeCake, quantity: spongeCakeCount },
        walithalapa: { details: walithalapa, quantity: walithalapaCount },
        walithalapa4: { details: walithalapa4, quantity: walithalapa4Count },
        unduwal: { details: unduwal, quantity: unduwalCount },
        unduwal4: { details: unduwal4, quantity: unduwal4Count },
        coconutSweet: { details: coconutSweet, quantity: coconutSweetCount },
      });

      const result = await totalEarnings();
      const { total, orderCount } = result;
      setOrderCount(orderCount);
      setTotalEarning(total);
      setIsLoading(false);
    };

    getDetails();
  }, []);
  const [order, setOrderCount] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    setTotalProfit(
      60 * items.unduwal4.quantity +
        25 * items.unduwal.quantity +
        60 * items.walithalapa4.quantity +
        25 * items.walithalapa.quantity +
        85 * items.watalappam.quantity +
        5 * items.aluwa.quantity +
        20 * items.coconutSweet.quantity +
        15 * items.spongeCake.quantity
    );
  }, [items]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <>
        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Welcome to Admin Dashboard
          </h1>
          <h2 className="text-gray-400 text-md">
            Here's what's happening with our stall in summary.
          </h2>
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : (
            <>
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
                            Total Earnings
                          </p>
                        </div>
                        <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                          Rs. {totalEarning}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-4 md:w-1/2">
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p className="text-xl font-bold text-black dark:text-white flex items-end">
                        06
                      </p>
                      <p className="text-sm text-gray-400">Active Foods</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p className="text-xl font-bold text-black dark:text-white flex items-end">
                        {order}
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
                        Unduwal
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 35</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 60</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling 4 Set Price</p>
                      <div className="flex items-end text-xs">Rs. 200</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit single </p>
                      <div className="flex items-end text-xs">Rs. 25</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit set 4</p>
                      <div className="flex items-end text-xs">Rs. 60</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantites</p>
                      <div className="flex items-end text-xs">160</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.
                          {60 * items.unduwal4.quantity +
                            25 * items.unduwal.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.
                          {200 * items.unduwal4.quantity +
                            60 * items.unduwal.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.unduwal.quantity + items.unduwal4.quantity * 4}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {160 -
                            (items.unduwal.quantity +
                              items.unduwal4.quantity * 4)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      02
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        Walithalapa
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 35</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 60</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling 4 Set Price</p>
                      <div className="flex items-end text-xs">Rs. 200</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit single </p>
                      <div className="flex items-end text-xs">Rs. 25</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit set 4</p>
                      <div className="flex items-end text-xs">Rs. 60</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantites</p>
                      <div className="flex items-end text-xs">160</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.
                          {60 * items.walithalapa4.quantity +
                            25 * items.walithalapa.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.
                          {200 * items.walithalapa4.quantity +
                            60 * items.walithalapa.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.walithalapa.quantity +
                            items.walithalapa4.quantity * 4}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {160 -
                            (items.walithalapa.quantity +
                              items.walithalapa4.quantity * 4)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      03
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        Watalappam
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 115</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 200</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit</p>
                      <div className="flex items-end text-xs">Rs. 85</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantity</p>
                      <div className="flex items-end text-xs">100</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.{85 * items.watalappam.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.{200 * items.watalappam.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.watalappam.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {100 - items.watalappam.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      04
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        Aluwa
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 15</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 20</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit</p>
                      <div className="flex items-end text-xs">Rs. 5</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantity</p>
                      <div className="flex items-end text-xs">55</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.{5 * items.aluwa.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.{20 * items.aluwa.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.aluwa.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {55 - items.aluwa.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      05
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        Coconut Snowballs
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 30</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 50</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit</p>
                      <div className="flex items-end text-xs">Rs. 20</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantity</p>
                      <div className="flex items-end text-xs">65</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.{20 * items.coconutSweet.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.{50 * items.coconutSweet.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.coconutSweet.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {65 - items.coconutSweet.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      06
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        Sponge Cake
                      </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Cost</p>
                      <div className="flex items-end text-xs">Rs. 25</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Selling Price</p>
                      <div className="flex items-end text-xs">Rs. 40</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Profit</p>
                      <div className="flex items-end text-xs">Rs. 15</div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Quantity</p>
                      <div className="flex items-end text-xs">24</div>
                    </div>

                    <div className="">
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Profit</p>
                        <div className="flex items-end text-lg font-bold bg-green-50 p-1 text-green-800 rounded-xl">
                          Rs.{15 * items.spongeCake.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Total Earnings</p>
                        <div className="flex items-end text-lg font-bold bg-gray-100 p-1 rounded-xl">
                          Rs.{40 * items.spongeCake.quantity}
                        </div>
                      </div>

                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Sold Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-blue-100 rounded-xl p-1 text-bl">
                          {items.spongeCake.quantity}
                        </div>
                      </div>
                      <div className=" text-lg flex items-center justify-between pb-2 mb-2 space-x-12  md:space-x-24">
                        <p>Remaining Quantities</p>
                        <div className="flex items-end text-lg font-bold bg-red-100 rounded-xl p-1 text-red-700">
                          {24 - items.spongeCake.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}

export default LandingPage;
