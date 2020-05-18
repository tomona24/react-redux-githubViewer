import React from 'react';
import './App.css';
import Modal from "react-modal";
 
Modal.setAppElement('#root')

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };
  return (
    <div className="App">
      <div style={style}>
        <Modal></Modal>
      </div>
    </div>
  );
}
 
export default App;
 