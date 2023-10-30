import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/dasboard-outlayer";
import Orders from "../../pages/admin/orders";
import LandingPage from "../../pages/admin/landing-page";
import NotFound from "../../components/404/NotFound";
import POS from "../../pages/admin/pos";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />}>
        <Route index element={<LandingPage />} />
        <Route path="pos" element={<POS />} />
        <Route path="orders" element={<Orders />} />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
