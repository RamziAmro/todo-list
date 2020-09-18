import React from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar_div">
        <p className="navbar_name">Navbar</p>
      </div>
      <p>Ramzi  <span> <FaUserCircle />   </span> </p>
    </div>
  );
};

export default Navbar;
