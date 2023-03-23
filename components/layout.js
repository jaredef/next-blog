import Head from 'next/head';
import Image from 'next/image';
import Nav from './nav.js';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css';
import Link from 'next/link';

const name = 'Jared Foy';
const tagLine = "Read the docs and do the things.";
export const siteTitle = 'Jared Foy';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A blog about all my interests and some of my misgivings."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <span className={homeStyles.tagline}>{tagLine}</span>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/me.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-3xl font-bold underline">
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
