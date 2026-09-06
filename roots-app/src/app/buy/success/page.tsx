import Link from "next/link";
import styles from "../buy.module.css";

export default function SuccessPage() {
  return (
    <div className={styles.successPage}>
      <div className={styles.successInner}>
        <div className={styles.successMark}>✓</div>

        <p className="label" style={{ marginBottom: "1rem" }}>Order placed</p>

        <h1 className={styles.successHeading}>
          Your ROOTS journey begins.
        </h1>

        <p className={styles.successSub}>
          Your order has been placed successfully.<br />
          We will send you a confirmation shortly.<br />
          Standard delivery: 5–7 working days across India.
        </p>

        <Link
          href="/products"
          className="btn btn--outline"
          id="continue-exploring-btn"
        >
          Continue Exploring
        </Link>

        <p className={styles.orderNote}>
          Thank you for choosing an object with memory.
        </p>
      </div>
    </div>
  );
}
