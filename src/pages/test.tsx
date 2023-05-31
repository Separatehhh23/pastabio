import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import layout from '../app/layout';
import styles from '../styles/Test.module.scss';

function Test() {

    layout;

    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.heading}>Hello</h1>
        </div>
    );
}

export default Test;