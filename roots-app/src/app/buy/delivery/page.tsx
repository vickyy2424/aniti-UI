"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../buy.module.css";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Delhi","Jammu & Kashmir",
  "Ladakh","Lakshadweep","Puducherry",
];

export default function DeliveryPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", phone: "", address: "", city: "", state: "", pincode: "",
  });

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/buy/checkout");
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
        <div className="steps__item active">
          <span className="steps__num">2</span>
          <span>Delivery</span>
        </div>
        <span className="steps__sep" />
        <div className="steps__item">
          <span className="steps__num">3</span>
          <span>Review</span>
        </div>
      </div>

      <p className="label">Delivery details</p>
      <div className="divider" />
      <h1 className={styles.heading}>Where shall we send it?</h1>
      <p className={styles.subtext}>We deliver across India. Standard delivery: 5–7 working days.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="del-name">Full Name</label>
          <input id="del-name" type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Recipient name" required />
        </div>
        <div className="form-group">
          <label htmlFor="del-phone">Phone</label>
          <input id="del-phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" required />
        </div>
        <div className="form-group">
          <label htmlFor="del-address">Address</label>
          <input id="del-address" type="text" value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="House/Flat no., Street, Area" required />
        </div>
        <div className="form-group">
          <label htmlFor="del-city">City</label>
          <input id="del-city" type="text" value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="City" required />
        </div>
        <div className="form-group">
          <label htmlFor="del-state">State</label>
          <select id="del-state" value={form.state} onChange={(e) => set("state", e.target.value)} required>
            <option value="">Select state</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="del-pin">Pincode</label>
          <input id="del-pin" type="text" value={form.pincode} onChange={(e) => set("pincode", e.target.value)} placeholder="6-digit pincode" maxLength={6} required />
        </div>
        <button type="submit" className={styles.submitBtn} id="delivery-continue-btn">
          Continue to Review
        </button>
      </form>
    </div>
  );
}
