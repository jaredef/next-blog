import Image from 'next/image';
import styles from 'components/home/page.module.css';

export default function Footer() {
    return (
        <div className={styles.paytribute}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with{' '}
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            className={styles.vercelLogo}
            width={50}
            height={12}
            priority
          />
          {' '}and booted on{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={50}
            height={12}
            priority
          /></a>
      </div>
    );
}