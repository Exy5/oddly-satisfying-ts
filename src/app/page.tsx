"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BackgroundVideo from "./components/Video/BackgroundVideo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BackgroundVideo />
        <Image
          className={styles.logo}
          src="/images/logo-reworked-clean.png"
          alt="Oddly Satisfying Logo"
          width={380}
          height={160}
          priority
        />
        <ol>
          <p>This is the Oddly Satisfying Guides Homepage.</p>
        </ol>
      </main>
    </div>
  );
}
