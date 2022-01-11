import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../data/menu";
import "../assets/css/style.css";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "darkGrey",
    listStyleType: "none",
    display: "inline",
    padding: "0px 15px",
    foreColor: "white",
    textDecoration: "none",
  };

  return (
    <div>
      {menu.map((nav) => (
        <NavLink key={nav.menuItem} style={navStyle} to={nav.menuLink}>
          {nav.menuItem}
        </NavLink>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     {menu.map((nav) => (
  //       <li key={nav.menuItem} style={navStyle}>
  //         <a style={linkStyle} href={nav.menuLink}>
  //           {nav.menuItem}
  //         </a>
  //       </li>
  //     ))}
  //   </div>
  // );
}
