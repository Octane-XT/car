import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <Link to="#" className="nav-link dropdown-toggle" id="profileDropdown" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile" />
            </Link>
            <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  <img className="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt="" />
                </div>
                <div className="text-center">
                  <p className="tx-16 fw-bolder">Amiah Burton</p>
                  <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <Link to="/profile" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="user"></i>
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="dropdown-item py-2">
                  <Link to="/edit-profile" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="edit"></i>
                    <span>Edit Profile</span>
                  </Link>
                </li>
                <li className="dropdown-item py-2">
                  <Link to="/switch-user" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="repeat"></i>
                    <span>Switch User</span>
                  </Link>
                </li>
                <li className="dropdown-item py-2">
                  <Link to="/logout" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="log-out"></i>
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
