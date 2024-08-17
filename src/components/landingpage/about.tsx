import styles from "../../styles/components/about.module.css";

export const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.about_cont1}>
                <img src="/about.png" className={styles.about_img} />
                <div className={styles.proffesion_cont}>
                    <span className={styles.name}>Leticia Meighan</span>
                    <span className={styles.proffesion}>Funct. Med Coach/Hormone Expert</span>
                    <div className={styles.star_cont}>
                        {
                            Array(5).fill('').map(((_, i) => {
                                if (i <= 2) {
                                    return (
                                        <img className={styles.star} src="/star_bg.png" />
                                    )
                                }

                                return <img className={styles.star} src="/star.png" />
                            }))
                        }
                    </div>
                    <span className={styles.post}>Insurance</span>
                    <span className={styles.type}>NA</span>
                </div>
            </div>

            <div className={styles.about_cont2}>
                <div className={styles.texts}>
                    <p>About</p>
                    <p>
                        My name is Leticia Meighan and I am a board certified Family Nurse Practitioner since 2012. I have over 20 years experience of working in healthcare, including emergency room, urgent care, and out patient clinics. I have been a Family Nurse Practitioner in Florida doing what I love which serving my community for ten years which includes primary care, acute care, cardiology, and gastroenterology. I have previous experience working with hospitalist in various hospitals In Miami,Florida. I can see patients that range between 16 years old and I can treat acute and chronic illnesses via telemedicine. Part of your visit will include education and healthcare recommendations.
                    </p>
                </div>

                <div className={styles.calendar_cont}>
                    <img src="/calendar.png" className={styles.calendar} />
                    <button>Proceed</button>
                </div>
            </div>
        </section>
    )
}