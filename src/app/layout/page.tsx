'use client'

import styles from "./page.module.scss";
import Navigation from "../navigation/navigation";
import Header from "../sections/header/header";
import Services from "../sections/services/services";
import { useEffect } from "react";

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
      </main>
      <footer className={styles.footer}>
        <span className="subtitle">Mower Masters LLC</span>
        <span>
          Copyright &copy; 2025 Mower Masters LLC - All Rights Reserved.
        </span>
        <span>Website by <a href="amandaxandra.netlify.app">Amanda Simonds</a></span>
      </footer>
    </div>
  );
}
