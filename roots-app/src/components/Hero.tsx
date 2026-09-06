import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background illustration */}
      <div className={styles.illustrationWrap}>
        <Image
          src="/hero.jpg"
          alt="Grandmother with copper vessels in a traditional Indian home"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={`label ${styles.preLabel}`}>Est. in tradition</p>

        <h1 className={styles.headline}>
          Rooted in our past.<br />
          <em>Made for today.</em>
        </h1>

        <p className={styles.subtext}>
          Discover the stories, craftsmanship and traditions behind<br />
          the objects that shaped Indian everyday life.
        </p>

        <div className={styles.actions}>
          <Link href="/#stories" className="btn btn--outline" id="hero-story-btn">
            Explore Our Story
          </Link>
          <Link href="/products" className="btn btn--primary" id="hero-products-btn">
            Explore Products
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span />
      </div>
    </section>
  );
}
