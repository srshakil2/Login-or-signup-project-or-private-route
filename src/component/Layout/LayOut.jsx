import React from "react";
import Nav from "../NavFooter/Nav";
import Footer from "../NavFooter/Footer";
import { Outlet } from "react-router-dom";
import Login from "../Outhers/Login";

const LayOut = () => {
  return (
    <div className=" w-10/12 mx-auto">
      <div>
        <Nav></Nav>
      </div>

      <div>
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayOut;
