import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="#">
          Edx
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link">
               Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="ms-auto">
          
            <Link to="/auth/login" className="custom-link btn btn-outline-primary custom-button">
                Login
              </Link> 
        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
