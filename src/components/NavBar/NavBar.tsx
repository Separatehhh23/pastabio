import React from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
import GearIcon from '../../../public/images/cog.png';

const NavBar: React.FC = () => {
    function gearButtonClicked() {
      console.log('gear button clicked');
    }

    return (
      <div className='NavBar'>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <Link href="/about/about">Info</Link>
            </li>
            <li>
              <Link href="/contact">Contactar</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav2}>
          <ul className={styles.navButons}>
            <li>
              <button>
              <Image
                src={GearIcon}
                alt="Gear"
              />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };  

export default NavBar;