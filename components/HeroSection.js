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

                <div className="relative pt-[120px] lg:pt-[150px] pb-[110px] bg-white">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-5/12 px-4">
                                <div className="hero-content">
                                    <h1 className="text-dark font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3 ">
                                        <Link href="http://localhost:3000/post-1">
                                            Nothing Phone 1 review: something else
                                        </Link>
                                    </h1>
                                    <p className="text-base mb-8 text-body-color max-w-[480px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic accusantium esse consequatur adipisci atque consectetur nesciunt dignissimos.
                                    </p>

                                </div>
                            </div>
                            <div className="hidden lg:block lg:w-1/12 px-4"></div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="lg:text-right lg:ml-auto">
                                    <div className="relative inline-block z-10 pt-11 lg:pt-0">
                                        <Image
                                            src={featuredThumbnail}
                                            alt="hero"
                                            className="max-w-full lg:ml-auto"
                                            height={270}
                                            width={480}
                                        />
                                        <span className="absolute -left-8 -bottom-8 z-[-1]">
                                            <svg
                                                width="93"
                                                height="93"
                                                viewBox="0 0 93 93"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroSection;