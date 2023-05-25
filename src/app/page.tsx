import React from 'react';
import styles from '../styles/LandingPage.module.css';
import NavBar from '../components/NavBar/NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>Welcome to My Next.js Landing Page</h1>
      <p className={styles.text}>This is a sample landing page created with Next.js and React.</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="button">Button 1</button>
        <button className={styles.button} type="button">Button 2</button>
      </div>
    </div>
  );
};

export default LandingPage;