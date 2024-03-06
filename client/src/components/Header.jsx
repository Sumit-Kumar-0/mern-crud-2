import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/user/all">all user</NavLink>
          </li>
          <li>
            <NavLink to="/user/new">add new</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
