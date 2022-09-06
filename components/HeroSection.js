import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import featuredThumbnail from "../static/8y3YrQs7NNhZ3mYZKonQcW.jpg"

const HeroSection = () => {
    const [featured, setFeatured] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])
    const styles = {
        wrapper: "h-[90vh]",
        content: "max-w-[1300px] flex justify-between mx-auto"
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>

            </div>
        </div>
    );
};

export default HeroSection;