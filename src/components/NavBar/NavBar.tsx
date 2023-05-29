import React from 'react';
import styles from './NavBar.module.scss';

import ArrowIcon from '../../../public/svgs/arrow.svg';
import BellIcon from '../../../public/svgs/bell.svg';
import BoltIcon from '../../../public/svgs/bolt.svg';
import CaretIcon from '../../../public/svgs/caret.svg';
import ChevronIcon from '../../../public/svgs/chevron.svg';
import CogIcon from '../../../public/svgs/cog.svg';
import MessengerIcon from '../../../public/svgs/messenger.svg';
import PlusIcon from '../../../public/svgs/plus.svg';
import NextIcon from '../../../public/svgs/next.svg';
import VercelIcon from '../../../public/svgs/vercel.svg';

const NavBar: React.FC = () => {
    return (
      <div className='NavBar'>
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
              <a href="/test">Test</a></li>
          </ul>
        </nav>
        <nav className={styles.nav2}>
          <ul className={styles.navButons}>
            <li>
              <button>
                
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };  

export default NavBar;