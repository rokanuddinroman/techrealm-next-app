import React from 'react';
import Logo from '../static/857528878.png'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer_container}>
                <div className={styles.logoContainer}>
                    <h1 className='logo'>TECH<span>B</span>OLT</h1>
                    <p>Techbolt is your complete guide to computers, peripherals and upgrades.</p>
                </div>
                <div className={styles.footer_column}>
                    <p className={styles.heading}>Reviews</p>
                    <ul>
                        <li>Phone Reviews</li>
                        <li>Laptop Reviews</li>
                        <li>Tablet Reviews</li>
                        <li>Accessories Reviews</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <p className={styles.heading}>Reviews</p>
                    <ul>
                        <li>Phone Reviews</li>
                        <li>Laptop Reviews</li>
                        <li>Tablet Reviews</li>
                        <li>Accessories Reviews</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <p className={styles.heading}>Reviews</p>
                    <ul>
                        <li>Phone Reviews</li>
                        <li>Laptop Reviews</li>
                        <li>Tablet Reviews</li>
                        <li>Accessories Reviews</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <p className={styles.heading}>Reviews</p>
                    <ul>
                        <li>Phone Reviews</li>
                        <li>Laptop Reviews</li>
                        <li>Tablet Reviews</li>
                        <li>Accessories Reviews</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;