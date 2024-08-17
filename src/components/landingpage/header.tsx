"use client";

import styles from "../../styles/components/header.module.css";
import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

const navs = ['Home', 'About Us', 'Membership', 'Why Us', 'Get Listed On THT', 'Contact Us'];
export const Header = ({ setCurrent }: any) => {
    const [activeNav, setActiveNav] = React.useState<number>(0);
    const [isActive, setIsActive] = useState(false);

    return (
        <section className={styles.section}>
            <button className={styles.drawer_btn} onClick={() => setIsActive(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
            <img
                src="/logo.png"
                className={styles.logo}
            />

            <div className={styles.navs}>
                {
                    navs.map((nav, index) => {
                        return (
                            <span
                                key={index}
                                className={index === activeNav ? styles.nav_active : styles.nav_inactive}
                                onClick={() => {
                                    setActiveNav(index);
                                    index === 0 && setCurrent('hero')
                                    index === 1 && setCurrent('about')
                                }}
                            >
                                {nav}
                            </span>
                        )
                    })
                }
            </div>

            <div className={styles.auth_cta_cont}>
                <button className={styles.auth_cta}>
                    Sign up
                </button>

                <div className={styles.auth_cta_seperator} />

                <button className={styles.auth_cta}>
                    Sign in
                </button>
            </div>

            <Drawer
                isOpen={isActive}
                placement='left'
                onClose={() => setIsActive(false)}
            >
                <DrawerOverlay style={{ background: '' }} />
                <DrawerContent>
                    <DrawerCloseButton style={{ paddingTop: '30px' }} />
                    {/* <DrawerHeader>Menu</DrawerHeader> */}

                    <DrawerBody style={{ background: '' }}>
                        <div className={styles.nav_drawer}>
                            {
                                [...navs, 'Sign Up', 'Sign In'].map((nav, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={index === activeNav ? styles.nav_active : styles.nav_inactive}
                                            onClick={() => {
                                                setActiveNav(index);
                                                index === 0 && setCurrent('hero')
                                                index === 1 && setCurrent('about')
                                            }}
                                        >
                                            {nav}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </section>
    )
}