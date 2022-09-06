import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import defaultThumb from '../static/tutorial.jpg'
import styles from '../styles/BlogsContainer.module.css'
import Link from 'next/link';

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b399350754a4e679e8549834920e31e")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs.articles)

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className='text-[25px] font-semibold'>Latest Blogs</h1>
                <div className={styles.blogs}>
                    {blogs.articles && blogs.articles.map(blog => {
                        return <div className={styles.blog} key={0}>
                            <div className={styles.thumbnail}>
                                <Image
                                    src={blog?.urlToImage}
                                    alt={blog?.title}
                                    height={216}
                                    width={384}
                                ></Image>
                            </div>
                            <div className={styles.blogDetail}>
                                <h1 className={`${styles.linkTitle}`}>
                                    <Link href={`/${blog?.title.replace(/ /g, "-")}`}>
                                        <span className='fancy_hover'>{blog?.title}</span>
                                    </Link>
                                </h1>
                                <p className={styles.publisher}>
                                    Published by <Link href={`/${blog?.title.replace(/ /g, "-")}`}>
                                        <span className={styles.author}>{blog?.author}</span>
                                    </Link>・<span>{blog?.publishedAt}</span>
                                </p>
                                <p className={styles.description}>{blog?.description.slice(0, 420)}</p>
                                <p className=''></p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogsContainer;

