import { useRouter } from 'next/router';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

const Post = (post) => {

    // const [blog, setBlog] = useState([])
    // const [blogs, setBlogs] = useState([])
    // useEffect(() => {
    //     fetch("blogs.json")
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])

    const router = useRouter();
    const { slug } = router.query;

    <Head>
        <title>{post.post.title}</title>
    </Head>

    // const mainBlog = blogs.find(b => b.slug === slug)
    // console.log(blog, typeof slug)
    return (
        <div>
            {/* <Header /> */}
            <div className="max-w-[800px] mx-auto">
                <h1 className='mt-10 text-[30px] font-bold text-center'>{post.post.title}</h1>
                <p className='text-center mb-4'>{post.post.publisher} - {post.post.readTime}</p>
                <div className="flex justify-center">
                    <Image
                        src={post.post.thumbnail}
                        alt="hero"
                        height={270}
                        width={480}
                    />
                </div>
                <p className='mt-4'>{post.post.content}</p>
            </div>
            {/* <Footer /> */}
        </div>
    );
};



export default Post;


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts



    const res = await fetch('http://localhost:3000/api/hello')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    const res = await fetch(`http://localhost:3000/api/getblog?slug=${params.slug}`)
    const post = await res.json()

    // const res = await fetch('http://localhost:3000/api/hello')
    // const post = await res.json()



    // const post = res.find(p => params == slug)

    // Pass post data to the page via props
    return { props: { post } }
}