import React from "react";
import "./Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>GetRandomAPP</span>
      <ul className="list">
        <li>
          <button className="nav-button" onClick={() => setShowModal(true)}>
            Login
          </button>
        </li>
        <li>
          <button className="nav-button">Sing up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
