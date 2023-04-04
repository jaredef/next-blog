import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'components/home/page.module.css'
import homeStyles from 'app/page.module.css';

import HomeGrid from '../components/home/homegrid';
import Footer from '../components/home/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={homeStyles.homewrapper}>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Read the docs and&nbsp;
          <code className={styles.code}>do the things.</code>
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/me.jpg"
          alt="A pic of Jared"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className={styles.center, inter.className, styles.hello}>
        <h1>Hello.</h1>
        <h1>I'm Jared Foy</h1>
        <div className={styles.tagline}>I'm a web developer working from Southern Oregon, USA.</div>
      </div>
      <HomeGrid />
    </main>
    <Footer />
    </div>
  )
}
