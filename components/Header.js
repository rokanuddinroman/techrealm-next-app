import React from 'react';
import Image from 'next/image'
import Logo from '../static/857528878.png'
import Link from 'next/link';

const Header = () => {
    const styles = {
        wrapper: " border-b-[1px] border-gray-200",
        content: "max-w-[1300px] flex justify-between mx-auto",
        logoContainer: "flex items-center flex-start py-2",
        logo: "",
        bannerNav: "flex cursor-pointer items-center space-x-5",
        navLink: "font-bold"
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={Logo} />
                </div>
                <div className={styles.bannerNav}>
                    <Link className={styles.navLink} href="/">Home</Link>
                    <Link className={styles.navLink} href="/Technology">Technology</Link>
                    <Link className={styles.navLink} href="/Apps">Applications</Link>
                    <Link className={styles.navLink} href="/Games">Games</Link>
                    <Link className={styles.navLink} href="/About">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;