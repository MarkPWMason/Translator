import React from 'react';
import Translator, { getUnicodeMappings } from './services/Translator';
import styles from './App.module.css';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  console.log(Translator('a', getUnicodeMappings(), false));
  return (
    <div className={styles.container}>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
