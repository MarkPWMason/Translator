import React from 'react';
import { Link } from 'react-scroll';
import styles from './Body.module.css';

export const InputPage = () => {
  return (
    <div className={styles.intro}>
      <img src="/images/camel (1).webp" alt="" id={styles.camelImage1}/>
      <img src="/images/camel (1).webp" alt="" id={styles.camelImage2}/>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Hieroglyph Translator</h1>
        </div>
        <Link
          className={styles.btn}
          activeClass="active"
          to="translator"
          spy={true}
          smooth={true}
          duration={1000}
          id="inputPageBtn"
        >
          Start Translation
        </Link>
        {/* <button className={styles.btn} onClick={() => {
        scroll.scrollToBottom({
        });
      }}>To Translator</button> */}
      </div>
    </div>
  );
};

export default InputPage;
