import { useState } from "react";
import foodjunction from "../images/logo.png";


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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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