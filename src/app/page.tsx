import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import NavBar from '../components/NavBar/NavBar';
import bgBlob from '../components/backgroundBlob/bgBlob';
import Link from 'next/link';

function LandingPage() {

  function presentacionPressed() {
    console.log('Button Pressed');
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>PASTABIO</h1>
      <p className={styles.text}>Estos botones no hacen nada, son de prueba</p>
      <div className={styles.buttonContainer}>
        <Link href="">
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