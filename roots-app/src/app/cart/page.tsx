"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";
import styles from "./cart.module.css";

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <div className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <p className="label">Your cart</p>
            <div className="divider" />
            <h1 className={styles.heading}>Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
              <Link href="/products" className="btn btn--primary" id="shop-from-cart-btn">
                Explore Products
              </Link>
            </div>
          ) : (
            <div className={styles.layout}>
              <div className={styles.items}>
                {cart.map(({ product, quantity }) => (
                  <div key={product.slug} className={styles.item} id={`cart-item-${product.slug}`}>
                    <div className={styles.itemImage}>
                      <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemMaterial}>{product.material}</p>
                      <h3 className={styles.itemName}>{product.name}</h3>
                      <p className={styles.itemPrice}>₹{product.price.toLocaleString("en-IN")} × {quantity}</p>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(product.slug)}
                      id={`remove-${product.slug}`}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.summary}>
                <h2 className={styles.summaryHead}>Order Summary</h2>
                <div className="divider" />
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Delivery</span>
                  <span>{cartTotal >= 999 ? "Free" : "₹99"}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Total</span>
                  <span>₹{(cartTotal + (cartTotal >= 999 ? 0 : 99)).toLocaleString("en-IN")}</span>
                </div>
                <Link
                  href="/buy/login"
                  className="btn btn--primary"
                  style={{ display: "block", textAlign: "center", marginTop: "1.5rem" }}
                  id="checkout-btn"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
