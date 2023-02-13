import React from "react";
import NavbarList from "./NavbarList/NavbarList";
import NavbarButtons from "./NavbarButtons/NavbarButtons";
import Logo from "./Logo/Logo";

import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navbarFlex">
      <Logo />
      <NavbarList />
      <NavbarButtons />
    </div>
  );
}
