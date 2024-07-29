import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Subjects from "../subjects/Subjects";
import Footer from "./Footer";
import MainProfilePicture from "../picture/MainProfilePicture";
import Mode from "../utility/Mode";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Mode />
      {isHomePage && <MainProfilePicture />}
      {isHomePage && <Header />}
      {isHomePage && <Subjects />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
