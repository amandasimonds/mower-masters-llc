'use client'

import styles from "./page.module.scss";
import Navigation from "./layout/navigation/navigation";
import Header from "./layout/sections/header/header";
import Services from "./layout/sections/services/services";
import { useEffect } from "react";
import About from "./layout/sections/about/about";
import Contact from "./layout/sections/contact/contact";
import Pricing from "./layout/sections/pricing/pricing";

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className={styles.page}>
      <Navigation></Navigation>
      <main className={styles.main}>
        <Header></Header>
        <Services></Services>
        <Pricing></Pricing>
        <About></About>
        <Contact></Contact>
      </main>
      <footer className={styles.footer}>
        <span className="subtitle">Mower Masters LLC</span>
        <span>
          Copyright &copy; 2025 Mower Masters LLC - All Rights Reserved.
        </span>
        <span>Website by <a href="http://amandaxandra.netlify.app">Amanda Simonds</a></span>
      </footer>
    </div>
  );
}
