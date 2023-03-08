import React from 'react';
import styles from './Body.module.css';

export const PageBreak = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.divide}></div>
      <img
        src="/images/egyptionmural.webp"
        alt="Egyptian Mural"
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
};

export default PageBreak;
