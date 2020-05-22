import React from 'react';
import './App.css';
import Modal from 'react-modal';

import {TabIndexSelected, TabIndexNotSelected} from './components/atoms/TabIndex'
import {TableCell} from './components/atoms/TableCell'
import {Table} from './components/molecules/Table'
import {IssueHeader} from './components/molecules/IssueHeader'
import {IndexStructure} from './components/organisms/IndexStructure'

Modal.setAppElement('#root');

function App() {
  const style = {
    width: '50%',
    margin: '0 auto',
    marginTop: 150,
  };
  return (
    <div className="App">
      {/* <div style={style}> */}
        {/* <Modal /> */}
        <IndexStructure />
      {/* </div> */}
    </div>
  );
}

export default App;
