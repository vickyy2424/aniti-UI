"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Left nav */}
        <nav className={styles.navLeft}>
          <Link href="/#heritage" className={styles.navLink}>Heritage</Link>
          <Link href="/#stories" className={styles.navLink}>Stories</Link>
        </nav>

        {/* Wordmark */}
        <Link href="/" className={styles.wordmark}>ROOTS</Link>

        {/* Right nav */}
        <nav className={styles.navRight}>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/cart" className={styles.cartLink} id="cart-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          id="mobile-menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/#heritage" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Heritage</Link>
          <Link href="/#stories" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link href="/products" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/#about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/cart" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Cart {cartCount > 0 ? `(${cartCount})` : ""}</Link>
        </div>
      )}
    </header>
  );
}
