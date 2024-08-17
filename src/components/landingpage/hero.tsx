"use client";

import styles from "../../styles/components/hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.pane1}>
                <span className={styles.intro}>
                    Building a <span className={styles.intro_variant}>Healthier</span> You, One Click at a Time
                </span>
                <span className={styles.description}>
                    it’s important to take care of your health even if you seem healthy. stay healthy and fit.it's time to take care of your health before it's too late.
                </span>
                <button className={styles.cta}>
                    Book Appointment
                </button>
            </div>
        </section>
    )
}