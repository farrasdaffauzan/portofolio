import React from "react";
import Navbar from "../Components/Navbar";

const MainLayout = ({ chilldren }) => {
  return (
    <>
      <div>
        <Navbar />
        {chilldren}
      </div>
    </>
  );
};

export default MainLayout;
