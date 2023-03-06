import React from 'react';
import Translator, {getStringMappings} from './services/Translator';
import './App.css';

function App() {
  console.log(Translator("the", getStringMappings()));
  return <div>
    
  </div>;
  
}

export default App;
