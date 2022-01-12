import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../data/menu";
import "../assets/css/style.css";

export default function Navbar() {
  const navStyle = {
    listStyleType: "none",
    display: "inline",
    padding: "0px 15px 15px 15px",
    color: "white",
    textDecoration: "none",
    height: "100%",
  };

  return (
    <navbar>
      {menu.map((nav) => (
        <NavLink to={nav.menuLink}>
          {" "}
          <nav key={nav.menuItem}>{nav.menuItem}</nav>
        </NavLink>
      ))}
    </navbar>
  );
}
