import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailProject from "../pages/Detail";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="detail/:id" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
