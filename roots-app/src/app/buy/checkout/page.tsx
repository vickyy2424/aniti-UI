"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import styles from "../buy.module.css";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const delivery = cartTotal >= 999 ? 0 : 99;
  const total = cartTotal + delivery;

  const handleOrder = () => {
    clearCart();
    router.push("/buy/success");
  };

  return (
    <div className={styles.buyPage}>
      <Link href="/" className={styles.logoLink}>ROOTS</Link>

      <div className="steps">
        <div className="steps__item done">
          <span className="steps__num">✓</span>
          <span>Login</span>
        </div>
        <span className="steps__sep" />
        <div className="steps__item done">
          <span className="steps__num">✓</span>
          <span>Delivery</span>
        </div>
        <span className="steps__sep" />
        <div className="steps__item active">
          <span className="steps__num">3</span>
          <span>Review</span>
        </div>
      </div>

      <p className="label">Order review</p>
      <div className="divider" />
      <h1 className={styles.heading}>Review your order</h1>
      <p className={styles.subtext}>Check everything before you place your order.</p>

      {cart.length === 0 ? (
        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--charcoal-mid)", fontStyle: "italic", marginBottom: "1.5rem" }}>
            Your cart is empty. Add something first.
          </p>
          <Link href="/products" className="btn btn--primary">Explore Products</Link>
        </div>
      ) : (
        <>
          <div className={styles.summaryCard}>
            {cart.map(({ product, quantity }) => (
              <div key={product.slug} className={styles.summaryRow}>
                <span>{product.name} × {quantity}</span>
                <span>₹{(product.price * quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className={styles.summaryRow}>
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className={styles.submitBtn}
            id="place-order-btn"
          >
            Place Order
          </button>

          <p className={styles.orderNote} style={{ marginTop: "1rem" }}>
            No payment required for this prototype. This simulates a successful order.
          </p>
        </>
      )}
    </div>
  );
}
