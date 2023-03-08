import React from 'react';
import InputPage from './InputPage';
import PageBreak from './PageBreak';
import TranslationPage from './TranslationPage';

const Body = () => {
  return (
    <React.Fragment>
      <InputPage />
      <PageBreak />
      <TranslationPage/>
    </React.Fragment>
  );
};

export default Body;
