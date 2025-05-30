import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to={"/"}>Unified Mentor</Link>
        </h1>
        <ul className="flex space-around space-x-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
