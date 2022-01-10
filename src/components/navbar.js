import React from "react";
import { menu } from "../data/menu";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "darkGrey",
  };

  return (
    <div>
      {menu.map((nav) => (
        <li key={nav.menuItem} style={navStyle}>
          <a href={nav.menuLink}> {nav.menuItem}</a>
        </li>
      ))}
    </div>
  );
}
