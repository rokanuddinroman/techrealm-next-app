import { useRouter } from 'next/router';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/SIngleBlog.module.css'
import Link from 'next/link';

const Post = () => {

    const router = useRouter();
    const { slug } = router.query;

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b399350754a4e679e8549834920e31e`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const post = posts?.articles?.find(p => p.title.replace(/ /g, "-") === slug)

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>{post?.title}</h1>
                    <p className={styles.extra}>{post?.author} - {post?.publishedAt}</p>
                    {
                        post?.urlToImage &&
                        <div className={styles.thumbnail}>
                            <Image
                                src={post?.urlToImage}
                                alt="hero"
                                height={270}
                                width={480}
                            />
                        </div>
                    }
                    <p className={styles.content}>{post?.content}</p>
                </div>
                <div className={styles.sidebar}>
                    <h2>More Posts like this</h2>
                    {
                        posts?.articles?.slice(0, 5).map(post => <div key={post.index}>
                            <h4>
                                <Link href={`/${post?.title.replace(/ /g, "-")}`}>
                                    <span className='fancy_hover'>{post.title}</span>
                                </Link>
                            </h4>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};



export default Post;