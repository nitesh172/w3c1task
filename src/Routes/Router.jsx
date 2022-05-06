import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login} from "../Pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default Router;
