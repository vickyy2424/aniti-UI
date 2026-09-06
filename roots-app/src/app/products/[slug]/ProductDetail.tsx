"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import styles from "./detail.module.css";

interface Props {
  product: Product;
}

const tabs = [
  { id: "why", label: "Why this?" },
  { id: "story", label: "Cultural story" },
  { id: "traditional", label: "Traditional use" },
  { id: "how", label: "How to use" },
  { id: "care", label: "How to care" },
  { id: "practical", label: "Good to know" },
];

export default function ProductDetail({ product }: Props) {
  const [activeTab, setActiveTab] = useState("why");
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabContent: Record<string, string> = {
    why: product.whyThis,
    story: product.culturalStory,
    traditional: product.traditionalUse,
    how: product.howToUse,
    care: product.howToCare,
    practical: product.practicalInfo,
  };

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>→</span>
          <Link href="/products">Products</Link>
          <span>→</span>
          <span>{product.name}</span>
        </nav>

        <div className={styles.grid}>
          {/* Left — Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Right — Info */}
          <div className={styles.infoCol}>
            <p className={styles.material}>{product.material}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>₹{product.price.toLocaleString("en-IN")}</p>
            <div className="divider" style={{ margin: "1.5rem 0" }} />
            <p className={styles.description}>{product.description}</p>

            {/* CTA */}
            <div className={styles.ctas}>
              <button
                className="btn btn--outline"
                onClick={handleAddToCart}
                id={`add-to-cart-${product.slug}`}
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>
              <Link
                href={`/buy/login?product=${product.slug}`}
                className="btn btn--primary"
                id={`buy-now-${product.slug}`}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <div className={styles.tabNav}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`${styles.tabBtn} ${activeTab === t.id ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(t.id)}
                id={`tab-${t.id}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className={styles.tabContent}>
            <p>{tabContent[activeTab]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
