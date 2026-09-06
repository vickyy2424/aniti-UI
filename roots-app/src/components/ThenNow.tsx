import Image from "next/image";
import styles from "./ThenNow.module.css";

const pairs = [
  {
    id: "water",
    label: "Water",
    then: {
      caption: "Then",
      desc: "Filled at the well each morning. Stored overnight in a copper matka. Poured at dawn from a copper lota.",
      image: "/copper.jpg",
      alt: "Traditional copper water vessel",
    },
    now: {
      caption: "Now",
      desc: "Filled at the tap. Carried through the day. The same copper, the same water — in a form made for today.",
      image: "/p-copper-bottle.jpg",
      alt: "Modern copper water bottle",
    },
  },
  {
    id: "meal",
    label: "The Meal",
    then: {
      caption: "Then",
      desc: "Every meal served on a brass thali. Dal, roti, pickle — each in its place. The plate that never needed replacing.",
      image: "/brass.jpg",
      alt: "Traditional brass thali meal",
    },
    now: {
      caption: "Now",
      desc: "The same thali. The same meal. The same quiet satisfaction of eating from something that will outlast you.",
      image: "/p-brass-thali.jpg",
      alt: "Brass thali today",
    },
  },
];

export default function ThenNow() {
  return (
    <section className={styles.section} id="then-now">
      <div className="container">
        <div className={styles.header}>
          <p className="label">Continuity</p>
          <div className="divider" />
          <h2 className={styles.heading}>From then. To now.</h2>
          <p className={styles.subtext}>
            The objects changed their form. Their purpose never did.
          </p>
        </div>

        {pairs.map((pair) => (
          <div key={pair.id} className={styles.pair} id={`pair-${pair.id}`}>
            <div className={styles.side}>
              <div className={styles.imageFrame}>
                <Image
                  src={pair.then.image}
                  alt={pair.then.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.captionTag}>{pair.then.caption}</div>
              </div>
              <p className={styles.pairDesc}>{pair.then.desc}</p>
            </div>

            <div className={styles.separator}>
              <span className={styles.sepLine} />
              <span className={styles.sepLabel}>{pair.label}</span>
              <span className={styles.sepLine} />
            </div>

            <div className={styles.side}>
              <div className={styles.imageFrame}>
                <Image
                  src={pair.now.image}
                  alt={pair.now.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles.captionTag} ${styles.nowTag}`}>{pair.now.caption}</div>
              </div>
              <p className={styles.pairDesc}>{pair.now.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
