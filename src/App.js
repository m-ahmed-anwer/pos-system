import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Outlayer from "./routes/outlayer";
import Home from "./routes/home/Home";

import NotFound from "./components/404/NotFound";
import Login from "./routes/Login/login";
import AdminRoute from "./routes/dashboard/admin-dashboard-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlayer />}>
        <Route index element={<Home />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
        <Route path="/dashboard/*" element={<AdminRoute />} />

        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
