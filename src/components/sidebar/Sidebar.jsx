import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          ADMIN<span>XT</span>
        </div>
        <div className="sidebar-toggler not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/annonce" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Annonce</span>
            </Link>
          </li>
          <li className="nav-item nav-category">CRUD</li>
          <li className="nav-item">
            <Link to="/carburant" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Carburant</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categorie" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Categorie</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/climatisation" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Climatisation</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jante" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Jante</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/marque" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Marque</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/moteur" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Moteur</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/vitesse" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Vitesse</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/modele" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Modele</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Sidebar;