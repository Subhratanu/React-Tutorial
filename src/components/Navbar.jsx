import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <a href="/">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/about">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/contact">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp; */}
    </div>
  );
};

export default Navbar;
