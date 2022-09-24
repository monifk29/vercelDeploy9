import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{display : "flex", justifyContent : "space-around", backgroundColor : "teal", color : "white", height : "40px", alignItems : "center", fontSize : "20px",margin : "auto", marginBottom :"15px"}}>
      <Link to="/">Restaurant</Link>
      <Link to="/login">login</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Nav;
