import React from 'react';
import layout from '../../app/layout';
import styles from '../../styles/PresentationSelector.module.scss';
import NavBar from '@/components/NavBar/NavBar';
import Link from 'next/link';

// Call layout to get the global css varibles
layout;

function PresentacionSelector() {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.heading}>
                Presentaciones:
            </h1>
            <div className={styles.buttonContainer}>
                <Link href="https://prezi.com/view/7LeWOuU4AMBFIJ20Rsen/">
                    <button className={styles.button} type="button">
                        Presentacion 1
                    </button>
                </Link>
                <Link href="https://prezi.com/view/CJPVgNFF83Og9ZcFbOrb/">
                    <button className={styles.button} id="presentacion-button" type="button">
                        Presentacion 2
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PresentacionSelector;