import { useState } from "react";
import foodjunction from "../images/logo.png";
import { Link } from "react-router-dom";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src="{foodjunction}" alt="logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnName,setbtnName] =  useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/Home" >Home</Link>
          </li>
          <li>
          <Link to="/About" >About</Link>
          </li>
          <li>
          <Link to="/Contact" >Contact Us</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button className="Login"  onClick={()=>{
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}  >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;