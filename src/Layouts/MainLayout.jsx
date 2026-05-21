"use client";

import FooterComponent from "../components/footer";
import NavBarComponent from "../components/navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
