import Link from "next/link";
import Image from "next/image";
import styles from "./MaterialSection.module.css";

const materials = [
  {
    id: "copper",
    name: "Copper",
    hindi: "तांबा",
    image: "/copper.jpg",
    description:
      "One of the oldest metals in human use, copper has been central to Indian domestic life for over four thousand years. Vessels, lamps, coins, and temple objects — copper was everywhere. Its qualities, both practical and symbolic, were well understood long before modern science.",
  },
  {
    id: "brass",
    name: "Brass",
    hindi: "पीतल",
    image: "/brass.jpg",
    description:
      "An alloy of copper and zinc, brass was the metal of the Indian kitchen and the prayer room. The brass thali, the lota, the diya — these objects defined the rhythms of domestic life. Brass combined warmth with durability and was the material trusted for daily ritual.",
  },
  {
    id: "bronze",
    name: "Bronze",
    hindi: "कांस्य",
    image: "/bronze.jpg",
    description:
      "The oldest alloy in Indian craft history, bronze — and its variant bell metal — was used for cooking, worship, and music. South Indian temples still ring with bronze bells. Kerala's traditional urli and Bengal's festival vessels were cast in this ancient metal.",
  },
];

export default function MaterialSection() {
  return (
    <section className={styles.section} id="heritage">
      <div className="container">
        <div className={styles.header}>
          <p className="label">The materials</p>
          <div className="divider" />
          <h2 className={styles.heading}>Every object has a story.</h2>
          <p className={styles.subtext}>
            Three metals. Three thousand years of Indian craft. Each with its own
            character, its own role in the household, its own reason to endure.
          </p>
        </div>

        <div className={styles.grid}>
          {materials.map((m) => (
            <div key={m.id} className={styles.card} id={`material-${m.id}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={m.image}
                  alt={`${m.name} illustration`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.nameRow}>
                  <h3 className={styles.materialName}>{m.name}</h3>
                  <span className={styles.hindi}>{m.hindi}</span>
                </div>
                <div className="divider" style={{ margin: "0.75rem 0" }} />
                <p className={styles.desc}>{m.description}</p>
                <Link
                  href="/products"
                  className={styles.discover}
                  id={`discover-${m.id}`}
                >
                  Discover →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
