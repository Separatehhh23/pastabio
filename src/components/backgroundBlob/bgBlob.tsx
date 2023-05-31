import React from 'react';
import styles from './bgBlob.module.scss';

const BgBlob = () => {
  return (
    <>
      <div id='blob' className={styles.blob}></div>
      <div id='blur' className={styles.blur}></div>
      <script async src='./bgBlobCode.js'></script>
    </>
  );
};

export default BgBlob;