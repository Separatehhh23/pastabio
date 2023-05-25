import React from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/settings/settings">Settings</a>
          </li>
        </ul>
      </nav>
    );
  };  

export default NavBar;