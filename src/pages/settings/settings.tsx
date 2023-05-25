import React from 'react';
import styles from './settings.module.scss';
import Navbar from '../../components/NavBar/NavBar';

// Rest of your code


const SettingsPage: React.FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <Navbar />
      <h1 className={styles.heading}>Settings Page</h1>
      {/* Add your settings components or content here */}
    </div>
  );
};

export default SettingsPage;