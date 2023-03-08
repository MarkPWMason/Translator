import React, { useRef, useState } from 'react';
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

  const inputRef = useRef<HTMLInputElement>(null);

  const inputChange = (e: any) => {
  };

  const onTranslateHandler = () => {
    if (inputRef.current?.value) {
      const text = Translator(inputRef.current?.value,getUnicodeMappings(),false);
      const key = Translator(inputRef.current?.value, getSoundMappings(), true);
      setTextToTranslate(text);
      setKeyToTranslate(key);
    }
  };

  console.log(textToTranslate);
  return (
    <div className={styles.translator}>
      <h1 className={styles.translate}>Tranlsator</h1>
      <input className={styles.input} type="text" onChange={inputChange} ref={inputRef}/>
      <button className={styles.btn} onClick={onTranslateHandler}>
        Translate
      </button>
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
