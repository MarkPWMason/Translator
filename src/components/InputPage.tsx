import React from 'react';
import styles from './Body.module.css';

var Scroll = require('react-scroll');

export const InputPage = () => {
  var scroll = Scroll.animateScroll;
  return (
    <div className={styles.intro}>
      <img src="/images/camel (1).webp" alt="" id={styles.camelImage1}/>
      <img src="/images/camel (1).webp" alt="" id={styles.camelImage2}/>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Hieroglyph Translator</h1>
        </div>
        {/* <Link
          className="btn"
          activeClass="active"
          to="translationPageBtn"
          spy={true}
          smooth={true}
          duration={1000}
          id="inputPageBtn"
        >
          Start Translation
        </Link> */}
        <button className={styles.btn} onClick={() => {
        scroll.scrollToBottom({
        });
      }}>To Translator</button>
      </div>
    </div>
  );
};

export default InputPage;
