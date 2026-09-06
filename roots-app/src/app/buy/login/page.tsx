"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../buy.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/buy/delivery");
  };

  return (
    <div className={styles.buyPage}>
      <Link href="/" className={styles.logoLink}>ROOTS</Link>

      <div className="steps">
        <div className="steps__item active">
          <span className="steps__num">1</span>
          <span>Login</span>
        </div>
        <span className="steps__sep" />
        <div className="steps__item">
          <span className="steps__num">2</span>
          <span>Delivery</span>
        </div>
        <span className="steps__sep" />
        <div className="steps__item">
          <span className="steps__num">3</span>
          <span>Review</span>
        </div>
      </div>

      <p className="label">Step 1</p>
      <div className="divider" />
      <h1 className={styles.heading}>Sign in</h1>
      <p className={styles.subtext}>Welcome back. Continue your ROOTS journey.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn} id="login-btn">
          Login
        </button>
      </form>

      <div className={styles.altAction}>
        <span>Don&apos;t have an account?</span>
        <Link href="/buy/signup" id="go-signup">Create Account</Link>
      </div>
    </div>
  );
}
