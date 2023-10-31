import React, { useContext, useState } from "react";
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const formData = {
  userName: "",
  password: "",
};

const check = {
  userName: false,
  password: false,
};

function Login() {
  const [data, setData] = useState(formData);
  const [showPass, setShowPass] = useState(false);
  const [errorCheck, setErrorCheck] = useState(check);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!data.userName) {
      setErrorCheck({ ...errorCheck, userName: true });
      return;
    }

    if (!data.password) {
      setErrorCheck({ ...errorCheck, password: true });
      return;
    }

    try {
      navigate("/dashboard");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-slate-50 flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome to Habibi Stall!
            </h1>
            <p className="mt-4 text-gray-500">
              Explore delicious flavors and create an account to order your
              favorite dishes.
            </p>
          </div>

          <form
            action=""
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={submitHandler}
          >
            <div>
              <label htmlFor="userName" className="sr-only">
                userName
              </label>

              <div className="relative">
                <input
                  type="userName"
                  name="userName"
                  className="w-full rounded-lg border-gray-100 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Username"
                  value={data.userName}
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AtSymbolIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>

              {errorCheck.userName && (
                <p className="text-red-500 text-xs italic">
                  Username cannot be empty.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type={`${!showPass ? "password" : "text"}`}
                  name="password"
                  className="w-full rounded-lg border-gray-100 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={data.password}
                  onChange={handleChange}
                />

                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                  )}
                </span>
              </div>
              {errorCheck.password && (
                <p className="text-red-500 text-xs italic">
                  Password cannot be empty.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-5">
              <p className="text-sm text-gray-500">
                No account?{"  "}
                <Link className="underline text-green-800" to={"/signup"}>
                  Sign up
                </Link>
              </p>

              <button
                className="group relative inline-block focus:outline-none focus:ring"
                type="submit"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Log In
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Sri_Lankan_Rice_and_Curry.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Habibi Stall"
          />
        </div>
      </section>
    </>
  );
}

export default Login;
