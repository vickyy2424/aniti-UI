"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./VideoStory.module.css";

export default function VideoStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.section} id="stories">
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <p className="label">10-second story</p>
          <div className="divider" />
          <h2 className={styles.heading}>
            Some traditions deserve<br />
            to be <em>carried forward.</em>
          </h2>
          <p className={styles.body}>
            An old household. A grandmother and a vessel. A child watching.
            The same vessel, decades later, in a modern home. Some things
            do not need to change — they only need to be remembered.
          </p>
        </div>

        <div className={styles.videoWrap} id="story-video">
          <div className={styles.illustration}>
            <Image
              src="/hero.jpg"
              alt="A grandmother and child with traditional copper vessels"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div className={styles.videoOverlay} />

            {/* Film grain lines */}
            <div className={styles.filmLines} />

            {!playing ? (
              <button
                className={styles.playBtn}
                onClick={() => setPlaying(true)}
                id="play-story-btn"
                aria-label="Play story"
              >
                <span className={styles.playIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
                <span className={styles.playLabel}>Watch the story</span>
              </button>
            ) : (
              <div className={styles.playingMessage}>
                <p>
                  ❝ Every morning, she filled it at the well. Every morning, he
                  watched. Sixty years later, he fills it at the tap — and he
                  still hears her. ❞
                </p>
              </div>
            )}

            {/* Corner borders */}
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.tr}`} />
            <span className={`${styles.corner} ${styles.bl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
