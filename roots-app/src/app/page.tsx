import Hero from "@/components/Hero";
import MaterialSection from "@/components/MaterialSection";
import VideoStory from "@/components/VideoStory";
import ThenNow from "@/components/ThenNow";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import products from "@/data/products";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MaterialSection />
      <VideoStory />
      <ThenNow />

      {/* Products Section */}
      <section className={styles.productsSection} id="products">
        <div className="container">
          <div className={styles.productsHeader}>
            <p className="label">The collection</p>
            <div className="divider" />
            <h2 className={styles.productsHeading}>Five objects. One tradition.</h2>
            <p className={styles.productsSub}>
              Each piece is chosen for its honesty — made from the right
              material, in the right form, for the right purpose.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className={styles.productsFooter}>
            <Link href="/products" className="btn btn--outline" id="view-all-btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className={styles.aboutStrip}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutText}>
              <p className="label">About ROOTS</p>
              <div className="divider" />
              <h2 className={styles.aboutHeading}>
                We did not invent these objects.<br />
                <em>We remembered them.</em>
              </h2>
              <p className={styles.aboutBody}>
                ROOTS was built on one belief: that the objects used in Indian
                homes for thousands of years were not primitive. They were
                considered. The copper lota, the brass thali, the bronze cooking
                pot — these were the result of centuries of refinement, of
                daily use, of understanding between people and the materials
                they lived with.
              </p>
              <p className={styles.aboutBody}>
                We source from craftspeople who still make these objects by hand.
                We tell their story. And we make it possible to bring them back
                into everyday life — without pretension, without mythology,
                without exaggeration.
              </p>
            </div>
            <div className={styles.aboutQuote}>
              <blockquote>
                ❝ Some things do not need to be reinvented.<br />
                They only need to be rediscovered. ❞
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
