import React from 'react';
import Translator, {getStringMappings} from './services/Translator';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  console.log(Translator("the", getStringMappings()));
  return <div className={styles.container}>
    <Header />
    <Body />
    <Footer />
  </div>;
  
}

export default App;
