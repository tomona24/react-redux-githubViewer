import React from 'react';
import './App.css';
import Modal from 'react-modal';

import { IndexStructure } from './components/organisms/IndexStructure';
import { Header } from './components/organisms/Header';

Modal.setAppElement('#root');

function App() {
  const style = {
    width: '50%',
    margin: '0 auto',
    marginTop: 150,
  };
  return (
    <div className="App">
      <Header />
      {/* <div style={style}> */}
      {/* <Modal /> */}
      <IndexStructure />
      {/* </div> */}
    </div>
  );
}

export default App;
