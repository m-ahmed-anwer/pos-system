import React, { useEffect, useState } from "react";
import { postItem, postOrder } from "../../firebase/firebase";
import Modal from "../../components/modal/modal";
import Loading from "../../components/loading/loading";
import { serverTimestamp } from "firebase/firestore";

const dataForm = {
  quantitywatalappam: "",
  quantityaluwa: "",
  quantityspongeCake: "",
  quantitywalithalapa: "",
  quantitywalithalapa4: "",
  quantityunduwal: "",
  quantityunduwal4: "",
  quantitycoconutSweet: "",
  amountTaken: "",
  change: "",
};
const check = {
  order: false,
};
const checkboxAll = {
  watalappam: false,
  aluwa: false,
  spongeCake: false,
  walithalapa: false,
  walithalapa4: false,
  unduwal: false,
  unduwal4: false,
  coconutSweet: false,
};

function POS() {
  const [checkboxValues, setCheckboxValues] = useState(checkboxAll);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(dataForm);
  const [errorCheck, setErrorCheck] = useState(check);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name],
    }));
  };
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      change: prevData.amountTaken - sum,
    }));
  }, [data.amountTaken, sum]);

  const calculateSum = () => {
    let totalSum = 0;

    if (checkboxValues.watalappam) {
      totalSum += data.quantitywatalappam * 200;
    }
    if (checkboxValues.aluwa) {
      totalSum += data.quantityaluwa * 20;
    }
    if (checkboxValues.spongeCake) {
      totalSum += data.quantityspongeCake * 40;
    }
    if (checkboxValues.walithalapa) {
      totalSum += data.quantitywalithalapa * 60;
    }
    if (checkboxValues.walithalapa4) {
      totalSum += data.quantitywalithalapa4 * 200;
    }
    if (checkboxValues.unduwal) {
      totalSum += data.quantityunduwal * 60;
    }
    if (checkboxValues.unduwal4) {
      totalSum += data.quantityunduwal4 * 200;
    }
    if (checkboxValues.coconutSweet) {
      totalSum += data.quantitycoconutSweet * 50;
    }

    return totalSum;
  };

  const updateSum = () => {
    const totalSum = calculateSum();
    setSum(totalSum);
  };

  useEffect(() => {
    updateSum();
  }, [checkboxValues, data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Check if at least one item is selected
    const isAnyItemSelected = Object.values(checkboxValues).some(
      (checkbox) => checkbox
    );

    // Validate input fields
    const isValid =
      isAnyItemSelected &&
      data.amountTaken !== "" &&
      !isNaN(data.amountTaken) &&
      parseFloat(data.amountTaken) >= sum;

    if (!isValid) {
      setErrorCheck({
        ...errorCheck,
        order: true,
      });
      return;
    }
    setErrorCheck({
      ...errorCheck,
      order: false,
    });

    // Get checked items and their quantities
    const checkedItems = Object.keys(checkboxValues).filter(
      (item) => checkboxValues[item]
    );

    const itemsWithQuantities = checkedItems.map((item) => ({
      item,
      quantity: parseFloat(data[`quantity${item}`]),
    }));

    const orderDetails = {
      items: itemsWithQuantities,
      totalAmount: sum,
      amountTaken: parseFloat(data.amountTaken),
      change: parseFloat(data.change),
      time: serverTimestamp(),
    };

    try {
      setIsLoading(true);
      await postOrder(orderDetails);
      await postItem({ items: itemsWithQuantities });
      setData(dataForm);
      setCheckboxValues(checkboxAll);
      setIsLoading(false);
      setOpen(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <>
          {open ? (
            <Modal open={open} setOpen={setOpen} />
          ) : (
            <>
              <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                  Billing System
                </h1>
                <h2 className="text-gray-400 text-md">
                  Building Futures, Serving Clients Today. Just Drop the Service
                  We Take All Responsible.
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
                            type="checkbox"
                            value={checkboxValues.watalappam}
                            name="watalappam"
                            id="watalappam"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="watalappam"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.watalappam
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              {" "}
                              Watalappam - Rs.200{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.watalappam}
                            min={0}
                            value={data.quantitywatalappam}
                            placeholder="Watalappam Quantity"
                            name="quantitywatalappam"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.aluwa}
                            name="aluwa"
                            id="aluwa"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="aluwa"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.aluwa
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm"> Aluwa - Rs.20 </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.aluwa}
                            min={0}
                            value={data.quantityaluwa}
                            placeholder="Aluwa Quantity"
                            name="quantityaluwa"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.spongeCake}
                            name="spongeCake"
                            id="spongeCake"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="spongeCake"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.spongeCake
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Sponge Cake - Rs.40{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full "
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.spongeCake}
                            min={0}
                            value={data.quantityspongeCake}
                            placeholder="Sponge Cake Quantity"
                            name="quantityspongeCake"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.walithalapa}
                            name="walithalapa"
                            id="walithalapa"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="walithalapa"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.walithalapa
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Walithalapa Single - Rs.60{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.walithalapa}
                            min={0}
                            placeholder="Walithalapa Quantity"
                            value={data.quantitywalithalapa}
                            name="quantitywalithalapa"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.walithalapa4}
                            name="walithalapa4"
                            id="walithalapa4"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="walithalapa4"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.walithalapa4
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Walithalapa Set 4 - Rs.200{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.walithalapa4}
                            min={0}
                            placeholder="Walithalapa Set 4 Quantity"
                            value={data.quantitywalithalapa4}
                            name="quantitywalithalapa4"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.unduwal}
                            name="unduwal"
                            id="unduwal"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="unduwal"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.unduwal
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Unduwal Single - Rs.60{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.unduwal}
                            min={0}
                            placeholder="Unduwal Quantity"
                            value={data.quantityunduwal}
                            name="quantityunduwal"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.unduwal4}
                            name="unduwal4"
                            id="unduwal4"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="unduwal4"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.unduwal4
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Unduwal Set 4 - Rs.200{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.unduwal4}
                            min={0}
                            placeholder="Unduwal Set 4 Quantity"
                            value={data.quantityunduwal4}
                            name="quantityunduwal4"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                        <div>
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            value={checkboxValues.coconutSweet}
                            name="coconutSweet"
                            id="coconutSweet"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="coconutSweet"
                            className={`cursor-pointer block w-full rounded-lg border border-gray-200 p-3  ${
                              checkboxValues.coconutSweet
                                ? "peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                : "hover:bg-slate-100 text-gray-600 hover:border-black"
                            }`}
                          >
                            <span className="text-sm">
                              Coconut Snowballs - Rs.50{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            className="p-3 py-6 text-sm h-10 border  rounded-md px-4 w-full bg-gray-50"
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            disabled={!checkboxValues.coconutSweet}
                            min={0}
                            placeholder="Coconut Snowball Quantity"
                            value={data.quantitycoconutSweet}
                            name="quantitycoconutSweet"
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
                            value={sum}
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
                            onWheel={(e) => e.target.blur()}
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
                            onWheel={(e) => e.target.blur()}
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
                          Please get more money.
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
          )}
        </>
      )}
    </>
  );
}

export default POS;
