import React, {useState, useEffect} from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className={styles['sticky_nav']}>
        <div className={styles['nav_content']}>
          <Link href="/" className={styles.titleImage}>
            <img src='/TitleLogo.png' width='230' height='50' alt='title-logo' />
          </Link>
          <div className={styles['nav_links']}>
            <a className={styles.link} href='/nba'>NBA</a>
            <a className={styles.link} href='/nhl'>NHL</a>
            <a className={styles.link} href='/mlb'>MLB</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar