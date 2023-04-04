import Image from 'next/image';
import styles from 'components/home/page.module.css';
import { Inter } from 'next/font/google';

import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function HomeGrid() {
    return (

        <div className={styles.grid}>
        <Link href="/portfolio" className={styles.card}>
          <h2 className={inter.className}>
            My Work <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A collection of projects about which I'm quite fond.
          </p>
        </Link>
        <Link href="/blog" className={styles.card}>
        <h2 className={inter.className}>
            My Blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Some (dis)ordered thoughts on affectionate cares.</p>
        </Link>
        <Link href="/about" className={styles.card}>
        <h2 className={inter.className}>
            About Me <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Here's a little about me.
          </p>
        </Link>
        <Link href="/contact" className={styles.card}>
        <h2 className={inter.className}>
            Contact<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Leave your business card if you please.
          </p>
        </Link>      
      </div>
    )
}