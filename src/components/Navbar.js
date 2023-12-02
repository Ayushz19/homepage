/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Navbar.css";
import logo from './logo.png'
const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="">
        <nav id="navbar" class="">
          <div class="nav-wrapper">
            {/* <div class="logo">
              <img src={logo.src}  />
            </div> */}

            <ul id="menu">
              <li>
                <a href="#home">Features</a>
              </li>
              <li>
                <a href="#services">FAQ</a>
              </li>
              <li>
                <a href="#about">Pricing</a>
              </li>
              <li>
                <a href="#contact">Testimoniols</a>
              </li>
              <li>
                <button className="buy">But Template</button>
              </li>
            </ul>
          </div>
        </nav>

        <div class="menuIcon">
          <span class="icon icon-bars"></span>
          <span class="icon icon-bars overlay"></span>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
