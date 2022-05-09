import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Login, Verification} from "../Pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />}></Route>
      <Route path="/verify" element={<Verification />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
