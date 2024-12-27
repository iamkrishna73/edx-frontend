import React from "react";
import { Link } from "react-router-dom"; // Ensure the CSS is imported here.
import { useAuth } from "../context/AuthContext";

const PrivateNavbar = () => {
  const { setAuth } = useAuth();

  const handleChange = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
              <Link to="/user" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/add-enquriy" className="nav-link">
                Add Enquiry
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/view-enquriy" className="nav-link">
                View Enquiries
              </Link>
            </li>
          </ul>
          <div className="ms-auto">
            <button
              className="btn btn-outline-primary custom-button"
              type="submit"
            >
              <Link to="/" onClick={handleChange} className="custom-link">
                Log out
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
