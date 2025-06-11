import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "./navigation/navigation";
import Header from "./sections/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation></Navigation>
      <main className={styles.main}>
        <Header></Header>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
