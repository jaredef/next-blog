
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout.js';

const siteName = 'Jared Foy';
const postTitle = 'Welcome to my blog';
const postContent = "Hello! Welcome to my blog. I'm learning React, Next.js, the MERN stack and all the things. Stay tuned as I take you on my journey!"

export default function FirstPost() {

    return (
        <Layout>
            <Head>
                <title>{postTitle} | {siteName}</title>å
            </Head>
            <h1>{postTitle}</h1>
            <p>{postContent}</p>
        </Layout>
        );
}