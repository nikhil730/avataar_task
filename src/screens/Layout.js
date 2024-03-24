import React from "react";
import NavMenu from "../components/Navbar/NavMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const items = [
    "HOME",
    "ELECTRONICS",
    "BOOKS",
    "MUSIC",
    "MOVIES",
    "CLOTHING",
    "GAMES",
    "FURNITURE",
    "ELECTRONICS",
    "TRAVEL",
    "BOTANICAL",
    "CATEGORY NAME",
  ];

  return (
    <main style={{ minHeight: "100vh" }}>
      <NavMenu items={items} />
      <Outlet />
    </main>
  );
};

export default Layout;
