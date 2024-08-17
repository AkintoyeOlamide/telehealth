"use client";

import styles from "../../styles/components/services.module.css";
import React, { useState } from "react";
import Image from "next/image";
import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/s4.png"
import s5 from "../../../public/s5.png"
import s6 from "../../../public/s6.png"
import s7 from "../../../public/s7.png"
import s8 from "../../../public/s8.png"
import s9 from "../../../public/s9.png"
import s10 from "../../../public/s10.png"
import s11 from "../../../public/s11.png"
import s12 from "../../../public/s12.png"
import s13 from "../../../public/s13.png"
import s14 from "../../../public/s14.png";

const data = [
    {
        img: s1,
        service: 'General Practioners',
        desc: 'Standard Care, Preventive Care',
    },
    {
        img: s2,
        service: 'Nurses',
        desc: 'Care, Consulting, consulting',
    },
    {
        img: s3,
        service: 'Mental Health',
        desc: 'Psychiatrists, psychologists,Therapists',
    },
    {
        img: s4,
        service: 'Emotional Support',
        desc: 'life guides, people discovering their talent and potential',
    },
    {
        img: s5,
        service: 'Nutritional Therapists',
        desc: 'Preventive Care, diet, wellness',
    },
    {
        img: s6,
        service: 'Specialists',
        desc: 'Broken down by category',
    },
    {
        img: s7,
        service: 'Veterinarians',
        desc: 'For our furry friends',
    },
    {
        img: s8,
        service: 'Dental',
        desc: 'Anything to do with your teeth',
    },
    {
        img: s9,
        service: 'Legal Health',
        desc: 'Legal Assistance',
    },
    {
        img: s10,
        service: 'FInancial Health',
        desc: 'if it has to do with money ',
    },
    {
        img: s11,
        service: 'Life coaches',
        desc: 'Unlicensed guides with soecifivc specialties',
    },
    {
        img: s12,
        service: 'Fitness Expert',
        desc: 'Being atheletic and pushing your self for greatness',
    },
    {
        img: s13,
        service: 'Business Coaches',
        desc: 'Psychiatrists, psychologists, Therapists',
    },
    {
        img: s14,
        service: 'Computer health',
        desc: 'Standard Care, Preventive Care',
    },
];

type swipeCarouselParams = {
    action: 'left' | 'right';
}

export const Services = () => {
    const [index, setIndex] = useState<number>(3);
    const [showAll, setShowAll] = useState<boolean>(false);

    const renderedServices = () => {
        if (showAll) {
            return data;
        }
        return data.slice(index - 3, index + 1);
    };

    const handleLeftClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex <= 3) {
                return 3;
            }
            return prevIndex - 1;
        });
    };

    const handleRightClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex >= data.length - 1) {
                return prevIndex;
            }
            return prevIndex + 1;
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.header_cont}>
                <div className={styles.placeholder} />
                <span className={styles.header}>Choose Our Services</span>
                <span
                    className={styles.view}
                    onClick={() => setShowAll(!showAll)}
                >
                    {`${showAll ? 'Show Less' : 'View All'}`}
                </span>
            </div>

            <div className={styles.services_cont}>
                <img
                    src="/deals_left.png"
                    className={styles.icon}
                    onClick={() => !showAll && handleLeftClick()}
                />
                <div className={styles.services_inner}>
                    {
                        renderedServices().map((_, i) => {
                            return (
                                <div
                                    className={styles.service}
                                    key={i}
                                >
                                    <Image
                                        src={_.img}
                                        alt={`service_img_${i}`}
                                        width={80}
                                        height={80}
                                    />
                                    <span className={styles.service_title}>{_.service}</span>
                                    <span className={styles.service_desc}>{_.desc}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <img
                    src="/deals_right.png"
                    className={styles.icon}
                    onClick={() => !showAll && handleRightClick()}
                />
            </div>
        </section>
    )
}