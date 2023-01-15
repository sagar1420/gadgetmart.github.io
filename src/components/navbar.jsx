import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          Cart
        </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
};
