import React from 'react';
import Image from 'next/image'
import Logo from '../static/857528878.png'
import Link from 'next/link';
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar_container}>
                <div className={styles.logoContainer}>
                    <h className='logo'>TECH<span>B</span>OLT</h>
                </div>
                <div className={styles.bannerNav}>
                    <Link className={styles.navLink} href="/">
                        <a className={router.pathname == "/" ? "active" : ""}>
                            Home
                        </a>
                    </Link>
                    <Link className={styles.navLink} href="/technology">
                        <a className={router.pathname == "/technology" ? "active" : ""}>
                            Technology
                        </a>
                    </Link>
                    <Link className={styles.navLink} href="/apps">
                        <a className={router.pathname == "/apps" ? "active" : ""}>
                            Apps
                        </a>
                    </Link>
                    <Link className={styles.navLink} href="/games">
                        <a className={router.pathname == "/games" ? "active" : ""}>
                            Games
                        </a>
                    </Link>
                    <Link className={styles.navLink} href="/about">
                        <a className={router.pathname == "/about" ? "active" : ""}>
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;