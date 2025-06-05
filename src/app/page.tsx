import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "./navigation/navigation";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation></Navigation>
      <main className={styles.main}>

      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
