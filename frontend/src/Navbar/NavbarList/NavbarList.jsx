import React from "react";

import "./NavbarList.css";

export default function NavbarList() {
  return (
    <div className="listBox">
      <ul className="NavbarList">
        <li className="NavBarListItem">
          <a href="#">{"Home"}</a>
        </li>
        <li className="NavBarListItem">
          <a href="#">{"Pages"}</a>
        </li>
        <li className="NavBarListItem">
          <a href="#">{"Services"}</a>
        </li>
        <li className="NavBarListItem">
          <a href="#">{"Projects"}</a>
        </li>
        <li className="NavBarListItem">
          <a href="#">{"Blog"}</a>
        </li>
        <li className="NavBarListItem">
          <a href="#">{"Contact Us"}</a>
        </li>
      </ul>
    </div>
  );
}
