import styles from "../../styles/components/deals.module.css";

export const Deals = () => {
    return (
        <section className={styles.section}>
            <p className={styles.text}>
                Get 3 free appointments ? and a lifelong membership to ? TeleHealth Today now for just {"$50!"}
            </p>
 
                 <button className={styles.cta}>
                Start now
                </button>
            
                <img src="/deals_bg.png" className={styles.bg_img} />
        </section>
    )
}