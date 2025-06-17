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
      <div className="logo">Logo</div>
      <div className="cta-wrapper">
        <a href="tel:8654078914" className="cta">Call Now 865-407-8914</a>
      </div>
      <div className="navigation__button-mobile">
        <button className="icon-button" onClick={toggleNavMenu}><i className="material-icons">menu</i></button>
      </div>
      <div className={`links ${navmenuOpen ? 'links--show' : ''}`} >
        <button className="icon-button close" onClick={toggleNavMenu}><i className="material-icons">close</i></button>
        <a href="">ABOUT</a>
        <a href="">SERVICES & PRICING</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
}
