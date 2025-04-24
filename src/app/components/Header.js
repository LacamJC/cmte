import React from 'react';
import styles from '../scss/header/header.module.css'
import MenuItem from './SideMenu/MenuItem';
import logo from '../../asset/img/loo_cmte.png'
function Header() {
  const menuItems = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "História",
      url: "/historia"
    }
  ]
    return (
      <nav className={`navbar navbar-expand-lg  ${styles.container}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {menuItems.map((item) => (
                <MenuItem label={item.label} url={item.url}/>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;
  