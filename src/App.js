import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
