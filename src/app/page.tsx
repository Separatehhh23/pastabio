import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import NavBar from '@/components/NavBar/NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>Hola, crees que esto queda vien?</h1>
      <p className={styles.text}>Estos botones no hacen nada, son de prueba</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="button">Button 1</button>
        <button className={styles.button} type="button">Button 2</button>
      </div>
    </div>
  );
};

export default LandingPage;