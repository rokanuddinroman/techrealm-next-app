import { useRouter } from 'next/router';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Post = () => {

    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <div className="max-w-[800px] mx-auto">
                <h1 className='mt-10 text-[30px] font-bold text-center'>{post.title}</h1>
                <p className='text-center mb-4'>{post.publisher} - {post.readTime}</p>
                <div className="flex justify-center">
                    <Image
                        src={post.thumbnail}
                        alt="hero"
                        height={270}
                        width={480}
                    />
                </div>
                <p className='mt-4'>{post.content}</p>
            </div>
        </div>
    );
};



export default Post;