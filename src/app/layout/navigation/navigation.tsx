'use client'

import React from "react";
import "./navigation.scss";
import Scrim from "@/app/components/scrim/scrim";

export default function Navigation() {

  const navLinks = [
    { link: "#home", label: "ABOUT" },
    { link: "#services", label: "SERVICES" },
    { link: "#services", label: "PRICING" },
    { link: "#home", label: "CONTACT" }
  ];

  const [navmenuOpen, setNavMenuOpen] = React.useState(false);

  function toggleNavMenu() {
    setNavMenuOpen(!navmenuOpen);
  }

  return (
    <div className="navigation">
      <Scrim onClick={toggleNavMenu} isShowing={navmenuOpen}></Scrim>
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
        {navLinks.map(link => (
          <a key={link.label} href={link.link} onClick={toggleNavMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
