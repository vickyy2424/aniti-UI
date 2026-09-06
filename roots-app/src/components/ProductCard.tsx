import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: Props) {
  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`} id={`product-${product.slug}`}>
      <Link href={`/products/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.hoverLabel}>Explore</div>
        </div>
      </Link>
      <div className={styles.body}>
        <p className={styles.material}>{product.material}</p>
        <h3 className={styles.name}>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        {!compact && (
          <p className={styles.tagline}>{product.tagline}</p>
        )}
        <div className={styles.footer}>
          <span className={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
          <Link
            href={`/products/${product.slug}`}
            className={styles.exploreBtn}
            id={`explore-${product.slug}`}
          >
            Explore →
          </Link>
        </div>
      </div>
    </article>
  );
}
