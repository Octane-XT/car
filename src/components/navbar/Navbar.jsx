import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();

  };
  return (
    <nav className="navbar">
      <Link to="#" className="sidebar-toggler">
        <i data-feather="menu"></i>
      </Link>
      <div className="navbar-content">
        <form className="search-form">
          <div className="input-group">
            <div className="input-group-text">
              <i data-feather="search"></i>
            </div>
            <input type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button className="btn btn-danger" style={{height:"40px"}} onClick={handleLogout}>
              Deconnecter
            </button>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
