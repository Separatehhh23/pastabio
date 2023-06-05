import React from 'react';
import layout from '../../app/layout';
import styles from '../../styles/About.module.scss';
import NavBar from '@/components/NavBar/NavBar';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import JavascriptIcon from '../../../public/images/javascript.png';
import TypescriptIcon from '../../../public/svgs/typescript.svg';
import ReactIcon from '../../../public/images/react.png';
import NextIcon from '../../../public/images/nextjs.png';
import CssIcon from '../../../public/images/css.png';
import HtmlIcon from '../../../public/images/html.png';
import SassIcon from '../../../public/images/sass.png';
import TsxIcon from '../../../public/images/tsx.png';

// Call layout to get the global css varibles
layout;

function aboutPage() {
    return(
        <>
            <Head>
                <title>Info</title>
                <meta name='description' content='Info page' />
            </Head>
            <div className={styles.container}>
                <NavBar />
                <div className={styles.languages}>
                    <h1 className={styles.heading}>Lenguajes usados:</h1>
                    <div className={styles.languagesContainer}>
                        <div className={styles.languageRow0}>
                            <div className={styles.languageRow0Image}>
                                <Image
                                alt='Javascript Icon'
                                src={JavascriptIcon}
                                width={50}
                                ></Image>
                                <h2>Javascript</h2>
                            </div>
                            <div className={styles.languageRow0Image}>
                                <Image
                                alt='Typescript Icon'
                                src={TypescriptIcon}
                                width={50.5}
                                ></Image>
                                <h2>Typescript</h2>
                            </div>
                            <div className={styles.languageRow0Image}>
                                <Image
                                alt='HTML Icon'
                                src={HtmlIcon}
                                width={48}
                                ></Image>
                                <h2>HTML</h2>
                            </div>
                            <div className={styles.languageRow0Image}>
                                <Image
                                alt='CSS Icon'
                                src={CssIcon}
                                width={51}
                                ></Image>
                                <h2>CSS</h2>
                            </div>
                        </div>
                        <div className={styles.languageRow1}>
                            <div className={styles.languageRow1Image}>
                                <Image
                                alt='Sass Icon'
                                src={SassIcon}
                                width={51}
                                ></Image>
                                <h2>SCSS</h2>
                            </div>
                            <div className={styles.languageRow1Image}>
                                <Image
                                alt='TSX Icon'
                                src={TsxIcon}
                                width={53}
                                ></Image>
                                <h2>TSX</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutPage;