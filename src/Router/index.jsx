import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Experience" />
        <Route path="/Contact" />
        <Route path="/Project" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
