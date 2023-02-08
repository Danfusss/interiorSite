import React from "react";
import NavbarButtonBasketBuy from "../NavbarButtonBasketBuy/NavbarButtonBasketBuy";
import NavbarButtonSearch from "../NavbarButtonSearch/NavbarButtonSearch";

export default function NavbarList() {
  return (
    <div>
      <ul>
        <li>{"Home"}</li>
        <li>{"Pages"}</li>
        <li>{"Services"}</li>
        <li>{"Projects"}</li>
        <li>{"Blog"}</li>
        <li>{"Contact Us"}</li>
      </ul>
      <NavbarButtonSearch />
      <NavbarButtonBasketBuy />
    </div>
  );
}
