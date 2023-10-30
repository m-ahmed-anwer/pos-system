import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";


function Outlayer() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default Outlayer;
