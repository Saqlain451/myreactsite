import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md nav-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            H Saqlain
          </NavLink>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className="nav-link" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
