import React from "react";
import "../Style/navbar.scss";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a className="logo" href="/">
            FaveMovies
          </a>
        </li>
      </ul>
    </nav>
  );
}
