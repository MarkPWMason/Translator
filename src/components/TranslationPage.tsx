import React, { useState } from 'react';
import Translator, {
  getUnicodeMappings,
  getSoundMappings,
} from '../services/Translator';
import styles from './Body.module.css';
var Scroll = require('react-scroll');

export const TranslationPage = () => {
  var scroll = Scroll.animateScroll;
  const [textToTranslate, setTextToTranslate] = useState<any[]>([]);

  const [keyToTranslate, setKeyToTranslate] = useState<any[]>([]);

  const inputChange = (e: any) => {
    setTextToTranslate(Translator(e.target.value, getUnicodeMappings(), false));
    setKeyToTranslate(Translator(e.target.value, getSoundMappings(), true));
  };

  console.log(textToTranslate);
  return (
    <div className={styles.translator}>
      <input className={styles.input} type="text" onChange={inputChange} />

      <div id={styles.keyContent}>
        {keyToTranslate.length > 0 && keyToTranslate}
      </div>
      <div id={styles.translatedContent}>
        {textToTranslate.length > 0 && textToTranslate}
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          scroll.scrollToTop({});
        }}
      >
        Back to start
      </button>
    </div>
  );
};

export default TranslationPage;
