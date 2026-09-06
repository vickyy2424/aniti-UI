"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../buy.module.css";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          <span>Account</span>
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

      <p className="label">Create account</p>
      <div className="divider" />
      <h1 className={styles.heading}>Join ROOTS</h1>
      <p className={styles.subtext}>Create your account to place your first order.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-phone">Phone</label>
          <input
            id="signup-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a password"
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn} id="signup-btn">
          Create Account
        </button>
      </form>

      <div className={styles.altAction}>
        <span>Already have an account?</span>
        <Link href="/buy/login" id="go-login">Sign In</Link>
      </div>
    </div>
  );
}
