import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import NavBar from '../components/NavBar/NavBar';
import Link from 'next/link';

function LandingPage() {

  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>
        <span className={styles.magic}>PASTABIO</span>
      </h1>
      <p className={styles.text}>Hola</p>
      <div className={styles.buttonContainer}>
        <Link href="/games/pastabio">
          <button className={styles.button} type="button">
            Juego
          </button>
        </Link>
        <Link href="/presentations/presentationSelector"><button className={styles.button} id="presentacion-button" type="button">
          Presentacion
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;