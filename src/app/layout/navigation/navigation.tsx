'use client'

import React from "react";
import "./navigation.scss";
import Scrim from "@/app/components/scrim/scrim";

export default function Navigation() {

  const navLinks = [
    { link: "services", label: "SERVICES" },
    // { link: "services", label: "PRICING" },
    { link: "about", label: "ABOUT" },
    { link: "contact", label: "CONTACT" }
  ];

  const [navmenuOpen, setNavMenuOpen] = React.useState(false);

  function toggleNavMenu() {
    setNavMenuOpen(!navmenuOpen);
  }

  function handleNavLinkClick(link: string) {
    setNavMenuOpen(false);
    handleScrollToSection(link, -60);
  }

  function handleScrollToSection(id: string, offset = 0) {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className="navigation">
      <Scrim onClick={toggleNavMenu} isShowing={navmenuOpen}></Scrim>
      <a onClick={() => handleNavLinkClick('home')} className="logo">
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
          <a key={link.label} onClick={() => handleNavLinkClick(link.link)}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
