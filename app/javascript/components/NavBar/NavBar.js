import React from "react";
import "../Style/navbar.scss";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a className="logo" href="/">
            Fave
          </a>
        </li>
      </ul>
    </nav>
  );
}
