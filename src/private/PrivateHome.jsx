import React from "react";
import Footer from "../components/Footer";
import PrivateNavbar from "./PrivateNavbar";
import { Outlet } from "react-router-dom";

const PrivateHome = () => {
  return (
    <div>
      <PrivateNavbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateHome;
