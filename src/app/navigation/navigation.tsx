'use client'

import React from "react";
import "./navigation.scss";

export default function Navigation() {

  const [navmenuOpen, setNavMenuOpen] = React.useState(false);

  function toggleNavMenu() {
    setNavMenuOpen(!navmenuOpen);
  }

  return (
    <div className="navigation">
      <a href="#home" className="logo">
        <i className="material-icons">home</i>
        <div className="logo__text">
          <span>Mower</span>
          <span>Masters</span>
        </div>
      </a>
      <div className="cta-wrapper">
        <a href="tel:8654078914" className="cta">Call Now 865-407-8914</a>
      </div>
      <div className="navigation__button-mobile">
        <button className="icon-button" onClick={toggleNavMenu}><i className="material-icons">menu</i></button>
      </div>
      <div className={`links ${navmenuOpen ? 'links--show' : ''}`} >
        <button className="icon-button close" onClick={toggleNavMenu}><i className="material-icons">close</i></button>
        <a href="#home">ABOUT</a>
        <a href="#services">SERVICES & PRICING</a>
        <a href="#home">CONTACT</a>
      </div>
    </div>
  );
}
