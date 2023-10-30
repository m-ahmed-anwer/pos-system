import { AtSymbolIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const dataForm = {
  quantityWatalappam: "",
  quantityAluwa: "",
  quantitySpongeCake: "",
  quantityWalithalapa: "",
  quantityWalithalapa4: "",
  quantityUnduwal: "",
  quantityUnduwal4: "",
  quantityCoconutSweet: "",
  amountTaken: "",
  price: "",
  transmission: "",
  change: "",
  email: "",
  phone: "",
};
const check = {
  vehicle: false,
  order: false,
};

function POS() {
  const [data, setData] = useState(dataForm);
  const [errorCheck, setErrorCheck] = useState(check);
  const [item, setItem] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "order") {
      if (checked) {
        setErrorCheck({ ...errorCheck, items: [...errorCheck.items, value] });
      } else {
        setErrorCheck({
          ...errorCheck,
          items: errorCheck.items.filter((item) => item !== value),
        });
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!item) {
      setErrorCheck({ ...errorCheck, order: true });
      return;
    } else {
      setErrorCheck({ ...errorCheck, order: false });
    }

    if (
      !data.email ||
      !data.phone ||
      !data.amountTaken ||
      !data.price ||
      !data.transmission ||
      !data.change
    ) {
      setErrorCheck({ ...errorCheck, vehicle: true });
      return;
    }

    console.log(data);
  };

  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Billing System
        </h1>
        <h2 className="text-gray-400 text-md">
          Building Futures, Serving Clients Today. Just Drop the Service We Take
          All Responsible.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-lg col-span-3 lg:p-12">
            <form onSubmit={submitHandler} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <div className="py-3">Select Item/s</div>
                </div>
                <div>
                  <div className="py-3">Quantity</div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="watalappam"
                    onChange={handleChange}
                    checked={item === "Watalappam"}
                  />

                  <label
                    htmlFor="watalappam"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Watalappam</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    value={data.quantityWatalappam}
                    placeholder="Watalappam Quantity"
                    name="quantityWatalappam"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="aluwa"
                    onChange={handleChange}
                    checked={item === "Aluwa"}
                  />

                  <label
                    htmlFor="aluwa"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Aluwa </span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    value={data.quantityAluwa}
                    placeholder="Aluwa Quantity"
                    name="quantityAluwa"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="spongeCake"
                    onChange={handleChange}
                    checked={item === "Sponge Cake"}
                  />

                  <label
                    htmlFor="spongeCake"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Sponge Cake</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    value={data.quantitySpongeCake}
                    placeholder="Sponge Cake Quantity"
                    name="quantitySpongeCake"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="walithalapa"
                    onChange={handleChange}
                    checked={item === "Walithalapa"}
                  />

                  <label
                    htmlFor="walithalapa"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Walithalapa Single</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    placeholder="Walithalapa Quantity"
                    value={data.quantityWalithalapa}
                    name="quantityWalithalapa"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="walithalapa4"
                    onChange={handleChange}
                    checked={item === "Walithalapa Set 4"}
                  />

                  <label
                    htmlFor="walithalapa4"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Walithalapa Set 4</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    placeholder="Walithalapa Set 4 Quantity"
                    value={data.quantityWalithalapa4}
                    name="quantityWalithalapa4"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="unduwal4"
                    onChange={handleChange}
                    checked={item === "Unduwal"}
                  />

                  <label
                    htmlFor="unduwal4"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Unduwal Single</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    placeholder="Unduwal Quantity"
                    value={data.quantityUnduwal}
                    name="quantityUnduwal"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="unduwal"
                    onChange={handleChange}
                    checked={item === "Unduwal Set 4"}
                  />

                  <label
                    htmlFor="unduwal"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Unduwal Set 4</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    placeholder="Unduwal Set 4 Quantity"
                    value={data.quantityUnduwal4}
                    name="quantityUnduwal4"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="order"
                    id="coconuteSweetballs"
                    onChange={handleChange}
                    checked={item === "Coconut Snowballs"}
                  />

                  <label
                    htmlFor="coconuteSweetballs"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Coconut Snowballs</span>
                  </label>
                </div>
                <div>
                  <input
                    className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                    type="number"
                    min={0}
                    placeholder="Coconut Snowball Quantity"
                    value={data.quantityCoconutSweet}
                    name="quantityCoconutSweet"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="py-3">
                <div className="relative">
                  <label className="">Total Price to Pay</label>
                  <input
                    className=" cursor-not-allowed p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-green-50 pl-10"
                    type="text"
                    value={data.price}
                    onChange={handleChange}
                    name="price"
                    disabled
                  />
                  <span className="absolute inset-y-0 start-0 grid place-content-center px-3 pt-7">
                    <span className="text-sm text-green-900">Rs.</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div className="relative">
                  <label>Amount Tenderd</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50 pl-10"
                    type="number"
                    value={data.amountTaken}
                    name="amountTaken"
                    onChange={handleChange}
                  />
                  <span className="absolute inset-y-0 start-0 grid place-content-center px-3 pt-7">
                    <span className="text-sm text-green-900">Rs.</span>
                  </span>
                </div>
                <div className="relative">
                  <label>Change to Give</label>
                  <input
                    className="cursor-not-allowed p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-green-50 pl-10"
                    type="number"
                    value={data.change}
                    onChange={handleChange}
                    name="change"
                    disabled
                  />
                  <span className="absolute inset-y-0 start-0 grid place-content-center px-3 pt-7">
                    <span className="text-sm text-green-900">Rs.</span>
                  </span>
                </div>
              </div>

              {errorCheck.order && (
                <p className="text-red-500 text-xs italic">
                  Please select a order option.
                </p>
              )}

              <div className="py-10">
                <button
                  className="group relative inline-block  focus:outline-none focus:ring"
                  type="submit"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Confirm
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default POS;
