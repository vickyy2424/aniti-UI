import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import styles from "./products.module.css";

export const metadata = {
  title: "Products — ROOTS",
  description:
    "Five carefully chosen objects. Copper, brass and bronze for everyday Indian life.",
};

export default function ProductsPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className="container">
            <p className="label">The collection</p>
            <div className="divider" />
            <h1 className={styles.heading}>Our Products</h1>
            <p className={styles.subtext}>
              Five objects. Each chosen because it has always worked, and always will.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
