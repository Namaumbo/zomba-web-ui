"use client";

import FooterComponent from "../components/footer";
import NavBarComponent from "../components/navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="">
        <NavBarComponent />
      </div>
      <Outlet />
      <div className="mt-10">
        <FooterComponent />
      </div>
    </>
  );
};

export default MainLayout;
