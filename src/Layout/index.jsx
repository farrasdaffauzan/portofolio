import React from "react";
import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
