import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>ROOTS</span>
          <p className={styles.tagline}>
            Indian heritage craft.<br />
            Objects with memory.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <p className={styles.colHead}>Explore</p>
            <Link href="/#heritage">Heritage</Link>
            <Link href="/#stories">Stories</Link>
            <Link href="/products">Products</Link>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>About</p>
            <Link href="/#about">Our Craft</Link>
            <Link href="/#heritage">Materials</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2024 ROOTS. All rights reserved.</p>
        <p>Made with care for Indian craft.</p>
      </div>
    </footer>
  );
}
